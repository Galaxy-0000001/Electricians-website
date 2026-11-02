# Client images

Put each client's real photos here, e.g. `public/images/clients/sharma-electricals/hero.webp`.

Then reference them in the client's config file with a path that starts with `/images/...`:

```js
hero: { image: '/images/clients/sharma-electricals/hero.webp' }
```

Tips for fast, optimized images:
- Export as **WebP** (or JPG) — use https://squoosh.app (free).
- Hero images: about 1600px wide, under 250 KB.
- Gallery images: about 1200px wide, under 180 KB.
- Use lowercase file names with hyphens, no spaces.
