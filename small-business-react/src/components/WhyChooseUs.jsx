import config from '../config/businessConfig';
import Icon from './Icon';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

export default function WhyChooseUs() {
  return (
    <section className="section section--dark" aria-labelledby="why-title">
      <div className="section--dark__glow" aria-hidden="true" />
      <div className="container">
        <SectionHeading
          id="why-title"
          eyebrow="Why choose us"
          title={config.whyChooseUs.title}
          text={config.whyChooseUs.text}
          light
        />
        <div className="why-grid">
          {config.whyChooseUs.items.map((item, index) => (
            <Reveal key={item.title} className="why-card" index={index}>
              <span className="why-card__icon">
                <Icon name={item.icon} size={24} />
              </span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
