
import { Project } from "../../types/project";

export const p2: Project = {
  id: "p2",
  title: "P2",
  shortDescription: "A cutting-edge data visualization platform that transforms complex datasets into interactive, beautiful visualizations using D3.js and WebGL.",
  description: "P2 is an advanced data visualization toolkit that empowers users to create stunning, interactive visualizations from complex datasets. Leveraging the power of D3.js and WebGL for high-performance rendering, the platform supports multiple chart types, real-time data streaming, and customizable themes. With built-in collaboration features and export capabilities, P2 makes data storytelling accessible to both technical and non-technical users.",
  technologies: ["TypeScript", "D3.js", "WebGL", "React", "Express", "PostgreSQL", "Redis"],
  image: "/images/p2-preview.png",
  github: "https://github.com/anthonylamelas/p2",
  demo: "https://p2-viz.onrender.com",
  role: "Lead Developer & Data Engineer",
  features: [
    "Support for 20+ chart types including custom visualizations",
    "Real-time data streaming and automatic chart updates",
    "High-performance rendering with WebGL for large datasets",
    "Interactive tooltips, zoom, and pan capabilities",
    "Customizable color schemes and responsive layouts",
    "Export to PNG, SVG, and PDF formats",
    "Collaborative workspace with version control",
    "API integration for automated data imports",
    "Built-in statistical analysis tools"
  ],
  screenshots: [
    "/images/p2-charts.png",
    "/images/p2-editor.png",
    "/images/p2-dashboard.png"
  ],
  contributors: [
    "David Park - Data Scientist",
    "Lisa Zhang - Frontend Specialist",
    "James Wilson - DevOps Engineer"
  ]
};
