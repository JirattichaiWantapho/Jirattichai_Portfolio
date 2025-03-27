"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Code, Database, Server, Shield, Computer, Terminal } from "lucide-react";

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
  return (
    <section id="skills" className="py-16 md:py-24 animate-fadeInUp">
      <div className="container">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-primary rounded mb-6"></div>
          <p className="text-muted-foreground max-w-[700px]">
            My technical expertise across various domains of computer engineering.
          </p>
        </div>

        <Tabs defaultValue="programming" className="w-full">
          <TabsList className="flex flex-wrap justify-center mb-8 h-auto w-full bg-transparent">
            {skillCategories.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className="flex items-center gap-2 px-4 py-2 m-1 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                {category.icon}
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {skillCategories.map((category) => (
            <TabsContent key={category.id} value={category.id}>
              <Card className="border-none shadow-md">
                <CardContent className="p-6 md:p-8">
                  <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                    {category.icon}
                    {category.name} Skills
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {category.skills.map((skill) => (
                      <div
                        key={skill}
                        className="bg-muted rounded-md p-3 text-center hover:bg-primary/10 transition-colors"
                      >
                        {skill}
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
