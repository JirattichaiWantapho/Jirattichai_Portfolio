"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { GraduationCap, BookOpen } from "lucide-react";
import { useInView } from "react-intersection-observer";
import { useRef, useState } from "react";

export function Education() {
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
    
    // Limit the effect to keep text readable
    setMousePosition({ 
      x: x * 0.5, 
      y: y * 0.5 
    });
  };

  return (
    <section
      id="education"
      ref={ref}
      className={`py-16 md:py-24 bg-muted relative overflow-hidden ${
        inView ? "animate-fadeInUp" : "opacity-0"
      }`}
    >
      {/* Background blob */}
      <div className="absolute top-1/3 -right-32 w-80 h-80 bg-primary/10 rounded-full filter blur-3xl opacity-70 animate-morphGradient"></div>
      
      <div className="container relative z-10">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 relative">
            Education
            <span className="absolute -bottom-2 left-1/2 w-20 h-1 bg-primary rounded -translate-x-1/2"></span>
          </h2>
          <p className="text-muted-foreground max-w-[700px] mt-8">
            My academic background and relevant coursework.
          </p>
        </div>

        <Card 
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          className="border-none shadow-lg bg-card/80 backdrop-blur-sm group overflow-hidden"
          style={{
            transform: isHovering ? 
              `perspective(1000px) rotateX(${mousePosition.y}deg) rotateY(${-mousePosition.x}deg)` : 
              'perspective(1000px) rotateX(0deg) rotateY(0deg)',
            transition: 'transform 0.4s ease'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          <CardContent className="p-6 md:p-8 relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-primary/10 p-3 rounded-full glass animate-pulse-slow">
                <GraduationCap className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">King Mongkut's University of Technology Thonburi (KMUTT)</h3>
                <p className="text-muted-foreground">Bachelor of Engineering in Computer Engineering</p>
              </div>
            </div>

            <div className="ml-11 mb-8">
              <div className="flex flex-wrap justify-between items-center mb-4 px-4 py-2 bg-muted/50 rounded-md">
                <div className="text-lg">Year: 3</div>
                <div className="text-lg">GPAX: 2.99</div>
              </div>
            </div>

            <Separator className="my-6" />

            <div className="flex items-center gap-3 mb-6">
              <div className="bg-primary/10 p-3 rounded-full glass">
                <BookOpen className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-primary/90">Relevant Coursework</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ml-11">
              <Card className="bg-muted/50 border-none glass hover:shadow-md transition-all duration-300 hover:scale-[1.02]">
                <CardContent className="p-4">
                  <h4 className="font-medium mb-2 text-primary/80">CPE393: Fundamentals of Cybersecurity</h4>
                  <ul className="list-disc pl-5 text-muted-foreground">
                    <li>Deployed web applications using Docker</li>
                    <li>Performed penetration testing with SQLMap, ZAP, WFuzz, Nogotofail</li>
                    <li>Identified and analyzed security vulnerabilities</li>
                    <li>Implemented vulnerability fixes</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-muted/50 border-none glass hover:shadow-md transition-all duration-300 hover:scale-[1.02]">
                <CardContent className="p-4">
                  <h4 className="font-medium mb-2 text-primary/80">CPE314: Computer Networks</h4>
                  <ul className="list-disc pl-5 text-muted-foreground">
                    <li>Developed client-server communication using Python sockets</li>
                    <li>Configured Linux-based DNS servers</li>
                    <li>Measured network latency & throughput</li>
                    <li>Configured IP forwarding & static routing</li>
                    <li>Implemented packet filtering and NAT</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
