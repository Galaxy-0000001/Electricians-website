import { Outlet, useLocation } from 'react-router-dom';

/**
 * Plays a short fade + slide-up whenever the page changes.
 * Enter-only on purpose: exit animations are what usually cause flicker,
 * scroll jumps and "two pages at once" glitches. The animation ends with no
 * transform left on the wrapper, so fixed elements (like the lightbox) behave normally.
 */
export default function PageTransition() {
  const { pathname } = useLocation();

  return (
    <div key={pathname} className="page-transition">
      <Outlet />
    </div>
  );
}
