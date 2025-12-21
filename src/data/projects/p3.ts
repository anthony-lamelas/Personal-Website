
import { Project } from "../../types/project";

export const p3: Project = {
  id: "p3",
  title: "P3",
  shortDescription: "An intelligent code review assistant powered by GPT-4 that provides automated feedback, security analysis, and best practice recommendations.",
  description: "P3 is an AI-powered code review assistant that revolutionizes the development workflow by providing instant, intelligent feedback on pull requests. Using GPT-4 and custom-trained models, it analyzes code for potential bugs, security vulnerabilities, performance issues, and adherence to best practices. The tool integrates seamlessly with GitHub and GitLab, offering detailed explanations and suggested improvements that help developers learn and grow while maintaining code quality.",
  technologies: ["Python", "FastAPI", "GPT-4 API", "Docker", "GitHub Actions", "PostgreSQL", "React"],
  image: "/images/p3-preview.png",
  github: "https://github.com/anthonylamelas/p3",
  demo: "https://p3-assistant.onrender.com",
  role: "Solo Developer",
  features: [
    "Automated code review with AI-powered suggestions",
    "Security vulnerability detection and remediation advice",
    "Performance optimization recommendations",
    "Code style and best practice enforcement",
    "Multi-language support (Python, JavaScript, TypeScript, Java, C++)",
    "Integration with GitHub and GitLab webhooks",
    "Customizable review rules and severity levels",
    "Detailed explanations for each suggestion",
    "Learning mode with educational content",
    "Historical analysis and trend tracking"
  ],
  screenshots: [
    "/images/p3-review.png",
    "/images/p3-analysis.png",
    "/images/p3-dashboard.png"
  ]
};
