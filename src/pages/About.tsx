import { Card, CardContent } from "@/components/ui/card";
import {
  Heart,
  Briefcase,
  Gamepad2,
  Award,
  GraduationCap,
} from "lucide-react";
import { Link } from "react-router-dom";
import Reveal from "@/components/Reveal";

interface TimelineEntry {
  title: string;
  subtitle: string;
  note?: string;
  bullets: string[];
}

const experience: TimelineEntry[] = [
  {
    title: "Software Engineering Intern",
    subtitle: "Google | May 2026 - August 2026",
    bullets: [
      "Engineered an AI agent in Python by developing custom skills and integrating into an existing MCP server to automate complex, context-aware experiment reporting",
      "Optimized a core SQL pipeline processing billions of telemetry data points by decoupling logic into an intermediate database layer, which improved data freshness by six times, lowered compute costs, and minimized engineering on-call burden",
    ],
  },
  {
    title: "Undergraduate AI Researcher",
    subtitle:
      "New York University (Ensure Research Group) | January 2026 - Present",
    bullets: [
      "Building an LLM-driven FPGA/ASIC design space exploration system in Python where models generate high-level synthesis (HLS) directives, evaluated using Vitis HLS",
      "Fine-tuning a Qwen-7B model using GRPO reinforcement learning to learn hardware optimization strategies",
    ],
  },
  {
    title: "Data Science and Applied AI Intern",
    subtitle: "Direct Supply | May 2025 - December 2025",
    bullets: [
      "Built SQL-powered tools from large datasets in Python, categorized them into specialized GPT-4o and GPT-4.1 agents using AutoGen, and used the agents to generate tailored sales talking points, reducing meeting prep time",
      "Delivered these agents through a RESTful API, integrated them into the frontend in React, and deployed to production on AWS ECS via GitLab CI/CD pipeline",
      "Achieved an 11% mean absolute percentage error on dispatch forecasting by training CatBoost and regression models using Scikit-learn in a Spark pipeline",
      "Increased service company readiness by writing a Python script leveraging AWS Lambda, SQS, and SES to send automated severe weather warnings",
    ],
  },
  {
    title: "Research Intern",
    subtitle: "Pomu (Fashion Manufacturer Recommendation) | April 2024 - May 2025",
    note: "Conducted research on improving vision transformer accuracy.",
    bullets: [
      "Utilized a CLIP-based image classification tool via UNIX command line to process over 500,000 images",
      "Scripted in Python to measure model accuracy and analyze semantic category scaling trends",
      "Authored research findings in LaTeX for academic publication",
    ],
  },
  {
    title: "Engineering Teaching Assistant",
    subtitle: "NYU Tandon EG-UY 1004 | August 2024 - Present",
    note: "Mentoring freshman students in their semester long design project for the Intro to Engineering class.",
    bullets: [
      "Head of payroll auditing work hours and visualizing financial data",
      "Assisting over 350 students in the design of prototypes, focusing on circuitry, programming, and CAD",
      "Promoting teamwork, leadership, and technical development",
    ],
  },
  {
    title: "Data & Analytics Intern",
    subtitle: "NZXT (PC Gaming Hardware) | June 2022 - July 2022",
    note: "Analyzing data leading to strategic recommendations.",
    bullets: [
      "Composed SQL queries in Mode (a web-based analytics platform) to pull data from the Snowflake data warehouse",
      "Analyzed over 75 fields of PC monitoring data by running tailored SQL queries and identifying key relationships among tables, leading to informed strategic recommendations utilizing Tableau",
    ],
  },
];

const education: TimelineEntry[] = [
  {
    title: "New York University Tandon School of Engineering",
    subtitle: "Sep 2023 - May 2027 | New York, NY",
    note: "Major: Computer Science, Minor: Mathematics",
    bullets: ["Dean's List"],
  },
  {
    title: "Belen Jesuit Preparatory School",
    subtitle: "August 2019 - May 2023 | Miami, FL",
    note: "High School Diploma",
    bullets: ["Cum Laude"],
  },
];

const achievements: TimelineEntry[] = [
  {
    title: "Walmart Sophomore Summit (Software Engineering Track)",
    subtitle: "Walmart Global Tech | April 2025",
    note: "Selected as one of 100 participants from 3,000+ applicants for the Walmart Sophomore Summit – SWE Track.",
    bullets: [
      "Engaged in hands-on workshops, networking, and technical sessions with Walmart Global Tech engineers",
    ],
  },
  {
    title: "Kohl's Emerging Talent Summit",
    subtitle: "Kohl's | April 2025",
    note: "Selected as one of 200 participants for the Kohl's Emerging Talent Summit.",
    bullets: [
      "Engaged in workshops, networking, and interviews with other students and members of the Kohl's team",
    ],
  },
];

const hobbies = [
  "Teaching",
  "Volleyball",
  "Basketball",
  "Weightlifting",
  "Movies",
  "Anime",
  "Trying New Foods",
  "Travel",
];

