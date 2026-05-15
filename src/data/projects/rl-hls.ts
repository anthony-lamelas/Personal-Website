import { Project } from "../../types/project";

export const rlHls: Project = {
  id: "rl-hls",
  title: "Reinforcement Learning for High Level Synthesis",
  shortDescription: "Built an LLM-driven FPGA/ASIC design space exploration system using Python, GRPO reinforcement learning, and database caching.",
  description: "Built an LLM-driven FPGA/ASIC design space exploration system. We were the first to use an LLM for this purpose by inserting pragmas into C++ code and applying reinforcement learning on the results to optimize hardware. I contributed as an Undergraduate Researcher under the guidance of PhD Lead Andrew Hennessee.",
  technologies: ["Python", "SLURM", "Jupyter Notebooks", "Vitis HLS", "Qwen-7B"],
  image: "/images/hls.png",
  demo: "https://drive.google.com/file/d/1oDKsoizttJvC-hfPeT8NlBlNKM2MhyJO/view",
  role: "Undergraduate Researcher",
  features: [
    "Built an LLM-driven FPGA/ASIC design space exploration system in Python",
    "Generated high-level synthesis (HLS) directives with models and evaluated them using Vitis HLS",
    "Fine-tuned a Qwen-7B model using GRPO reinforcement learning for hardware optimization strategies",
    "Implemented database caching to significantly improve training speed"
  ],
  contributors: [
    {
      name: "Andrew Hennessee (PhD Lead)",
      linkedin: "https://www.linkedin.com/in/andrew-hennessee/"
    }
  ],
  screenshots: ["/images/grpo.png", "/images/rl4hls_graph.png"]
};
