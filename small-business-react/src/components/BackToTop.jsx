import { useEffect, useRef } from 'react';
import { ArrowUp } from 'lucide-react';
import useScrolledPast from '../hooks/useScrolledPast';
import usePrefersReducedMotion from '../hooks/usePrefersReducedMotion';

/**
 * Back-to-top button with a ring that fills as you scroll down the page.
 * Scroll progress is written to a CSS variable once per frame (no React re-renders).
 */
export default function BackToTop() {
  const visible = useScrolledPast(600);
  const reducedMotion = usePrefersReducedMotion();
  const buttonRef = useRef(null);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress = max > 0 ? Math.min(window.scrollY / max, 1) : 0;
      buttonRef.current?.style.setProperty('--progress', progress.toFixed(4));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: reducedMotion ? 'auto' : 'smooth' });
  };

  return (
    <button
      ref={buttonRef}
      type="button"
      className={`back-to-top ${visible ? 'is-visible' : ''}`}
      onClick={scrollUp}
      aria-label="Back to top"
      tabIndex={visible ? 0 : -1}
      aria-hidden={!visible}
    >
      <svg className="back-to-top__ring" viewBox="0 0 48 48" aria-hidden="true">
        <circle className="back-to-top__track" cx="24" cy="24" r="22" pathLength="100" />
        <circle className="back-to-top__bar" cx="24" cy="24" r="22" pathLength="100" />
      </svg>
      <ArrowUp size={18} aria-hidden="true" className="back-to-top__arrow" />
    </button>
  );
}
