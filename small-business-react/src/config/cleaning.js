/**
 * SAMPLE PROFILE: Cleaning service
 * All names, numbers and reviews below are demo content. Replace them with the client's real details.
 * Images: paste any image URL, or a local path like '/images/clients/abc/hero.webp' (see public/images/README.md).
 */

const photo = (id) => `https://images.unsplash.com/${id}`;

const images = {
  hero: photo('photo-1758273238415-01ec03d9ef27'),
  intro: photo('photo-1646980241033-cd7abda2ee88'),
  about: photo('photo-1581578731548-c64695cc6952'),
  gallery: [
    {
      src: photo('photo-1600585152220-90363fe7e115'),
      alt: 'Spotless modern kitchen with a white island and wooden stools',
      category: 'Kitchen & Bath',
      caption: 'Move-in kitchen deep clean, Baner',
    },
    {
      src: photo('photo-1758272422155-d898efd14f81'),
      alt: 'Cleaner mopping a wooden living-room floor beside a sofa',
      category: 'Home',
      caption: 'Full home deep clean, Aundh',
    },
    {
      src: photo('photo-1686178827149-6d55c72d81df'),
      alt: 'Cleaner vacuuming a grey upholstered ottoman',
      category: 'Upholstery',
      caption: 'Upholstery shampooing, Koregaon Park',
    },
    {
      src: photo('photo-1642505172378-a6f5e5b15580'),
      alt: 'Kitchen sink and countertop being sprayed and wiped',
      category: 'Kitchen & Bath',
      caption: 'Kitchen degreasing, Wakad',
    },
    {
      src: photo('photo-1581578731548-c64695cc6952'),
      alt: 'Cleaner in a mask and gloves wiping a window frame',
      category: 'Home',
      caption: 'Window & grill cleaning, Kothrud',
    },
    {
      src: photo('photo-1776585617123-84cb50100bd0'),
      alt: 'Steam cleaner sanitising bathroom wall tiles',
      category: 'Kitchen & Bath',
      caption: 'Bathroom steam sanitisation, Hinjewadi',
    },
    {
      src: photo('photo-1590251024078-8a6d9f90b02d'),
      alt: 'Fresh green fabric sofa with striped cushions after cleaning',
      category: 'Upholstery',
      caption: 'Sofa stain removal, Magarpatta',
    },
  ],
};

