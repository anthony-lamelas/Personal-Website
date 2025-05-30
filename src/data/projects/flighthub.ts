
import { Project } from "../../types/project";

export const flightHub: Project = {
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
};
