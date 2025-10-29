
import { Project } from "../../types/project";

export const e20AssemblySimulator: Project = {
  id: "e20-assembly-simulator",
  title: "E20 Assembly Simulator",
  shortDescription: "A C++ assembly language simulator for the E20 assembly language instruction set with two layers of cache.",
  description: "A comprehensive assembly language simulator written in C++ that emulates the E20 instruction set architecture. The simulator features a complete implementation of E20 assembly language processing, including instruction parsing, execution, and memory management. It also includes a sophisticated customizable cache system with direct-associative and set-associative configurations across two levels (L1 and L2), allowing for detailed performance analysis and optimization of memory access patterns.",
  technologies: ["C++", "E20 Assembly Language"],
  image: "/images/0a0b7c67-82c8-446f-a009-412a1183345a.png",
  github: "https://github.com/anthony-lamelas/E20-Assembly-Simulator",
  role: "Systems Developer",    
  features: [
    "Complete E20 instruction set implementation",
    "Assembly language parsing and validation",
    "Memory management and register simulation",
    "Customizable two-level cache architecture (L1 and L2)",
    "Configurable direct-associative and set-associative cache modes",
  ],
  screenshots: []
};