const cleaning = {
  id: 'cleaning',

  /* ── Brand ─────────────────────────────────────────── */
  name: 'PureNest Cleaning Services',
  shortName: 'PureNest',
  industry: 'Home Cleaning',
  tagline: 'Professional deep cleaning for homes and offices, with eco-friendly products and trained staff.',
  logo: '/logo/cleaning.svg',
  favicon: '/logo/cleaning.svg',
  foundedYear: 2017,
  serviceArea: 'Pune & Pimpri-Chinchwad',
  responseTime: '1 hour',

  theme: {
    primary: '#12A182',
    primaryDark: '#0B7660',
    onPrimary: '#FFFFFF',
    ink: '#0F2A26',
    surface: '#EFF8F5',
  },

  /* ── Contact ───────────────────────────────────────── */
  contact: {
    phone: '+919823456781',
    phoneDisplay: '+91 98234 56781',
    whatsapp: '919823456781',
    whatsappMessage: 'Hi PureNest, I found you on your website. I’d like a quote for cleaning: ',
    email: 'bookings@purenest.in',
    address: {
      line1: '2nd Floor, Lotus Court',
      line2: 'Aundh–Baner Link Road',
      city: 'Pune',
      state: 'Maharashtra',
      postalCode: '411007',
      country: 'India',
    },
    mapEmbedUrl: '',
    mapsQuery: 'Aundh Baner Link Road, Aundh, Pune 411007',
  },
  hours: [
    { days: 'Mon – Sun', time: '8:00 AM – 7:00 PM' },
    { days: 'Public holidays', time: 'Pre-booked jobs only' },
  ],
  emergencyNote: 'Bookings open 7 days a week. Weekend slots fill fast.',

  social: {
    facebook: 'https://www.facebook.com/',
    instagram: 'https://www.instagram.com/',
    google: 'https://www.google.com/maps',
    youtube: '',
    linkedin: '',
    x: '',
  },

  formspreeEndpoint: '',

  /* ── SEO ───────────────────────────────────────────── */
  seo: {
    title: 'PureNest Cleaning Services | Home Deep Cleaning in Pune',
    description:
      'Professional home deep cleaning, kitchen and bathroom cleaning, sofa shampooing and office cleaning in Pune. Trained, verified staff and eco-friendly products.',
    keywords: ['home cleaning Pune', 'deep cleaning services', 'sofa cleaning Pune', 'bathroom cleaning', 'office cleaning'],
    siteUrl: 'https://purenest-cleaning.netlify.app',
    ogImage: `${images.hero}?auto=format&fit=crop&w=1200&h=630&q=75`,
    locale: 'en_IN',
  },

  /* ── Home page ─────────────────────────────────────── */
  hero: {
    eyebrow: 'Professional cleaners · Pune',
    title: 'A spotless home,',
    highlight: 'without lifting a finger.',
    subtitle:
      'Trained, background-verified cleaners, eco-friendly products and a 100% satisfaction promise. Book a deep clean in under a minute.',
    image: images.hero,
    imageAlt: 'PureNest cleaner mopping a bright white room',
    primaryCta: { label: 'Get a free quote', to: '/contact' },
    highlights: ['Verified, trained staff', 'Eco-safe products', 'Re-clean guarantee'],
    floatingCards: [
      { icon: 'Leaf', title: 'Eco-friendly', text: 'Safe for kids & pets' },
      { icon: 'ThumbsUp', title: 'Re-clean promise', text: 'Not happy? We return free' },
    ],
  },

  trust: [
    { icon: 'ShieldCheck', label: 'Background-verified staff' },
    { icon: 'Leaf', label: 'Eco-friendly products' },
    { icon: 'BadgeCheck', label: 'Insured against damage' },
    { icon: 'ThumbsUp', label: '100% satisfaction promise' },
  ],

  stats: [
    { value: '9+', label: 'Years cleaning Pune' },
    { value: '12,000+', label: 'Homes cleaned' },
    { value: '45', label: 'Trained professionals' },
    { value: '24 hrs', label: 'Re-clean guarantee' },
  ],

  intro: {
    eyebrow: 'Who we are',
    title: 'Cleaning that’s thorough, safe and on schedule',
    text: 'PureNest is a Pune-based cleaning company for busy families, landlords and offices. Our teams arrive with professional machines and eco-certified products, and follow a detailed checklist so nothing gets missed.',
    points: [
      'Industrial vacuums, scrubbers and steam cleaners',
      'Room-by-room checklist on every job',
      'Same team for your regular bookings',
    ],
    image: images.intro,
    imageAlt: 'PureNest cleaner carrying a cleaning caddy and broom up the stairs',
  },

  servicesIntro: {
    title: 'Cleaning services for every corner',
    text: 'One-time deep cleans, regular cleaning and specialist services, with clear prices.',
  },

  services: [
    {
      id: 'home-deep-clean',
      icon: 'House',
      title: 'Full Home Deep Cleaning',
      short: 'Top-to-bottom cleaning of every room, ideal before festivals.',
      description:
        'A detailed clean of every room, including fans, windows, grills, cabinets inside and out, bathrooms, kitchen and floor scrubbing.',
      price: '₹3,499',
      priceUnit: '/ 2 BHK',
      features: ['All rooms & balconies', 'Floor machine scrubbing', 'Fans, lights & switchboards', 'Cabinets inside & out'],
      popular: true,
    },
    {
      id: 'kitchen-cleaning',
      icon: 'CookingPot',
      title: 'Kitchen Deep Cleaning',
      short: 'Degreasing of tiles, chimney exterior, cabinets and appliances.',
      description:
        'Heavy-duty degreasing of walls, tiles, slab, sink, cabinets and appliance exteriors, finished with food-safe sanitisation.',
      price: '₹1,299',
      priceUnit: '/ kitchen',
      features: ['Oil & grease removal', 'Cabinet interiors', 'Chimney & hob exterior', 'Food-safe sanitiser'],
    },
    {
      id: 'bathroom-cleaning',
      icon: 'Bath',
      title: 'Bathroom Cleaning',
      short: 'Hard-water stain removal and steam sanitisation.',
      description:
        'Removal of hard-water stains, soap scum and yellowing from tiles, fittings, WC and glass, followed by steam sanitisation.',
      price: '₹499',
      priceUnit: '/ bathroom',
      features: ['Hard-water stain removal', 'Tile & grout scrubbing', 'Steam sanitisation', 'Shiny chrome fittings'],
    },
    {
      id: 'sofa-cleaning',
      icon: 'Sofa',
      title: 'Sofa & Upholstery Shampoo',
      short: 'Shampooing and vacuum extraction for sofas, chairs and mattresses.',
      description:
        'Fabric-safe shampooing with hot-water extraction that removes stains, dust mites and odours from sofas, chairs, mattresses and carpets.',
      price: '₹249',
      priceUnit: '/ seat',
      features: ['Stain & odour removal', 'Dust-mite extraction', 'Fabric-safe products', 'Fast-dry process'],
    },
    {
      id: 'move-in-out',
      icon: 'Sparkles',
      title: 'Move-in / Move-out Cleaning',
      short: 'Get your deposit back or move into a fresh, clean home.',
      description:
        'An intensive empty-home clean covering paint marks, cabinets, wardrobes, windows, bathrooms and kitchen, ready for handover.',
      price: '₹3,999',
      priceUnit: '/ 2 BHK',
      features: ['Empty-home deep clean', 'Paint & sticker removal', 'Wardrobe interiors', 'Handover-ready finish'],
    },
    {
      id: 'office-cleaning',
      icon: 'Building2',
      title: 'Office & Shop Cleaning',
      short: 'One-time or monthly cleaning contracts for workspaces.',
      description:
        'Flexible cleaning for offices, clinics and retail stores, after hours or on weekends, with a dedicated supervisor for contracts.',
      price: '₹4.5',
      priceUnit: '/ sq. ft.',
      features: ['After-hours service', 'Workstation sanitising', 'Washroom upkeep', 'Monthly contracts'],
    },
  ],
  priceNote: 'Prices include cleaning materials and equipment. Final pricing depends on size and condition, confirmed before booking.',

  whyChooseUs: {
    title: 'Why families trust PureNest',
    text: 'We clean like it’s our own home: carefully, safely and thoroughly.',
    items: [
      { icon: 'ShieldCheck', title: 'Verified professionals', text: 'Every cleaner is police-verified, uniformed and trained for 3 weeks.' },
      { icon: 'Leaf', title: 'Eco-safe products', text: 'Biodegradable, non-toxic solutions that are safe for kids and pets.' },
      { icon: 'WashingMachine', title: 'Pro equipment', text: 'Scrubbers, steam machines and HEPA vacuums for a deeper clean.' },
      { icon: 'ThumbsUp', title: 'Re-clean guarantee', text: 'Missed a spot? Tell us within 24 hours and we’ll re-clean it free.' },
    ],
  },

  process: [
    { title: 'Share your needs', text: 'Tell us your home size and services. Get an instant estimate.' },
    { title: 'Pick a time', text: 'Choose a slot that suits you, including weekends.' },
    { title: 'We clean', text: 'A trained team arrives with all equipment and follows our checklist.' },
    { title: 'Inspect & relax', text: 'Walk through with the supervisor. Not happy? We re-clean free.' },
  ],

  faq: [
    {
      question: 'Do I need to provide any supplies?',
      answer: 'No. Our team brings all products, equipment and ladders. We just need access to water and electricity.',
    },
    {
      question: 'How long does a 2 BHK deep clean take?',
      answer: 'A team of three usually takes 5 to 7 hours, depending on the condition of the home.',
    },
    {
      question: 'Are your products safe for children and pets?',
      answer: 'Yes. We use biodegradable, non-toxic products. Let us know about pets or allergies and we’ll adapt.',
    },
    {
      question: 'What if I’m not satisfied?',
      answer: 'Tell us within 24 hours and we’ll send the team back to re-clean the areas you’re not happy with, at no cost.',
    },
  ],

  gallery: images.gallery,

  testimonials: {
    isSample: true,
    intro: 'Feedback from families and offices across Pune.',
    items: [
      {
        name: 'Kavya Iyer',
        location: 'Baner',
        service: 'Home deep clean',
        rating: 5,
        text: 'Our flat looked brand new before Diwali. The team was punctual, polite and cleaned places I didn’t even think of.',
      },
      {
        name: 'Aditya Pawar',
        location: 'Hinjewadi',
        service: 'Move-out cleaning',
        rating: 5,
        text: 'Booked a move-out clean and got my full deposit back. The landlord asked for their number!',
      },
      {
        name: 'Neha Agarwal',
        location: 'Kalyani Nagar',
        service: 'Sofa cleaning',
        rating: 5,
        text: 'Years of stains on our fabric sofa, gone in two hours. It dried quickly and smelled fresh.',
      },
    ],
  },

  cta: {
    title: 'Ready for a cleaner, healthier home?',
    text: 'Get a free, no-obligation quote in minutes. Weekend slots available.',
  },

  /* ── About page ────────────────────────────────────── */
  about: {
    title: 'Clean homes, happy families',
    intro: 'PureNest was founded to give Pune families a cleaning service they could trust in their homes.',
    storyTitle: 'Built on trust, one home at a time',
    story: [
      'After struggling to find reliable cleaners for her own home, Sneha Kale started PureNest in 2017 with two trained helpers and a promise: show up on time, do it properly and treat every home with respect.',
      'Today PureNest has 45 trained professionals and thousands of repeat customers. We invest in proper training, fair wages and professional equipment, because a happy, skilled team delivers a better clean.',
    ],
    mission: '“We don’t just clean spaces. We give people back their weekends.”',
    founder: { name: 'Sneha Kale', role: 'Founder & Director' },
    image: images.about,
    imageAlt: 'PureNest cleaner wiping a window frame',
    values: [
      { icon: 'HeartHandshake', title: 'Trust', text: 'Verified staff, insured work and transparent pricing, every time.' },
      { icon: 'Leaf', title: 'Sustainability', text: 'Eco-friendly products and water-saving cleaning methods.' },
      { icon: 'Users', title: 'Fair work', text: 'Fair wages, proper training and safety gear for our whole team.' },
    ],
  },

  /* ── Legal ─────────────────────────────────────────── */
  legal: {
    legalName: 'PureNest Cleaning Services',
    lastUpdated: '2 November 2026',
  },
};

export default cleaning;
