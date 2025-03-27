"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Code, Database, Server, Shield, Computer, Terminal } from "lucide-react";
import { useInView } from "react-intersection-observer";
import { useState } from "react";

const skillCategories = [
  {
    id: "programming",
    name: "Programming",
    icon: <Code className="h-5 w-5" />,
    skills: [
      "JavaScript",
      "TypeScript",
      "Python",
      "C",
      "C#",
      "Dart",
      "SQL",
      "Bash",
      "PowerShell"
    ]
  },
  {
    id: "operating-systems",
    name: "Operating Systems",
    icon: <Computer className="h-5 w-5" />,
    skills: [
      "Linux (Ubuntu, Kali, Parrot)",
      "Windows"
    ]
  },
  {
    id: "frontend",
    name: "Frontend",
    icon: <Terminal className="h-5 w-5" />,
    skills: [
      "React",
      "Flutter"
    ]
  },
  {
    id: "backend",
    name: "Backend",
    icon: <Database className="h-5 w-5" />,
    skills: [
      "Firebase"
    ]
  },
  {
    id: "qa",
    name: "Quality Assurance",
    icon: <Terminal className="h-5 w-5" />,
    skills: [
      "Jest",
      "Cypress",
      "Playwright"
    ]
  },
  {
    id: "networking",
    name: "Networking",
    icon: <Server className="h-5 w-5" />,
    skills: [
      "Network configuration",
      "Packet analysis",
      "System monitoring"
    ]
  },
  {
    id: "security",
    name: "Security",
    icon: <Shield className="h-5 w-5" />,
    skills: [
      "SQLMap",
      "Burp Suite",
      "ZAP",
      "WFuzz",
      "Nogotofail",
      "Nmap",
      "Metasploit"
    ]
  },
  {
    id: "cloud",
    name: "Cloud & DevOps",
    icon: <Server className="h-5 w-5" />,
    skills: [
      "CI/CD Pipeline",
      "Docker",
      "Kubernetes"
    ]
  }
];

export function Skills() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <section
      id="skills"
      ref={ref}
      className={`py-16 md:py-24 bg-muted/50 relative overflow-hidden ${
        inView ? "animate-fadeInUp" : "opacity-0"
      }`}
    >
      {/* Background effects */}
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-primary/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-morphGradient"></div>
      
      <div className="container relative z-10">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 relative">
            Technical Skills
            <span className="absolute -bottom-2 left-1/2 w-20 h-1 bg-primary rounded -translate-x-1/2"></span>
          </h2>
          <p className="text-muted-foreground max-w-[700px] mt-8">
            My technical expertise across various domains of computer engineering.
          </p>
        </div>

        <Tabs defaultValue="programming" className="w-full">
          <TabsList className="flex flex-wrap justify-center mb-8 h-auto w-full bg-transparent">
            {skillCategories.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className="flex items-center gap-2 px-4 py-2 m-1 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all duration-300 hover:scale-105 glass data-[state=active]:shadow-md"
              >
                {category.icon}
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {skillCategories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="animate-scaleIn">
              <Card className="border-none shadow-lg bg-card/80 backdrop-blur-sm">
                <CardContent className="p-6 md:p-8">
                  <h3 className="text-xl font-semibold mb-6 flex items-center gap-2 text-primary/90">
                    {category.icon}
                    {category.name} Skills
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {category.skills.map((skill) => (
                      <div
                        key={skill}
                        className={`bg-muted rounded-md p-3 text-center transition-all duration-300 relative overflow-hidden ${
                          hoveredSkill === skill ? 'bg-primary/20 scale-105 shadow-md' : 'hover:bg-primary/10'
                        }`}
                        onMouseEnter={() => setHoveredSkill(skill)}
                        onMouseLeave={() => setHoveredSkill(null)}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent animate-shimmer opacity-0 group-hover:opacity-100"></div>
                        <span className="relative z-10">{skill}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
