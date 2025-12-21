import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Github, Code, Search, X } from "lucide-react";
import { projects } from "@/data/projects";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

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
    <div className="pt-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-20">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-6">My Projects</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A collection of projects that showcase my skills in web development, 
            AI/ML, and more. Each project represents a unique challenge 
            and learning opportunity.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="mb-10 space-y-4">
          {/* Search and Clear */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <Input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500/20"
              />
            </div>
            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="flex items-center gap-2 px-4 py-2 text-gray-300 hover:text-white bg-white/10 hover:bg-white/15 rounded-lg transition-all duration-200"
              >
                <X size={16} />
                Clear filters
              </button>
            )}
          </div>

          {/* Language Filters */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-sm font-medium text-gray-400 mr-2">Language:</span>
            {availableLanguages.map((lang) => (
              <Badge
                key={lang}
                variant={selectedLanguages.includes(lang) ? "default" : "outline"}
                className={`cursor-pointer transition-all duration-200 ${
                  selectedLanguages.includes(lang)
                    ? "bg-blue-600 hover:bg-blue-700 text-white border-blue-600"
                    : "bg-white/5 hover:bg-white/10 text-gray-300 border-white/20 hover:border-white/40"
                }`}
                onClick={() => toggleLanguage(lang)}
              >
                {lang}
              </Badge>
            ))}
          </div>

          {/* Results count */}
          <div className="text-sm text-gray-400">
            Showing {filteredProjects.length} of {projects.length} projects
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <Card key={project.id} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                  <p className="text-gray-300 mb-4 line-clamp-3">{project.shortDescription}</p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-600/20 text-blue-300 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-3 py-1 bg-gray-600/20 text-gray-300 rounded-full text-sm">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center justify-between">
                    <Link
                      to={`/projects/${project.id}`}
                      className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-medium rounded-lg hover:from-blue-700 hover:to-blue-600 transition-all duration-300"
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
                          className="p-2 text-gray-300 hover:text-white transition-colors"
                        >
                          <Github size={20} />
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 text-gray-300 hover:text-white transition-colors"
                        >
                          <ExternalLink size={20} />
                        </a>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
            <div className="col-span-full text-center py-16">
              <p className="text-gray-400 text-lg">No projects match your filters.</p>
              <button
                onClick={clearFilters}
                className="mt-4 text-blue-400 hover:text-blue-300 underline"
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
