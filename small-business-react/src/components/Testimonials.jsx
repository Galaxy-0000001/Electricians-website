import { Info } from 'lucide-react';
import config from '../config/businessConfig';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import TestimonialSlider from './TestimonialSlider';

export default function Testimonials() {
  const { testimonials } = config;
  if (!testimonials?.items?.length) return null;

  return (
    <section className="section section--tint section--testimonials" aria-labelledby="testimonials-title">
      <div className="container">
        <SectionHeading
          id="testimonials-title"
          eyebrow="Customer stories"
          title="What our customers say"
          text={testimonials.intro}
        />

        {/* Honesty note: shown until you replace the demo reviews with real ones
            and set `testimonials.isSample: false` in the config. */}
        {testimonials.isSample && (
          <p className="sample-note" role="note">
            <Info size={16} aria-hidden="true" />
            Sample testimonials for demonstration. Replace them with genuine customer reviews before going live.
          </p>
        )}

        <Reveal variant="scale">
          <TestimonialSlider items={testimonials.items} />
        </Reveal>
      </div>
    </section>
  );
}
