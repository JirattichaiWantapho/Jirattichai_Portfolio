"use client";

import { Card, CardContent } from "@/components/ui/card";
import { useInView } from "react-intersection-observer";
import { useRef, useState } from "react";

export function About() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    
    // Reduce the intensity of the 3D effect to improve text clarity
    setMousePosition({ 
      x: x * 0.5, 
      y: y * 0.5 
    });
  };

  return (
    <section
      id="about"
      ref={ref}
      className={`py-16 md:py-24 bg-muted relative overflow-hidden ${
        inView ? "animate-fadeInUp" : "opacity-0"
      }`}
    >
      {/* Background blob */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/5 rounded-full filter blur-3xl opacity-70 animate-morphGradient"></div>
      
      <div className="container relative z-10">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 relative">
            About Me
            <span className="absolute -bottom-2 left-1/2 w-20 h-1 bg-primary rounded -translate-x-1/2"></span>
          </h2>
          <p className="text-muted-foreground max-w-[700px] mt-8">
            Get to know more about my background, skills, and experiences.
          </p>
        </div>

        <Card 
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          className="border-none shadow-lg bg-card/50 backdrop-blur-sm relative overflow-hidden group"
          style={{
            transform: isHovering ? 
              `perspective(1000px) rotateX(${mousePosition.y}deg) rotateY(${-mousePosition.x}deg)` : 
              'perspective(1000px) rotateX(0deg) rotateY(0deg)',
            transition: 'transform 0.4s ease'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          <CardContent className="p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-3">
                <h3 className="text-xl font-semibold mb-4 text-primary/90 relative inline-block">
                  Personal Profile
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-500"></span>
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Computer Engineering student with basic skills in software development and quality assurance.
                  Currently expanding skills in Cybersecurity, Computer Networks, and Cloud Computing through
                  academic coursework and hands-on experience.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Experience in applying Agile methodologies to ensure high-quality software delivery. Skilled in
                  designing and executing test cases for functional and validation testing, as well as automating
                  browser tests. Proficient in programming languages such as C, Python, TypeScript, and SQL.
                  Skilled in using logical thinking to effectively analyze system behavior and identify potential flaws.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
