/**
 * SAMPLE PROFILE: Electrician
 * All names, numbers and reviews below are demo content. Replace them with the client's real details.
 * Images: paste any image URL, or a local path like '/images/clients/abc/hero.webp' (see public/images/README.md).
 */

const photo = (id) => `https://images.unsplash.com/${id}`;

const images = {
  hero: photo('photo-1621905251189-08b45d6a269e'),
  intro: photo('photo-1621905252472-943afaa20e20'),
  about: photo('photo-1758101755915-462eddc23f57'),
  gallery: [
    {
      src: photo('photo-1758101755915-462eddc23f57'),
      alt: 'Electrician testing contactors in a panel with a multimeter',
      category: 'Wiring & Panels',
      caption: 'Commercial panel testing, Hinjewadi',
    },
    {
      src: photo('photo-1544724569-5f546fd6f2b5'),
      alt: 'Distribution board with MCBs and colour-coded wiring',
      category: 'Wiring & Panels',
      caption: 'New distribution board, Baner',
    },
    {
      src: photo('photo-1507494924047-60b8ee826ca9'),
      alt: 'Row of glowing filament pendant bulbs against a brick wall',
      category: 'Lighting & Fans',
      caption: 'Café pendant lighting, Koregaon Park',
    },
    {
      src: photo('photo-1624397640148-949b1732bb0a'),
      alt: 'Technician installing a solar panel on a residential roof',
      category: 'Solar',
      caption: 'Rooftop solar installation, Wakad',
    },
    {
      src: photo('photo-1609519479841-5fd3b2884e17'),
      alt: 'Five-blade ceiling fan seen from below',
      category: 'Lighting & Fans',
      caption: 'BLDC ceiling fan fitting, Aundh',
    },
    {
      src: photo('photo-1513506003901-1e6a229e2d15'),
      alt: 'Minimal white pendant light against a teal wall',
      category: 'Lighting & Fans',
      caption: 'Designer pendant light, Kothrud',
    },
    {
      src: photo('photo-1780445392792-556e5609c5ab'),
      alt: 'Solar panel array on a tiled house roof',
      category: 'Solar',
      caption: '5 kW rooftop array, Pimple Saudagar',
    },
  ],
};

