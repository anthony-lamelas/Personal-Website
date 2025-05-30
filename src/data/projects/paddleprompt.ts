
import { Project } from "../../types/project";

export const paddlePrompt: Project = {
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
};
