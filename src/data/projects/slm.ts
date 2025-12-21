
import { Project } from "../../types/project";

export const p3: Project = {
  id: "slm",
  title: "Comparing Small Language Models to Large Language Models for Grammar Correction and Text Simplification",
  shortDescription: "Fine-tuned and evaluated various small language models (SLMs) against large language models (LLMs) such as GPT-3.5 and GPT-4 for grammar correction and text simplification tasks.",
  description: "This project involved fine-tuning several small language models (SLMs) including GPT-2, GPT-Neo, Gemma 2b, and TinyLlama 1.1B on datasets for grammar correction and text simplification. The performance of these SLMs was then compared to that of large language models (LLMs) like GPT-3.5 and GPT-4 using metrics such as BLEU, SARI, and human evaluations. The models were trained on the Greene Cluster of NYU's HPC.",
  technologies: ["Python", "PyTorch", "Hugging Face Transformers", "Scikit-learn", "SLURM Scripting, LATEX"],
  image: "/images/slm.png",
  demo: "https://drive.google.com/file/d/1uPx37-JartzeTxGw081bZlonUJnqJk49/view?usp=sharing",
  role: "Lead Developer",
  features: [
    "Tuned various hyperaparameters including learning rate, batch size, temperature, and epochs for optimal SLM performance",
    "Evaluated models using BLEU and SARI metrics to assess grammar correction and text simplification quality",
    "Collected and visualized results using Matplotlib and Seaborn for comparative analysis",
    "Deployed training jobs on NYU's Greene Cluster using SLURM",
    "Documented findings and methodologies in a comprehensive research paper formatted with LaTeX"
  ],
  screenshots: [
  ]
};
