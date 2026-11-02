import { Plus } from 'lucide-react';
import config from '../config/businessConfig';
import SectionHeading from './SectionHeading';

/** Accessible FAQ using native <details>/<summary> (keyboard-friendly with no extra JS). */
export default function Faq() {
  if (!config.faq?.length) return null;

  return (
    <section className="section section--tint" aria-labelledby="faq-title">
      <div className="container container--narrow">
        <SectionHeading id="faq-title" eyebrow="FAQ" title="Questions we get asked a lot" />
        <div className="faq">
          {config.faq.map((item) => (
            <details key={item.question} className="faq__item">
              <summary>
                <span>{item.question}</span>
                <Plus size={20} aria-hidden="true" className="faq__icon" />
              </summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
