import { useEffect, useState } from 'react';

// ONE IntersectionObserver shared by every animated element on the page.
// Far cheaper than creating an observer per element, and it causes no
// React re-renders while scrolling.

const callbacks = new WeakMap();
let sharedObserver = null;

function getObserver() {
  if (sharedObserver || typeof IntersectionObserver === 'undefined') return sharedObserver;
  sharedObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) callbacks.get(entry.target)?.();
      });
    },
    // Trigger slightly before the element is fully on screen.
    { rootMargin: '0px 0px -8% 0px', threshold: 0.12 }
  );
  return sharedObserver;
}

/**
 * Calls `onEnter` once, the first time `node` scrolls into view.
 * Returns a cleanup function. Used by <Reveal> and the stat counters.
 */
export function observeOnce(node, onEnter) {
  const observer = getObserver();

  // Very old browsers: just show everything.
  if (!observer) {
    onEnter();
    return () => {};
  }

  const stop = () => {
    observer.unobserve(node);
    callbacks.delete(node);
  };

  callbacks.set(node, () => {
    stop();
    onEnter();
  });
  observer.observe(node);
  return stop;
}

/**
 * React hook version: returns true once the element has been seen.
 *
 *   const ref = useRef(null);
 *   const inView = useInView(ref);
 */
export default function useInView(ref) {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;
    return observeOnce(node, () => setInView(true));
  }, [ref]);

  return inView;
}
