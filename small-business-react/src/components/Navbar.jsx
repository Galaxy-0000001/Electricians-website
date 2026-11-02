import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Phone } from 'lucide-react';
import config from '../config/businessConfig';
import useScrolledPast from '../hooks/useScrolledPast';
import { telLink } from '../utils/links';

export const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/contact', label: 'Contact' },
];

/**
 * Moves the single underline under the active link (desktop only).
 * Uses transform (translateX + scaleX) so the browser can animate it on the GPU,
 * and writes the style directly, so React does not re-render.
 */
function useActiveIndicator(wrapRef, indicatorRef, pathname) {
  useLayoutEffect(() => {
    const wrap = wrapRef.current;
    const indicator = indicatorRef.current;
    if (!wrap || !indicator) return undefined;

    const place = () => {
      const active = wrap.querySelector('.navbar__link.active');
      if (!active || getComputedStyle(indicator).display === 'none') {
        indicator.style.opacity = '0';
        return;
      }
      const inset = parseFloat(getComputedStyle(active).paddingLeft) || 0;
      indicator.style.opacity = '1';
      indicator.style.transform = `translateX(${active.offsetLeft + inset}px) scaleX(${active.offsetWidth - inset * 2})`;
    };

    place();
    // Turn on the sliding transition only after the first placement (no slide-in from 0 on load).
    const frame = requestAnimationFrame(() => indicator.classList.add('is-ready'));
    const resizeObserver = new ResizeObserver(place); // fonts loading, window resize
    resizeObserver.observe(wrap);

    return () => {
      cancelAnimationFrame(frame);
      resizeObserver.disconnect();
    };
  }, [wrapRef, indicatorRef, pathname]);
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const scrolled = useScrolledPast(12);
  const { pathname } = useLocation();
  const linksWrapRef = useRef(null);
  const indicatorRef = useRef(null);

  useActiveIndicator(linksWrapRef, indicatorRef, pathname);

  // Close the mobile menu whenever the page changes.
  useEffect(() => setOpen(false), [pathname]);

  // While the mobile menu is open: lock page scroll and close on Escape.
  useEffect(() => {
    if (!open) return undefined;
    const onKeyDown = (event) => event.key === 'Escape' && setOpen(false);
    document.body.classList.add('no-scroll');
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.classList.remove('no-scroll');
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''} ${open ? 'navbar--open' : ''}`}>
      <div className="container navbar__inner">
        <Link to="/" className="brand" aria-label={`${config.name} — home`}>
          <img src={config.logo} alt="" width="40" height="40" className="brand__logo" />
          <span className="brand__text">
            <span className="brand__name">{config.shortName}</span>
            <span className="brand__sub">{config.industry}</span>
          </span>
        </Link>

        <nav id="primary-navigation" className="navbar__nav" aria-label="Main">
          <div className="navbar__links-wrap" ref={linksWrapRef}>
            <ul className="navbar__links">
              {NAV_LINKS.map((link, index) => (
                <li key={link.to} style={{ '--i': index }}>
                  <NavLink to={link.to} end={link.to === '/'} className="navbar__link">
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
            <span className="navbar__indicator" ref={indicatorRef} aria-hidden="true" />
          </div>
          <div className="navbar__mobile-cta" style={{ '--i': NAV_LINKS.length }}>
            <a href={telLink(config.contact.phone)} className="btn btn--primary btn--block">
              <Phone size={18} aria-hidden="true" /> Call {config.contact.phoneDisplay}
            </a>
          </div>
        </nav>

        <div className="navbar__actions">
          <a href={telLink(config.contact.phone)} className="navbar__phone">
            <span className="navbar__phone-icon">
              <Phone size={15} aria-hidden="true" />
            </span>
            <span>{config.contact.phoneDisplay}</span>
          </a>
          <Link to="/contact" className="btn btn--primary btn--sm navbar__cta">
            Get a quote
          </Link>
          <button
            type="button"
            className="navbar__toggle"
            aria-expanded={open}
            aria-controls="primary-navigation"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((value) => !value)}
          >
            <span className="hamburger" aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
          </button>
        </div>
      </div>
      <div className="navbar__backdrop" onClick={() => setOpen(false)} aria-hidden="true" />
    </header>
  );
}