/** Animated vertical timeline used for Experience / Education / Achievements. */
const Timeline = ({ entries }: { entries: TimelineEntry[] }) => (
  <div className="relative space-y-8 pl-8">
    {/* The vertical rail */}
    <div className="absolute bottom-2 left-[6px] top-2 w-px bg-gradient-to-b from-sky-400/60 via-sky-400/20 to-transparent" />
    {entries.map((entry, i) => (
      <Reveal key={entry.title} delay={i * 0.08}>
        <div className="relative">
          {/* Node */}
          <span className="absolute -left-[30px] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-sky-400 bg-background shadow-[0_0_12px_hsl(199_89%_55%/0.7)]" />
          <h3 className="text-xl font-semibold text-white">{entry.title}</h3>
          <p className="mb-2 font-mono text-sm text-sky-300">{entry.subtitle}</p>
          {entry.note && <p className="mb-3 text-gray-300">{entry.note}</p>}
          <ul className="space-y-1.5 text-gray-300">
            {entry.bullets.map((bullet, b) => (
              <li key={b} className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-sky-400/70" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    ))}
  </div>
);

const SectionCard = ({
  icon: Icon,
  title,
  children,
}: {
  icon: typeof Briefcase;
  title: string;
  children: React.ReactNode;
}) => (
  <Reveal>
    <Card className="glass-card border-white/10 bg-white/[0.04]">
      <CardContent className="p-8">
        <div className="mb-8 flex items-center">
          <Icon className="mr-3 text-sky-400" size={28} />
          <h2 className="font-display text-3xl font-bold text-white">{title}</h2>
        </div>
        {children}
      </CardContent>
    </Card>
  </Reveal>
);

const About = () => {
  return (
    <div className="min-h-screen pt-16">
      <div className="mx-auto max-w-4xl px-4 py-20">
        {/* Header with Profile Picture */}
        <Reveal className="mb-16 text-center">
          <p className="eyebrow mb-4">Get to know me</p>
          <h1 className="mb-8 font-display text-5xl font-bold text-white">
            About Me
          </h1>

          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-sky-500/40 to-cyan-400/40 blur-xl" />
              <div className="relative h-72 w-72 overflow-hidden rounded-full border-2 border-sky-400/40">
                <img
                  src="/images/48263676-0d04-449e-9a56-570b4d44b04b.png"
                  alt="Anthony Lamelas"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>

          <p className="mx-auto max-w-3xl text-xl text-gray-300">
            Learn more about my journey, passions, and what drives me in the
            world of computer science.
          </p>
        </Reveal>

        {/* Main Content */}
        <div className="space-y-12">
          {/* My Story */}
          <SectionCard icon={Heart} title="My Story">
            <div className="space-y-4 text-lg leading-relaxed text-gray-300">
              <p>
                Unlike many of my peers, when I first started at NYU I had almost
                no prior experience in computer science. I was majoring in
                electrical and computer engineering at the time and had almost no
                idea what I wanted to do with my life. However, I quickly realized
                I needed to learn how to code and I needed to learn quickly.
              </p>
              <p>
                After throwing myself into countless online courses and unfinished
                projects I eventually developed a strong interest in the field of
                AI and machine learning. The ability to directly apply the
                math/statistics I was learning in school combined with my quickly
                developing programming skills was very appealing. I also became
                fascinated with the impressive capabilities of LLMs and machine
                learning models when given the right data/prompting. However, as
                of recent, I have also developed an interest in C++ development and
                I plan on further exploring that field as well.
              </p>
            </div>
          </SectionCard>

          {/* Experience */}
          <SectionCard icon={Briefcase} title="Experience">
            <Timeline entries={experience} />
          </SectionCard>

          {/* Education */}
          <SectionCard icon={GraduationCap} title="Education">
            <Timeline entries={education} />
          </SectionCard>

          {/* Achievements */}
          <SectionCard icon={Award} title="Achievements">
            <Timeline entries={achievements} />
          </SectionCard>

          {/* Hobbies */}
          <SectionCard icon={Gamepad2} title="Hobbies & Interests">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
              {hobbies.map((hobby, i) => (
                <Reveal key={hobby} delay={(i % 4) * 0.06}>
                  <div className="rounded-lg border border-white/5 bg-white/5 p-4 text-center transition-all duration-300 hover:border-sky-400/30 hover:bg-white/10">
                    <p className="font-medium text-white">{hobby}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </SectionCard>
        </div>

        {/* Contact CTA */}
        <Reveal className="mt-16 text-center">
          <h3 className="mb-4 font-display text-2xl font-bold text-white">
            Want to know more?
          </h3>
          <p className="mb-6 text-gray-300">
            I'd love to connect and discuss opportunities, projects, or just chat
            about technology.
          </p>
          <Link
            to="/contact"
            className="inline-block rounded-lg bg-gradient-to-r from-sky-500 to-cyan-400 px-6 py-3 font-semibold text-slate-950 shadow-lg shadow-sky-500/25 transition-all duration-300 hover:scale-105 hover:shadow-sky-400/40"
          >
            Get In Touch
          </Link>
        </Reveal>
      </div>
    </div>
  );
};

export default About;
