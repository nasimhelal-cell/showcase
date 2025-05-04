export interface PortfolioItem {
  id: string
  title: string
  description: string
  category: string
  image: string
  technologies: string[]
  demoUrl?: string
  githubUrl?: string
  completionDate?: string
  longDescription?: string
  features?: string[]
  process?: string
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: "backend-1",
    title: "E-commerce Backend",
    description: "A scalable backend system for e-commerce platforms with inventory management.",
    category: "backend",
    image: "/web/web-2.jpg",
    technologies: ["Node.js", "Express", "MongoDB", "Redis"],
    demoUrl: "https://example.com/demo",
    githubUrl: "https://github.com/example/project",
    completionDate: "June 2023",
    longDescription:
      "This e-commerce backend system was designed to handle high traffic and provide a seamless shopping experience. It includes features like real-time inventory management, order processing, and payment integration.",
    features: [
      "Real-time inventory tracking",
      "Secure payment processing",
      "Order management system",
      "User authentication and authorization",
    ],
  },
  {
    id: "backend-2",
    title: "Deshboard",
    description: "Deshboard for manage users and products and analytics.",
    category: "backend",
    image: "/web/web-6.webp",
    technologies: ["Node.js", "Socket.io", "PostgreSQL"],
    demoUrl: "https://example.com/demo",
    githubUrl: "https://github.com/example/project",
    completionDate: "August 2023",
    features: [
      "Real-time message delivery",
      "User presence detection",
      "Message history storage",
      "End-to-end encryption",
    ],
  },
  {
    id: "mobile-1",
    title: "Food Ordering App",
    description: "Mobile application for ordering food with tracking workouts and nutrition with progress analytics.",
    category: "mobile",
    image: "/mobile/app-1.png",
    technologies: ["React Native", "Redux", "Firebase"],
    demoUrl: "https://example.com/demo",
    githubUrl: "https://github.com/example/project",
    completionDate: "March 2023",
    features: [
      "Workout tracking and planning",
      "Nutrition logging and analysis",
      "Progress visualization",
      "Social sharing capabilities",
    ],
  },
  {
    id: "mobile-2",
    title: "E-commerce App",
    description: "e-commerce app with payment processing and inventory management.",
    category: "mobile",
    image: "/mobile/app-2.png",
    technologies: ["Flutter", "Dart", "Google Maps API"],
    demoUrl: "https://example.com/demo",
    completionDate: "October 2023",
    features: [
      "Offline map functionality",
      "Itinerary planning and management",
      "Local recommendations engine",
      "Travel journal and photo storage",
    ],
  },
  {
    id: "mobile-3",
    title: "Finance App",
    description: "finance app with stock market analysis and portfolio management.",
    category: "mobile",
    image: "/mobile/app-3.png",
    technologies: ["Flutter", "Dart", "Google Maps API"],
    demoUrl: "https://example.com/demo",
    completionDate: "October 2023",
    features: [
      "Offline map functionality",
      "Itinerary planning and management",
      "Local recommendations engine",
      "Travel journal and photo storage",
    ],
  },
  {
    id: "mobile-4",
    title: "Weather App",
    description: "weather app with weather forecast and location tracking.",
    category: "mobile",
    image: "/mobile/app-4.png",
    technologies: ["Flutter", "Dart", "Google Maps API"],
    demoUrl: "https://example.com/demo",
    completionDate: "October 2023",
    features: [
      "Offline map functionality",
      "Itinerary planning and management",
      "Local recommendations engine",
      "Travel journal and photo storage",
    ],
  },
  {
    id: "mobile-5",
    title: "Event Booking App",
    description: "event booking app with event planning and management.",
    category: "mobile",
    image: "/mobile/app-5.png",
    technologies: ["Flutter", "Dart", "Google Maps API"],
    demoUrl: "https://example.com/demo",
    completionDate: "October 2023",
    features: [
      "Offline map functionality",
      "Itinerary planning and management",
      "Local recommendations engine",
      "Travel journal and photo storage",
    ],
  },
  {
    id: "mobile-6",
    title: "Travel & Tour Guide App",
    description: "travel & tour guide app with travel planning and management.",
    category: "mobile",
    image: "/mobile/app-6.png",
    technologies: ["Flutter", "Dart", "Google Maps API"],
    demoUrl: "https://example.com/demo",
    completionDate: "October 2023",
    features: [
      "Offline map functionality",
      "Itinerary planning and management",
      "Local recommendations engine",
      "Travel journal and photo storage",
    ],
  },
  {
    id: "mobile-7",
    title: "E-commerce App",
    description: "ecommerce app with e-commerce features.",
    category: "mobile",
    image: "/mobile/app-7.png",
    technologies: ["Flutter", "Dart", "Google Maps API"],
    demoUrl: "https://example.com/demo",
    completionDate: "October 2023",
    features: [
      "Offline map functionality",
      "Itinerary planning and management",
      "Local recommendations engine",
      "Travel journal and photo storage",
    ],
  },
  {
    id: "mobile-8",
    title: "Food Recipe App",
    description: "food recipe app with food recipe features.",
    category: "mobile",
    image: "/mobile/app-8.png",
    technologies: ["Flutter", "Dart", "Google Maps API"],
    demoUrl: "https://example.com/demo",
    completionDate: "October 2023",
    features: [
      "Offline map functionality",
      "Itinerary planning and management",
      "Local recommendations engine",
      "Travel journal and photo storage",
    ],
  },
  {
    id: "mobile-9",
    title: "Portfolio Builder App",
    description: "portfolio builder app with portfolio features and analytics.",
    category: "mobile",
    image: "/mobile/app-9.png",
    technologies: ["Flutter", "Dart", "Google Maps API"],
    demoUrl: "https://example.com/demo",
    completionDate: "October 2023",
    features: [
      "Offline map functionality",
      "Itinerary planning and management",
      "Local recommendations engine",
      "Travel journal and photo storage",
    ],
  },
  {
    id: "frontend-1",
    title: "Web Application",
    description: "Web application with modern design and responsive layout.",
    category: "frontend",
    image: "/web/web-1.webp",
    technologies: ["React.js", "Next.js", "Tailwind CSS", "TypeScript"],
    demoUrl: "https://example.com/demo",
    githubUrl: "https://github.com/example/project",
    completionDate: "January 2023",
    features: [
      "Interactive data visualizations",
      "Real-time data updates",
      "Customizable dashboard layouts",
      "Export and reporting capabilities",
    ],
  },
  {
    id: "frontend-2",
    title: "E-commerce Platform",
    description: "E-commerce platform with e-commerce features.",
    category: "frontend",
    image: "/web/web-2.jpg",
    technologies: ["Vue.js", "Vuex", "SCSS"],
    demoUrl: "https://example.com/demo",
    githubUrl: "https://github.com/example/project",
    completionDate: "May 2023",
    features: [
      "Course content management",
      "Progress tracking and analytics",
      "Interactive quizzes and assessments",
      "Certificate generation",
    ],
  },
  {
    id: "frontend-3",
    title: "Sports Application",
    description: "Sports application with sports features and analytics.",
    category: "frontend",
    image: "/web/web-3.jpg",
    technologies: ["Vue.js", "Nuxt.js", "SCSS", "TypeScript"],
    demoUrl: "https://example.com/demo",
    githubUrl: "https://github.com/example/project",
    completionDate: "May 2023",
    features: [
      "Course content management",
      "Progress tracking and analytics",
      "Interactive quizzes and assessments",
      "Certificate generation",
    ],
  },
  {
    id: "frontend-4",
    title: "Deshboard",
    description: "Deshboard application with deshboard features and analytics.",
    category: "frontend",
    image: "/web/web-4.webp",
    technologies: ["Vue.js", "Nuxt.js", "SCSS", "TypeScript"],
    demoUrl: "https://example.com/demo",
    githubUrl: "https://github.com/example/project",
    completionDate: "May 2023",
    features: [
      "Course content management",
      "Progress tracking and analytics",
      "Interactive quizzes and assessments",
      "Certificate generation",
    ],
  },
  {
    id: "frontend-5",
    title: "Cripto",
    description: "cripto application with cripto features and analytics.",
    category: "frontend",
    image: "/web/web-5.webp",
    technologies: ["Vue.js", "Nuxt.js", "SCSS", "TypeScript"],
    demoUrl: "https://example.com/demo",
    githubUrl: "https://github.com/example/project",
    completionDate: "May 2023",
    features: [
      "Course content management",
      "Progress tracking and analytics",
      "Interactive quizzes and assessments",
      "Certificate generation",
    ],
  },
  {
    id: "nocode-1",
    title: "Client Portal",
    description: "No-code solution for client management and document sharing.",
    category: "nocode",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["Webflow", "Airtable", "Zapier"],
    demoUrl: "https://example.com/demo",
    completionDate: "February 2023",
    features: [
      "Client onboarding workflow",
      "Document sharing and management",
      "Automated notifications",
      "Client feedback collection",
    ],
  },
  {
    id: "nocode-2",
    title: "Membership Site",
    description: "Subscription-based content platform built without coding.",
    category: "nocode",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["Bubble", "Stripe", "Memberstack"],
    demoUrl: "https://example.com/demo",
    completionDate: "July 2023",
    features: [
      "Subscription management",
      "Content access control",
      "Member directory and profiles",
      "Integrated payment processing",
    ],
  },
  {
    id: "api-1",
    title: "Payment Gateway API",
    description: "Secure payment processing API with multiple provider integrations.",
    category: "api",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["Node.js", "Express", "Stripe API", "PayPal API"],
    githubUrl: "https://github.com/example/project",
    completionDate: "April 2023",
    features: [
      "Multi-provider payment processing",
      "Webhook integration",
      "Transaction reporting",
      "Fraud detection mechanisms",
    ],
  },
  {
    id: "api-2",
    title: "Weather Data API",
    description: "RESTful API for retrieving and analyzing weather data from multiple sources.",
    category: "api",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["Python", "FastAPI", "Redis", "Docker"],
    demoUrl: "https://example.com/demo",
    githubUrl: "https://github.com/example/project",
    completionDate: "September 2023",
    features: [
      "Multi-source data aggregation",
      "Historical weather data analysis",
      "Forecast prediction algorithms",
      "Geolocation-based queries",
    ],
  },
]


export const sectionInfo = {
  "backend": {
    "title": "Backend Projects",
    "description": "Explore my backend projects with a focus on scalability and performance."
  },
  "mobile": {
    "title": "Mobile Projects",
    "description": "Discover my mobile app projects with a range of features and capabilities."
  },
  "frontend": {
    "title": "Frontend Projects",
    "description": "Check out my frontend projects with a focus on user experience and design."
  },
  "nocode": {
    "title": "No-code Projects",
    "description": "Explore my no-code projects with a range of features and capabilities."
  },
  "api": {
    "title": "API Projects",
    "description": "Discover my API projects with a focus on scalability and performance."
  }

}
