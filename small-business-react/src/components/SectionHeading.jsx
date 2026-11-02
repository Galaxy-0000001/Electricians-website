import Reveal from './Reveal';

/**
 * Eyebrow label + heading + optional intro text, used at the top of every section.
 * On scroll: the eyebrow line draws in, then the heading and text slide up in turn.
 */
export default function SectionHeading({ eyebrow, title, text, align = 'center', light = false, id }) {
  return (
    <Reveal
      variant="heading"
      className={`section-heading section-heading--${align} ${light ? 'section-heading--light' : ''}`}
    >
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 id={id}>{title}</h2>
      {text && <p className="section-heading__text">{text}</p>}
    </Reveal>
  );
}
