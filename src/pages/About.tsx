
import { Card, CardContent } from "@/components/ui/card";
import { Code, Heart, Target, Lightbulb, Briefcase } from "lucide-react";

const About = () => {
  return (
    <div className="pt-16 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-20">
        {/* Header with Profile Picture */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">About Me</h1>
          
          {/* Profile Picture */}
          <div className="mb-8 flex justify-center">
            <div className="relative w-48 h-48 overflow-hidden rounded-full border-4 border-white/20">
              <img
                src="/lovable-uploads/48263676-0d04-449e-9a56-570b4d44b04b.png"
                alt="Anthony Lamelas"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Learn more about my journey, passions, and what drives me in the world of computer science.
          </p>
        </div>

        {/* Main Content */}
        <div className="space-y-12">
          {/* My Story */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Heart className="text-blue-400 mr-3" size={28} />
                <h2 className="text-3xl font-bold text-white">My Story</h2>
              </div>
              <div className="text-gray-300 space-y-4 text-lg leading-relaxed">
                <p>
                  Unlike many of my peers, when I first started at NYU I had almost no prior experience in computer science.
                  I was majoring in electrical and computer engineering at the time and had almost no idea what I wanted to do with my life.
                  However, I quickly realized I need to learn how to code and I needed to learn quickly. 
                </p>
                <p>
                  After throwing myself into countless online courses and unfinished projects I eventually realized
                  that the field of data science and machine learning was the one for me. The ability to directly apply
                  the math/statistics I was learning in school combined with my quickly developing programming skills was
                  very appealing. I also became fascinated with the impressive capabilities of machine learning models
                  when given the right data.
                </p>
                <p>
                  In just a year and a half, I went from a curious beginner with no background in computer science to a confident developer who's landed multiple internships.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Goals */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Target className="text-blue-400 mr-3" size={28} />
                <h2 className="text-3xl font-bold text-white">My Goals</h2>
              </div>
              <div className="text-gray-300 space-y-4 text-lg leading-relaxed">
                <p>
                  <strong className="text-white">Short-term:</strong> I'm focused on mastering fundamental 
                  CS concepts while building a strong portfolio of diverse projects. I want to gain 
                  experience through internships and contribute to open-source projects that align with 
                  my interests.
                </p>
                <p>
                  <strong className="text-white">Medium-term:</strong> After graduation, I aim to join a 
                  technology company where I can work on meaningful projects that challenge me and allow 
                  me to grow as a developer. I'm particularly interested in roles that involve full-stack 
                  development, AI/ML, or product development.
                </p>
                <p>
                  <strong className="text-white">Long-term:</strong> My ultimate goal is to become a 
                  technical leader who can bridge the gap between complex technology and user needs. 
                  I envision myself either leading engineering teams at innovative companies or starting 
                  my own venture focused on solving important problems through technology.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Experience */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Briefcase className="text-blue-400 mr-3" size={28} />
                <h2 className="text-3xl font-bold text-white">Experience</h2>
              </div>
              <div className="space-y-6">
                <div className="border-l-2 border-blue-400 pl-6 pb-6">
                  <h3 className="text-xl font-semibold text-white mb-2">Data Science Intern</h3>
                  <p className="text-blue-300 mb-2">Direct Supply | Summer 2025</p>
                  <p className="text-gray-300 mb-3">Model development, visualizations, data pipelines, debugging, research, and more.</p>

                </div>
                
                <div className="border-l-2 border-blue-400 pl-6 pb-6">
                  <h3 className="text-xl font-semibold text-white mb-2">Research Intern</h3>
                  <p className="text-blue-300 mb-2">Pomu (Fashion Manufacturer Recommendation) | April 2024 - Present</p>
                  <p className="text-gray-300 mb-3">Conducted research on improving vision transformer accuracy.</p>
                  <ul className="text-gray-300 space-y-1">
                    <li>• Utilized a CLIP-based image classification tool via UNIX command line to process over 500,000 images</li>
                    <li>• Scripted in Python to measure model accuracy and analyze semantic category scaling trends</li>
                    <li>• Authored research findings in LaTeX for academic publication</li>
                  </ul>
                </div>

                <div className="border-l-2 border-blue-400 pl-6 pb-6">
                  <h3 className="text-xl font-semibold text-white mb-2">Engineering Teaching Assistant</h3>
                  <p className="text-blue-300 mb-2">NYU Tandon EG-UY 1004 | August 2024 - Present</p>
                  <p className="text-gray-300 mb-3">Mentoring freshman students in their semester long design project for the Intro to Engineering class.</p>
                  <ul className="text-gray-300 space-y-1">
                    <li>• Head of payroll auditing work hours and visualizing financial data</li>
                    <li>• Assisting over 350 students in the design of prototypes, focusing on circuitry, programming, and CAD</li>
                    <li>• Promoting teamwork, leadership, and technical development</li>
                  </ul>
                </div>

                <div className="border-l-2 border-blue-400 pl-6 pb-6">
                  <h3 className="text-xl font-semibold text-white mb-2">Data & Analytics Intern</h3>
                  <p className="text-blue-300 mb-2">Computer Science Department | June 2022 - July 2022</p>
                  <p className="text-gray-300 mb-3">Analyzing data leading to strategic recommendations.</p>
                  <ul className="text-gray-300 space-y-1">
                    <li>• Composed SQL queries in Mode (a web-based analytics platform) to pull data from the Snowflake data warehouse</li>
                    <li>• Analyzed over 75 fields of PC monitoring data by running tailored SQL queries and identifying key relationships among tables, leading to informed strategic recommendations utilizing Tableau</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-white mb-4">
            Want to know more?
          </h3>
          <p className="text-gray-300 mb-6">
            I'd love to connect and discuss opportunities, projects, or just chat about technology.
          </p>
          <div className="space-x-4">
            <a
              href="/contact"
              className="inline-block px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-blue-600 transition-all duration-300 hover:scale-105"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
