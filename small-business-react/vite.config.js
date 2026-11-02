import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import profiles from './src/config/profiles.js';

/**
 * Picks which business profile to build.
 * Priority:
 *   1. `--mode <profile>`            e.g. npm run dev:plumber
 *   2. VITE_BUSINESS_PROFILE in .env e.g. VITE_BUSINESS_PROFILE=cleaning
 *   3. "electrician" (default)
 */
function resolveProfile(mode, env) {
  if (profiles[mode]) return mode;
  if (env.VITE_BUSINESS_PROFILE && profiles[env.VITE_BUSINESS_PROFILE]) {
    return env.VITE_BUSINESS_PROFILE;
  }
  return 'electrician';
}

function escapeHtml(value = '') {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

/**
 * Writes the business's SEO title, description and Open Graph tags into
 * index.html at build time, so search engines and WhatsApp/Facebook link
 * previews see real content without running JavaScript.
 */
function businessHtmlPlugin(config) {
  return {
    name: 'business-html',
    transformIndexHtml(html) {
      const url = config.seo.siteUrl.replace(/\/$/, '');
      const replacements = {
        '%BIZ_TITLE%': config.seo.title,
        '%BIZ_DESCRIPTION%': config.seo.description,
        '%BIZ_KEYWORDS%': config.seo.keywords.join(', '),
        '%BIZ_NAME%': config.name,
        '%BIZ_URL%': url + '/',
        '%BIZ_OG_IMAGE%': config.seo.ogImage,
        '%BIZ_LOCALE%': config.seo.locale,
        '%BIZ_THEME%': config.theme.primary,
        '%BIZ_FAVICON%': config.favicon,
      };
      return Object.entries(replacements).reduce(
        (out, [key, value]) => out.split(key).join(escapeHtml(value)),
        html
      );
    },
  };
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const profile = resolveProfile(mode, env);

  return {
    plugins: [react(), businessHtmlPlugin(profiles[profile])],
    define: {
      __BUSINESS_PROFILE__: JSON.stringify(profile),
    },
  };
});
