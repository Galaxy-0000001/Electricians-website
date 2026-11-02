import { Navigation } from 'lucide-react';
import config from '../config/businessConfig';
import { directionsUrl, mapEmbedUrl } from '../utils/links';

/** Google Maps embed (free, no API key) with a Directions button. */
export default function MapEmbed() {
  return (
    <div className="map">
      <iframe
        title={`Map showing the location of ${config.name}`}
        src={mapEmbedUrl(config.contact)}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
      <a href={directionsUrl(config.contact)} target="_blank" rel="noopener noreferrer" className="btn btn--primary map__button">
        <Navigation size={18} aria-hidden="true" /> Get directions
      </a>
    </div>
  );
}
