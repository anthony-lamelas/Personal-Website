
import { Project } from "../../types/project";

export const windowWarden: Project = {
  id: "window-warden",
  title: "Window Warden",
  shortDescription: "An Arduino-powered window cleaning robot capable of traversing and cleaning semi-vertical glass surfaces.",
  description: "This repository contains the code for Window Warden, a window cleaning robot project built as part of an Introduction to Engineering class at NYU. The goal of this project was to design and prototype a robotic system that can automate the cleaning of vertical window surfaces, combining hardware engineering with programming for effective movement and cleaning functions.",
  technologies: ["Arduino", "C", "DC Motors", "Ultrasonic Sensors"],
  image: "/lovable-uploads/a4d2d90b-aaf8-4432-be2a-412fd562d0bc.png",
  github: "https://github.com/anthony-lamelas/Window-Warden-Code",
  role: "Robotics Engineer",
  features: [
    "Arduino-based motor control system for vertical movement",
    "Ultrasonic sensor integration for edge detection",
    "Liquid dispensing mechanism for cleaning solution",
    "Ability to traverse surfaces at 45-degree angles",
  ],
  challenges: [
    "Designing a lightweight yet secure frame for vertical adhesion",
    "Creating reliable cleaning mechanisms for uneven surfaces",
  ],
  learnings: [
    "Arduino programming for hardware control",
    "Motor control and sensor integration",
    "Physical prototyping and testing methodologies",
  ],
  screenshots: [
    "/lovable-uploads/acc57b61-e5b2-4e14-b7e4-4ef131fcd228.png",
    "/lovable-uploads/209957d9-a7f6-4e8b-8bca-94c4e447f511.png",
    "/lovable-uploads/34fb0c7f-ea1f-4e0c-9329-1e3cca01329e.png"
  ]
};
