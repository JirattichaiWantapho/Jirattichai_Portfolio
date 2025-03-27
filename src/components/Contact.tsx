"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

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
  return (
    <section id="contact" className="py-16 md:py-24 bg-muted/50 animate-fadeInUp">
      <div className="container">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Me</h2>
          <div className="w-20 h-1 bg-primary rounded mb-6"></div>
          <p className="text-muted-foreground max-w-[700px]">
            Feel free to reach out to me through any of the following channels.
          </p>
        </div>

        <Card className="border-none shadow-md bg-card max-w-2xl mx-auto">
          <CardContent className="p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contactInfo.map((contact, index) => (
                <a
                  key={index}
                  href={contact.href}
                  target={contact.href.startsWith("http") ? "_blank" : undefined}
                  rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="block"
                >
                  <Card className="border-none shadow-sm hover:shadow-md transition-shadow duration-300 h-full">
                    <CardContent className="p-4 flex items-center gap-4">
                      <div className="bg-primary/10 p-3 rounded-full">
                        {contact.icon}
                      </div>
                      <div>
                        <h3 className="font-medium">{contact.label}</h3>
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
