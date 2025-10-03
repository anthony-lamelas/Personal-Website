
import { Project } from "../../types/project";

export const paddlerImprovementSystem: Project = {
  id: "paddler-improvement-system",
  title: "Paddler Improvement System",
  shortDescription: "ML-powered stroke analysis tool for NYU Concrete Canoe Team to improve paddling technique and performance.",
  description: "A data-driven system that analyzes paddler performance for the NYU Concrete Canoe Team. Using machine learning models (primarily SVM), the system classifies paddle strokes into optimal/suboptimal categories and provides detailed feedback on different phases of the stroke (catch, pull, release). The analysis helps team members improve their technique through targeted recommendations.",
  technologies: ["Python", "Scikit-learn", "DeepSeek API"],
  image: "/images/55539b4d-7d66-4c87-80df-c618640f348c.png",
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
  screenshots: [
    "/images/f3f1cb86-5e5b-452e-9d8b-f2cb639af0a3.png",
    "/images/fdd0747b-5904-4e6d-b38b-cd3a6de0f4f3.png"
  ],
  testFiles: []
};
