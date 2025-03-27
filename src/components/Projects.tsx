"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plane, VerifiedIcon } from "lucide-react";

interface ProjectProps {
  title: string;
  role: string;
  description: string[];
  technologies: string[];
  icon: React.ReactNode;
}

function ProjectCard({ project }: { project: ProjectProps }) {
  return (
    <Card className="h-full border-none shadow-md hover:shadow-lg transition-shadow duration-300">
      <CardHeader className="pb-4">
        <div className="flex justify-between items-start">
          <div className="bg-primary/10 p-3 rounded-full">
            {project.icon}
          </div>
          <Badge variant="outline" className="font-normal">{project.role}</Badge>
        </div>
        <CardTitle className="mt-4 text-xl">{project.title}</CardTitle>
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
          <Badge key={index} variant="secondary" className="font-normal">
            {tech}
          </Badge>
        ))}
      </CardFooter>
    </Card>
  );
}

const projects: ProjectProps[] = [
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
  return (
    <section id="projects" className="py-16 md:py-24">
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
