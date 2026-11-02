# Small Business Website Template (React + Vite)

A reusable, config-driven website for local service businesses such as electricians, plumbers, cleaners, AC repair, consultants and renovators. You change **one config file** per client. The components never need editing.

**Stack:** React 19 · Vite · React Router · Lucide icons · plain CSS (variables, Flexbox, Grid) · Google Fonts. No paid dependencies, no TypeScript, no UI framework.

---

## Quick start (Windows)

You need **Node.js 20 or newer** (LTS). Check with `node -v`.

```bash
cd small-business-react
npm install          # first time only: downloads dependencies into node_modules/
npm run dev          # starts the dev server at http://localhost:5173
```

Press **Ctrl + C** in the terminal to stop the server.

| Command | What it does |
| --- | --- |
| `npm run dev` | Run the active profile locally with live reload |
| `npm run dev:electrician` / `dev:plumber` / `dev:cleaning` | Run a specific demo profile |
| `npm run build` | Create the production site in `dist/` |
| `npm run build:plumber` (etc.) | Build a specific profile |
| `npm run preview` | Serve the built `dist/` folder locally to test it |

---

## Switching between businesses

The active profile is chosen in `vite.config.js`, in this order:

1. **Mode flag:** `npm run dev:plumber` (same as `vite --mode plumber`)
2. **`.env` file:** copy `.env.example` to `.env` and set `VITE_BUSINESS_PROFILE=cleaning`
3. **Default:** `electrician`

On Netlify or Vercel, add the environment variable `VITE_BUSINESS_PROFILE` in the dashboard, or set the build command to `npm run build:plumber`.

### Adding a new client

1. Copy `src/config/electrician.js` to, for example, `src/config/sharma-ac.js` and edit everything in it.
2. Register it in `src/config/profiles.js`:
   ```js
   import sharmaAc from './sharma-ac.js';
   const profiles = { electrician, plumber, cleaning, 'sharma-ac': sharmaAc };
   ```
3. Run `npx vite --mode sharma-ac`, or set `VITE_BUSINESS_PROFILE=sharma-ac`.
4. Add their logo to `public/logo/` and their photos to `public/images/` (see `public/images/README.md`).

---

## What's in a profile

Each profile file holds: name, logo, favicon, tagline, **brand colours** (`theme`), phone, **WhatsApp number**, email, address, hours, Google Maps embed URL, social links, Formspree endpoint, SEO title, description and Open Graph image, hero content, trust badges, stats, intro, **services with prices**, why-choose-us items, process steps, FAQ, **gallery images**, **testimonials**, CTA text, the About page story and values, and legal name.

Shared settings, such as the "Website by …" footer credit, live in `src/config/businessConfig.js`.

Icons in the config are given by name (e.g. `icon: 'Zap'`). The list of available names is in `src/components/Icon.jsx`.

---

## Features and what they depend on

| Feature | Works out of the box? | Notes |
| --- | --- | --- |
| Pages, routing, mobile menu, active nav | ✅ Yes | React Router |
| Gallery filters + lightbox (keyboard, swipe) | ✅ Yes | |
| Back-to-top, smooth scroll, scroll animations | ✅ Yes | Turned off automatically for "reduce motion" users |
| WhatsApp buttons (floating, per-service, form fallback) | ✅ Yes | Uses public `wa.me` links. **Set the client's real number** |
| Click-to-call, email links | ✅ Yes | |
| Google Maps embed + Directions | ✅ Yes | Free key-less embed built from the address. Check it shows the right spot |
| SEO title, description, Open Graph tags | ✅ Yes | Written into `index.html` at build time and updated per page |
| **Contact form email delivery** | ⚠️ Needs setup | Requires a free **Formspree** account (below). Until then, the form validates and offers to send the details on WhatsApp |
| Photos | ⚠️ Replace | Demo images are hotlinked from Unsplash (free licence). Use the client's real photos for production |
| Testimonials | ⚠️ Replace | Demo reviews are labelled **"Sample"** on the page. Replace with real reviews and set `testimonials.isSample: false` |

