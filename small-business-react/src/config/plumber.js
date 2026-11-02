/**
 * SAMPLE PROFILE: Plumber
 * All names, numbers and reviews below are demo content. Replace them with the client's real details.
 * Images: paste any image URL, or a local path like '/images/clients/abc/hero.webp' (see public/images/README.md).
 */

const photo = (id) => `https://images.unsplash.com/${id}`;

const images = {
  hero: photo('photo-1676210134188-4c05dd172f89'),
  intro: photo('photo-1749532125405-70950966b0e5'),
  about: photo('photo-1676210133055-eab6ef033ce3'),
  gallery: [
    {
      src: photo('photo-1676210133055-eab6ef033ce3'),
      alt: 'Plumber connecting pipes and valves inside a sink cabinet',
      category: 'Repairs',
      caption: 'Under-sink valve replacement, Viman Nagar',
    },
    {
      src: photo('photo-1620626011761-996317b8d101'),
      alt: 'Bright modern bathroom with freestanding tub and vessel basin',
      category: 'Bathroom',
      caption: 'Complete bathroom fitting, Kalyani Nagar',
    },
    {
      src: photo('photo-1565538810643-b5bdb714032a'),
      alt: 'Kitchen sink with a brass faucet under pendant lights',
      category: 'Kitchen',
      caption: 'Kitchen sink & faucet install, Baner',
    },
    {
      src: photo('photo-1620653713380-7a34b773fef8'),
      alt: 'Pipe fitting on a water heater being tightened with a wrench',
      category: 'Repairs',
      caption: 'Geyser inlet repair, Kharadi',
    },
    {
      src: photo('photo-1585704032915-c3400ca199e7'),
      alt: 'Chrome mixer tap with shower hose on a bathtub',
      category: 'Bathroom',
      caption: 'Bath mixer upgrade, Aundh',
    },
    {
      src: photo('photo-1542013936693-884638332954'),
      alt: 'Chrome kitchen tap running water into a glass',
      category: 'Kitchen',
      caption: 'Water purifier tap connection, Wakad',
    },
    {
      src: photo('photo-1538474705339-e87de81450e8'),
      alt: 'Row of white drain pipes and fittings along a wall',
      category: 'Repairs',
      caption: 'Society drain line replacement, Hadapsar',
    },
  ],
};

