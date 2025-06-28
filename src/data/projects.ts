
import { Project } from "../types/project";
import { paddlerImprovementSystem } from "./projects/paddler-improvement-system";
import { windowWarden } from "./projects/window-warden";
import { flightHub } from "./projects/flighthub";
import { faceCrime } from "./projects/facecrime";
import { scalingSemanticCategories } from "./projects/scaling-semantic-categories";
import { panelize } from "./projects/panelize";
import { paddlePrompt } from "./projects/paddleprompt";
import { e20AssemblySimulator } from "./projects/e20-assembly-simulator";
import { wouldYouRather } from "./projects/would-you-rather";

export type { Project } from "../types/project";

export const projects: Project[] = [
  paddlerImprovementSystem,
  windowWarden,
  flightHub,
  faceCrime,
  scalingSemanticCategories,
  panelize,
  paddlePrompt,
  e20AssemblySimulator,
  wouldYouRather
];
