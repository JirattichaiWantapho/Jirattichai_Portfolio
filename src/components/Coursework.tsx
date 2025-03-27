"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Code, Database, Server, Shield, Cpu, Brain, GitBranch, Settings } from "lucide-react";

interface CourseProps {
  title: string;
  description: string[];
  icon: React.ReactNode;
}

const courses: CourseProps[] = [
  {
    title: "Programming with Data Structures",
    description: [
      "Covers dynamic data structures such as Arrays, Linked Lists, Trees, Graphs, and Hash Tables.",
      "Focuses on writing reusable modules, developing high-quality code, and designing efficient software using the C programming language."
    ],
    icon: <Code className="h-6 w-6 text-primary" />
  },
  {
    title: "Algorithms",
    description: [
      "Studies algorithm design and analysis, including complexity analysis (Big-O), sorting, searching, graphs, dynamic programming, and NP-completeness.",
      "Covers problem-solving techniques such as Backtracking and Branch-and-Bound."
    ],
    icon: <GitBranch className="h-6 w-6 text-primary" />
  },
  {
    title: "Machine Learning",
    description: [
      "Introduces fundamental theories and practical applications of Machine Learning, including Supervised, Unsupervised, and Reinforcement Learning.",
      "Covers key algorithms such as Neural Networks, Decision Trees, and Bayesian Networks."
    ],
    icon: <Brain className="h-6 w-6 text-primary" />
  },
  {
    title: "Software Engineering",
    description: [
      "Focuses on software development principles, covering requirement analysis, design, implementation, testing, and maintenance.",
      "Emphasizes teamwork and software documentation."
    ],
    icon: <Settings className="h-6 w-6 text-primary" />
  },
  {
    title: "Operating Systems",
    description: [
      "Explores the core principles of operating systems, including memory management, process management, I/O management, and Linux kernel architecture."
    ],
    icon: <Server className="h-6 w-6 text-primary" />
  },
  {
    title: "Database Systems",
    description: [
      "Covers relational database concepts, SQL, database design, normalization, and transaction management.",
      "Focuses on efficient data storage, retrieval, and integrity."
    ],
    icon: <Database className="h-6 w-6 text-primary" />
  },
  {
    title: "Computer Networks",
    description: [
      "TCP/IP, network architecture, routing algorithms",
      "Application layer protocols (HTTP, FTP), wireless networking",
      "Network security and management"
    ],
    icon: <Server className="h-6 w-6 text-primary" />
  },
  {
    title: "Fundamentals of Cybersecurity",
    description: [
      "Cybersecurity principles, risk management, cryptography",
      "Identity & Access Management (IAM), security operations",
      "Secure software development and testing"
    ],
    icon: <Shield className="h-6 w-6 text-primary" />
  },
  {
    title: "Embedded Systems",
    description: [
      "Microcontrollers, sensors, real-time OS",
      "Embedded programming (C, Assembly)",
      "Hardware design and low-power computing"
    ],
    icon: <Cpu className="h-6 w-6 text-primary" />
  }
];

function CourseCard({ course }: { course: CourseProps }) {
  return (
    <Card className="h-full border-none shadow-md hover:shadow-lg transition-shadow duration-300">
      <CardContent className="p-6">
        <div className="flex items-start gap-4 mb-4">
          <div className="bg-primary/10 p-3 rounded-full">
            {course.icon}
          </div>
          <h3 className="text-xl font-semibold mt-2">{course.title}</h3>
        </div>
        <ul className="space-y-2 text-muted-foreground">
          {course.description.map((item, index) => (
            <li key={index} className="flex gap-2">
              <span className="text-primary mt-1">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

export function Coursework() {
  return (
    <section id="coursework" className="py-16 md:py-24 bg-muted/50">
      <div className="container">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Coursework</h2>
          <div className="w-20 h-1 bg-primary rounded mb-6"></div>
          <p className="text-muted-foreground max-w-[700px]">
            A comprehensive overview of my academic coursework, ordered from most recent to oldest.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <CourseCard key={index} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
}
