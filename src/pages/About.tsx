
import { Card, CardContent } from "@/components/ui/card";
import { Code, Heart, Target, Lightbulb } from "lucide-react";

const About = () => {
  return (
    <div className="pt-16 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">About Me</h1>
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
                <Heart className="text-purple-400 mr-3" size={28} />
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

          {/* Why CS */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Code className="text-purple-400 mr-3" size={28} />
                <h2 className="text-3xl font-bold text-white">Why Computer Science?</h2>
              </div>
              <div className="text-gray-300 space-y-4 text-lg leading-relaxed">
                <p>
                  Computer science represents the perfect intersection of creativity, logic, and impact. 
                  Every day brings new challenges that require innovative thinking and technical precision. 
                  I'm drawn to the field because it offers endless opportunities to learn, create, and solve 
                  real-world problems.
                </p>
                <p>
                  What excites me most is the potential to build solutions that can scale globally and 
                  positively impact millions of lives. Whether it's developing more efficient algorithms, 
                  creating intuitive user interfaces, or contributing to cutting-edge research, CS provides 
                  the tools to turn ideas into reality.
                </p>
                <p>
                  The rapid evolution of technology means there's always something new to explore - from 
                  artificial intelligence and machine learning to web development and cybersecurity. This 
                  constant growth keeps me motivated and engaged with my studies and projects.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Goals */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Target className="text-purple-400 mr-3" size={28} />
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

          {/* What Drives Me */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Lightbulb className="text-purple-400 mr-3" size={28} />
                <h2 className="text-3xl font-bold text-white">What Drives Me</h2>
              </div>
              <div className="text-gray-300 space-y-4 text-lg leading-relaxed">
                <p>
                  I'm motivated by the belief that technology should make life better for everyone. 
                  Whether it's automating tedious tasks, connecting people across the globe, or providing 
                  new ways to learn and grow, I want to be part of building solutions that matter.
                </p>
                <p>
                  Collaboration and continuous learning are core to who I am. I thrive in environments 
                  where I can work with diverse teams, share knowledge, and learn from others' perspectives. 
                  The best solutions often come from combining different viewpoints and expertise.
                </p>
                <p>
                  Finally, I'm driven by curiosity and the excitement of tackling new challenges. 
                  Every bug to fix, feature to implement, or concept to understand is an opportunity 
                  to grow and improve. This mindset keeps me engaged and passionate about my work.
                </p>
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
              href="mailto:your.email@example.com"
              className="inline-block px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 hover:scale-105"
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