const plumber = {
  id: 'plumber',

  /* ── Brand ─────────────────────────────────────────── */
  name: 'AquaFlow Plumbing Co.',
  shortName: 'AquaFlow',
  industry: 'Plumbing',
  tagline: 'Leak-free plumbing, bathroom fittings and water solutions for Pune homes.',
  logo: '/logo/plumber.svg',
  favicon: '/logo/plumber.svg',
  foundedYear: 2015,
  serviceArea: 'Pune East, Pune West & PCMC',
  responseTime: '90 minutes',

  theme: {
    primary: '#1565D8',
    primaryDark: '#0D47A1',
    onPrimary: '#FFFFFF',
    ink: '#0B1B33',
    surface: '#F1F6FD',
  },

  /* ── Contact ───────────────────────────────────────── */
  contact: {
    phone: '+919812345670',
    phoneDisplay: '+91 98123 45670',
    whatsapp: '919812345670',
    whatsappMessage: 'Hi AquaFlow, I found you on your website. I need a plumber for: ',
    email: 'care@aquaflowplumbing.in',
    address: {
      line1: 'Unit 12, Ganga Commercial Complex',
      line2: 'Nagar Road, Viman Nagar',
      city: 'Pune',
      state: 'Maharashtra',
      postalCode: '411014',
      country: 'India',
    },
    mapEmbedUrl: '',
    mapsQuery: 'Nagar Road, Viman Nagar, Pune 411014',
  },
  hours: [
    { days: 'Mon – Sat', time: '7:30 AM – 9:00 PM' },
    { days: 'Sunday', time: 'Emergencies only' },
  ],
  emergencyNote: 'Burst pipe or major leak? We dispatch emergency plumbers 24×7.',

  social: {
    facebook: 'https://www.facebook.com/',
    instagram: 'https://www.instagram.com/',
    youtube: 'https://www.youtube.com/',
    google: '',
    linkedin: '',
    x: '',
  },

  formspreeEndpoint: '',

  /* ── SEO ───────────────────────────────────────────── */
  seo: {
    title: 'AquaFlow Plumbing Co. | Trusted Plumbers in Pune',
    description:
      'Expert plumbers in Pune for leak repair, bathroom fittings, geyser installation, drain cleaning and water tank cleaning. Fixed prices and a 6-month warranty.',
    keywords: ['plumber in Pune', 'leak repair', 'bathroom fitting', 'geyser installation', 'drain cleaning Pune'],
    siteUrl: 'https://aquaflow-plumbing.netlify.app',
    ogImage: `${images.hero}?auto=format&fit=crop&w=1200&h=630&q=75`,
    locale: 'en_IN',
  },

  /* ── Home page ─────────────────────────────────────── */
  hero: {
    eyebrow: 'Expert plumbers · Pune',
    title: 'Leaks fixed fast.',
    highlight: 'Bathrooms done right.',
    subtitle:
      'Skilled, uniformed plumbers who find the real cause, fix it neatly and back their work with a 6-month warranty.',
    image: images.hero,
    imageAlt: 'AquaFlow plumber repairing pipes under a sink',
    primaryCta: { label: 'Book a plumber', to: '/contact' },
    highlights: ['Fixed visit charge', 'Leak detection tools', '6-month warranty'],
    floatingCards: [
      { icon: 'Droplets', title: 'Leak detection', text: 'No unnecessary tile breaking' },
      { icon: 'CalendarCheck', title: 'Same-day slots', text: 'Book before 2 PM' },
    ],
  },

  trust: [
    { icon: 'BadgeCheck', label: 'Trained & uniformed plumbers' },
    { icon: 'ShieldCheck', label: '6-month service warranty' },
    { icon: 'IndianRupee', label: 'Fixed, transparent pricing' },
    { icon: 'Clock', label: 'Same-day appointments' },
  ],

  stats: [
    { value: '10+', label: 'Years experience' },
    { value: '6,200+', label: 'Homes served' },
    { value: '90 min', label: 'Emergency arrival' },
    { value: '6 months', label: 'Service warranty' },
  ],

  intro: {
    eyebrow: 'Who we are',
    title: 'Plumbing you won’t have to call back about',
    text: 'AquaFlow is a Pune-based plumbing company trusted by homeowners, housing societies and restaurants. We use modern leak-detection tools and quality CPVC and UPVC fittings, so problems get fixed once and stay fixed.',
    points: [
      'Thermal and moisture leak detection',
      'Genuine Jaquar, Cera and Hindware fittings',
      'Floors and walls protected while we work',
    ],
    image: images.intro,
    imageAlt: 'AquaFlow plumber with a toolbox in a modern bathroom',
  },

  servicesIntro: {
    title: 'Complete plumbing care for your home',
    text: 'From a dripping tap to a full bathroom refit, with clear starting prices.',
  },

  services: [
    {
      id: 'leak-repair',
      icon: 'Droplets',
      title: 'Leak Detection & Repair',
      short: 'Find hidden leaks and fix seepage without guesswork.',
      description:
        'Concealed-pipe leaks cause damp walls and high water bills. We locate them with moisture meters and thermal cameras, then repair with minimal breaking.',
      price: '₹349',
      priceUnit: '/ visit',
      features: ['Moisture & thermal scan', 'Concealed pipe repair', 'Seepage diagnosis', 'Before/after photos'],
      popular: true,
    },
    {
      id: 'bathroom-fitting',
      icon: 'Bath',
      title: 'Bathroom Fittings',
      short: 'Taps, mixers, showers, WCs and wash basins installed neatly.',
      description:
        'Installation and replacement of wall mixers, rain showers, health faucets, wall-hung WCs, basins and vanity units, aligned and sealed properly.',
      price: '₹299',
      priceUnit: '/ fitting',
      features: ['Mixer & diverter install', 'Wall-hung WC & flush tank', 'Basin & vanity fitting', 'Silicone sealing'],
    },
    {
      id: 'geyser',
      icon: 'Flame',
      title: 'Geyser Installation & Repair',
      short: 'Safe installation and repair of storage and instant geysers.',
      description:
        'Wall mounting, inlet/outlet connection and safety-valve fitting for all major geyser brands, plus repair of leaks and pressure problems.',
      price: '₹449',
      priceUnit: '/ install',
      features: ['Pressure-release valve', 'Inlet & outlet piping', 'Leak & noise repair', 'Old geyser removal'],
    },
    {
      id: 'drain-cleaning',
      icon: 'Wrench',
      title: 'Drain & Blockage Cleaning',
      short: 'Clear blocked sinks, floor traps and drain lines quickly.',
      description:
        'We clear kitchen sinks, bathroom floor traps and main drain lines using spring machines and high-pressure jetting, without harsh acids.',
      price: '₹399',
      priceUnit: '/ drain',
      features: ['Spring & jet cleaning', 'Floor-trap descaling', 'Odour treatment', 'Camera inspection (on request)'],
    },
    {
      id: 'tank-cleaning',
      icon: 'ShowerHead',
      title: 'Water Tank Cleaning',
      short: 'Mechanised overhead and underground tank cleaning.',
      description:
        'A six-step process with sludge removal, high-pressure wash, anti-bacterial treatment and UV disinfection for overhead and sump tanks.',
      price: '₹899',
      priceUnit: '/ tank',
      features: ['Sludge removal', 'High-pressure wash', 'Anti-bacterial spray', 'UV disinfection'],
    },
    {
      id: 'pipeline',
      icon: 'Hammer',
      title: 'New Pipeline & Renovation',
      short: 'CPVC/UPVC piping for new homes and bathroom renovations.',
      description:
        'Complete concealed plumbing for new flats and renovations, pressure-tested before tiling so you never have to break new tiles later.',
      price: '₹15,000',
      priceUnit: '/ bathroom',
      features: ['CPVC hot & cold lines', 'Pressure testing', 'Layout planning', 'Coordination with tilers'],
    },
  ],
  priceNote: 'Starting prices cover labour only. Parts and fittings are charged at MRP or below, and you approve the quote before work begins.',

  whyChooseUs: {
    title: 'Why homeowners choose AquaFlow',
    text: 'Professional plumbing with the care of a local business.',
    items: [
      { icon: 'Search', title: 'Root-cause fixes', text: 'We find out why it leaked, not just where, so it doesn’t come back.' },
      { icon: 'IndianRupee', title: 'Clear pricing', text: 'A fixed visit charge and a written quote before any work begins.' },
      { icon: 'Sparkles', title: 'Clean & careful', text: 'Floor covers, dust control and a full clean-up after every job.' },
      { icon: 'ShieldCheck', title: '6-month warranty', text: 'If the same problem returns within 6 months, we fix it free.' },
    ],
  },

  process: [
    { title: 'Book a slot', text: 'Call, WhatsApp or use the form. Same-day slots are often available.' },
    { title: 'Diagnose', text: 'We inspect, find the root cause and show you what’s wrong.' },
    { title: 'Approve & fix', text: 'You approve a fixed quote, then we complete the repair neatly.' },
    { title: 'Warranty', text: 'Your job is logged and covered by our 6-month warranty.' },
  ],

  faq: [
    {
      question: 'What is your visiting charge?',
      answer: 'Our inspection visit is ₹349 within our service area, adjusted against the bill if you go ahead with the work.',
    },
    {
      question: 'Do you work with housing societies?',
      answer: 'Yes. We offer annual maintenance contracts for societies, covering tank cleaning, drain lines and common-area plumbing.',
    },
    {
      question: 'Will you have to break my tiles to find a leak?',
      answer: 'Usually not. Our detection tools pinpoint the leak so only a small, targeted area needs opening, if any.',
    },
    {
      question: 'Do you bring spare parts?',
      answer: 'Our vans carry common parts and fittings, so most repairs are completed in a single visit.',
    },
  ],

  gallery: images.gallery,

  testimonials: {
    isSample: true,
    intro: 'What Pune homeowners say about our work.',
    items: [
      {
        name: 'Sandeep Rao',
        location: 'Viman Nagar',
        service: 'Leak repair',
        rating: 5,
        text: 'Two other plumbers wanted to break the whole bathroom wall. AquaFlow found the leak with a scanner and fixed it with one small opening.',
      },
      {
        name: 'Priya Menon',
        location: 'Kharadi',
        service: 'Bathroom fitting',
        rating: 5,
        text: 'They installed all the fittings for our two new bathrooms. Perfectly aligned, no leaks and the team cleaned up everything.',
      },
      {
        name: 'Farhan Shaikh',
        location: 'Hadapsar',
        service: 'Tank cleaning',
        rating: 4,
        text: 'Professional tank cleaning for our society. On time, proper equipment and they shared photos of every step.',
      },
    ],
  },

  cta: {
    title: 'Got a leak? Don’t wait for the damage.',
    text: 'Book a trusted plumber today. Emergency help available round the clock.',
  },

  /* ── About page ────────────────────────────────────── */
  about: {
    title: 'Plumbing, done with pride',
    intro: 'Since 2015, AquaFlow has solved tens of thousands of plumbing problems across Pune with honesty and skill.',
    storyTitle: 'Started by a plumber, run by plumbers',
    story: [
      'Founder Imran Sayyed spent twelve years working on large construction sites before starting AquaFlow in 2015. He saw homeowners being overcharged for quick fixes that failed weeks later and decided to do things differently.',
      'Today AquaFlow has 14 trained plumbers, a fleet of equipped vans and long-term contracts with housing societies across the city. Every plumber is trained in-house on modern fittings, leak detection and customer care.',
    ],
    mission: '“Fix it properly, charge fairly and leave the home cleaner than we found it.”',
    founder: { name: 'Imran Sayyed', role: 'Founder & Lead Plumber' },
    image: images.about,
    imageAlt: 'AquaFlow plumber connecting valves inside a sink cabinet',
    values: [
      { icon: 'Search', title: 'Diagnose first', text: 'We never replace parts on guesswork. We find the cause, then fix it.' },
      { icon: 'HeartHandshake', title: 'Respect your home', text: 'Shoe covers, floor protection and tidy work areas, always.' },
      { icon: 'Leaf', title: 'Save water', text: 'Efficient fittings and leak-free systems that cut water waste.' },
    ],
  },

  /* ── Legal ─────────────────────────────────────────── */
  legal: {
    legalName: 'AquaFlow Plumbing Co.',
    lastUpdated: '2 November 2026',
  },
};

export default plumber;
