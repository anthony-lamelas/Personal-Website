import { Card, CardContent } from "@/components/ui/card";
import { Mail, Linkedin, Github, MapPin, Instagram, Twitter } from "lucide-react";
import Reveal from "@/components/Reveal";

interface ContactItem {
  icon: typeof Mail;
  label: string;
  value: string;
  href?: string;
}

const contacts: ContactItem[] = [
  {
    icon: Mail,
    label: "Email",
    value: "anthony.lamelas23@gmail.com",
    href: "mailto:anthony.lamelas23@gmail.com",
  },
  {
    icon: Twitter,
    label: "X",
    value: "@AnthonyLamelas",
    href: "https://x.com/AnthonyLamelas",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/anthonylamelas/",
    href: "https://linkedin.com/in/anthonylamelas/",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/anthony-lamelas",
    href: "https://github.com/anthony-lamelas",
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@anthony__lamelas",
    href: "https://www.instagram.com/anthony__lamelas/",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "New York, NY",
  },
];

const Contact = () => {
  return (
    <div className="min-h-screen pt-16">
      <div className="mx-auto max-w-4xl px-4 py-20">
        {/* Header */}
        <Reveal className="mb-16 text-center">
          <p className="eyebrow mb-3">Let's connect</p>
          <h1 className="mb-6 font-display text-5xl font-bold text-white">
            Contact Me
          </h1>
          <p className="mx-auto max-w-3xl text-xl text-gray-300">
            Feel free to reach out for opportunities, questions, or just to say
            hello!
          </p>
        </Reveal>

        {/* Contact Information */}
        <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {contacts.map((contact, i) => {
            const isExternal = contact.href?.startsWith("http");
            return (
              <Reveal key={contact.label} delay={(i % 3) * 0.08}>
                <Card className="glass-card card-hover h-full border-white/10 bg-white/[0.04]">
                  <CardContent className="p-6">
                    <div className="mb-4 flex items-center">
                      <contact.icon className="mr-3 text-sky-400" size={24} />
                      <h3 className="text-lg font-semibold text-white">
                        {contact.label}
                      </h3>
                    </div>
                    {contact.href ? (
                      <a
                        href={contact.href}
                        {...(isExternal
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                        className="break-words text-gray-300 transition-colors hover:text-sky-300"
                      >
                        {contact.value}
                      </a>
                    ) : (
                      <p className="text-gray-300">{contact.value}</p>
                    )}
                  </CardContent>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Contact;
