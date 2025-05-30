
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
  testFiles?: string[];
}

export const projects: Project[] = [
  {
    id: "paddler-improvement-system",
    title: "Paddler Improvement System",
    shortDescription: "ML-powered stroke analysis tool for NYU Concrete Canoe Team to improve paddling technique and performance.",
    description: "A data-driven system that analyzes paddler performance for the NYU Concrete Canoe Team. Using machine learning models (primarily SVM), the system classifies paddle strokes into optimal/suboptimal categories and provides detailed feedback on different phases of the stroke (catch, pull, release). The analysis helps team members improve their technique through targeted recommendations.",
    technologies: ["Python", "Scikit-learn", "DeepSeek API"],
    image: "/lovable-uploads/55539b4d-7d66-4c87-80df-c618640f348c.png",
    github: "https://github.com/nyuconcretecanoe/PIS",
    demo: "https://concretecanoe.skparab1.com/",
    role: "Machine Learning Developer",
    features: [
      "Data collection system for paddler stroke information",
      "Machine learning classification of optimal vs. inoptimal strokes",
      "Detailed analysis of stroke phases (catch, pull, release)",
      "Performance metrics and visualization for individual paddlers",
      "AI-powered improvement recommendations using DeepSeek",
      "Integration with web platform for team-wide access"
    ],
    challenges: [
      "Building accurate classification models for subtle stroke differences",
      "Developing comprehensive analysis of different stroke phases",
      "Feature reduction and selection for optimal model performance",
    ],
    learnings: [
      "Support Vector Machine implementation for movement classification",
      "Data preprocessing and feature analysis from sports performance data",
      "Sports biomechanics and paddling technique analysis"
    ],
    screenshots: [
      "/lovable-uploads/f3f1cb86-5e5b-452e-9d8b-f2cb639af0a3.png",
      "/lovable-uploads/fdd0747b-5904-4e6d-b38b-cd3a6de0f4f3.png"
    ],
    testFiles: []
  },
  {
    id: "window-warden",
    title: "Window Warden",
    shortDescription: "An Arduino-powered window cleaning robot capable of traversing and cleaning semi-vertical glass surfaces.",
    description: "This repository contains the code for Window Warden, a window cleaning robot project built as part of an Introduction to Engineering class at NYU. The goal of this project was to design and prototype a robotic system that can automate the cleaning of vertical window surfaces, combining hardware engineering with programming for effective movement and cleaning functions.",
    technologies: ["Arduino", "C", "DC Motors", "Ultrasonic Sensors"],
    image: "/lovable-uploads/a4d2d90b-aaf8-4432-be2a-412fd562d0bc.png",
    github: "https://github.com/anthony-lamelas/Window-Warden-Code",
    role: "Robotics Engineer",
    features: [
      "Arduino-based motor control system for vertical movement",
      "Ultrasonic sensor integration for edge detection",
      "Liquid dispensing mechanism for cleaning solution",
      "Ability to traverse surfaces at 45-degree angles",
    ],
    challenges: [
      "Designing a lightweight yet secure frame for vertical adhesion",
      "Creating reliable cleaning mechanisms for uneven surfaces",
    ],
    learnings: [
      "Arduino programming for hardware control",
      "Motor control and sensor integration",
      "Physical prototyping and testing methodologies",
    ],
    screenshots: [
      "/lovable-uploads/acc57b61-e5b2-4e14-b7e4-4ef131fcd228.png",
      "/lovable-uploads/209957d9-a7f6-4e8b-8bca-94c4e447f511.png",
      "/lovable-uploads/34fb0c7f-ea1f-4e0c-9329-1e3cca01329e.png"
    ]
  },
  {
    id: "flighthub",
    title: "FlightHub",
    shortDescription: "A comprehensive flight booking system with customer and airline staff interfaces for managing travel.",
    description: "FlightHub is a full-stack flight booking and management system that serves both customers and airline staff. Built with Python Flask, MySQL, and modern front-end technologies, it simulates a complete airline reservation system with robust functionality for searching, booking, managing, and reviewing flights across multiple airports and aircraft.",
    technologies: ["Python", "Flask", "MySQL", "HTML", "CSS", "JavaScript"],
    image: "/lovable-uploads/ffa70535-f6b0-4076-a09d-95bcfe3e75d1.png",
    github: "https://github.com/anthony-lamelas/FlightHub",
    role: "Full-Stack Developer",
    features: [
      "User authentication system with separate customer and staff portals",
      "Comprehensive flight search with filtering capabilities",
      "Booking management for customers with ticket confirmation",
      "Flight creation and management for airline staff",
      "Airport and airplane database management",
      "Customer reviews and ratings for flights",
      "Comment system for customer feedback on services"
    ],
    challenges: [
      "Designing a relational database schema for complex flight data",
      "Implementing role-based access control for staff and customers",
      "Creating an intuitive booking flow with constraints checking",
      "Developing efficient flight search with multiple filters",
      "Ensuring data integrity across interconnected tables"
    ],
    learnings: [
      "Full-stack web application development with Flask",
      "Database design and optimization for relational systems",
      "User authentication and session management",
      "UI/UX considerations for complex booking systems"
    ],
    screenshots: []
  },
  {
    id: "facecrime",
    title: "FaceCrime",
    shortDescription: "A facial recognition tool that compares user faces against a database of 700,000+ sex offenders using AI and vector search.",
    description: "FaceCrime is an award-winning project built for the MongoDB x Voxel51 Hackathon that leverages advanced facial recognition technology. It allows users to either upload a facial image or capture one through their device camera, then employs cosine similarity with CLIP embeddings to search a database of over 700,000 sex offenders in the US. The system returns demographic information and links to government records for any potential matches.",
    technologies: ["React", "TypeScript", "Python", "CLIP", "PostgreSQL", "pgvector"],
    image: "/lovable-uploads/cb258cc7-0bd5-4458-8ad6-bf8f74d14173.png",
    github: "https://github.com/anthony-lamelas/FaceCrime_backend",
    demo: "https://facecrime.io",
    role: "Frontend Developer",
    features: [
      "Face capture via device camera or file upload",
      "AI-powered facial similarity detection using CLIP embeddings",
      "Vector search implementation with pgvector",
      "Demographic information display for potential matches",
      "Links to government records of crimes committed",
      "Real-time processing and search results"
    ],
    challenges: [
      "Software development in a short time frame (24 hours)", 
      "Handling large-scale image processing efficiently",
      "Frontend integration with complex backend APIs",
    ],
    learnings: [
      "AI embedding generation with CLIP models",
      "Frontend development with React and TypeScript",
      "Integration between AI models and user interfaces",
      "Ethical considerations in facial recognition applications"
    ],
    screenshots: [
      "/lovable-uploads/ba88cc7b-e114-4bb1-ae93-9ccdc2bbe87b.png",
      "/lovable-uploads/1fdf931a-4725-4764-81d5-228ae54a1dc0.png"
    ]
  },
  {
    id: "semantic-scaling-research",
    title: "Scaling Semantic Categories in Vision Transformers",
    shortDescription: "Research exploring how increasing semantic categories impacts classification performance of vision transformers (ViTs).",
    description: "This study explores the impact of scaling semantic categories on the image classification performance of vision transformers (ViTs). Using the CLIP server provided by Jina AI for experimentation, the research hypothesizes that as the number of ground truth and artificially introduced semantically equivalent categories increases, the labeling accuracy of ViTs improves until a theoretical maximum is reached. Through systematic testing across various datasets, the findings show that semantic scaling initially increases model performance by approximately 2% before diminishing returns or performance decline occurs.",
    technologies: ["Python", "Pandas", "Matplotlib", "CLIP", "Jina AI", "Unix Command Line", "LaTeX"],
    image: "/lovable-uploads/b0852dc4-6ca3-4451-a365-325663e92c1c.png",
    github: "https://github.com/Pomu-io/CLIP_category_singularity",
    demo: "https://arxiv.org/abs/2503.12617",
    role: "Research Developer",
    features: [
      "Custom functions for testing Vision Transformer accuracy across multiple datasets",
      "Systematic introduction of semantically equivalent categories",
      "Comprehensive analysis of accuracy trends until plateau",
      "Evaluation across diverse Kaggle datasets",
      "Data visualization of performance metrics",
      "Format adaptation for diverse dataset structures"
    ],
    challenges: [
      "Processing and standardizing diverse image dataset formats",
      "Creating methodology for introducing equivalent semantic categories",
      "Determining the optimal threshold for category introduction",
      "Analyzing complex accuracy trends across different datasets",
    ],
    learnings: [
      "Vision Transformer behavior with scaled semantic categories",
      "Advanced data analysis techniques",
      "Statistical methods for identifying performance plateaus",
      "Research paper methodology and publication process",
    ],
    screenshots: []
  },
  {
    id: "panelize",
    title: "Panelize",
    shortDescription: "A full-stack comic book/manga generation application using AI for panel prompting and image generation.",
    description: "Panelize is a comprehensive comic book and manga generation application that leverages prompt engineering and various AI technologies. The system uses GPT-4 for panel prompting, DALL-E for image generation, BLIP for image captioning, and Flask for backend development, allowing users to create complete visual stories with custom themes.",
    technologies: ["React", "TypeScript", "Flask", "GPT-4", "DALL-E", "BLIP"],
    image: "/lovable-uploads/1f56a8a0-38c7-473b-bda2-987ea1d286a0.png",
    github: "https://github.com/anthony-lamelas/Panelize",
    demo: "https://panelize-demo.com",
    role: "Lead Developer",    
    features: [
      "AI-driven comic panel sequence generation",
      "Custom theme integration for personalized stories",
      "Image generation through DALL-E integration",
      "Automatic captioning with BLIP technology",
      "Full-stack architecture with React frontend and Flask backend",
      "User story management and saving capabilities"
    ],
    challenges: [
      "Implementing effective prompt engineering for coherent story generation",
      "Integrating multiple AI technologies into a unified workflow",
      "Creating a responsive and intuitive UI for comic creation",
    ],
    learnings: [
      "Advanced prompt engineering techniques for GPT-4",
      "AI image generation pipeline development",
      "Full-stack application architecture with AI integration",
    ],
    screenshots: [
      "/lovable-uploads/ae6f8004-21de-4032-b08a-7a41a1461a07.png",
      "/lovable-uploads/72874790-6a83-496f-b4f5-5ab9b56d252c.png"
    ]
  },
  {
    id: "paddleprompt",
    title: "PaddlePrompt",
    shortDescription: "An LLM-based AI assistant specifically trained on Concrete Canoe competition proposals with RAG capabilities.",
    description: "PaddlePrompt is a specialized AI assistant created by fine-tuning an OpenOrca Llama model on historical Concrete Canoe competition proposals. The system enhances proposal generation and technical documentation with domain-specific knowledge, leveraging a Pinecone vector database for Retrieval-Augmented Generation (RAG) to provide accurate and contextual responses for concrete canoe engineering.",
    technologies: ["Python", "Flask", "Pinecone"],
    image: "/lovable-uploads/88290740-5cf3-484e-a3db-912130ac6eea.png",
    github: "https://github.com/anthony-lamelas/PaddePrompt",
    role: "Lead Developer",    
    features: [
      "Custom fine-tuning of OpenOrca Llama model on competition-specific data",
      "Pinecone vector database for efficient RAG implementation",
      "Enhanced understanding of concrete canoe engineering terminology",
    ],
    challenges: [
      "Creating a comprehensive dataset from limited competition proposals",
      "Fine-tuning model parameters without overfitting",
      "Implementing effective RAG strategies for technical documents"
    ],
    learnings: [
      "Vector database implementation and query optimization",
      "Retrieval-Augmented Generation techniques and best practices",
    ],
    screenshots: []
  },
  {
    id: "e20-assembly-simulator",
    title: "E20 Assembly Simulator",
    shortDescription: "A C++ assembly language simulator for the E20 instruction set with debugging and visualization capabilities.",
    description: "A comprehensive assembly language simulator written in C++ that emulates the E20 instruction set architecture. The simulator features a complete implementation of E20 assembly language processing, including instruction parsing, execution, memory management, and debugging capabilities. It also includes a sophisticated customizable cache system with direct-associative and set-associative configurations across two levels (L1 and L2), allowing for detailed performance analysis and optimization of memory access patterns.",
    technologies: ["C++", "E20 Assembly Language"],
    image: "/lovable-uploads/0a0b7c67-82c8-446f-a009-412a1183345a.png",
    github: "https://github.com/anthony-lamelas/E20-Assembly-Simulator",
    role: "Systems Developer",    
    features: [
      "Complete E20 instruction set implementation",
      "Assembly language parsing and validation",
      "Memory management and register simulation",
      "Customizable two-level cache architecture (L1 and L2)",
      "Configurable direct-associative and set-associative cache modes",
    ],
    challenges: [
      "Implementing accurate instruction set architecture simulation",
      "Designing a flexible cache hierarchy with multiple configuration options",
      "Creating efficient memory management systems",
    ],    
    learnings: [
      "Low-level systems programming in C++",
      "Computer architecture and instruction set design",
      "Assembly language processing and interpretation",
      "Memory management and pointer manipulation"
    ],
    screenshots: []
  }
];
