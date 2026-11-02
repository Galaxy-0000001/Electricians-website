import { Phone } from 'lucide-react';
import config from '../config/businessConfig';
import { telLink } from '../utils/links';
import Reveal from './Reveal';
import WhatsAppButton from './WhatsAppButton';

export default function CTASection() {
  return (
    <section className="section section--cta" aria-labelledby="cta-title">
      <div className="container">
        <Reveal variant="scale" className="cta">
          <span className="cta__ring cta__ring--1" aria-hidden="true" />
          <span className="cta__ring cta__ring--2" aria-hidden="true" />
          <div className="cta__text">
            <h2 id="cta-title">{config.cta.title}</h2>
            <p>{config.cta.text}</p>
          </div>
          <div className="cta__actions">
            <a href={telLink(config.contact.phone)} className="btn btn--dark btn--lg">
              <Phone size={18} aria-hidden="true" className="btn__ring-icon" /> {config.contact.phoneDisplay}
            </a>
            <WhatsAppButton className="btn--lg" label="WhatsApp us" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
