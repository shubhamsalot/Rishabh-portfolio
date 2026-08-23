export interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  client: string;
  role: string;
  heroImage: string;
  galleryImages: string[];
  summary: string;
  challenge: string;
  solution: string;
  metrics?: string;
  tags: string[];
}

export interface Service {
  id: string;
  number: string;
  title: string;
  highlighted?: boolean;
  tagline: string;
  items: string[];
  deliverables: string[];
}

export interface WorkHistoryItem {
  period: string;
  role: string;
  company: string;
  location: string;
  description: string;
  highlight?: boolean;
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
}

export interface FAQItem {
  id: string;
  number: string;
  question: string;
  answer: string;
}

export const portfolioData = {
  designer: {
    name: "Rishabh",
    initials: "R",
    shortName: "Rishabh",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&h=400&q=80",
    aboutPhoto: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&h=900&q=85",
    title: "Website Developer | Brand Designer | UI UX Learner",
    location: "India • Available Worldwide",
    status: "Available for new projects (2026)",
    tagline: "Helping Startups & Brands build modern websites and structured, meaningful experiences.",
    email: "ris3habh@gmail.com",
    phone: "7011378361",
    phoneDisplay: "+91 7011378361",
    calendarUrl: "https://cal.com/rishabh-designer/30min",
    portfolioStudioUrl: "https://tinyurl.com/rishabh-portfolio-studio",
    experienceYears: "5+",
    happyClients: "99+",
    projectsCompleted: "120+",
    socialLinks: {
      instagram: "https://www.instagram.com/rishabh_developss/",
      linkedin: "https://linkedin.com/in/rishabh-developer",
      behance: "https://behance.net/rishabh",
      twitter: "https://twitter.com/rishabh_dev",
      dribbble: "https://dribbble.com/rishabh"
    }
  },

  clientAvatars: [
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&h=120&q=80",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&h=120&q=80",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&h=120&q=80",
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=120&h=120&q=80",
  ],

  clientBrands: [
    { name: "INnUP", symbol: "✦" },
    { name: "TEA SENSE", symbol: "◈" },
    { name: "PURE PULSE", symbol: "▲" },
    { name: "RUTHLESS", symbol: "◎" },
    { name: "THUNDER RIDGE", symbol: "◆" },
    { name: "GIZZMART", symbol: "◼" },
    { name: "KORA", symbol: "⬡" },
    { name: "PAPER PRO", symbol: "❖" }
  ],

  projects: [
    {
      id: "hoodverse",
      title: "HOODVERSE",
      category: "Branding & Visual Identity",
      year: "2026",
      client: "Hoodverse Apparel",
      role: "Brand Identity Lead",
      heroImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&h=800&q=85",
      galleryImages: [
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&h=600&q=80",
        "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=800&h=600&q=80"
      ],
      summary: "Hoodverse is built on the idea that clothing can express identity. A hoodie is more than fabric, it reflects mindset, creativity, and attitude.",
      challenge: "Shape a strong and consistent identity across street culture, packaging labels, and digital communities that feels bold yet minimal.",
      solution: "Created an iconic monogram system combining deep purple (#8312B2), midnight black (#111111), and stark white, creating a universe of self-expression.",
      metrics: "Recognized street culture identity launch drop",
      tags: ["Brand Identity", "Streetwear", "Typography", "Visual System"]
    },
    {
      id: "tea-sense",
      title: "Tea Sense - A Premium Tea",
      category: "Packaging Design, Brand Identity",
      year: "2025",
      client: "Tea Sense",
      role: "Packaging & Brand Designer",
      heroImage: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=1200&h=800&q=85",
      galleryImages: [
        "https://images.unsplash.com/photo-1597481499750-3e6b22637e12?auto=format&fit=crop&w=800&h=600&q=80",
        "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?auto=format&fit=crop&w=800&h=600&q=80"
      ],
      summary: "Designing a modern identity for traditional chai. Bringing authentic Indian chai into a modern, well-structured visual system.",
      challenge: "Design a premium and scalable packaging system that reflects the richness and authenticity of Indian chai while feeling modern and relevant.",
      solution: "Blended deep tones with vibrant flavor accents, real ingredient storytelling, and minimal text to ensure strong shelf presence across multiple SKUs.",
      metrics: "Complete packaging rollout across 8 tea variants",
      tags: ["Packaging Design", "Brand Identity", "Visual Hierarchy", "Print Production"]
    },
    {
      id: "fruit-blends",
      title: "Fruit Blends",
      category: "Packaging Design, Visual Identity",
      year: "2026",
      client: "PurePulse Nutrition",
      role: "Lead Packaging Designer",
      heroImage: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&h=800&q=85",
      galleryImages: [
        "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=800&h=600&q=80",
        "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&h=600&q=80"
      ],
      summary: "A fresh and vibrant packaging design for PurePulse, a health-focused product designed for a modern, active everyday lifestyle.",
      challenge: "Combine strong visual appeal with simplicity so each flavor stands out instantly while feeling part of one cohesive system.",
      solution: "Engineered bright, flavor-driven palettes with clean geometric layouts and tactile sachet finishes that convey natural freshness at first glance.",
      metrics: "+38% increase in retail shelf velocity",
      tags: ["Packaging Design", "Visual Identity", "FMCG", "Label Architecture"]
    },
    {
      id: "ruthless",
      title: "Ruthless",
      category: "Packaging Design, Visual Identity",
      year: "2025",
      client: "Ruthless Lifestyle",
      role: "Visual Identity & Packaging",
      heroImage: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=1200&h=800&q=85",
      galleryImages: [
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&h=600&q=80",
        "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=800&h=600&q=80"
      ],
      summary: "Designing a bold, high-impact product identity combining dark tones with neon highlights for an experience-driven audience.",
      challenge: "Create a packaging system that feels strong, premium, and instantly noticeable in high-energy digital & gaming subcultures.",
      solution: "Crafted high-contrast neon accents against midnight black, precision geometric iconography, and cohesive product-packaging synergy.",
      metrics: "Featured across lifestyle product showcases",
      tags: ["Packaging Design", "Dark Aesthetic", "Visual Identity", "Art Direction"]
    }
  ],

  floatingTestimonial: {
    quote: "“Rishabh’s approach is structured. He focuses on clarity before design, and that reflects in every detail. Nothing felt random.”",
    name: "Phillip B.",
    title: "CTO of INnUP",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80"
  },

  tools: [
    { name: "Adobe Photoshop", icon: "Ps", category: "Raster & Photo Manipulation", level: "Expert" },
    { name: "Adobe Illustrator", icon: "Ai", category: "Vector & Identity Systems", level: "Master" },
    { name: "Framer", icon: "Fr", category: "Interactive Web & Motion", level: "Pro" },
    { name: "Figma", icon: "Fg", category: "UI/UX & Design Systems", level: "Master" },
    { name: "ChatGPT", icon: "AI", category: "Prompting & Concept Brainstorming", level: "Advanced" },
    { name: "Claude", icon: "Cl", category: "Content & Strategic Logic", level: "Advanced" },
    { name: "Notion", icon: "No", category: "Documentation & Project Tracking", level: "Pro" }
  ],

  services: [
    {
      id: "strategy",
      number: "01",
      title: "Design Strategy",
      highlighted: false,
      tagline: "Understanding the problem clearly before designing the solution. Every decision is based on purpose, not guesswork.",
      items: [
        "User Research",
        "Information Architecture",
        "User Flows",
        "Experience Mapping"
      ],
      deliverables: ["Strategy Deck", "User Personas", "Sitemap Architecture", "Competitor Matrix"]
    },
    {
      id: "brand-identity",
      number: "02",
      title: "Brand Identity",
      highlighted: true, // RED highlighted card
      tagline: "Creating strong visual systems that communicate clearly and stay consistent across every touchpoint.",
      items: [
        "Logo Design",
        "Visual Identity Systems",
        "Typography",
        "Brand Guidelines"
      ],
      deliverables: ["Primary & Secondary Logomarks", "Brand Bible PDF", "Asset Kit (SVG/PNG/EPS)", "Social Media Starter Pack"]
    },
    {
      id: "ui-ux",
      number: "03",
      title: "UI/UX Design",
      highlighted: false,
      tagline: "Designing interfaces that are simple, intuitive, and built around real user behavior.",
      items: [
        "Wireframing",
        "Prototyping",
        "Usability Thinking",
        "Interaction Design"
      ],
      deliverables: ["Figma Design Files", "Design Tokens & Components", "Interactive Prototypes", "Developer Handoff Specs"]
    },
    {
      id: "packaging",
      number: "04",
      title: "Packaging Design",
      highlighted: false,
      tagline: "Designing packaging that stands out on shelf and communicates product value instantly.",
      items: [
        "Packaging Systems",
        "Label Design",
        "Visual Hierarchy",
        "Print Production"
      ],
      deliverables: ["Print-Ready Dielines", "3D Packaging Renders", "Finishing Guides (Foil/Emboss)", "Material Specifications"]
    },
    {
      id: "digital-design",
      number: "05",
      title: "Digital Design",
      highlighted: false,
      tagline: "Creating visuals that grab attention and communicate clearly across digital platforms.",
      items: [
        "Social Media Creatives",
        "Ad Creatives",
        "Content Design",
        "Campaign Visuals"
      ],
      deliverables: ["Figma Campaign Suites", "High-res Ad Formats", "Presentation Decks", "Animated Motion Banners"]
    }
  ],

  bioParagraphs: [
    "I started my journey with graphic design, exploring visuals, layouts, and creative ideas. Over the past 5 years, I’ve worked across different types of design, gradually understanding how everything connects and works together.",
    "With time, my focus shifted from just making designs to communicating ideas clearly. That’s when I began to see myself more as a Brand communicator, not just a designer.",
    "Now, I’m learning UI UX to understand how design works in real use. It’s helping me think beyond visuals and focus more on how people interact and experience things.",
    "My goal is to keep growing by combining my background in graphic design with UI UX, and building work that feels clear, useful, and meaningful."
  ],

  workHistory: [
    {
      period: "2025 - Present",
      role: "Creative Director",
      company: "Marker Designs",
      location: "Remote",
      description: "Directing brand identity engagements, visual systems, and digital art direction for fast-growing lifestyle brands and startups.",
      highlight: true
    },
    {
      period: "Ongoing",
      role: "Independent Designer",
      company: "Freelance Projects",
      location: "Global",
      description: "Partnering directly with founders across packaging, brand identity, and digital product touchpoints.",
      highlight: false
    },
    {
      period: "2023 - 2025",
      role: "Senior Visual Designer",
      company: "Studio Craft & Co.",
      location: "Hybrid",
      description: "Spearheaded 20+ packaging systems, label architectures, typography suites, and marketing campaigns.",
      highlight: false
    },
    {
      period: "2020 - 2022",
      role: "Visual Designer",
      company: "Pixelwave Collective",
      location: "On-site",
      description: "Created social media creative templates, print collateral, and contributed to visual design research.",
      highlight: false
    }
  ],

  testimonials: [
    {
      id: "t1",
      quote: "Amazing icons. Great creativity and precision. Even with unclear input, everything was refined perfectly. Quick and reliable.",
      name: "Philip B.",
      role: "CTO",
      company: "INnUP",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80",
      rating: 5
    },
    {
      id: "t2",
      quote: "Smooth experience overall. Strong social media designs with attention to detail. Very patient with revisions.",
      name: "Daniel Carter",
      role: "Marketing Director",
      company: "Thunder Ridge",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&h=120&q=80",
      rating: 5
    },
    {
      id: "t3",
      quote: "Great packaging work across multiple tea variants. The designs really captured our brand well.",
      name: "Riya Shah",
      role: "Brand Manager",
      company: "Tea Sense",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&h=120&q=80",
      rating: 5
    },
    {
      id: "t4",
      quote: "Strong packaging designs with clear thinking behind them. Attention to detail really stood out.",
      name: "Arjun Mehta",
      role: "Founder",
      company: "Pure Pulse",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=120&h=120&q=80",
      rating: 5
    },
    {
      id: "t5",
      quote: "Loved the box packaging design. Clean, creative, and well executed.",
      name: "Natalie Rivera",
      role: "Operations Head",
      company: "Paper Pro",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&h=120&q=80",
      rating: 5
    },
    {
      id: "t6",
      quote: "Great collaboration. Helped build our brand identity and supported with Shopify setup.",
      name: "Emma Kraft",
      role: "Co-Founder",
      company: "GizzMart",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=120&h=120&q=80",
      rating: 5
    },
    {
      id: "t7",
      quote: "Rishabh delivered a complete brand identity that perfectly aligned with our goals. From logo design to brand assets, every element felt intentional and polished.",
      name: "Jake Mallard",
      role: "Marketing",
      company: "Kora",
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=120&h=120&q=80",
      rating: 5
    }
  ],

  faqs: [
    {
      id: "faq-1",
      number: "01",
      question: "How do we get started?",
      answer: "We start with a quick discussion where you share your idea, goals, and what you need. From there, I suggest the right approach and next steps."
    },
    {
      id: "faq-2",
      number: "02",
      question: "What if I’m not sure what I need yet?",
      answer: "That’s completely fine. I help you figure that out. We break things down together and define what will actually work for your product or brand."
    },
    {
      id: "faq-3",
      number: "03",
      question: "Will I be involved in the design process?",
      answer: "Yes. You’ll be part of key stages like direction, feedback, and refinements. The process stays collaborative, not one-sided."
    },
    {
      id: "faq-4",
      number: "04",
      question: "How many changes can I request?",
      answer: "I include a reasonable number of revisions to make sure the final result feels right. The focus is on getting it correct, not rushing it."
    },
    {
      id: "faq-5",
      number: "05",
      question: "Do you only design, or also help with ideas?",
      answer: "I do both. I help shape the idea, not just design it. The goal is to make something that works, not just something that looks good."
    },
    {
      id: "faq-6",
      number: "06",
      question: "How long does a typical project take to complete?",
      answer: "Timelines depend on the scope. Smaller projects usually take 1–3 weeks, while full branding or packaging systems can take 3–6 weeks. I share a clear timeline after understanding your requirements."
    }
  ]
};
