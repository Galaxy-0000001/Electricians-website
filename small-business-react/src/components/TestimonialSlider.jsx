import { useCallback, useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Pause, Play, Quote, Star } from 'lucide-react';
import usePrefersReducedMotion from '../hooks/usePrefersReducedMotion';

const INTERVAL_MS = 6500;

function Stars({ rating }) {
  return (
    <span className="stars" role="img" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <Star key={i} size={18} aria-hidden="true" className={i < rating ? 'is-filled' : ''} />
      ))}
    </span>
  );
}

function initials(name) {
  return name
    .split(' ')
    .map((part) => part[0])
    .slice(0, 2)
    .join('');
}

/**
 * Accessible testimonial carousel.
 * - Rotates automatically, pausing on hover, keyboard focus, hidden tab or the Pause button.
 * - No autoplay when the visitor prefers reduced motion.
 * - Prev/next buttons, dots and touch swipe.
 * - All slides are stacked in one grid cell, so the height never jumps.
 * - The progress bar's CSS animation drives the timing: when it finishes, the next
 *   slide shows. Pausing the bar pauses rotation exactly where it was.
 */
export default function TestimonialSlider({ items }) {
  const [active, setActive] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [userPaused, setUserPaused] = useState(false);
  const [pageHidden, setPageHidden] = useState(false);
  const reducedMotion = usePrefersReducedMotion();
  const touchStartX = useRef(null);

  const total = items.length;
  const autoplay = total > 1 && !reducedMotion && !userPaused;
  const running = autoplay && !hovered && !focused && !pageHidden;

  const go = useCallback((step) => setActive((i) => (i + step + total) % total), [total]);

  useEffect(() => {
    const onVisibility = () => setPageHidden(document.hidden);
    document.addEventListener('visibilitychange', onVisibility);
    return () => document.removeEventListener('visibilitychange', onVisibility);
  }, []);

  const onBlur = (event) => {
    if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false);
  };

  const onTouchStart = (event) => {
    touchStartX.current = event.touches[0].clientX;
  };

  const onTouchEnd = (event) => {
    if (touchStartX.current === null) return;
    const distance = event.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(distance) > 50) go(distance < 0 ? 1 : -1);
    touchStartX.current = null;
  };

  return (
    <div
      className="slider"
      role="region"
      aria-roledescription="carousel"
      aria-label="Customer testimonials"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setFocused(true)}
      onBlur={onBlur}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <div className="slider__track" aria-live={running ? 'off' : 'polite'}>
        {items.map((item, i) => {
          const position = i === active ? 'is-active' : i < active ? 'is-before' : 'is-after';
          return (
            <figure
              key={item.name}
              className={`slide ${position}`}
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${total}`}
              aria-hidden={i !== active}
              inert={i !== active}
            >
              <Quote size={40} aria-hidden="true" className="slide__quote-icon" />
              <Stars rating={item.rating} />
              <blockquote className="slide__text">
                <p>“{item.text}”</p>
              </blockquote>
              <figcaption className="slide__author">
                <span className="slide__avatar" aria-hidden="true">
                  {initials(item.name)}
                </span>
                <span>
                  <strong>{item.name}</strong>
                  <small>
                    {item.location} · {item.service}
                  </small>
                </span>
              </figcaption>
            </figure>
          );
        })}
      </div>

      {total > 1 && (
        <div className="slider__controls">
          <button type="button" className="slider__arrow" onClick={() => go(-1)} aria-label="Previous testimonial">
            <ChevronLeft size={20} aria-hidden="true" />
          </button>

          <div className="slider__dots">
            {items.map((item, i) => (
              <button
                key={item.name}
                type="button"
                className={`slider__dot ${i === active ? 'is-active' : ''}`}
                onClick={() => setActive(i)}
                aria-label={`Show testimonial ${i + 1}`}
                aria-current={i === active ? 'true' : undefined}
              />
            ))}
          </div>

          <button type="button" className="slider__arrow" onClick={() => go(1)} aria-label="Next testimonial">
            <ChevronRight size={20} aria-hidden="true" />
          </button>

          {!reducedMotion && (
            <button
              type="button"
              className="slider__pause"
              onClick={() => setUserPaused((value) => !value)}
              aria-label={userPaused ? 'Start automatic rotation' : 'Pause automatic rotation'}
            >
              {userPaused ? <Play size={16} aria-hidden="true" /> : <Pause size={16} aria-hidden="true" />}
            </button>
          )}
        </div>
      )}

      {autoplay && (
        <span className="slider__progress" aria-hidden="true">
          <span
            key={active}
            className="slider__progress-bar"
            style={{ animationDuration: `${INTERVAL_MS}ms`, animationPlayState: running ? 'running' : 'paused' }}
            onAnimationEnd={() => go(1)}
          />
        </span>
      )}
    </div>
  );
}
