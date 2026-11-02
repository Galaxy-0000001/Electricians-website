import { useEffect } from 'react';
import { observeOnce } from './useInView';
import config from '../config/businessConfig';

const LOCALE = (config.seo?.locale || 'en-IN').replace('_', '-');

/** Splits "4,800+" into { prefix: '', target: 4800, suffix: '+', ... }. */
export function parseStat(value) {
  const match = String(value).match(/^(\D*)(\d[\d,]*(?:\.\d+)?)(.*)$/);
  if (!match) return null;
  const [, prefix, number, suffix] = match;
  return {
    prefix,
    suffix,
    target: parseFloat(number.replace(/,/g, '')),
    decimals: number.includes('.') ? number.split('.')[1].length : 0,
    grouped: number.includes(','),
  };
}

/**
 * Counts the number inside `ref` up from 0 when it scrolls into view.
 * Writes straight to the DOM with requestAnimationFrame, so React does not
 * re-render on every frame. Values without a number ("Same day") are shown as-is.
 * With reduced motion turned on, the final value is shown immediately.
 */
export default function useCountUp(ref, value, duration = 1600) {
  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const parsed = parseStat(value);
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!parsed || reduceMotion) {
      node.textContent = value;
      return undefined;
    }

    const format = (n) =>
      parsed.prefix +
      n.toLocaleString(LOCALE, {
        minimumFractionDigits: parsed.decimals,
        maximumFractionDigits: parsed.decimals,
        useGrouping: parsed.grouped,
      }) +
      parsed.suffix;

    let frame = 0;
    node.textContent = format(0);

    const stopObserving = observeOnce(node, () => {
      const start = performance.now();
      const tick = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - (1 - progress) ** 4; // ease-out: fast start, gentle finish
        node.textContent = progress < 1 ? format(parsed.target * eased) : value;
        if (progress < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    });

    return () => {
      stopObserving();
      cancelAnimationFrame(frame);
      node.textContent = value;
    };
  }, [ref, value, duration]);
}
