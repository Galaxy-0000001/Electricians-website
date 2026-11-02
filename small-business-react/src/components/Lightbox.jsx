import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import SmartImage from './SmartImage';
import usePrefersReducedMotion from '../hooks/usePrefersReducedMotion';

const CLOSE_MS = 340; // keep in sync with .lightbox.is-closing in animations.css

/**
 * Full-screen image viewer.
 * Opens by zooming out of the clicked thumbnail and closes back into it.
 * Keyboard: ← / → to move, Esc to close, Tab stays inside the viewer.
 * Touch: swipe left / right.
 */
export default function Lightbox({ images, index, onClose, onChange, getOrigin }) {
  const dialogRef = useRef(null);
  const closeRef = useRef(null);
  const touchStartX = useRef(null);
  const [closing, setClosing] = useState(false);
  const [navigated, setNavigated] = useState(false);
  const reducedMotion = usePrefersReducedMotion();
  const image = images[index];
  const total = images.length;

  // Store the thumbnail position as CSS variables used by the zoom keyframes.
  const setOrigin = useCallback(
    (i) => {
      const node = dialogRef.current;
      const origin = getOrigin?.(i);
      if (!node || !origin) return;
      const fullWidth = Math.min(window.innerWidth * 0.9, 1200);
      node.style.setProperty('--from-x', `${origin.x - window.innerWidth / 2}px`);
      node.style.setProperty('--from-y', `${origin.y - window.innerHeight / 2}px`);
      node.style.setProperty('--from-scale', Math.min(Math.max(origin.width / fullWidth, 0.15), 1).toFixed(3));
    },
    [getOrigin]
  );

  // Before the first paint: start the opening zoom from the clicked thumbnail.
  useLayoutEffect(() => {
    setOrigin(index);
  }, []);

  const requestClose = useCallback(() => {
    if (closing) return;
    if (reducedMotion) {
      onClose();
      return;
    }
    setOrigin(index); // close back into the thumbnail of the photo now showing
    setClosing(true);
  }, [closing, reducedMotion, onClose, setOrigin, index]);

  useEffect(() => {
    if (!closing) return undefined;
    const timer = setTimeout(onClose, CLOSE_MS);
    return () => clearTimeout(timer);
  }, [closing, onClose]);

  const go = useCallback(
    (step) => {
      setNavigated(true);
      onChange((index + step + total) % total);
    },
    [index, total, onChange]
  );

  // Focus the close button on open, return focus to the thumbnail on close, lock page scroll.
  useEffect(() => {
    const previouslyFocused = document.activeElement;
    closeRef.current?.focus();
    document.body.classList.add('no-scroll');
    return () => {
      document.body.classList.remove('no-scroll');
      previouslyFocused?.focus?.({ preventScroll: true });
    };
  }, []);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') requestClose();
      if (event.key === 'ArrowRight') go(1);
      if (event.key === 'ArrowLeft') go(-1);

      if (event.key === 'Tab') {
        const focusable = dialogRef.current.querySelectorAll('button');
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [go, requestClose]);

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
      className={`lightbox ${closing ? 'is-closing' : ''}`}
      role="dialog"
      aria-modal="true"
      aria-label="Image viewer"
      ref={dialogRef}
      onClick={(event) => event.target === event.currentTarget && requestClose()}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <button type="button" className="lightbox__close" onClick={requestClose} ref={closeRef} aria-label="Close image viewer">
        <X size={24} aria-hidden="true" />
      </button>

      {total > 1 && (
        <button type="button" className="lightbox__nav lightbox__nav--prev" onClick={() => go(-1)} aria-label="Previous image">
          <ChevronLeft size={28} aria-hidden="true" />
        </button>
      )}

      <div className="lightbox__stage">
        <figure className={`lightbox__figure ${navigated ? 'is-swapping' : ''}`} key={image.src}>
          <SmartImage src={image.src} alt={image.alt} width={1600} sizes="90vw" priority className="lightbox__image" />
          <figcaption className="lightbox__caption">
            <span>{image.caption || image.alt}</span>
            <span className="lightbox__count" aria-live="polite">
              {index + 1} / {total}
            </span>
          </figcaption>
        </figure>
      </div>

      {total > 1 && (
        <button type="button" className="lightbox__nav lightbox__nav--next" onClick={() => go(1)} aria-label="Next image">
          <ChevronRight size={28} aria-hidden="true" />
        </button>
      )}
    </div>
  );
}
