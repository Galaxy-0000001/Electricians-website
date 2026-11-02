import config from '../config/businessConfig';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

/** "How it works": numbered steps from the config. Each step's top line draws in on scroll. */
export default function ProcessSteps() {
  return (
    <section className="section" aria-labelledby="process-title">
      <div className="container">
        <SectionHeading
          id="process-title"
          eyebrow="How it works"
          title="Simple, transparent, on time"
          text="No surprises from the first call to the final check."
        />
        <ol className="process">
          {config.process.map((step, index) => (
            <Reveal as="li" key={step.title} className="process__step" index={index}>
              <span className="process__number" aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
