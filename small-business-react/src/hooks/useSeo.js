import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import config from '../config/businessConfig';

function setMeta(attribute, key, content) {
  let tag = document.head.querySelector(`meta[${attribute}="${key}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attribute, key);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
}

function setCanonical(href) {
  let link = document.head.querySelector('link[rel="canonical"]');
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    document.head.appendChild(link);
  }
  link.setAttribute('href', href);
}

/**
 * Updates the page title, description, canonical URL and Open Graph tags
 * whenever a page is shown.
 *
 * Usage inside a page:  useSeo({ title: 'About Us', description: '...' })
 */
export default function useSeo({ title, description, noIndex = false } = {}) {
  const { pathname } = useLocation();

  useEffect(() => {
    const fullTitle = title ? `${title} | ${config.name}` : config.seo.title;
    const metaDescription = description || config.seo.description;
    const url = `${config.seo.siteUrl.replace(/\/$/, '')}${pathname}`;

    document.title = fullTitle;
    setMeta('name', 'description', metaDescription);
    setMeta('property', 'og:title', fullTitle);
    setMeta('property', 'og:description', metaDescription);
    setMeta('property', 'og:url', url);
    setMeta('name', 'twitter:title', fullTitle);
    setMeta('name', 'twitter:description', metaDescription);
    setMeta('name', 'robots', noIndex ? 'noindex, follow' : 'index, follow');
    setCanonical(url);
  }, [title, description, noIndex, pathname]);
}