const electrician = {
  id: 'electrician',

  /* ── Brand ─────────────────────────────────────────── */
  name: 'VoltCraft Electricals',
  shortName: 'VoltCraft',
  industry: 'Electricians',
  tagline: 'Safe, certified electrical work for homes, shops and offices across Pune.',
  logo: '/logo/electrician.svg',
  favicon: '/logo/electrician.svg',
  foundedYear: 2012,
  serviceArea: 'Pune, PCMC & nearby areas',
  responseTime: '60 minutes',

  // Brand colours. primary = buttons & highlights, onPrimary = text on primary buttons,
  // primaryDark = links/hover, ink = dark sections & footer, surface = soft background tint.
  theme: {
    primary: '#F5B700',
    primaryDark: '#8A5D00',
    onPrimary: '#17130A',
    ink: '#121722',
    surface: '#FBF7EC',
  },

  /* ── Contact ───────────────────────────────────────── */
  contact: {
    phone: '+919876543210',
    phoneDisplay: '+91 98765 43210',
    whatsapp: '919876543210', // country code + number, digits only
    whatsappMessage: 'Hi VoltCraft, I found you on your website. I need help with: ',
    email: 'hello@voltcraft.in',
    address: {
      line1: 'Shop 4, Sai Plaza, Baner Road',
      line2: 'Near Balewadi Phata',
      city: 'Pune',
      state: 'Maharashtra',
      postalCode: '411045',
      country: 'India',
    },
    // Optional: paste the src="..." URL from Google Maps → Share → Embed a map.
    // Leave empty to build the map automatically from the address above.
    mapEmbedUrl: '',
    mapsQuery: 'Baner Road, Balewadi Phata, Pune 411045',
  },
  hours: [
    { days: 'Mon – Sat', time: '8:00 AM – 8:00 PM' },
    { days: 'Sunday', time: '9:00 AM – 2:00 PM' },
  ],
  emergencyNote: '24×7 emergency call-outs for power failures and sparking.',

  // Leave a value empty ('') to hide that icon.
  social: {
    facebook: 'https://www.facebook.com/',
    instagram: 'https://www.instagram.com/',
    google: 'https://www.google.com/maps',
    linkedin: '',
    youtube: '',
    x: '',
  },

  // Create a free form at https://formspree.io and paste its endpoint, e.g. 'https://formspree.io/f/abcdwxyz'
  formspreeEndpoint: '',

  /* ── SEO ───────────────────────────────────────────── */
  seo: {
    title: 'VoltCraft Electricals | Licensed Electricians in Pune',
    description:
      'Licensed electricians in Pune for wiring, MCB & switchboard repair, fan and light fitting, inverter installation and 24×7 emergencies. Upfront prices, 1-year warranty.',
    keywords: ['electrician in Pune', 'house wiring Pune', 'MCB repair', 'inverter installation', 'emergency electrician'],
    siteUrl: 'https://voltcraft-electricals.netlify.app',
    ogImage: `${images.hero}?auto=format&fit=crop&w=1200&h=630&q=75`,
    locale: 'en_IN',
  },

  /* ── Home page ─────────────────────────────────────── */
  hero: {
    eyebrow: 'Licensed electricians · Pune',
    title: 'Electrical work done safely,',
    highlight: 'the first time.',
    subtitle:
      'From a tripping MCB to a full home rewire, our certified team arrives on time, quotes upfront and leaves your space spotless.',
    image: images.hero,
    imageAlt: 'VoltCraft electrician working on a wall-mounted meter box',
    primaryCta: { label: 'Book a visit', to: '/contact' },
    highlights: ['Govt. licensed team', 'Fixed, upfront quotes', '1-year workmanship warranty'],
    floatingCards: [
      { icon: 'Timer', title: '60-min response', text: 'For electrical emergencies' },
      { icon: 'ShieldCheck', title: 'Fully insured', text: 'Every job, every visit' },
    ],
  },

  trust: [
    { icon: 'BadgeCheck', label: 'Licensed electrical contractor' },
    { icon: 'ShieldCheck', label: 'Police-verified technicians' },
    { icon: 'IndianRupee', label: 'No hidden charges' },
    { icon: 'Clock', label: '24×7 emergency support' },
  ],

  stats: [
    { value: '12+', label: 'Years in business' },
    { value: '4,800+', label: 'Jobs completed' },
    { value: '60 min', label: 'Emergency response' },
    { value: '1 year', label: 'Workmanship warranty' },
  ],

  intro: {
    eyebrow: 'Who we are',
    title: 'Pune’s trusted team for safe, tidy electrical work',
    text: 'VoltCraft Electricals is a family-run contractor serving homes, shops and offices since 2012. We combine licensed expertise with the courtesy you expect from a local business — clear quotes, clean work and no shortcuts on safety.',
    points: [
      'ISI-marked materials from Havells, Anchor & Polycab',
      'Every job tested and certified before we leave',
      'Same-day visits across Pune and PCMC',
    ],
    image: images.intro,
    imageAlt: 'VoltCraft electrician holding a safety helmet',
  },

  servicesIntro: {
    title: 'Everything electrical, under one roof',
    text: 'Residential and commercial electrical services with honest starting prices.',
  },

  // icon: any name listed in src/components/Icon.jsx
  services: [
    {
      id: 'wiring',
      icon: 'Zap',
      title: 'House Wiring & Rewiring',
      short: 'New wiring, rewiring of old homes and concealed conduit work.',
      description:
        'Complete wiring for new flats and full rewiring for older homes using fire-retardant FRLS cables, proper earthing and neatly labelled distribution boards.',
      price: '₹180',
      priceUnit: '/ point',
      features: ['FRLS copper cables', 'Concealed or surface conduit', 'Load calculation & earthing', 'Wiring layout drawing'],
      popular: true,
    },
    {
      id: 'mcb-repair',
      icon: 'CircuitBoard',
      title: 'MCB & Switchboard Repair',
      short: 'Fix tripping MCBs, burnt switches and faulty distribution boards.',
      description:
        'We trace the root cause of tripping, sparking or dead sockets, then repair or replace MCBs, RCCBs, switches and boards with branded parts.',
      price: '₹249',
      priceUnit: '/ visit',
      features: ['Fault finding with testers', 'RCCB / ELCB installation', 'Branded MCBs & switches', 'Safe, same-day fix'],
    },
    {
      id: 'fans-lights',
      icon: 'Lightbulb',
      title: 'Fan & Light Installation',
      short: 'Ceiling fans, LED panels, chandeliers and decorative lighting.',
      description:
        'Neat installation of ceiling and exhaust fans, LED panels, profile lights, chandeliers and outdoor lighting, including new points where needed.',
      price: '₹199',
      priceUnit: '/ item',
      features: ['Fan regulator & speed fixes', 'LED panel & cove lighting', 'Chandelier assembly', 'Outdoor & garden lights'],
    },
    {
      id: 'inverter',
      icon: 'BatteryCharging',
      title: 'Inverter & UPS Setup',
      short: 'Inverter, battery and changeover installation with safe wiring.',
      description:
        'Correctly sized inverter and battery installation with a dedicated circuit, changeover switch and backup for the rooms you choose.',
      price: '₹599',
      priceUnit: '/ install',
      features: ['Load-based sizing advice', 'Dedicated backup wiring', 'Changeover switch', 'Battery maintenance tips'],
    },
    {
      id: 'safety-audit',
      icon: 'ShieldCheck',
      title: 'Electrical Safety Inspection',
      short: 'Full-home safety check with a written report.',
      description:
        'A thorough inspection of wiring, earthing, boards and appliances points. You receive a clear written report with photos and prioritised fixes.',
      price: '₹999',
      priceUnit: '/ home',
      features: ['Earthing & leakage test', 'Thermal hot-spot check', 'Photo report in 24 hrs', 'Ideal before buying a flat'],
    },
    {
      id: 'ev-charger',
      icon: 'PlugZap',
      title: 'EV Charger Installation',
      short: 'Home EV charging points with dedicated circuits.',
      description:
        'Safe installation of 3.3 kW and 7.4 kW home EV chargers with a dedicated circuit, RCCB protection and society-approval guidance.',
      price: '₹3,499',
      priceUnit: '/ install',
      features: ['Site survey & load check', 'Dedicated MCB + RCCB', 'Parking-level cable routing', 'Society paperwork help'],
    },
  ],
  priceNote: 'Prices are starting rates for labour and exclude materials. You get a fixed written quote before any work starts.',

  whyChooseUs: {
    title: 'Why Pune families call VoltCraft first',
    text: 'We treat your home like our own, with no shortcuts on safety.',
    items: [
      { icon: 'BadgeCheck', title: 'Licensed & trained', text: 'Every electrician is certified, background-checked and trained in-house.' },
      { icon: 'IndianRupee', title: 'Upfront pricing', text: 'Fixed written quotes before work begins, with no surprise add-ons.' },
      { icon: 'Timer', title: 'On-time, every time', text: 'Booked slots, live arrival updates and 60-minute emergency response.' },
      { icon: 'Award', title: '1-year warranty', text: 'If something we fixed fails within a year, we come back free.' },
    ],
  },

  process: [
    { title: 'Call or WhatsApp', text: 'Tell us the problem. Share a photo for a faster estimate.' },
    { title: 'Get a fixed quote', text: 'We inspect, explain the fix and give you a written price.' },
    { title: 'We do the work', text: 'Clean, safe work with branded materials and dust sheets.' },
    { title: 'Test & handover', text: 'Everything is tested, explained and covered by warranty.' },
  ],

  faq: [
    {
      question: 'Do you charge a visiting fee?',
      answer: 'Our visit and inspection charge is ₹249, which is adjusted against the final bill if you go ahead with the work.',
    },
    {
      question: 'Do you supply the materials?',
      answer: 'Yes. We can supply branded, ISI-marked materials at MRP or below, or use materials you have already bought.',
    },
    {
      question: 'Which areas do you cover?',
      answer: 'All of Pune and PCMC, including Baner, Aundh, Wakad, Hinjewadi, Kothrud, Viman Nagar and Kharadi.',
    },
    {
      question: 'Is your work guaranteed?',
      answer: 'All workmanship comes with a 1-year warranty. Parts carry the manufacturer’s warranty.',
    },
  ],

  gallery: images.gallery,

  // Set isSample: false once these are replaced with genuine customer reviews.
  testimonials: {
    isSample: true,
    intro: 'Feedback from homeowners and businesses across Pune.',
    items: [
      {
        name: 'Ananya Kulkarni',
        location: 'Baner',
        service: 'Home rewiring',
        rating: 5,
        text: 'They rewired our 20-year-old flat in three days, kept the place clean and explained every step. The quote matched the final bill exactly.',
      },
      {
        name: 'Rahul Deshpande',
        location: 'Wakad',
        service: 'MCB repair',
        rating: 5,
        text: 'Our MCB kept tripping late at night. The technician arrived within the hour, found a faulty geyser point and fixed it properly.',
      },
      {
        name: 'Meera Joshi',
        location: 'Kothrud',
        service: 'Lighting',
        rating: 5,
        text: 'Beautiful cove lighting and chandelier fitting for our new home. Neat cable work, polite team and fair pricing.',
      },
    ],
  },

  cta: {
    title: 'Power trouble? We’re one call away.',
    text: 'Get a fixed quote today. Emergency team available 24×7 across Pune.',
  },

  /* ── About page ────────────────────────────────────── */
  about: {
    title: 'Built on safety, run like family',
    intro:
      'For over a decade, VoltCraft has kept Pune’s homes and businesses powered safely, one careful job at a time.',
    storyTitle: 'From one van to a team of 18',
    story: [
      'VoltCraft began in 2012 when master electrician Suresh Patil started taking weekend jobs in Baner with a single toolbox and a scooter. Word spread quickly: he showed up on time, explained the problem in plain language and never cut corners.',
      'Today we are a team of 18 licensed electricians and helpers serving thousands of households, shops and offices. The principles haven’t changed: honest advice, branded materials and work we’re proud to put our name on.',
    ],
    mission:
      '“Every switch we fit should still be safe in twenty years. That’s the standard we hold ourselves to.”',
    founder: { name: 'Suresh Patil', role: 'Founder & Master Electrician' },
    image: images.about,
    imageAlt: 'VoltCraft electrician testing a control panel with a multimeter',
    values: [
      { icon: 'ShieldCheck', title: 'Safety first', text: 'We follow IS 732 wiring practice and test every circuit before handover.' },
      { icon: 'HeartHandshake', title: 'Honest advice', text: 'We recommend repairs over replacement whenever it’s the right call.' },
      { icon: 'Sparkles', title: 'Clean worksites', text: 'Dust sheets, shoe covers and a full clean-up are part of every job.' },
    ],
  },

  /* ── Legal ─────────────────────────────────────────── */
  legal: {
    legalName: 'VoltCraft Electricals',
    lastUpdated: '2 November 2026',
  },
};

export default electrician;
