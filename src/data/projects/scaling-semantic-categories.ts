
import { Project } from "../../types/project";

export const scalingSemanticCategories: Project = {
  id: "scaling-semantic-categories-vision-transformers",
  title: "Scaling Semantic Categories in Vision Transformers",
  shortDescription: "Research exploring how increasing semantic categories impacts classification performance of vision transformers (ViTs).",
  description: "This study explores the impact of scaling semantic categories on the image classification performance of vision transformers (ViTs). Using the CLIP server provided by Jina AI for experimentation, the research hypothesizes that as the number of ground truth and artificially introduced semantically equivalent categories increases, the labeling accuracy of ViTs improves until a theoretical maximum is reached. Through systematic testing across various datasets, the findings show that semantic scaling initially increases model performance by approximately 2% before diminishing returns or performance decline occurs.",
  technologies: ["Python", "Pandas", "Matplotlib", "CLIP", "Jina AI", "Unix Command Line", "LaTeX"],
  image: "/images/b0852dc4-6ca3-4451-a365-325663e92c1c.png",
  github: "https://github.com/Pomu-io/CLIP_category_singularity",
  demo: "https://arxiv.org/abs/2503.12617",
  role: "Research Developer",
  features: [
    "Custom functions for testing Vision Transformer accuracy across multiple datasets",
    "Systematic introduction of semantically equivalent categories",
    "Comprehensive analysis of accuracy trends until plateau",
    "Evaluation across diverse Kaggle datasets",
    "Data visualization of performance metrics",
    "Format adaptation for diverse dataset structures"
  ],
  challenges: [
    "Processing and standardizing diverse image dataset formats",
    "Creating methodology for introducing equivalent semantic categories",
    "Determining the optimal threshold for category introduction",
    "Analyzing complex accuracy trends across different datasets",
  ],
  learnings: [
    "Vision Transformer behavior with scaled semantic categories",
    "Advanced data analysis techniques",
    "Statistical methods for identifying performance plateaus",
    "Research paper methodology and publication process",
  ],
  screenshots: []
};
