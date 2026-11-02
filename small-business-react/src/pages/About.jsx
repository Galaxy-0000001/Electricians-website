import config from '../config/businessConfig';
import useSeo from '../hooks/useSeo';
import PageHeader from '../components/PageHeader';
import SmartImage from '../components/SmartImage';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import Icon from '../components/Icon';
import TrustBar from '../components/TrustBar';
import ProcessSteps from '../components/ProcessSteps';
import CTASection from '../components/CTASection';

export default function About() {
  const { about } = config;
  useSeo({ title: 'About Us', description: about.intro });

  return (
    <>
      <PageHeader eyebrow="About us" title={about.title} text={about.intro} />

      <section className="section" aria-labelledby="story-title">
        <div className="container split">
          <div className="split__media">
            <Reveal variant="image" className="split__image">
              <SmartImage
                src={about.image}
                alt={about.imageAlt}
                width={900}
                sizes="(max-width: 900px) 100vw, 45vw"
                className="rounded-image"
              />
            </Reveal>
          </div>
          <Reveal variant="right" className="split__content" delay={120}>
            <p className="eyebrow">Our story</p>
            <h2 id="story-title">{about.storyTitle}</h2>
            {about.story.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
            <blockquote className="mission">
              <p>{about.mission}</p>
              <cite>
                {about.founder.name}, {about.founder.role}
              </cite>
            </blockquote>
          </Reveal>
        </div>
      </section>

      <TrustBar />

      <section className="section" aria-labelledby="values-title">
        <div className="container">
          <SectionHeading id="values-title" eyebrow="What we stand for" title="Our values" />
          <div className="values-grid">
            {about.values.map((value, index) => (
              <Reveal key={value.title} className="value-card" index={index}>
                <span className="value-card__icon">
                  <Icon name={value.icon} size={24} />
                </span>
                <h3>{value.title}</h3>
                <p>{value.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ProcessSteps />
      <CTASection />
    </>
  );
}
