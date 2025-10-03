
import { Project } from "../../types/project";

export const faceCrime: Project = {
  id: "facecrime",
  title: "FaceCrime",
  shortDescription: "A facial recognition tool that compares user faces against a database of 700,000+ sex offenders using AI and vector search.",
  description: "FaceCrime is an award-winning project built for the MongoDB x Voxel51 Hackathon that leverages advanced facial recognition technology. It allows users to either upload a facial image or capture one through their device camera, then employs cosine similarity with CLIP embeddings to search a database of over 700,000 sex offenders in the US. The system returns demographic information and links to government records for any potential matches.",
  technologies: ["React", "TypeScript", "Python", "CLIP", "PostgreSQL", "pgvector"],
  image: "/images/cb258cc7-0bd5-4458-8ad6-bf8f74d14173.png",
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
  screenshots: [
    "/images/ba88cc7b-e114-4bb1-ae93-9ccdc2bbe87b.png",
    "/images/1fdf931a-4725-4764-81d5-228ae54a1dc0.png"
  ]
};
