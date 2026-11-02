import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import AnimatedHeading from './AnimatedHeading';

/** Title banner at the top of inner pages (About, Services, ...), with breadcrumbs. */
export default function PageHeader({ eyebrow, title, text }) {
  return (
    <section className="page-header">
      <div className="hero__pattern" aria-hidden="true" />
      <div className="hero__glow hero__glow--1" aria-hidden="true" />
      <div className="container page-header__inner">
        <nav aria-label="Breadcrumb" className="animate-in">
          <ol className="breadcrumbs">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li aria-hidden="true">
              <ChevronRight size={14} />
            </li>
            <li aria-current="page">{title}</li>
          </ol>
        </nav>
        {eyebrow && (
          <p className="eyebrow animate-in" style={{ '--delay': '60ms' }}>
            {eyebrow}
          </p>
        )}
        <AnimatedHeading as="h1" className="page-header__title" text={title} delay={120} />
        {text && (
          <p className="page-header__text animate-in" style={{ '--delay': '380ms' }}>
            {text}
          </p>
        )}
      </div>
    </section>
  );
}