### Connecting the contact form (Formspree, free tier)

1. Sign up at <https://formspree.io> (the free plan allows a limited number of submissions per month, so check their current limits).
2. Click **New form**, name it after the client, and set the email address that should receive enquiries.
3. Copy the endpoint, which looks like `https://formspree.io/f/abcdwxyz`.
4. Paste it into the profile: `formspreeEndpoint: 'https://formspree.io/f/abcdwxyz'`.
5. Rebuild and deploy, then **send a real test message** and confirm the email arrives. (The first submission may ask you to confirm the form by email.)

The form includes a hidden `_gotcha` spam-trap field and a custom `_subject`.

---

## Project structure

```
small-business-react/
├── public/
│   ├── favicon.svg              fallback favicon
│   ├── logo/                    one SVG mark per profile (also used as favicon)
│   ├── images/                  put client photos here
│   └── robots.txt
├── src/
│   ├── assets/                  images imported directly by components (optional)
│   ├── components/              reusable UI (Navbar, Footer, Hero, ServiceCard, Gallery, Lightbox,
│   │                            Reveal, AnimatedHeading, StatCounter, TestimonialSlider, PageTransition, ...)
│   ├── config/
│   │   ├── businessConfig.js    ← components import from here
│   │   ├── profiles.js          registry of all profiles
│   │   ├── electrician.js       sample profile
│   │   ├── plumber.js           sample profile
│   │   └── cleaning.js          sample profile
│   ├── hooks/                   useInView (shared observer), useCountUp, useSeo,
│   │                            useScrolledPast, usePrefersReducedMotion
│   ├── pages/                   Home, About, Services, GalleryPage, Contact, PrivacyPolicy, NotFound
│   ├── styles/                  global.css, animations.css, responsive.css
│   ├── utils/                   link builders, responsive image helpers, theme
│   ├── App.jsx                  routes
│   └── main.jsx                 entry point
├── index.html                   SEO/OG placeholders filled at build time
├── vite.config.js               profile selection + HTML injection
├── netlify.toml                 Netlify build settings + SPA fallback
├── vercel.json                  Vercel build settings + SPA fallback
└── package.json
```

## Animation system

All motion is CSS (transitions and keyframes) driven by a few small hooks. There is no animation library.

- **Scroll reveals:** wrap anything in `<Reveal>`. Variants: `up` (default), `left`, `right`, `scale`, `fade`, `image`, `heading`. Pass `index={i}` to stagger lists (capped at 6 steps). One shared IntersectionObserver flips a `data-inview` attribute, so nothing re-renders on scroll.
- **Tokens:** durations, easing and slide distance live at the top of `src/styles/animations.css`. Change them there to speed up or calm down the whole site.
- **Reduced motion:** if the visitor's device has "reduce motion" on, every animation shows its final state immediately, the testimonial slider stops auto-rotating, counters show final numbers and the lightbox opens without zooming.

## Deployment in one paragraph

Build command `npm run build`, output directory `dist`. `netlify.toml` and `vercel.json` already contain the **React Router fallback**, which sends every URL to `index.html`, so direct links like `/services` work instead of returning a 404. Update `seo.siteUrl` in the profile to the live domain so canonical URLs and link previews are correct.

## Before handing over a client site

- [ ] Real phone, WhatsApp number, email and address
- [ ] Map pin checked, or `mapEmbedUrl` pasted from Google Maps
- [ ] Formspree connected and a test message received
- [ ] Client's own logo, photos and genuine reviews (`isSample: false`)
- [ ] Social links point to real profiles, or are set to `''` to hide them
- [ ] `seo.siteUrl` set to the live domain
- [ ] Privacy Policy reviewed by the client (it's a template, not legal advice)
- [ ] Footer credit set in `businessConfig.js`
