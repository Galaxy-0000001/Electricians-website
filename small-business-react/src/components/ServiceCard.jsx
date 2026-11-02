import { Link } from 'react-router-dom';
import { ArrowUpRight, Check } from 'lucide-react';
import config from '../config/businessConfig';
import Icon from './Icon';
import WhatsAppButton from './WhatsAppButton';

// Desktop-only spotlight that follows the mouse. Writes CSS variables straight
// to the card (no React state), so moving the mouse never re-renders anything.
function moveSpotlight(event) {
  if (event.pointerType !== 'mouse') return;
  const card = event.currentTarget;
  const rect = card.getBoundingClientRect();
  card.style.setProperty('--spot-x', `${event.clientX - rect.left}px`);
  card.style.setProperty('--spot-y', `${event.clientY - rect.top}px`);
}

/**
 * Reusable service card.
 *   variant="compact"  → homepage overview (short text + link to the Services page)
 *   variant="detailed" → Services page (full description, features and WhatsApp enquiry)
 */
export default function ServiceCard({ service, variant = 'compact' }) {
  const detailed = variant === 'detailed';
  const enquiry = `Hi ${config.shortName}, I'd like a quote for "${service.title}". `;

  return (
    <article
      id={detailed ? service.id : undefined}
      className={`service-card ${detailed ? 'service-card--detailed' : ''} ${service.popular ? 'service-card--popular' : ''}`}
      onPointerMove={moveSpotlight}
    >
      {service.popular && <span className="service-card__badge">Most booked</span>}

      <span className="service-card__icon">
        <Icon name={service.icon} size={24} />
      </span>

      <h3 className="service-card__title">{service.title}</h3>
      <p className="service-card__text">{detailed ? service.description : service.short}</p>

      {detailed && service.features?.length > 0 && (
        <ul className="service-card__features">
          {service.features.map((feature) => (
            <li key={feature}>
              <Check size={16} aria-hidden="true" />
              {feature}
            </li>
          ))}
        </ul>
      )}

      <div className="service-card__footer">
        {service.price && (
          <p className="service-card__price">
            <span className="service-card__price-label">{service.priceLabel || 'Starting at'}</span>
            <span className="service-card__price-value">
              {service.price}
              {service.priceUnit && <small> {service.priceUnit}</small>}
            </span>
          </p>
        )}

        {detailed ? (
          <WhatsAppButton message={enquiry} label="Enquire" className="btn--sm" />
        ) : (
          <Link
            to={`/services#${service.id}`}
            className="service-card__link"
            aria-label={`Learn more about ${service.title}`}
          >
            <ArrowUpRight size={20} aria-hidden="true" />
          </Link>
        )}
      </div>
    </article>
  );
}
