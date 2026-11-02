import { Link } from 'react-router-dom';
import { ArrowLeft, Phone } from 'lucide-react';
import config from '../config/businessConfig';
import useSeo from '../hooks/useSeo';
import { telLink } from '../utils/links';
import { NAV_LINKS } from '../components/Navbar';

export default function NotFound() {
  useSeo({ title: 'Page not found', noIndex: true });

  return (
    <section className="not-found">
      <div className="hero__pattern" aria-hidden="true" />
      <div className="container not-found__inner">
        <p className="not-found__code animate-in" aria-hidden="true">
          404
        </p>
        <h1 className="animate-in" style={{ '--delay': '120ms' }}>We couldn't find that page</h1>
        <p className="lead animate-in" style={{ '--delay': '220ms' }}>The link may be old or mistyped. Here are some places to go instead:</p>
        <div className="not-found__actions animate-in" style={{ '--delay': '320ms' }}>
          <Link to="/" className="btn btn--primary btn--lg">
            <ArrowLeft size={18} aria-hidden="true" /> Back to home
          </Link>
          <a href={telLink(config.contact.phone)} className="btn btn--outline btn--lg">
            <Phone size={18} aria-hidden="true" /> Call us
          </a>
        </div>
        <nav aria-label="Helpful links">
          <ul className="not-found__links">
            {NAV_LINKS.filter((link) => link.to !== '/').map((link) => (
              <li key={link.to}>
                <Link to={link.to}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  );
}
