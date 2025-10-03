
import { Project } from "../../types/project";

export const panelize: Project = {
  id: "panelize",
  title: "Panelize",
  shortDescription: "A full-stack comic book/manga generation application using AI for panel prompting and image generation.",
  description: "Panelize is a comprehensive comic book and manga generation application that leverages prompt engineering and various AI technologies. The system uses GPT-4 for panel prompting, DALL-E for image generation, BLIP for image captioning, and Flask for backend development, allowing users to create complete visual stories with custom themes.",
  technologies: ["React", "TypeScript", "Flask", "GPT-4", "DALL-E", "BLIP"],
  image: "/images/1f56a8a0-38c7-473b-bda2-987ea1d286a0.png",
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
  screenshots: [
    "/images/ae6f8004-21de-4032-b08a-7a41a1461a07.png",
    "/images/72874790-6a83-496f-b4f5-5ab9b56d252c.png"
  ]
};
