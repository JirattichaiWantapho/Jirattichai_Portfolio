"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plane, VerifiedIcon } from "lucide-react";
import { useInView } from "react-intersection-observer";
import { useRef, useState } from "react";

interface ProjectProps {
  title: string;
  role: string;
  description: string[];
  technologies: string[];
  icon: React.ReactNode;
}

function ProjectCard({ project }: { project: ProjectProps }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Reduce rotation intensity to keep text readable
    const rotateX = (y - centerY) / 40;
    const rotateY = (centerX - x) / 40;
    
    setRotation({ x: rotateX, y: rotateY });
  };

  const resetRotation = () => {
    setRotation({ x: 0, y: 0 });
    setIsHovering(false);
  };

  return (
    <div
      ref={cardRef}
      className="h-full perspective-1000"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={resetRotation}
    >
      <Card 
        className={`h-full border-none shadow-md transition-all duration-300 ${
          isHovering ? 'shadow-xl shadow-primary/10' : ''
        }`}
        style={{
          transform: isHovering ? 
            `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale3d(1.02, 1.02, 1.02)` : 
            'rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
          transition: 'transform 0.3s ease-out',
          transformStyle: 'preserve-3d'
        }}
      >
        <CardHeader className="pb-4 relative">
          <div className="flex justify-between items-start">
            <div className="bg-primary/10 p-3 rounded-full glass">
              {project.icon}
            </div>
            <Badge variant="outline" className="font-normal glass">
              {project.role}
            </Badge>
          </div>
          <CardTitle className="mt-4 text-xl group relative">
            {project.title}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
          </CardTitle>
        </CardHeader>
        <CardContent className="pb-4">
          <ul className="space-y-2 text-muted-foreground">
            {project.description.map((item, index) => (
              <li key={index} className="flex gap-2">
                <span className="text-primary mt-1">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </CardContent>
        <CardFooter className="flex-wrap gap-2 pt-2 border-t">
          {project.technologies.map((tech, index) => (
            <Badge 
              key={index} 
              variant="secondary" 
              className="font-normal animate-shimmer"
            >
              {tech}
            </Badge>
          ))}
        </CardFooter>
      </Card>
    </div>
  );
}

const projects: ProjectProps[] = [
  {
    title: "Mini-IDS – Intrusion Detection System",
    role: "Full Stack Developer",
    description: [
      "Developed an intrusion detection system to capture packets in real-time using Scapy.",
      "Implemented a modular architecture with detectors for common attack patterns.",
      "Logged protocol-based statistics and suspicious IP behaviors.",
      "Integrated alerts via GUI, logs, popups, and LINE Messaging API."
    ],
    technologies: ["Python", "Scapy", "LINE Messaging API"],
    icon: <VerifiedIcon className="h-6 w-6 text-primary" />
  },
  {
    title: "Flight Booking System",
    role: "Frontend Developer",
    description: [
      "Designed UI components for flight search, booking, and payment processing.",
      "Integrated APIs with secure authentication and data validation."
    ],
    technologies: ["React", "TypeScript", "API Integration", "Auth", "Validation"],
    icon: <Plane className="h-6 w-6 text-primary" />
  },
  {
    title: "CosBaanDeawGun",
    role: "QA Engineer",
    description: [
      "Led QA for a cosplay platform supporting costume rentals, makeup services, and photography bookings.",
      "Designed and executed test cases for registration, login, store creation, and payment processing.",
      "Developed and ran unit tests for data validation.",
      "Conducted manual and automated tests on user profiles, payment systems, and chat functionality.",
      "Provided detailed bug reports and usability feedback during sprint reviews."
    ],
    technologies: ["Jest", "Cypress", "Playwright", "Agile", "Bug Reporting"],
    icon: <VerifiedIcon className="h-6 w-6 text-primary" />
  }
];

export function Projects() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="projects"
      ref={ref}
      className={`py-16 md:py-24 bg-muted/50 ${
        inView ? "animate-fadeInUp" : "opacity-0"
      }`}
    >
      <div className="container">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects</h2>
          <div className="w-20 h-1 bg-primary rounded mb-6"></div>
          <p className="text-muted-foreground max-w-[700px]">
            Highlighting some of my significant project work.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
