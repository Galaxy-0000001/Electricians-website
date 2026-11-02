import config from '../config/businessConfig';
import { whatsappLink } from '../utils/links';
import SocialIcon from './SocialIcon';

/**
 * Two ways to use it:
 *   <WhatsAppButton floating />                 → round button fixed to the bottom corner
 *   <WhatsAppButton message="Hi, I need..." />  → normal inline button with a pre-filled message
 */
export default function WhatsAppButton({
  floating = false,
  message = config.contact.whatsappMessage,
  label = 'WhatsApp us',
  className = '',
}) {
  const href = whatsappLink(config.contact.whatsapp, message);

  if (floating) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
        aria-label={`Chat with ${config.shortName} on WhatsApp (opens in a new tab)`}
      >
        <SocialIcon name="whatsapp" size={28} />
        <span className="whatsapp-float__tooltip" aria-hidden="true">
          Chat with us
        </span>
      </a>
    );
  }

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={`btn btn--whatsapp ${className}`.trim()}>
      <SocialIcon name="whatsapp" size={18} />
      {label}
    </a>
  );
}
