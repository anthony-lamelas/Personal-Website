
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
