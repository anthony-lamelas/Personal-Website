
import { useState } from "react";
import { ArrowRight, Code, Database, Laptop, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const Index = () => {
  const skills = [
    { name: "JavaScript", icon: Code },
    { name: "Python", icon: Code },
    { name: "React", icon: Laptop },
    { name: "Node.js", icon: Database },
    { name: "SQL", icon: Database },
    { name: "Git", icon: Code },
  ];

  const coursework = [
    { name: "Data Structures & Algorithms", code: "CSUY 1134" },
    { name: "Software Engineering", code: "CSUY 4513" },
    { name: "Database Systems", code: "CSUY 3083" },
    { name: "Computer Networks", code: "CSUY 4533" },
    { name: "Machine Learning", code: "CSUY 4563" },
    { name: "Web Development", code: "CSUY 4613" },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Your Name
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Computer Science Student passionate about building innovative solutions 
              and exploring the endless possibilities of technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/projects"
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-blue-600 transition-all duration-300 hover:scale-105"
              >
                View My Work
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center px-8 py-3 border-2 border-blue-400 text-blue-400 font-semibold rounded-lg hover:bg-blue-400 hover:text-white transition-all duration-300"
              >
                Learn More About Me
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Technical Skills
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {skills.map((skill, index) => (
              <Card key={skill.name} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
                <CardContent className="p-6 flex flex-col items-center">
                  <skill.icon className="text-blue-400 mb-4" size={36} />
                  <h3 className="text-lg font-semibold text-white text-center">{skill.name}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Coursework Section */}
      <section className="py-20 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Relevant Coursework
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coursework.map((course) => (
              <Collapsible key={course.name}>
                <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300">
                  <CollapsibleTrigger className="w-full text-left">
                    <CardContent className="p-6">
                      <div className="flex items-center">
                        <BookOpen className="text-blue-400 mr-3" size={20} />
                        <h3 className="text-lg font-medium text-white">{course.name}</h3>
                      </div>
                    </CardContent>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <div className="px-6 pb-4 text-gray-300">
                      Course Code: <span className="text-blue-300">{course.code}</span>
                    </div>
                  </CollapsibleContent>
                </Card>
              </Collapsible>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to collaborate?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            I'm always open to discussing new opportunities and interesting projects.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-blue-600 transition-all duration-300 hover:scale-105"
          >
            Get In Touch
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
