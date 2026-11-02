import { useEffect, useRef } from 'react';
import { observeOnce } from '../hooks/useInView';

const STAGGER_MS = 70;
const MAX_STAGGER_STEPS = 6; // never wait more than ~0.4s for an item

/**
 * Animates its content when it scrolls into view.
 *
 *   <Reveal>…</Reveal>                       fade + slide up (default)
 *   <Reveal variant="left | right">          slide in from the side
 *   <Reveal variant="scale">                 gentle zoom in
 *   <Reveal variant="image">                 clip-path wipe with image zoom-out
 *   <Reveal variant="fade">                  opacity only
 *   <Reveal variant="heading">               children appear one after another
 *   <Reveal index={i}>                       stagger items in a list
 *
 * The animation itself lives in animations.css ([data-reveal] / [data-inview]).
 * The component only flips a data attribute, so React never re-renders on scroll.
 */
export default function Reveal({
  as: Tag = 'div',
  variant = 'up',
  index = 0,
  delay = 0,
  style,
  children,
  ...rest
}) {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;
    return observeOnce(node, () => {
      node.dataset.inview = '';
    });
  }, []);

  const totalDelay = Math.min(index, MAX_STAGGER_STEPS) * STAGGER_MS + delay;

  return (
    <Tag
      ref={ref}
      data-reveal={variant}
      style={totalDelay ? { ...style, '--reveal-delay': `${totalDelay}ms` } : style}
      {...rest}
    >
      {children}
    </Tag>
  );
}
