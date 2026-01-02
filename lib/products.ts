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
    name: "Animated Personal Portfolio",
    slug: "anim-personal-portfolio",
    price: 5.0,
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
  }
]