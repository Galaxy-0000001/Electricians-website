/**
 * ─────────────────────────────────────────────────────────────
 *  ACTIVE BUSINESS CONFIGURATION
 * ─────────────────────────────────────────────────────────────
 *  Every component imports from this file:
 *      import config from '../config/businessConfig';
 *
 *  Which business is shown is decided in vite.config.js:
 *    • npm run dev:plumber           (uses --mode plumber)
 *    • VITE_BUSINESS_PROFILE=cleaning in a .env file
 *    • default: electrician
 *
 *  You never need to edit components to switch clients. Edit the
 *  profile file (electrician.js, plumber.js, cleaning.js) or add a new one.
 * ─────────────────────────────────────────────────────────────
 */
import profiles from './profiles.js';

/* global __BUSINESS_PROFILE__ */
const activeProfile = typeof __BUSINESS_PROFILE__ !== 'undefined' ? __BUSINESS_PROFILE__ : 'electrician';

// Settings shared by every client site (e.g. your agency credit in the footer).
// A profile can override any of these by defining the same key.
const defaults = {
  credit: {
    label: 'Website by Your Studio', // ← change to your studio name, or set label: '' to hide
    url: '',
  },
  favicon: '/favicon.svg',
  responseTime: '2 working hours',
};

const config = { ...defaults, ...profiles[activeProfile] };

export default config;
