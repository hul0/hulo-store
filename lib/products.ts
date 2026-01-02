export interface Product {
  id: string
  name: string
  slug: string
  price: number
  originalPrice?: number
  description: string
  shortDescription: string
  mainImage: string
  gallery: string[]
  techStack: string[]
  liveLink?: string
  deliveryTime: string
  category: "Web App" | "Mobile App" | "Component" | "Software"
  isNew?: boolean
  isSale?: boolean
}

export const products: Product[] = [
  {
    id: "101",
    name: "SaaS Dashboard Pro",
    slug: "saas-dashboard-pro",
    price: 49.0,
    description:
      "A complete, production-ready SaaS dashboard template built with Next.js and Tailwind CSS. Features include dark mode, authentication flows, and fully responsive charts. Perfect for kickstarting your next startup.",
    shortDescription: "Next.js Admin Dashboard with Dark Mode",
    mainImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1555421689-492a18d9c3ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    ],
    techStack: ["Next.js", "React", "Tailwind", "TypeScript"],
    liveLink: "https://example.com/demo",
    deliveryTime: "Instant Download",
    category: "Web App",
    isNew: true,
  },
  {
    id: "102",
    name: "E-Commerce Mobile Kit",
    slug: "ecommerce-mobile-kit",
    price: 35.0,
    originalPrice: 50.0,
    description:
      "A Flutter-based mobile UI kit for fashion and tech stores. Includes 20+ screens, clean code structure, and easy customization guidelines. Works on both iOS and Android.",
    shortDescription: "Cross-platform Flutter UI Kit",
    mainImage: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1556656793-02715d8dd660?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    ],
    techStack: ["Flutter", "Dart", "Android", "iOS"],
    liveLink: "https://example.com/demo-app",
    deliveryTime: "Instant Download",
    category: "Mobile App",
    isSale: true,
  },
  {
    id: "103",
    name: "Animated Landing Page",
    slug: "animated-landing-page",
    price: 15.0,
    description:
      "High-converting landing page with smooth GSAP animations and 3D interactions. Optimized for speed and SEO. Includes sections for features, testimonials, and pricing.",
    shortDescription: "High-performance marketing page",
    mainImage: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    ],
    techStack: ["HTML5", "CSS3", "GSAP", "JavaScript"],
    liveLink: "https://example.com/landing",
    deliveryTime: "Instant Download",
    category: "Web App",
  },
  {
    id: "104",
    name: "Crypto Trading Bot Script",
    slug: "crypto-bot-script",
    price: 89.0,
    description:
      "Python script for automated trading strategies. Includes backtesting capabilities, API connectors for major exchanges, and customizable risk management parameters.",
    shortDescription: "Automated Python Trading Script",
    mainImage: "https://images.unsplash.com/photo-1642104704074-907c0698b98d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1642104704074-907c0698b98d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    ],
    techStack: ["Python", "Pandas", "Binance API"],
    deliveryTime: "24 Hours",
    category: "Software",
  },
]