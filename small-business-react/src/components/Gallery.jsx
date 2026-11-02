import { useCallback, useMemo, useRef, useState } from 'react';
import { ZoomIn } from 'lucide-react';
import config from '../config/businessConfig';
import Lightbox from './Lightbox';
import Reveal from './Reveal';
import SmartImage from './SmartImage';

/**
 * Responsive photo grid with an optional category filter and a lightbox.
 *   <Gallery limit={6} />   → homepage preview
 *   <Gallery filterable />  → full gallery page with category tabs
 */
export default function Gallery({ images = config.gallery, limit, filterable = false }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [openIndex, setOpenIndex] = useState(null);
  const buttonRefs = useRef([]);

  const categories = useMemo(
    () => ['All', ...new Set(images.map((image) => image.category).filter(Boolean))],
    [images]
  );

  const visibleImages = useMemo(() => {
    const filtered = activeCategory === 'All' ? images : images.filter((image) => image.category === activeCategory);
    return limit ? filtered.slice(0, limit) : filtered;
  }, [images, activeCategory, limit]);

  // Tells the lightbox where the clicked thumbnail is, so it can zoom out of (and back into) it.
  const getOrigin = useCallback((index) => {
    const button = buttonRefs.current[index];
    if (!button) return null;
    const rect = button.getBoundingClientRect();
    return { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2, width: rect.width };
  }, []);

  const closeLightbox = useCallback(() => setOpenIndex(null), []);

  return (
    <>
      {filterable && categories.length > 2 && (
        <div className="gallery-filters" role="group" aria-label="Filter photos by category">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className={`chip ${activeCategory === category ? 'is-active' : ''}`}
              aria-pressed={activeCategory === category}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      )}

      {/* Keyed by category: switching filters re-plays the staggered reveal. */}
      <ul className="gallery" key={activeCategory}>
        {visibleImages.map((image, index) => (
          <Reveal as="li" variant="image" index={index} key={image.src} className="gallery__item">
            <button
              type="button"
              className="gallery__button"
              ref={(node) => {
                buttonRefs.current[index] = node;
              }}
              onClick={() => setOpenIndex(index)}
              aria-label={`View larger: ${image.alt}`}
            >
              <SmartImage
                src={image.src}
                alt={image.alt}
                width={800}
                sizes="(max-width: 600px) 100vw, (max-width: 1000px) 50vw, 33vw"
                className="gallery__image"
              />
              <span className="gallery__overlay" aria-hidden="true">
                <span className="gallery__caption">
                  {image.category && <small>{image.category}</small>}
                  {image.caption}
                </span>
                <span className="gallery__zoom">
                  <ZoomIn size={20} />
                </span>
              </span>
            </button>
          </Reveal>
        ))}
      </ul>

      {openIndex !== null && (
        <Lightbox
          images={visibleImages}
          index={openIndex}
          onClose={closeLightbox}
          onChange={setOpenIndex}
          getOrigin={getOrigin}
        />
      )}
    </>
  );
}
