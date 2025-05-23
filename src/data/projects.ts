
export interface Project {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  technologies: string[];
  image: string;
  github?: string;
  demo?: string;
  role: string;
  features: string[];
  challenges: string[];
  learnings: string[];
  screenshots: string[];
}

export const projects: Project[] = [
  {
    id: "task-manager",
    title: "Paddler Improvement and Analysis",
    shortDescription: "A full-stack web application for team task management with real-time collaboration features.",
    description: "A comprehensive task management system built with React and Node.js that enables teams to collaborate effectively. Features include real-time updates, project organization, deadline tracking, and team communication tools.",
    technologies: ["React", "Node.js", "MongoDB", "Socket.io", "Express", "JWT"],
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
    github: "https://github.com/yourusername/task-manager",
    demo: "https://task-manager-demo.com",
    role: "Full-Stack Developer",
    features: [
      "Real-time task updates using WebSocket technology",
      "User authentication and authorization system",
      "Project and team management capabilities",
      "Interactive dashboard with analytics",
      "Mobile-responsive design",
      "Email notifications for important updates"
    ],
    challenges: [
      "Implementing real-time synchronization across multiple users",
      "Designing an intuitive UI for complex task relationships",
      "Optimizing database queries for large datasets",
      "Ensuring data consistency in concurrent operations"
    ],
    learnings: [
      "Advanced React patterns and state management",
      "WebSocket implementation and real-time data handling",
      "Database design and optimization techniques",
      "User experience design principles",
      "Agile development methodologies"
    ],
    screenshots: [
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop"
    ]
  },
  {
    id: "ai-chatbot",
    title: "FlightHub",
    shortDescription: "An intelligent chatbot using natural language processing to provide automated customer support.",
    description: "An AI-powered chatbot built with Python and machine learning libraries that can understand and respond to customer inquiries naturally. The system uses NLP techniques to process user input and provide relevant responses.",
    technologies: ["Python", "TensorFlow", "NLTK", "Flask", "JavaScript", "CSS"],
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&h=600&fit=crop",
    github: "https://github.com/yourusername/ai-chatbot",
    role: "AI Developer & Backend Engineer",
    features: [
      "Natural language understanding and processing",
      "Intent recognition and entity extraction",
      "Context-aware conversation handling",
      "Integration with existing customer service systems",
      "Analytics dashboard for conversation insights",
      "Multi-language support"
    ],
    challenges: [
      "Training the model with limited conversational data",
      "Handling ambiguous user queries effectively",
      "Maintaining conversation context across sessions",
      "Balancing response accuracy with speed"
    ],
    learnings: [
      "Machine learning model training and optimization",
      "Natural language processing techniques",
      "API design and integration patterns",
      "Model deployment and monitoring strategies",
      "Data preprocessing and feature engineering"
    ],
    screenshots: [
      "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop"
    ]
  },
  {
    id: "FaceCrime",
    title: "Interactive Data Visualization Dashboard",
    shortDescription: "A dynamic dashboard for visualizing complex datasets with interactive charts and filters.",
    description: "A comprehensive data visualization platform that transforms raw data into meaningful insights through interactive charts, graphs, and filtering capabilities. Built with modern web technologies to handle large datasets efficiently.",
    technologies: ["React", "D3.js", "Python", "Pandas", "PostgreSQL", "Docker"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    github: "https://github.com/yourusername/data-viz-dashboard",
    demo: "https://dataviz-demo.com",
    role: "Frontend Developer & Data Analyst",
    features: [
      "Interactive charts with zoom and filter capabilities",
      "Real-time data updates and streaming",
      "Custom dashboard creation tools",
      "Data export functionality in multiple formats",
      "Responsive design for mobile and desktop",
      "Advanced filtering and search capabilities"
    ],
    challenges: [
      "Rendering large datasets without performance issues",
      "Creating intuitive user interactions for complex data",
      "Ensuring cross-browser compatibility for SVG graphics",
      "Implementing efficient data streaming and updates"
    ],
    learnings: [
      "Advanced D3.js techniques and SVG manipulation",
      "Performance optimization for large datasets",
      "Data processing and transformation workflows",
      "User interface design for data-heavy applications",
      "Database optimization for analytical queries"
    ],
    screenshots: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=600&fit=crop"
    ]
  },
  {
    id: "mobile-fitness-app",
    title: "Scaling Semantic Categories in Vision Transformers",
    shortDescription: "A React Native app for tracking workouts, nutrition, and fitness progress with social features.",
    description: "A comprehensive mobile fitness application that helps users track their workouts, monitor nutrition, and stay motivated through social features and gamification elements. Built with React Native for cross-platform compatibility.",
    technologies: ["React Native", "Firebase", "Redux", "Node.js", "Express", "MongoDB"],
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
    github: "https://github.com/yourusername/fitness-app",
    role: "Mobile App Developer",
    features: [
      "Workout tracking with custom exercise creation",
      "Nutrition logging with barcode scanning",
      "Progress visualization with charts and metrics",
      "Social features including friend challenges",
      "Push notifications for motivation and reminders",
      "Offline functionality with data synchronization"
    ],
    challenges: [
      "Implementing smooth animations for workout interfaces",
      "Managing offline data storage and synchronization",
      "Optimizing app performance for older devices",
      "Integrating with various health and fitness APIs"
    ],
    learnings: [
      "Mobile app development best practices",
      "Cross-platform development with React Native",
      "Mobile UI/UX design principles",
      "Device sensor integration and data collection",
      "App store deployment and distribution processes"
    ],
    screenshots: [
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1434596922112-19c563067271?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=600&fit=crop"
    ]
  },
  {
    id: "e-commerce-platform",
    title: "Panelize",
    shortDescription: "A full-featured online marketplace with payment processing, inventory management, and admin dashboard.",
    description: "A complete e-commerce solution featuring user authentication, product catalog management, shopping cart functionality, secure payment processing, and comprehensive admin tools for managing orders and inventory.",
    technologies: ["React", "TypeScript", "Node.js", "Stripe", "PostgreSQL", "AWS"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
    github: "https://github.com/yourusername/ecommerce-platform",
    demo: "https://ecommerce-demo.com",
    role: "Full-Stack Developer & System Architect",
    features: [
      "Complete user authentication and profile management",
      "Advanced product search and filtering system",
      "Shopping cart with persistent storage",
      "Secure payment processing with Stripe integration",
      "Order tracking and history management",
      "Admin dashboard for inventory and order management"
    ],
    challenges: [
      "Implementing secure payment processing workflows",
      "Designing scalable database architecture for products and orders",
      "Creating efficient search and filtering algorithms",
      "Ensuring data security and PCI compliance"
    ],
    learnings: [
      "E-commerce architecture and design patterns",
      "Payment gateway integration and security",
      "Database design for complex business logic",
      "Cloud deployment and infrastructure management",
      "Security best practices for web applications"
    ],
    screenshots: [
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"
    ]
  },
  {
    id: "blockchain-voting",
    title: "PaddlePrompt",
    shortDescription: "A secure and transparent voting system built on blockchain technology to ensure election integrity.",
    description: "A decentralized voting platform that leverages blockchain technology to create a secure, transparent, and tamper-proof voting system. Features smart contracts for vote validation and a user-friendly interface for voters and administrators.",
    technologies: ["Solidity", "Ethereum", "Web3.js", "React", "Truffle", "MetaMask"],
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&h=600&fit=crop",
    github: "https://github.com/yourusername/blockchain-voting",
    role: "Blockchain Developer & Smart Contract Engineer",
    features: [
      "Smart contract-based vote recording and validation",
      "Cryptographic voter authentication system",
      "Real-time vote counting with transparency",
      "Immutable audit trail for all transactions",
      "User-friendly web interface for voting",
      "Administrative tools for election management"
    ],
    challenges: [
      "Ensuring voter privacy while maintaining transparency",
      "Optimizing smart contract gas costs",
      "Creating intuitive UX for blockchain interactions",
      "Implementing robust security measures against attacks"
    ],
    learnings: [
      "Blockchain development and smart contract programming",
      "Cryptocurrency and decentralized application concepts",
      "Security considerations for distributed systems",
      "Web3 integration and wallet connectivity",
      "Consensus mechanisms and blockchain governance"
    ],
    screenshots: [
      "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=800&h=600&fit=crop"
    ]
  }
];
