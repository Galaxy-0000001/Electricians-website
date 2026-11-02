// Small helpers that turn config values into working links.

/** "tel:" link that works on every phone. Strips spaces and dashes. */
export function telLink(phone) {
  return `tel:${String(phone).replace(/[^\d+]/g, '')}`;
}

/** "mailto:" link with an optional subject line. */
export function mailLink(email, subject = '') {
  return subject ? `mailto:${email}?subject=${encodeURIComponent(subject)}` : `mailto:${email}`;
}

/**
 * WhatsApp click-to-chat link.
 * `number` must include the country code, digits only works best: "919876543210".
 */
export function whatsappLink(number, message = '') {
  const digits = String(number).replace(/\D/g, '');
  const text = message ? `?text=${encodeURIComponent(message)}` : '';
  return `https://wa.me/${digits}${text}`;
}

/** Turns the address object from the config into one readable line. */
export function formatAddress(address) {
  return [address.line1, address.line2, address.city, address.state, address.postalCode, address.country]
    .filter(Boolean)
    .join(', ');
}

/**
 * Google Maps embed URL. Uses `contact.mapEmbedUrl` from the config if you pasted one
 * (Google Maps → Share → Embed a map → copy the src="..." value). Otherwise it builds a
 * free, key-less embed from the address.
 */
export function mapEmbedUrl(contact) {
  if (contact.mapEmbedUrl) return contact.mapEmbedUrl;
  return `https://www.google.com/maps?q=${encodeURIComponent(formatAddress(contact.address))}&output=embed`;
}

/** Opens Google Maps with turn-by-turn directions to the business. */
export function directionsUrl(contact) {
  const destination = contact.mapsQuery || formatAddress(contact.address);
  return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(destination)}`;
}

/** Only keeps social links that have a URL, so the site never shows dead icons. */
export function activeSocialLinks(social = {}) {
  return Object.entries(social).filter(([, url]) => Boolean(url));
}
