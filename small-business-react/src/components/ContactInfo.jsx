import { Clock, Mail, MapPin, Navigation, Phone } from 'lucide-react';
import config from '../config/businessConfig';
import { directionsUrl, formatAddress, mailLink, telLink, whatsappLink } from '../utils/links';
import SocialIcon from './SocialIcon';

/** Contact cards: phone, WhatsApp, email, address and opening hours. */
export default function ContactInfo({ showHours = true }) {
  const { contact } = config;

  return (
    <div className="contact-info">
      <a className="contact-card" href={telLink(contact.phone)}>
        <span className="contact-card__icon">
          <Phone size={20} aria-hidden="true" />
        </span>
        <span>
          <small>Call us</small>
          <strong>{contact.phoneDisplay}</strong>
        </span>
      </a>

      <a className="contact-card" href={whatsappLink(contact.whatsapp, contact.whatsappMessage)} target="_blank" rel="noopener noreferrer">
        <span className="contact-card__icon contact-card__icon--whatsapp">
          <SocialIcon name="whatsapp" size={20} />
        </span>
        <span>
          <small>WhatsApp</small>
          <strong>Chat with us</strong>
        </span>
      </a>

      <a className="contact-card" href={mailLink(contact.email, `Enquiry for ${config.name}`)}>
        <span className="contact-card__icon">
          <Mail size={20} aria-hidden="true" />
        </span>
        <span>
          <small>Email</small>
          <strong className="break-anywhere">{contact.email}</strong>
        </span>
      </a>

      <a className="contact-card" href={directionsUrl(contact)} target="_blank" rel="noopener noreferrer">
        <span className="contact-card__icon">
          <MapPin size={20} aria-hidden="true" />
        </span>
        <span>
          <small>Visit us</small>
          <strong>{formatAddress(contact.address)}</strong>
          <span className="contact-card__link">
            <Navigation size={14} aria-hidden="true" /> Get directions
          </span>
        </span>
      </a>

      {showHours && (
        <div className="contact-card contact-card--static">
          <span className="contact-card__icon">
            <Clock size={20} aria-hidden="true" />
          </span>
          <span>
            <small>Opening hours</small>
            <span className="hours">
              {config.hours.map((slot) => (
                <span key={slot.days} className="hours__row">
                  <span>{slot.days}</span>
                  <strong>{slot.time}</strong>
                </span>
              ))}
            </span>
            {config.emergencyNote && <span className="hours__note">{config.emergencyNote}</span>}
          </span>
        </div>
      )}
    </div>
  );
}
