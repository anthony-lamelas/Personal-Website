import { Project } from "../../types/project";

export const scienceQa: Project = {
  id: "science-qa",
  title: "ScienceQA Vision-Language Model Fine-Tuning",
  shortDescription: "Fine-tuned a multimodal vision-language model under compute constraints to solve complex science questions involving text and images.",
  description: "This project focused on fine-tuning a vision-language model to solve science questions from the ScienceQA dataset. Because the multiple-choice questions contained both textual and visual (image) resources, the task was inherently multimodal. We successfully fine-tuned the model under strict compute constraints to accurately predict the correct answers based on the combined text and image context.",
  technologies: ["Python", "PyTorch", "SmolVLM-500M-Instruct","Hugging Face"],
  image: "/images/sqa.png",
  github: "https://github.com/anthony-lamelas/sci_mc_pred",
  demo: "https://drive.google.com/file/d/1NShMGIBF5er2_LXav8TH8ozI4z9RTsYU/view?usp=sharing",
  role: "Machine Learning Engineer",
  features: [
    "Fine-tuned a multimodal vision-language model to answer complex science questions",
    "Handled diverse inputs consisting of both text and image resources",
    "Optimized training pipelines to work efficiently within strict compute constraints",
    "Evaluated model performance on the comprehensive ScienceQA dataset"
  ],
  contributors: [
    {
      name: "Omobolaji Alabi",
      linkedin: "https://www.linkedin.com/in/omobolaji-alabi/"
    }
  ],
  screenshots: []
};
