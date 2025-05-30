import { useParams, Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ArrowLeft, ExternalLink, Github, Code, Lightbulb, Target, CheckCircle, FileText, Users } from "lucide-react";
import { projects } from "@/data/projects";

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  // Add debugging
  console.log("Project ID:", id);
  console.log("Project found:", project);

  if (!project) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Project Not Found</h1>
          <p className="text-gray-300 mb-6">The project you're looking for doesn't exist.</p>
          <Link
            to="/projects"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-blue-600 transition-all duration-300"
          >
            <ArrowLeft className="mr-2" size={20} />
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  // Check if this is a research paper project (no screenshots but has arXiv demo link)
  const isResearchPaper = project.screenshots.length === 0 && project.demo && project.demo.includes("arxiv.org");

  return (
    <div className="pt-16 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-20">
        {/* Back Button */}
        <Link
          to="/projects"
          className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors mb-8"
        >
          <ArrowLeft className="mr-2" size={20} />
          Back to Projects
        </Link>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold text-white mb-6">{project.title}</h1>
          <p className="text-xl text-gray-300 mb-6 max-w-4xl">{project.description}</p>
          
          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-gray-800 text-white font-semibold rounded-lg hover:bg-gray-700 transition-all duration-300"
              >
                <Github className="mr-2" size={20} />
                View Code
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-blue-600 transition-all duration-300"
              >
                <ExternalLink className="mr-2" size={20} />
                {project.demo.includes("arxiv.org") ? "View Paper" : "Live Demo"}
              </a>
            )}
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Main Info */}
          <div className="lg:col-span-2 space-y-8">
            {/* Project Overview */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Code className="text-blue-400 mr-3" size={28} />
                  <h2 className="text-3xl font-bold text-white">Project Overview</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">My Role</h3>
                    <p className="text-gray-300">{project.role}</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-blue-600/20 text-blue-300 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Features */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <CheckCircle className="text-blue-400 mr-3" size={28} />
                  <h2 className="text-3xl font-bold text-white">Key Features</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.features.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="text-green-400 mr-3 mt-1 flex-shrink-0" size={16} />
                      <p className="text-gray-300">{feature}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Challenges */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Target className="text-blue-400 mr-3" size={28} />
                  <h2 className="text-3xl font-bold text-white">Challenges</h2>
                </div>
                <div className="space-y-4">
                  {project.challenges.map((challenge, index) => (
                    <div key={index} className="flex items-start">
                      <Target className="text-orange-400 mr-3 mt-1 flex-shrink-0" size={16} />
                      <p className="text-gray-300">{challenge}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Learnings */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Lightbulb className="text-blue-400 mr-3" size={28} />
                  <h2 className="text-3xl font-bold text-white">What I Learned</h2>
                </div>
                <div className="space-y-4">
                  {project.learnings.map((learning, index) => (
                    <div key={index} className="flex items-start">
                      <Lightbulb className="text-yellow-400 mr-3 mt-1 flex-shrink-0" size={16} />
                      <p className="text-gray-300">{learning}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Screenshots, Research Paper, Contributors, or Test Files */}
          <div className="space-y-6">
            {/* Research Paper Section - for projects with arXiv links and no screenshots */}
            {isResearchPaper ? (
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-4">Research Paper</h3>
                  <div className="text-center py-4">
                    <FileText className="mx-auto text-gray-400 mb-3" size={40} />
                    <p className="text-gray-300 mb-4 text-sm">Read the full research paper on arXiv</p>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-blue-600 transition-all duration-300 text-sm"
                    >
                      <ExternalLink className="mr-2" size={16} />
                      View Paper
                    </a>
                  </div>
                </CardContent>
              </Card>
            ) : (
              /* Screenshots Section - for projects with screenshots */
              project.screenshots.length > 0 && (
                <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-white mb-4">Project Screenshots</h3>
                    <div className="space-y-4">
                      {project.screenshots.map((screenshot, index) => (
                        <Dialog key={index}>
                          <DialogTrigger asChild>
                            <div className="aspect-video overflow-hidden rounded-lg cursor-pointer hover:opacity-80 transition-opacity">
                              <img
                                src={screenshot}
                                alt={`${project.title} screenshot ${index + 1}`}
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                              />
                            </div>
                          </DialogTrigger>
                          <DialogContent className="max-w-4xl w-full p-0 bg-transparent border-none">
                            <div className="relative">
                              <img
                                src={screenshot}
                                alt={`${project.title} screenshot ${index + 1}`}
                                className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
                              />
                            </div>
                          </DialogContent>
                        </Dialog>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )
            )}

            {/* Other Contributors - For Semantic Scaling (mobile-fitness-app) */}
            {project.id === "mobile-fitness-app" && (
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-4">Other Contributors</h3>
                  <div className="text-center py-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Users className="text-white" size={24} />
                    </div>
                    <h4 className="text-lg font-semibold text-white mb-2">Harrison Muchnic</h4>
                    <a
                      href="https://www.linkedin.com/in/harrisonmuchnic/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-blue-600 transition-all duration-300 text-sm"
                    >
                      <ExternalLink className="mr-2" size={16} />
                      LinkedIn Profile
                    </a>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Other Contributors - For FaceCrime (data-visualization) */}
            {project.id === "data-visualization" && (
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-4">Other Contributors</h3>
                  <div className="space-y-4">
                    <div className="text-center py-4">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Users className="text-white" size={24} />
                      </div>
                      <h4 className="text-lg font-semibold text-white mb-2">Harrison Muchnic</h4>
                      <a
                        href="https://www.linkedin.com/in/harrisonmuchnic/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-blue-600 transition-all duration-300 text-sm"
                      >
                        <ExternalLink className="mr-2" size={16} />
                        LinkedIn Profile
                      </a>
                    </div>
                    <div className="text-center py-4">
                      <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Users className="text-white" size={24} />
                      </div>
                      <h4 className="text-lg font-semibold text-white mb-2">Mike Odnis</h4>
                      <a
                        href="https://www.linkedin.com/in/mikeodnis/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-600 to-purple-500 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-purple-600 transition-all duration-300 text-sm"
                      >
                        <ExternalLink className="mr-2" size={16} />
                        LinkedIn Profile
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Other Contributors - For FlightHub (ai-chatbot) */}
            {project.id === "ai-chatbot" && (
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-4">Other Contributors</h3>
                  <div className="text-center py-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Users className="text-white" size={24} />
                    </div>
                    <h4 className="text-lg font-semibold text-white mb-2">Cindy Zhao</h4>
                    <a
                      href="https://www.linkedin.com/in/cindyzhao1127/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-600 to-green-500 text-white font-semibold rounded-lg hover:from-green-700 hover:to-green-600 transition-all duration-300 text-sm"
                    >
                      <ExternalLink className="mr-2" size={16} />
                      LinkedIn Profile
                    </a>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Other Contributors - For Paddler Improvement System (task-manager) */}
            {project.id === "task-manager" && (
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-4">Other Contributors</h3>
                  <div className="text-center py-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-orange-600 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Users className="text-white" size={24} />
                    </div>
                    <h4 className="text-lg font-semibold text-white mb-2">Shubham Parab</h4>
                    <a
                      href="https://www.linkedin.com/in/skparab1/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-orange-600 to-orange-500 text-white font-semibold rounded-lg hover:from-orange-700 hover:to-orange-600 transition-all duration-300 text-sm"
                    >
                      <ExternalLink className="mr-2" size={16} />
                      LinkedIn Profile
                    </a>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Test Files Section - Only for Paddler Improvement System */}
            {project.id === "task-manager" && (
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-4">Test Files</h3>
                  <div className="text-center py-4">
                    <FileText className="mx-auto text-gray-400 mb-3" size={40} />
                    <p className="text-gray-300 mb-4 text-sm">Access the test CSV files for paddling data analysis</p>
                    <a
                      href="https://drive.google.com/drive/folders/1lxRGp_EEGV2_sx-Jugw489s3O0H7-HhG?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-blue-600 transition-all duration-300 text-sm"
                    >
                      <ExternalLink className="mr-2" size={16} />
                      View Test Files
                    </a>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>

        {/* Navigation to Other Projects */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-white mb-6">Explore More Projects</h3>
          <Link
            to="/projects"
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-blue-600 transition-all duration-300"
          >
            View All Projects
            <ArrowLeft className="ml-2 rotate-180" size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
