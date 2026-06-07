import { Project } from "../../types/project";

export const multithreadedImageProcessor: Project = {
  id: "multithreaded-image-processor",
  title: "Multithreaded Image Processor",
  shortDescription: "A C++ image processing tool utilizing a custom thread pool for parallel batch execution.",
  description: "A command-line image processing engine written in modern C++17. The application recursively scans directories for image files and processes them in parallel utilizing a custom-built Thread Pool. It implements algorithms for image convolution (blur, sharpen) and pixel manipulation without relying on external UI dependencies.",
  technologies: ["C++"],
  image: "/images/image_proc.png",
  github: "https://github.com/anthony-lamelas/multithreaded_image_processor",
  role: "Sole Developer",
  features: [
    "Custom Thread Pool implementation using mutexes and condition variables",
    "Directory traversal for batch image processing",
    "Implemented 3x3 convolution kernels for Blur and Sharpen effects",
  ],
  screenshots: []
};
