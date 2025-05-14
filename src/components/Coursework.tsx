"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Code, Database, Server, Shield, Cpu, Brain, GitBranch, Settings } from "lucide-react";
import { useInView } from "react-intersection-observer";
import { useState, useRef } from "react";

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
    title: "Java Programming",
    description: [
      "Explores Java programming fundamentals, including compiling, data types, variables, arrays, and control structures.",
      "Covers object-oriented programming(OOP) concepts such as classes, objects, and exception handling.",
      "Introduces advanced topics like I/O, GUI, G2D, threads, serialization, and communication."
    ],
    icon: <BookOpen className="h-6 w-6 text-primary" />
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
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Reduce rotation intensity to prevent text from blurring
    const rotateX = (y - centerY) / 60;
    const rotateY = (centerX - x) / 60;
    
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
        className="h-full border-none shadow-md hover:shadow-lg transition-all duration-300 bg-card/90 backdrop-blur-sm overflow-hidden group"
        style={{
          transform: isHovering ? 
            `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale(1.01)` : 
            'rotateX(0deg) rotateY(0deg) scale(1)',
          transition: 'transform 0.3s ease',
          transformStyle: 'preserve-3d'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        <CardContent className="p-6 relative z-10">
          <div className="flex items-start gap-4 mb-4">
            <div className="bg-primary/10 p-3 rounded-full glass animate-pulse-slow">
              {course.icon}
            </div>
            <h3 className="text-xl font-semibold mt-2 text-primary/90">{course.title}</h3>
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
    </div>
  );
}

export function Coursework() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="coursework"
      ref={ref}
      className={`py-16 md:py-24 bg-muted relative overflow-hidden ${
        inView ? "animate-fadeInUp" : "opacity-0"
      }`}
    >
      {/* Background blob */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl opacity-70 animate-morphGradient"></div>
      <div className="container relative z-10">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 relative">
            Coursework
            <span className="absolute -bottom-2 left-1/2 w-20 h-1 bg-primary rounded -translate-x-1/2"></span>
          </h2>
          <p className="text-muted-foreground max-w-[700px] mt-8">
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
