
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
  screenshots: string[];
  testFiles?: string[];
}
