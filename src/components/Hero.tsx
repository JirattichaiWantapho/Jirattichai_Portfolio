"use client";

import { Button } from "@/components/ui/button";
import { ArrowDownToLine, Github, Linkedin, Mail, Phone } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setInView(entry.isIntersecting);
    }, { threshold: 0.3 });

    if (heroRef.current) observer.observe(heroRef.current);
    return () => {
      if (heroRef.current) observer.unobserve(heroRef.current);
    };
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className={`relative py-20 md:py-32 overflow-hidden ${
        inView ? "animate-fadeInUp" : ""
      }`}
    >
      {/* Background gradient */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-background via-background to-background/0 z-0" />

      <div className="container flex flex-col items-center text-center z-10 relative">
        <div className="inline-flex items-center justify-center w-28 h-28 mb-8 rounded-full bg-gradient-to-br from-primary/20 via-primary/40 to-primary/20 p-1">
          <div className="w-full h-full rounded-full bg-background flex items-center justify-center text-4xl font-bold text-primary">
            JW
          </div>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
          Jirattichai Wantapho
        </h1>

        <p className="text-xl text-muted-foreground max-w-[800px] mb-8">
          Computer Engineering student with skills in software development, quality assurance,
          cybersecurity, computer networks, and cloud computing.
        </p>

        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <Button asChild>
            <Link href="#about">Learn More <ArrowDownToLine className="ml-2 h-4 w-4" /></Link>
          </Button>
          <Button asChild variant="outline">
            <a href="#contact">Get in Touch</a>
          </Button>
        </div>

        <div className="flex gap-4 justify-center">
          <Button asChild variant="ghost" size="icon">
            <a href="mailto:jirattichai.w@gmail.com" aria-label="Email">
              <Mail className="h-5 w-5" />
            </a>
          </Button>
          <Button asChild variant="ghost" size="icon">
            <a href="tel:+66980976533" aria-label="Phone">
              <Phone className="h-5 w-5" />
            </a>
          </Button>
          <Button asChild variant="ghost" size="icon">
            <a href="https://github.com/JirattichaiWantapho" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github className="h-5 w-5" />
            </a>
          </Button>
          <Button asChild variant="ghost" size="icon">
            <a href="https://linkedin.com/in/jirattichai-wantapho/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
