import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import config from '../config/businessConfig';
import SmartImage from './SmartImage';
import WhatsAppButton from './WhatsAppButton';
import AnimatedHeading from './AnimatedHeading';
import Icon from './Icon';

// Entrance timeline (ms). Everything is finished in about 1.3 seconds.
const T = { eyebrow: 0, title: 120, subtitle: 480, actions: 600, checks: 720, media: 180, cards: 950 };

export default function Hero() {
  const { hero } = config;

  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__pattern" aria-hidden="true" />
      <div className="hero__glow hero__glow--1" aria-hidden="true" />
      <div className="hero__glow hero__glow--2" aria-hidden="true" />

      <div className="container hero__grid">
        <div className="hero__content">
          <p className="eyebrow hero__eyebrow animate-in" style={{ '--delay': `${T.eyebrow}ms` }}>
            {hero.eyebrow}
          </p>

          <AnimatedHeading
            as="h1"
            id="hero-title"
            className="hero__title"
            text={hero.title}
            highlight={hero.highlight}
            highlightClassName="hero__highlight"
            delay={T.title}
          />

          <p className="hero__subtitle animate-in" style={{ '--delay': `${T.subtitle}ms` }}>
            {hero.subtitle}
          </p>

          <div className="hero__actions animate-in" style={{ '--delay': `${T.actions}ms` }}>
            <Link to={hero.primaryCta.to} className="btn btn--primary btn--lg btn--shine">
              {hero.primaryCta.label} <ArrowRight size={18} aria-hidden="true" className="btn__arrow" />
            </Link>
            <WhatsAppButton className="btn--lg" label="WhatsApp us" />
          </div>

          <ul className="hero__checks">
            {hero.highlights.map((item, index) => (
              <li key={item} className="animate-pop" style={{ '--delay': `${T.checks + index * 90}ms` }}>
                <Check size={16} aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="hero__media">
          <span className="hero__deco hero__deco--dots" aria-hidden="true" />
          <span className="hero__deco hero__deco--ring" aria-hidden="true" />

          <div className="hero__image-wrap animate-wipe" style={{ '--delay': `${T.media}ms` }}>
            <SmartImage
              src={hero.image}
              alt={hero.imageAlt}
              width={1100}
              sizes="(max-width: 900px) 100vw, 46vw"
              priority
              className="hero__image"
            />
          </div>

          {hero.floatingCards.map((card, index) => (
            <div
              key={card.title}
              className={`hero__card hero__card--${index + 1}`}
              style={{ '--delay': `${T.cards + index * 150}ms` }}
            >
              <span className="hero__card-icon">
                <Icon name={card.icon} size={20} />
              </span>
              <span>
                <strong>{card.title}</strong>
                <small>{card.text}</small>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
