import { useEffect, useState } from "react";
import {
  ArrowRight,
  Code,
  Database,
  BookOpen,
  FileCode,
  GitBranch,
  ChevronDown,
  Briefcase,
  Github,
  Cpu,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import Reveal from "@/components/Reveal";
import { projects } from "@/data/projects";

const ROLES = [
  "Software Engineer",
  "AI Engineer",
  "Data Scientist",
];

const RoleRotator = () => {
  const reduceMotion = useReducedMotion();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (reduceMotion) return;
    const timer = setInterval(
      () => setIndex((prev) => (prev + 1) % ROLES.length),
      2600
    );
    return () => clearInterval(timer);
  }, [reduceMotion]);

  return (
    <span className="relative inline-flex h-[1.2em] items-center overflow-hidden align-bottom">
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -14 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="text-gradient font-display font-semibold"
        >
          {ROLES[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
};

const Index = () => {
  const reduceMotion = useReducedMotion();

  const skills = [
    { name: "Python", icon: Code },
    { name: "SQL", icon: Database },
    { name: "C/C++", icon: Cpu },
    { name: "Ruby", icon: Code },
    { name: "React", icon: Code },
    { name: "TypeScript", icon: FileCode },
    { name: "Git/GitHub", icon: GitBranch },
    { name: "AWS", icon: FileCode },
  ];

  const experienceHighlights = [
    {
      role: "Software Engineering Intern",
      company: "Google",
      period: "May 2026 – Aug 2026",
      blurb:
        "Building AI agents that write experiment reports from complex metrics, and optimizing SQL pipelines to cut compute costs.",
    },
    {
      role: "Undergraduate AI Researcher",
      company: "NYU (Ensure Research Group)",
      period: "Jan 2026 – Present",
      blurb:
        "LLM-driven FPGA/ASIC design-space exploration; fine-tuning Qwen-7B with GRPO reinforcement learning.",
    },
    {
      role: "Data Science & Applied AI Intern",
      company: "Direct Supply",
      period: "May 2025 – Dec 2025",
      blurb:
        "Developed a multi-agent system for an internal CRM app, delivered via a RESTful API and deployed to production on AWS ECS.",
    },
  ];

  const coursework = [
    { name: "Data Structures & Algorithms", code: "CS-UY 1134" },
    { name: "Object Oriented Programming", code: "CS-UY 2124" },
    { name: "Discrete Mathematics", code: "MA-UY 2314" },
    { name: "Design & Analysis of Algorithms", code: "CS-UY 2413" },
    { name: "Intro to Databases", code: "CS-UY 3083" },
    { name: "Linear Algebra", code: "MA-UY 1044" },
    { name: "Computer Architecture & Organization", code: "CS-UY 2214" },
    { name: "Calculus I-III", code: "MA-UY 1324, 1124, 2114" },
    { name: "Probability & Statistics", code: "MA-UY 2224" },
    { name: "Machine Learning", code: "CS-UY 4563" },
    { name: "Operating Systems", code: "CS-UY 3224" },
    { name: "Software Engineering", code: "CS-UY 4513" },
    { name: "Natural Language Processing", code: "CSCI-UA 469" },
    { name: "Computer Security", code: "CS-UY 3923" },
    { name: "Deep Learning", code: "CS-GY 6953" },
  ];

  const featuredProjects = projects.slice(0, 3);

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
  };
  const item = {
    hidden: { opacity: 0, y: 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative flex min-h-screen items-center justify-center px-4">
        <motion.div
          className="mx-auto max-w-4xl text-center"
          variants={container}
          initial={reduceMotion ? false : "hidden"}
          animate={reduceMotion ? false : "show"}
        >
          <motion.p variants={item} className="eyebrow mb-6">
            Computer Science · NYU Tandon · Google
          </motion.p>

          <motion.h1
            variants={item}
            className="mb-6 font-display text-5xl font-bold leading-tight text-white md:text-7xl"
          >
            Hi, I'm <span className="text-gradient">Anthony Lamelas</span>
          </motion.h1>

          <motion.div
            variants={item}
            className="mb-8 flex items-center justify-center gap-2 text-2xl md:text-3xl"
          >
            <span className="text-gray-400">I'm a</span>
            <RoleRotator />
          </motion.div>

          <motion.p
            variants={item}
            className="mx-auto mb-10 max-w-2xl text-lg text-gray-300 md:text-xl"
          >
            Software Engineering Intern at Google, passionate about
            building AI agents, machine learning systems, and full-stack software.
          </motion.p>

          <motion.div
            variants={item}
            className="flex flex-col justify-center gap-4 sm:flex-row"
          >
            <Link
              to="/projects"
              className="group inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-sky-500 to-cyan-400 px-8 py-3 font-semibold text-slate-950 shadow-lg shadow-sky-500/25 transition-all duration-300 hover:scale-105 hover:shadow-sky-400/40"
            >
              View My Work
              <ArrowRight
                className="ml-2 transition-transform group-hover:translate-x-1"
                size={20}
              />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center justify-center rounded-lg border border-sky-400/40 px-8 py-3 font-semibold text-sky-300 transition-all duration-300 hover:border-sky-400 hover:bg-sky-400/10"
            >
              Learn More About Me
            </Link>
            <a
              href="https://github.com/anthony-lamelas"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg border border-white/10 px-8 py-3 font-semibold text-gray-200 transition-all duration-300 hover:border-white/30 hover:bg-white/5"
            >
              <Github className="mr-2" size={20} />
              GitHub
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 flex w-full justify-center">
          <div className="flex animate-bounce flex-col items-center">
            <span className="mb-2 text-sm text-gray-400">Scroll for More</span>
            <ChevronDown className="text-sky-400" size={24} />
          </div>
        </div>
      </section>

      {/* Experience Highlight Section */}
      <section className="px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <Reveal className="mb-12 text-center">
            <p className="eyebrow mb-3">Where I've worked</p>
            <h2 className="font-display text-4xl font-bold text-white">
              Experience Highlights
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {experienceHighlights.map((exp, i) => (
              <Reveal key={exp.company} delay={i * 0.1}>
                <Card className="glass-card card-hover h-full border-white/10 bg-white/[0.04]">
                  <CardContent className="flex h-full flex-col p-6">
                    <Briefcase className="mb-4 text-sky-400" size={26} />
                    <h3 className="text-lg font-semibold text-white">
                      {exp.role}
                    </h3>
                    <p className="mb-1 text-sky-300">{exp.company}</p>
                    <p className="mb-4 font-mono text-xs text-gray-400">
                      {exp.period}
                    </p>
                    <p className="text-sm leading-relaxed text-gray-300">
                      {exp.blurb}
                    </p>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10 text-center">
            <Link
              to="/about"
              className="group inline-flex items-center font-medium text-sky-400 transition-colors hover:text-sky-300"
            >
              See my full experience
              <ArrowRight
                className="ml-1.5 transition-transform group-hover:translate-x-1"
                size={18}
              />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Skills Section */}
      <section className="px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <Reveal className="mb-12 text-center">
            <p className="eyebrow mb-3">What I work with</p>
            <h2 className="font-display text-4xl font-bold text-white">
              Technical Competencies
            </h2>
          </Reveal>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
            {skills.map((skill, index) => (
              <Reveal key={skill.name} delay={index * 0.06}>
                <Card className="glass-card card-hover group border-white/10 bg-white/[0.04]">
                  <CardContent className="flex flex-col items-center p-6">
                    <skill.icon
                      className="mb-4 text-sky-400 transition-transform duration-300 group-hover:scale-110"
                      size={36}
                    />
                    <h3 className="text-center text-lg font-semibold text-white">
                      {skill.name}
                    </h3>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="bg-black/20 px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <Reveal className="mb-12 text-center">
            <p className="eyebrow mb-3">Selected work</p>
            <h2 className="font-display text-4xl font-bold text-white">
              Featured Projects
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {featuredProjects.map((project, i) => (
              <Reveal key={project.id} delay={i * 0.1}>
                <Link to={`/projects/${project.id}`} className="group block h-full">
                  <Card className="glass-card card-hover h-full overflow-hidden border-white/10 bg-white/[0.04]">
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="mb-2 text-lg font-bold text-white">
                        {project.title}
                      </h3>
                      <p className="mb-4 line-clamp-2 text-sm text-gray-300">
                        {project.shortDescription}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="rounded-full bg-sky-500/10 px-3 py-1 font-mono text-xs text-sky-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10 text-center">
            <Link
              to="/projects"
              className="group inline-flex items-center font-medium text-sky-400 transition-colors hover:text-sky-300"
            >
              Browse all projects
              <ArrowRight
                className="ml-1.5 transition-transform group-hover:translate-x-1"
                size={18}
              />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Coursework Section */}
      <section className="px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <Reveal className="mb-12 text-center">
            <p className="eyebrow mb-3">Academic foundation</p>
            <h2 className="font-display text-4xl font-bold text-white">
              Relevant Coursework
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {coursework.map((course, i) => (
              <Reveal key={course.name} delay={(i % 3) * 0.06}>
                <Collapsible>
                  <Card className="glass-card border-white/10 bg-white/[0.04] transition-colors hover:border-sky-400/30">
                    <CollapsibleTrigger className="w-full text-left">
                      <CardContent className="p-6">
                        <div className="flex items-center">
                          <BookOpen className="mr-3 text-sky-400" size={20} />
                          <h3 className="text-lg font-medium text-white">
                            {course.name}
                          </h3>
                        </div>
                      </CardContent>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <div className="px-6 pb-4 text-gray-300">
                        Course Code:{" "}
                        <span className="font-mono text-sky-300">
                          {course.code}
                        </span>
                      </div>
                    </CollapsibleContent>
                  </Card>
                </Collapsible>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-20">
        <Reveal className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 font-display text-4xl font-bold text-white">
            Ready to collaborate?
          </h2>
          <p className="mb-8 text-xl text-gray-300">
            I'm always open to discussing new opportunities and interesting
            projects.
          </p>
          <Link
            to="/contact"
            className="group inline-flex items-center rounded-lg bg-gradient-to-r from-sky-500 to-cyan-400 px-8 py-3 font-semibold text-slate-950 shadow-lg shadow-sky-500/25 transition-all duration-300 hover:scale-105 hover:shadow-sky-400/40"
          >
            Get In Touch
            <ArrowRight
              className="ml-2 transition-transform group-hover:translate-x-1"
              size={20}
            />
          </Link>
        </Reveal>
      </section>
    </div>
  );
};

export default Index;
