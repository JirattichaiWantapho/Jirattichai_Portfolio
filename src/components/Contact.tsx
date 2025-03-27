"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { useInView } from "react-intersection-observer";
import { useState } from "react";

const contactInfo = [
  {
    icon: <Mail className="h-5 w-5" />,
    label: "Email",
    value: "jirattichai.w@gmail.com",
    href: "mailto:jirattichai.w@gmail.com"
  },
  {
    icon: <Phone className="h-5 w-5" />,
    label: "Phone",
    value: "098-097-6533",
    href: "tel:+66980976533"
  },
  {
    icon: <Github className="h-5 w-5" />,
    label: "GitHub",
    value: "github.com/JirattichaiWantapho",
    href: "https://github.com/JirattichaiWantapho"
  },
  {
    icon: <Linkedin className="h-5 w-5" />,
    label: "LinkedIn",
    value: "linkedin.com/in/jirattichai-wantapho",
    href: "https://linkedin.com/in/jirattichai-wantapho/"
  }
];

export function Contact() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [hoveredContact, setHoveredContact] = useState<number | null>(null);

  return (
    <section
      id="contact"
      ref={ref}
      className={`py-16 md:py-24 bg-muted relative overflow-hidden ${
        inView ? "animate-fadeInUp" : "opacity-0"
      }`}
    >
      {/* Background blob */}
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl opacity-70 animate-morphGradient"></div>
      
      <div className="container relative z-10">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 relative">
            Contact Me
            <span className="absolute -bottom-2 left-1/2 w-20 h-1 bg-primary rounded -translate-x-1/2"></span>
          </h2>
          <p className="text-muted-foreground max-w-[700px] mt-8">
            Feel free to reach out to me through any of the following channels.
          </p>
        </div>

        <Card className="border-none shadow-lg bg-card/80 backdrop-blur-sm max-w-2xl mx-auto overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-primary/5 opacity-70"></div>
          
          <CardContent className="p-6 md:p-8 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contactInfo.map((contact, index) => (
                <a
                  key={index}
                  href={contact.href}
                  target={contact.href.startsWith("http") ? "_blank" : undefined}
                  rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="block transform transition-transform duration-300 hover:scale-105"
                  onMouseEnter={() => setHoveredContact(index)}
                  onMouseLeave={() => setHoveredContact(null)}
                >
                  <Card 
                    className={`border-none shadow-sm transition-all duration-300 h-full glass ${
                      hoveredContact === index ? 'shadow-md shadow-primary/20' : ''
                    }`}
                  >
                    <CardContent className="p-4 flex items-center gap-4">
                      <div className={`bg-primary/10 p-3 rounded-full transition-all duration-300 ${
                        hoveredContact === index ? 'animate-pulse-slow' : ''
                      }`}>
                        {contact.icon}
                      </div>
                      <div>
                        <h3 className="font-medium text-primary/90">{contact.label}</h3>
                        <p className="text-muted-foreground text-sm">{contact.value}</p>
                      </div>
                    </CardContent>
                  </Card>
                </a>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
