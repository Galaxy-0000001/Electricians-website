import { Link } from 'react-router-dom';
import { Clock, Mail, MapPin, Phone } from 'lucide-react';
import config from '../config/businessConfig';
import { NAV_LINKS } from './Navbar';
import Reveal from './Reveal';
import SocialIcon, { SOCIAL_LABELS } from './SocialIcon';
import { activeSocialLinks, formatAddress, mailLink, telLink } from '../utils/links';

export default function Footer() {
  const year = new Date().getFullYear();
  const socials = activeSocialLinks(config.social);

  return (
    <footer className="footer">
      <div className="container footer__grid">
        <Reveal className="footer__brand" index={0}>
          <Link to="/" className="brand brand--light">
            <img src={config.logo} alt="" width="40" height="40" className="brand__logo" />
            <span className="brand__text">
              <span className="brand__name">{config.name}</span>
            </span>
          </Link>
          <p className="footer__tagline">{config.tagline}</p>
          {socials.length > 0 && (
            <ul className="footer__social" aria-label="Social media">
              {socials.map(([network, url]) => (
                <li key={network}>
                  <a href={url} target="_blank" rel="noopener noreferrer" aria-label={SOCIAL_LABELS[network] || network}>
                    <SocialIcon name={network} size={18} />
                  </a>
                </li>
              ))}
            </ul>
          )}
        </Reveal>

        <Reveal as="nav" className="footer__col" aria-label="Footer" index={1}>
          <h3 className="footer__title">Quick links</h3>
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="footer__link">
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/privacy-policy" className="footer__link">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </Reveal>

        <Reveal className="footer__col" index={2}>
          <h3 className="footer__title">Services</h3>
          <ul>
            {config.services.slice(0, 6).map((service) => (
              <li key={service.id}>
                <Link to={`/services#${service.id}`} className="footer__link">
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="footer__col" index={3}>
          <h3 className="footer__title">Get in touch</h3>
          <ul className="footer__contact">
            <li>
              <Phone size={16} aria-hidden="true" />
              <a href={telLink(config.contact.phone)} className="footer__link">
                {config.contact.phoneDisplay}
              </a>
            </li>
            <li>
              <Mail size={16} aria-hidden="true" />
              <a href={mailLink(config.contact.email)} className="footer__link">
                {config.contact.email}
              </a>
            </li>
            <li>
              <MapPin size={16} aria-hidden="true" />
              <span>{formatAddress(config.contact.address)}</span>
            </li>
            {config.hours.map((slot) => (
              <li key={slot.days}>
                <Clock size={16} aria-hidden="true" />
                <span>
                  {slot.days}: {slot.time}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      <div className="container footer__bottom">
        <p>
          © {year} {config.legal.legalName}. All rights reserved.
        </p>
        <p className="footer__bottom-links">
          <Link to="/privacy-policy" className="footer__link">
            Privacy Policy
          </Link>
          {config.credit?.label && (
            <>
              <span aria-hidden="true">·</span>
              {config.credit.url ? (
                <a href={config.credit.url} target="_blank" rel="noopener noreferrer" className="footer__link">
                  {config.credit.label}
                </a>
              ) : (
                <span>{config.credit.label}</span>
              )}
            </>
          )}
        </p>
      </div>
    </footer>
  );
}
