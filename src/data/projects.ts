
import { Project } from "../types/project";
import { paddlerImprovementSystem } from "./projects/paddler-improvement-system";
import { rlHls } from "./projects/rl-hls";
import { onTime } from "./projects/ontime";
import { svgGeneration } from "./projects/svg-generation";
import { scienceQa } from "./projects/science-qa";
import { windowWarden } from "./projects/window-warden";
import { flightHub } from "./projects/flighthub";
import { faceCrime } from "./projects/facecrime";
import { scalingSemanticCategories } from "./projects/scaling-semantic-categories";
import { panelize } from "./projects/panelize";
import { paddlePrompt } from "./projects/paddleprompt";
import { e20AssemblySimulator } from "./projects/e20-assembly-simulator";
import { p1 } from "./projects/thryft";
import { p2 } from "./projects/stroke_prediction";
import { p3 } from "./projects/slm";

export type { Project } from "../types/project";

export const projects: Project[] = [
  scienceQa,
  svgGeneration,
  onTime,
  rlHls,
  p1,
  p2,
  p3,
  paddlerImprovementSystem,
  windowWarden,
  flightHub,
  faceCrime,
  scalingSemanticCategories,
  panelize,
  paddlePrompt,
  e20AssemblySimulator,
];
