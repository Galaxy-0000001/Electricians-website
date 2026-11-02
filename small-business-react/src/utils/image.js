// Responsive image helpers.
// Unsplash URLs are resized on the fly by Unsplash's CDN, so we can request exactly
// the width each screen needs. Local images (e.g. "/images/hero.webp") are used as-is.

const RESIZABLE_HOSTS = ['images.unsplash.com'];

function isResizable(src) {
  try {
    return RESIZABLE_HOSTS.includes(new URL(src).hostname);
  } catch {
    return false; // relative path such as /images/photo.webp
  }
}

export function imageUrl(src, width = 1200, quality = 72) {
  if (!isResizable(src)) return src;
  const url = new URL(src);
  url.searchParams.set('auto', 'format');
  url.searchParams.set('fit', 'crop');
  url.searchParams.set('w', String(width));
  url.searchParams.set('q', String(quality));
  return url.toString();
}

export function imageSrcSet(src, widths = [480, 800, 1200, 1600]) {
  if (!isResizable(src)) return undefined;
  return widths.map((w) => `${imageUrl(src, w)} ${w}w`).join(', ');
}
