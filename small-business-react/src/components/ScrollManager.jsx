import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * React Router keeps the old scroll position when you change pages.
 * This scrolls to the top on every new page, or to #section when the URL has a hash,
 * and moves keyboard focus to the main content for screen-reader users.
 */
export default function ScrollManager() {
  const { pathname, hash } = useLocation();
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (hash) {
      const target = document.getElementById(decodeURIComponent(hash.slice(1)));
      if (target) {
        target.scrollIntoView();
        return;
      }
    }
    window.scrollTo(0, 0);

    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    document.getElementById('main-content')?.focus({ preventScroll: true });
  }, [pathname, hash]);

  return null;
}
