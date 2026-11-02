import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import config from '../config/businessConfig';
import useSeo from '../hooks/useSeo';
import Hero from '../components/Hero';
import TrustBar from '../components/TrustBar';
import SectionHeading from '../components/SectionHeading';
import ServiceCard from '../components/ServiceCard';
import WhyChooseUs from '../components/WhyChooseUs';
import Gallery from '../components/Gallery';
import Testimonials from '../components/Testimonials';
import CTASection from '../components/CTASection';
import ContactInfo from '../components/ContactInfo';
import MapEmbed from '../components/MapEmbed';
import SmartImage from '../components/SmartImage';
import Reveal from '../components/Reveal';

export default function Home() {
  useSeo();
  const { intro } = config;
  const years = new Date().getFullYear() - config.foundedYear;

  return (
    <>
      <Hero />
      <TrustBar />

      {/* Business introduction */}
      <section className="section" aria-labelledby="intro-title">
        <div className="container split">
          <div className="split__media">
            <Reveal variant="image" className="split__image">
              <SmartImage
                src={intro.image}
                alt={intro.imageAlt}
                width={900}
                sizes="(max-width: 900px) 100vw, 45vw"
                className="rounded-image"
              />
            </Reveal>
            <Reveal variant="scale" delay={450} className="experience-badge">
              <strong>{years}+</strong>
              <span>years serving {config.contact.address.city}</span>
            </Reveal>
          </div>
          <Reveal variant="right" className="split__content" delay={120}>
            <p className="eyebrow">{intro.eyebrow}</p>
            <h2 id="intro-title">{intro.title}</h2>
            <p className="lead">{intro.text}</p>
            <ul className="check-list">
              {intro.points.map((point) => (
                <li key={point}>
                  <Check size={18} aria-hidden="true" />
                  {point}
                </li>
              ))}
            </ul>
            <Link to="/about" className="btn btn--outline">
              More about us <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Services overview */}
      <section className="section section--tint" aria-labelledby="services-title">
        <div className="container">
          <SectionHeading
            id="services-title"
            eyebrow="Our services"
            title={config.servicesIntro.title}
            text={config.servicesIntro.text}
          />
          <div className="services-grid">
            {config.services.slice(0, 6).map((service, index) => (
              <Reveal key={service.id} index={index} className="services-grid__cell">
                <ServiceCard service={service} />
              </Reveal>
            ))}
          </div>
          <div className="section__more">
            <Link to="/services" className="btn btn--outline">
              View all services &amp; prices <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <WhyChooseUs />

      {/* Portfolio preview */}
      <section className="section" aria-labelledby="work-title">
        <div className="container">
          <SectionHeading
            id="work-title"
            eyebrow="Recent work"
            title="A look at jobs we've completed"
            text="Tap any photo to view it full size."
          />
          <Gallery limit={6} />
          <div className="section__more">
            <Link to="/gallery" className="btn btn--outline">
              See the full gallery <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <Testimonials />
      <CTASection />

      {/* Contact information */}
      <section className="section" aria-labelledby="home-contact-title">
        <div className="container">
          <SectionHeading
            id="home-contact-title"
            eyebrow="Contact"
            title="Talk to us today"
            text={`Serving ${config.serviceArea}. Call, WhatsApp or drop by.`}
          />
          <div className="contact-layout">
            <Reveal variant="left">
              <ContactInfo />
            </Reveal>
            <Reveal variant="right" delay={120} className="contact-layout__map">
              <MapEmbed />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
