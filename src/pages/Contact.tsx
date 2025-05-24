
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, Linkedin, Github, MapPin, Instagram } from "lucide-react";

const Contact = () => {
  return (
    <div className="pt-16 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">Contact Me</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Feel free to reach out for opportunities, questions, or just to say hello!
          </p>
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Mail className="text-blue-400 mr-3" size={24} />
                <h3 className="text-lg font-semibold text-white">Email</h3>
              </div>
              <a
                href="mailto:anthony.lamelas23@gmail.com"
                className="text-gray-300 hover:text-blue-300 transition-colors"
              >
                anthony.lamelas23@gmail.com
              </a>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Phone className="text-blue-400 mr-3" size={24} />
                <h3 className="text-lg font-semibold text-white">Phone</h3>
              </div>
              <a
                href="tel:+17868587465"
                className="text-gray-300 hover:text-blue-300 transition-colors"
              >
                +1 (786) 858 7465
              </a>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Linkedin className="text-blue-400 mr-3" size={24} />
                <h3 className="text-lg font-semibold text-white">LinkedIn</h3>
              </div>
              <a
                href="https://linkedin.com/in/anthonylamelas/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-300 transition-colors"
              >
                linkedin.com/in/anthonylamelas/
              </a>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Github className="text-blue-400 mr-3" size={24} />
                <h3 className="text-lg font-semibold text-white">GitHub</h3>
              </div>
              <a
                href="https://github.com/anthony-lamelas"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-300 transition-colors"
              >
                github.com/anthony-lamelas
              </a>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Instagram className="text-blue-400 mr-3" size={24} />
                <h3 className="text-lg font-semibold text-white">Instagram</h3>
              </div>
              <a
                href="https://www.instagram.com/anthony__lamelas/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-300 transition-colors"
              >
                @anthony__lamelas
              </a>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <MapPin className="text-blue-400 mr-3" size={24} />
                <h3 className="text-lg font-semibold text-white">Location</h3>
              </div>
              <p className="text-gray-300">
                New York, NY
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;
