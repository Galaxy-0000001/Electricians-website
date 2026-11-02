import config from '../config/businessConfig';
import useSeo from '../hooks/useSeo';
import PageHeader from '../components/PageHeader';
import ContactForm from '../components/ContactForm';
import ContactInfo from '../components/ContactInfo';
import MapEmbed from '../components/MapEmbed';
import Reveal from '../components/Reveal';

export default function Contact() {
  useSeo({
    title: 'Contact Us',
    description: `Call ${config.contact.phoneDisplay}, WhatsApp or send an enquiry to ${config.name}. Serving ${config.serviceArea}.`,
  });

  return (
    <>
      <PageHeader
        eyebrow="Contact us"
        title="Let's get your job booked"
        text={`Tell us what you need and we'll get back to you within ${config.responseTime}. Prefer to talk? Call or WhatsApp us.`}
      />

      <section className="section" aria-labelledby="form-title">
        <div className="container contact-page">
          <Reveal variant="left" className="contact-page__form">
            <h2 id="form-title" className="h3">
              Send us an enquiry
            </h2>
            <p className="muted">Fields marked * are required.</p>
            <ContactForm />
          </Reveal>
          <Reveal variant="right" className="contact-page__info" delay={120}>
            <ContactInfo />
          </Reveal>
        </div>
      </section>

      <section className="section section--flush" aria-label="Location map">
        <div className="container">
          <MapEmbed />
        </div>
      </section>
    </>
  );
}
