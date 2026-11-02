import { useState } from 'react';
import { ImageOff } from 'lucide-react';
import { imageSrcSet, imageUrl } from '../utils/image';

/**
 * <img> with sensible defaults: lazy loading, responsive sizes, and a tidy
 * placeholder if the image file is missing (instead of a broken-image icon).
 */
export default function SmartImage({
  src,
  alt,
  width = 1200,
  sizes = '100vw',
  priority = false,
  className = '',
  ...rest
}) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return (
      <div className={`image-fallback ${className}`} role="img" aria-label={alt}>
        <ImageOff size={28} aria-hidden="true" />
      </div>
    );
  }

  return (
    <img
      src={imageUrl(src, width)}
      srcSet={imageSrcSet(src)}
      sizes={sizes}
      alt={alt}
      loading={priority ? 'eager' : 'lazy'}
      fetchPriority={priority ? 'high' : 'auto'}
      decoding="async"
      className={className}
      onError={() => setFailed(true)}
      {...rest}
    />
  );
}
