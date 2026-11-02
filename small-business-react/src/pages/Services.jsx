import { Info } from 'lucide-react';
import config from '../config/businessConfig';
import useSeo from '../hooks/useSeo';
import PageHeader from '../components/PageHeader';
import ServiceCard from '../components/ServiceCard';
import Reveal from '../components/Reveal';
import ProcessSteps from '../components/ProcessSteps';
import Faq from '../components/Faq';
import CTASection from '../components/CTASection';

export default function Services() {
  useSeo({
    title: 'Services & Prices',
    description: `${config.servicesIntro.text} Transparent starting prices for every job.`,
  });

  return (
    <>
      <PageHeader eyebrow="Services & pricing" title="Our services" text={config.servicesIntro.text} />

      <section className="section" aria-label="All services">
        <div className="container">
          <div className="services-grid services-grid--detailed">
            {config.services.map((service, index) => (
              <Reveal key={service.id} index={index % 2} className="services-grid__cell">
                <ServiceCard service={service} variant="detailed" />
              </Reveal>
            ))}
          </div>
          <p className="price-note">
            <Info size={16} aria-hidden="true" />
            {config.priceNote}
          </p>
        </div>
      </section>

      <ProcessSteps />
      <Faq />
      <CTASection />
    </>
  );
}
