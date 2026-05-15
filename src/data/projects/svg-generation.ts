import { Project } from "../../types/project";

export const svgGeneration: Project = {
  id: "svg-generation",
  title: "SVG Generation (Kaggle Competition)",
  shortDescription: "A Kaggle competition project focused on fine-tuning a small model to generate accurate SVGs from text prompts.",
  description: "This was a Kaggle competition for my master's level deep learning course where we were tasked with fine-tuning a small language model to generate the most accurate scalable vector graphics (SVGs) based on text prompts. We trained a Qwen-3B model using Low-Rank Adaptation (LoRA) and developed custom analysis notebooks to debug failures and improve generation quality.",
  technologies: ["Python", "Jupyter Notebook", "PyTorch", "LoRA", "Qwen-3B"],
  image: "/images/svg_generation.png",
  github: "https://github.com/anthony-lamelas/SVG_Generation",
  demo: "https://drive.google.com/file/d/1ZdrdubX_6IX-IEIuBr31U36RUB1tHYeb/view?usp=sharing",
  role: "Machine Learning Engineer",
  features: [
    "Fine-tuned a Qwen-3B model using LoRA to generate accurate SVGs from text prompts",
    "Developed custom evaluation and debugging notebooks to analyze model generation failures",
    "Optimized model training to fit within Kaggle competition hardware constraints",
    "Managed robust submission pipelines with automated CSV generation"
  ],
  contributors: [
    {
      name: "Omobolaji Alabi",
      linkedin: "https://www.linkedin.com/in/omobolaji-alabi/"
    }
  ],
  screenshots: []
};
