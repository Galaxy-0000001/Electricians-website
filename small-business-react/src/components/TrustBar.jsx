import config from '../config/businessConfig';
import Icon from './Icon';
import Reveal from './Reveal';
import StatCounter from './StatCounter';

/** Trust indicators (licensed, insured, ...) plus animated headline numbers. */
export default function TrustBar() {
  return (
    <section className="trust" aria-label="Why customers trust us">
      <div className="container">
        <ul className="trust__badges">
          {config.trust.map((item, index) => (
            <Reveal as="li" key={item.label} variant="up" index={index}>
              <span className="trust__icon">
                <Icon name={item.icon} size={18} />
              </span>
              {item.label}
            </Reveal>
          ))}
        </ul>

        <dl className="stats">
          {config.stats.map((stat, index) => (
            <Reveal key={stat.label} className="stats__item" index={index}>
              <dt>{stat.label}</dt>
              <dd>
                <StatCounter value={stat.value} />
              </dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
