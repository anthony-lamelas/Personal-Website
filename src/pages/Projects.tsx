import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Github, Code, Search, X } from "lucide-react";
import { projects } from "@/data/projects";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import Reveal from "@/components/Reveal";

const PROGRAMMING_LANGUAGES = [
  "Python",
  "JavaScript",
  "TypeScript",
  "Java",
  "C++",
  "C",
  "Ruby",
  "HTML/CSS",
  "SQL",
];

const Projects = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);

  // Get available languages that exist in projects
  const availableLanguages = useMemo(() => {
    const langSet = new Set<string>();
    projects.forEach((project) => {
      project.technologies.forEach((tech) => {
        if (PROGRAMMING_LANGUAGES.includes(tech)) {
          langSet.add(tech);
        }
      });
    });
    return PROGRAMMING_LANGUAGES.filter((lang) => langSet.has(lang));
  }, []);

  // Filter projects based on search and selected languages
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const searchLower = searchQuery.toLowerCase();
      const matchesSearch =
        searchQuery === "" ||
        project.title.toLowerCase().includes(searchLower) ||
        project.shortDescription.toLowerCase().includes(searchLower) ||
        project.technologies.some((tech) => tech.toLowerCase().includes(searchLower));

      const matchesLanguage =
        selectedLanguages.length === 0 ||
        selectedLanguages.some((lang) => project.technologies.includes(lang));

      return matchesSearch && matchesLanguage;
    });
  }, [searchQuery, selectedLanguages]);

  const toggleLanguage = (lang: string) => {
    setSelectedLanguages((prev) =>
      prev.includes(lang)
        ? prev.filter((l) => l !== lang)
        : [...prev, lang]
    );
  };

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedLanguages([]);
  };

  const hasActiveFilters = searchQuery !== "" || selectedLanguages.length > 0;

  return (
    <div className="min-h-screen pt-16">
      <div className="mx-auto max-w-7xl px-4 py-20">
        {/* Header */}
        <Reveal className="mb-12 text-center">
          <p className="eyebrow mb-3">Selected work</p>
          <h1 className="mb-6 font-display text-5xl font-bold text-white">
            My Projects
          </h1>
          <p className="mx-auto max-w-3xl text-xl text-gray-300">
            A collection of projects that showcase my skills in web development,
            AI/ML, and more. Each project represents a unique challenge and
            learning opportunity.
          </p>
        </Reveal>

        {/* Filter Bar */}
        <Reveal className="mb-10 space-y-4">
          {/* Search and Clear */}
          <div className="flex flex-col gap-4 sm:flex-row">
            <div className="relative flex-1">
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                size={20}
              />
              <Input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="border-white/10 bg-white/[0.04] pl-10 text-white placeholder:text-gray-400 focus:border-sky-500 focus:ring-sky-500/20"
              />
            </div>
            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="flex items-center gap-2 rounded-lg bg-white/[0.06] px-4 py-2 text-gray-300 transition-all duration-200 hover:bg-white/10 hover:text-white"
              >
                <X size={16} />
                Clear filters
              </button>
            )}
          </div>

          {/* Language Filters */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="mr-2 font-mono text-xs uppercase tracking-wider text-gray-400">
              Language:
            </span>
            {availableLanguages.map((lang) => (
              <Badge
                key={lang}
                variant={selectedLanguages.includes(lang) ? "default" : "outline"}
                className={`cursor-pointer transition-all duration-200 ${
                  selectedLanguages.includes(lang)
                    ? "border-sky-500 bg-sky-500 text-slate-950 hover:bg-sky-400"
                    : "border-white/15 bg-white/[0.04] text-gray-300 hover:border-sky-400/40 hover:bg-white/10"
                }`}
                onClick={() => toggleLanguage(lang)}
              >
                {lang}
              </Badge>
            ))}
          </div>
        </Reveal>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, i) => (
              <Reveal key={project.id} delay={(i % 3) * 0.08}>
                <Card className="glass-card card-hover group h-full overflow-hidden border-white/10 bg-white/[0.04]">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      className={`h-full w-full transition-transform duration-500 group-hover:scale-110 ${
                        project.id === "rl-hls" || project.image.includes("hls.png")
                          ? "bg-white object-contain"
                          : project.id === "svg-generation" ||
                            project.id === "science-qa"
                          ? "object-contain"
                          : "object-cover"
                      }`}
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="mb-3 text-xl font-bold text-white">
                      {project.title}
                    </h3>
                    <p className="mb-4 line-clamp-3 text-gray-300">
                      {project.shortDescription}
                    </p>

                    {/* Technologies */}
                    <div className="mb-4 flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full bg-sky-500/10 px-3 py-1 font-mono text-xs text-sky-300"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="rounded-full bg-white/5 px-3 py-1 font-mono text-xs text-gray-300">
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center justify-between">
                      <Link
                        to={`/projects/${project.id}`}
                        className="inline-flex items-center rounded-lg bg-gradient-to-r from-sky-500 to-cyan-400 px-4 py-2 font-medium text-slate-950 transition-all duration-300 hover:scale-105"
                      >
                        <Code className="mr-2" size={16} />
                        View Details
                      </Link>

                      <div className="flex space-x-2">
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub repository"
                            className="p-2 text-gray-300 transition-colors hover:text-sky-400"
                          >
                            <Github size={20} />
                          </a>
                        )}
                        {project.demo && (
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Live demo"
                            className="p-2 text-gray-300 transition-colors hover:text-sky-400"
                          >
                            <ExternalLink size={20} />
                          </a>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Reveal>
            ))
          ) : (
            <div className="col-span-full py-16 text-center">
              <p className="text-lg text-gray-400">
                No projects match your filters.
              </p>
              <button
                onClick={clearFilters}
                className="mt-4 text-sky-400 underline hover:text-sky-300"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
