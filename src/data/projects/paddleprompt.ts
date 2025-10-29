
import { Project } from "../../types/project";

export const paddlePrompt: Project = {
  id: "paddleprompt",
  title: "PaddlePrompt",
  shortDescription: "An LLM-based chatbot using a RAG pipeline over dozens of Concrete Canoe competition proposals.",
  description: "PaddlePrompt is an AI assistant that leverages GPT-4.1 with a Pinecone vector store to perform Retrieval-Augmented Generation (RAG) over historical Concrete Canoe competition proposals.",
  technologies: ["Python", "Flask", "Pinecone", "React", "TypeScript", "Docker"],
  image: "/images/88290740-5cf3-484e-a3db-912130ac6eea.png",
  github: "https://github.com/anthony-lamelas/PaddePrompt",
  demo: "https://paddleprompt.onrender.com/",
  role: "Lead Developer",
  features: [
    "Retrieval-Augmented Generation (RAG) using Pinecone for vector search",
    "No model fine-tuning — uses retrieved context with a pre-trained LLM",
    "Domain-specific retrieval across historical Concrete Canoe proposals for accurate responses",
  ],
  screenshots: []
};
