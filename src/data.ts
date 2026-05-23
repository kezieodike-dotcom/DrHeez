import { Product, ServiceItem, Testimonial } from './types';

export const PHONE_WHATSAPP = '+2348140731811';
export const WHATSAPP_MESSAGE_TEMPLATE = 'Hello Dr.Heez, I would like to make an inquiry about your products and services.';

export const PRODUCTS: Product[] = [
  {
    id: 'mega-4-stemcells',
    name: 'Mega 4 Stemcells',
    category: 'wellness',
    categoryLabel: 'Health Product',
    description: 'A premium natural wellness support supplement designed to support healthy living, cellular rejuvenation, body balance, and overall wellness.',
    priceNGN: 45000,
    priceUSD: 60,
    image: '/images/mega4.jpg',
    isFeatured: true,
    scientificDisclaimer: true,
    benefits: [
      'Supports natural body detoxification',
      'Supports immune system health',
      'Supports healthy digestion',
      'Rich in antioxidants to fight cellular stress',
      'Supports healthy blood circulation',
      'Supports wellness and vitality',
      'Helps maintain healthy energy levels',
      'Supports general bodily wellbeing'
    ],
    features: [
      '100% Organic & Natural ingredients',
      'Packed with active botanical stemcells',
      'Easy daily dose system',
      'Quality tested for ultimate potency'
    ],
    specs: [
      { label: 'Servings', value: '30 Sachets per Pack' },
      { label: 'Formulation', value: 'Sublingual Powder' },
      { label: 'Origin', value: 'Dr.Heez Quality Labs' }
    ]
  },
  {
    id: 'heritage-herbal-product',
    name: 'Heritage Herbal Product',
    category: 'wellness',
    categoryLabel: 'Herbal Wellness Product',
    description: 'A premium traditional herbal wellness product made from concentrated organic extracts to optimize internal systems, general vitality, and physiological balance.',
    priceNGN: 30000,
    priceUSD: 40,
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=605',
    isFeatured: true,
    scientificDisclaimer: true,
    benefits: [
      'Natural wellness support',
      'Antioxidant support',
      'Digestive support',
      'General vitality support'
    ],
    features: [
      'Sourced from certified organic farms',
      'No artificial chemicals or preservatives',
      'Traditional double-strength infusion'
    ]
  },
  {
    id: 'phone-galaxy-s24',
    name: 'Dr.Heez Ultimate Smart Phone',
    category: 'phones',
    categoryLabel: 'Phones & Accessories',
    description: 'A premium, ultra-fast smartphone boasting long-life battery performance, pristine display clarity, and state-of-the-art processors.',
    priceNGN: 350000,
    priceUSD: 450,
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=600',
    isFeatured: false,
    features: [
      'AMOLED display with 120Hz refresh rate',
      'Long-lasting 5500 mAh battery with rapid charge',
      'High-performance triple-lens camera module'
    ],
    specs: [
      { label: 'RAM / Storage', value: '8GB / 256GB' },
      { label: 'Processor', value: 'Octa-Core Octane' },
      { label: 'Warranty', value: '1 Year Brand Warranty' }
    ]
  },
  {
    id: 'accessory-powerbank-20k',
    name: 'Dr.Heez SpeedCharge 20,000mAh Power Bank',
    category: 'phones',
    categoryLabel: 'Phones & Accessories',
    description: 'A high-capacity external backup pack featuring multiple outputs, rapid power delivery, and smart heat controls.',
    priceNGN: 25000,
    priceUSD: 33,
    image: 'https://images.unsplash.com/photo-1609592424109-ddbc3df61381?auto=format&fit=crop&q=80&w=600',
    isFeatured: false,
    features: [
      'Dual active USB-C Power Delivery ports',
      'Textured slip-resistant aerospace casing',
      'LED precise digital power percentage readout'
    ]
  },
  {
    id: 'accessory-earbuds-pro',
    name: 'Dr.Heez SoundVibe Wireless Earbuds',
    category: 'phones',
    categoryLabel: 'Phones & Accessories',
    description: 'Immersive audio earbuds utilizing micro drivers for deep bass and active ambient noise sealing.',
    priceNGN: 18000,
    priceUSD: 24,
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&q=80&w=600',
    isFeatured: false,
    features: [
      'Ultra low latency gaming & music feeds',
      'Up to 36 hours cumulative runtime with charge pod',
      'Sweat-proof IPX5 coating'
    ]
  },
  {
    id: 'accessory-charger-65w',
    name: 'Dr.Heez GaN Pro 65W Rapid Wall Charger',
    category: 'phones',
    categoryLabel: 'Phones & Accessories',
    description: 'Modern gallium nitride charger providing multi-device lightning charging speeds in a pocket-sized design.',
    priceNGN: 12000,
    priceUSD: 16,
    image: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&q=80&w=600',
    isFeatured: false,
    features: [
      'GaN III modern thermodynamic tech',
      'Smart power allocation across 3 active slots',
      'Over-voltage and short-circuit circuit defense'
    ]
  },
  {
    id: 'agro-produce-box',
    name: 'Organic Farm Harvest Basket',
    category: 'agro',
    categoryLabel: 'Agro Products',
    description: 'Fresh, premium seasonal agricultural harvest directly supplied from regional agro-allied farming partners.',
    priceNGN: 35000,
    priceUSD: 47,
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=600',
    isFeatured: false,
    features: [
      'Sourced directly from organic community certified growers',
      'Chilled shipping chain to prevent nutrition breakdown',
      'Fully customizable selection options'
    ]
  },
  {
    id: 'agro-raw-cashew',
    name: 'Premium Export Raw Cashew Nuts (Pack)',
    category: 'agro',
    categoryLabel: 'Agro Products',
    description: 'High-grade, raw cashew nuts prepared for direct food utilization and processing supply-chains.',
    priceNGN: 15000,
    priceUSD: 20,
    image: 'https://images.unsplash.com/photo-1508061253366-f7da158b6cd9?auto=format&fit=crop&q=80&w=600',
    isFeatured: false,
    features: [
      'Optimal nut count and high kernel yield ratio',
      'Dried to perfection below 8% humidity levels',
      'Vacuum certified export and domestic packaging'
    ]
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'consultancy',
    title: 'Consultancy Services',
    description: 'We deliver professional advisory, business management frameworks, and analytical consultancy for startups, commercial players, and established enterprises globally.',
    iconName: 'Building',
    benefits: [
      'Start-up strategy mentoring',
      'Operational restructuring blueprints',
      'Business model scaling blueprints',
      'Risk containment and response planning'
    ]
  },
  {
    id: 'financial-engineering',
    title: 'Financial Engineering',
    description: 'Empowering growing institutions with rigorous financial analysis, capital architecture counseling, strategy modeling, and risk mitigation tools.',
    iconName: 'LineChart',
    benefits: [
      'Corporate budget modelling',
      'Asset growth structures',
      'Feasibility evaluation indexes',
      'Business funding strategies'
    ]
  },
  {
    id: 'construction',
    title: 'Construction Support',
    description: 'Reliable real estate project consulting, expert site supervision, premier civil engineering materials sourcing, and on-ground logistics deployment.',
    iconName: 'HardHat',
    benefits: [
      'Building materials procurement guides',
      'Project oversight and milestone checks',
      'Onsite personnel coordination',
      'Civil layout blueprint consulting'
    ]
  },
  {
    id: 'oil-gas',
    title: 'Oil & Gas Services',
    description: 'Comprehensive midstream and downstream industrial support, petroleum product sourcing directories, supply-chain logistics, and commercial client allocations.',
    iconName: 'Flame',
    image: '/images/oil-gas.jpg',
    benefits: [
      'Bulk product sourcing alliances',
      'Logistical fleet allocation networks',
      'Energy usage efficiency inspection',
      'Industrial fuel sourcing contracts'
    ]
  },
  {
    id: 'agro-allied',
    title: 'Agro & Allied Services',
    description: 'Bridging technical modern farm practices, food storage setups, raw input optimization, and farm-to-consumer delivery networks.',
    iconName: 'Sprout',
    benefits: [
      'Harvest loss prevention workflows',
      'Bulk produce sourcing networks',
      'Eco-friendly organic fertilizer setups',
      'Farmland utilization feasibility studies'
    ]
  },
  {
    id: 'general-commerce',
    title: 'General Commerce',
    description: 'Providing robust global trading services, custom procurement paths, industrial supply-chain management, and retail sourcing networks.',
    iconName: 'ShoppingBag',
    benefits: [
      'Seamless multi-regional shipping assistance',
      'Strict quality checks at sourcing source',
      'Reliable supply-chain timelines',
      'Customs clearing advisory and advice'
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    author: 'Chief Ndubuisisi Okafor',
    role: 'Managing Director, N-Okafor Farms Ltd',
    text: 'Dr.Heez provided excellent customer service and premium quality wellness products that changed my daily work energy levels. Truly a brand you can count on.',
    rating: 5,
    date: 'August 14, 2025'
  },
  {
    id: '2',
    author: 'Engr. Sarah Alabi',
    role: 'Lead Project Partner, Alabi Tech Structures',
    text: 'Their professional construction support and consultancy on our commercial site saved us weeks of delays and substantial budget leakages. Highly recommended.',
    rating: 5,
    date: 'October 29, 2025'
  },
  {
    id: '3',
    author: 'Alhaji Ibrahim Danjuma',
    role: 'Founder, CoreConsult & Trade Alliance',
    text: 'A trusted, premium business brand with multiple high-value services. Their financial engineering and advisory gave our startup absolute clarity to secure capital.',
    rating: 5,
    date: 'February 3, 2026'
  }
];

export const BENEFITS_WHY_CHOOSE = [
  {
    title: 'Trusted & Reliable Services',
    description: 'Years of validated operations across West Africa and internationally with stellar reviews.'
  },
  {
    title: 'Multi-Sector Solutions Under One Roof',
    description: 'From cellular healthcare products to agro-allied supply and heavy industrial consulting.'
  },
  {
    title: 'Client-Centric Professional Care',
    description: 'Responsive customer care teams available during entire production cycles.'
  },
  {
    title: 'Rapid Direct Logistics',
    description: 'Fast product ship-outs and dependable service scheduling, preventing system downtime.'
  },
  {
    title: 'Expert Industry Specialists',
    description: 'Fully qualified consultants leading our construction, advisory, and healthcare efforts.'
  },
  {
    title: 'Affordable, True-Value Pricing',
    description: 'Sourcing methods optimized to remove excessive middlemen, transferring cash savings to you.'
  }
];
