
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
                  My journey into computer science began during high school when I first discovered 
                  the magic of programming. What started as curiosity about how websites worked 
                  quickly evolved into a deep passion for creating digital solutions that make a difference.
                </p>
                <p>
                  Growing up, I was always fascinated by technology and problem-solving. I remember 
                  spending hours taking apart old computers and trying to understand how they worked. 
                  This natural curiosity led me to pursue computer science, where I could combine my 
                  love for logical thinking with creative problem-solving.
                </p>
                <p>
                  Throughout my academic journey, I've been fortunate to work on various projects 
                  that have challenged me and helped me grow both technically and personally. Each 
                  project has taught me something new and reinforced my belief that technology can 
                  be a powerful force for positive change.
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
                  <h3 className="text-xl font-semibold text-white mb-2">Software Engineer Intern</h3>
                  <p className="text-blue-300 mb-2">Tech Company | Summer 2024</p>
                  <p className="text-gray-300 mb-3">Developed and maintained web applications using modern frameworks and technologies.</p>
                  <ul className="text-gray-300 space-y-1">
                    <li>• Built responsive user interfaces with React and TypeScript</li>
                    <li>• Collaborated with cross-functional teams on feature development</li>
                    <li>• Improved application performance by 25% through code optimization</li>
                  </ul>
                </div>
                
                <div className="border-l-2 border-blue-400 pl-6 pb-6">
                  <h3 className="text-xl font-semibold text-white mb-2">Research Assistant</h3>
                  <p className="text-blue-300 mb-2">University Lab | 2023 - Present</p>
                  <p className="text-gray-300 mb-3">Conducted research on machine learning applications and computer vision projects.</p>
                  <ul className="text-gray-300 space-y-1">
                    <li>• Published research paper on vision transformer scaling</li>
                    <li>• Implemented ML models for data analysis and classification</li>
                    <li>• Presented findings at academic conferences and symposiums</li>
                  </ul>
                </div>

                <div className="border-l-2 border-blue-400 pl-6 pb-6">
                  <h3 className="text-xl font-semibold text-white mb-2">Web Developer</h3>
                  <p className="text-blue-300 mb-2">Freelance | 2022 - 2023</p>
                  <p className="text-gray-300 mb-3">Created custom websites and web applications for small businesses and startups.</p>
                  <ul className="text-gray-300 space-y-1">
                    <li>• Delivered 10+ projects on time and within budget</li>
                    <li>• Increased client web traffic by average of 40% through SEO optimization</li>
                    <li>• Maintained long-term client relationships with 95% satisfaction rate</li>
                  </ul>
                </div>

                <div className="border-l-2 border-blue-400 pl-6 pb-6">
                  <h3 className="text-xl font-semibold text-white mb-2">Teaching Assistant</h3>
                  <p className="text-blue-300 mb-2">Computer Science Department | 2022 - 2023</p>
                  <p className="text-gray-300 mb-3">Assisted students in introductory programming courses and helped with lab sessions.</p>
                  <ul className="text-gray-300 space-y-1">
                    <li>• Mentored 50+ students in Python and Java programming</li>
                    <li>• Improved student comprehension rates by 30% through personalized tutoring</li>
                    <li>• Developed supplementary learning materials and coding exercises</li>
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
