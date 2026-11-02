import { Fragment } from 'react';

/**
 * Heading whose words slide up one after another from behind a mask.
 * Plays once when the component mounts (hero and page headers).
 *
 *   <AnimatedHeading as="h1" text="Electrical work done safely," highlight="the first time." />
 *
 * Words stay real text separated by spaces, so screen readers and search
 * engines read the heading normally.
 */
export default function AnimatedHeading({
  as: Tag = 'h2',
  text = '',
  highlight = '',
  highlightClassName = 'text-highlight',
  delay = 0,
  step = 60,
  className = '',
  ...rest
}) {
  const toWords = (value, isHighlight) =>
    value
      .split(' ')
      .filter(Boolean)
      .map((word) => ({ word, isHighlight }));

  const words = [...toWords(text, false), ...toWords(highlight, true)];

  return (
    <Tag className={`split-heading ${className}`.trim()} {...rest}>
      {words.map(({ word, isHighlight }, i) => (
        <Fragment key={`${word}-${i}`}>
          <span className="split-heading__word">
            <span
              className={`split-heading__inner ${isHighlight ? highlightClassName : ''}`.trim()}
              style={{ '--word-delay': `${delay + Math.min(i, 10) * step}ms` }}
            >
              {word}
            </span>
          </span>
          {i < words.length - 1 && ' '}
        </Fragment>
      ))}
    </Tag>
  );
}
