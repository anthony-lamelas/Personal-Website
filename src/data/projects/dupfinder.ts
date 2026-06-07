import { Project } from "../../types/project";

export const dupfinder: Project = {
  id: "dupfinder",
  title: "Dupfinder",
  shortDescription: "A fast C++ command-line utility to identify duplicate files by analyzing size and calculating hash signatures.",
  description: "Dupfinder is a C++ tool designed to rapidly scan directories and locate duplicate files. It improves performance by first filtering files by byte-size before executing file hashing via the xxhash algorithm. The project is fully tested using Google Test and utilizes Premake for build generation.",
  technologies: ["C++", "GoogleTest", "Premake"],
  image: "/images/dupe.png",
  github: "https://github.com/anthony-lamelas/dupfinder",
  role: "Sole Developer",
  features: [
    "Duplicate detection using xxhash",
    "Optimized search by filtering matching file sizes before hashing",
    "Comprehensive unit testing with GoogleTest",
  ],
  screenshots: []
};
