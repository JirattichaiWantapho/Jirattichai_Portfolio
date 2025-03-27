"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="border-t py-8 md:py-12 animate-fadeInUp">
      <div className="container flex flex-col gap-6 md:flex-row md:justify-between md:gap-0">
        <div className="flex flex-col gap-2">
          <div className="font-semibold">Jirattichai Wantapho</div>
          <p className="text-muted-foreground">
            Computer Engineering Student
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <div className="font-semibold">Quick Links</div>
          <nav className="flex flex-col gap-2">
            <Link href="#about" className="text-muted-foreground hover:text-foreground transition-colors">About</Link>
            <Link href="#skills" className="text-muted-foreground hover:text-foreground transition-colors">Skills</Link>
            <Link href="#education" className="text-muted-foreground hover:text-foreground transition-colors">Education</Link>
            <Link href="#coursework" className="text-muted-foreground hover:text-foreground transition-colors">Coursework</Link>
            <Link href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">Projects</Link>
            <Link href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</Link>
          </nav>
        </div>

        <div className="flex flex-col gap-2">
          <div className="font-semibold">Connect</div>
          <div className="flex gap-2">
            <Button asChild variant="ghost" size="icon">
              <a href="mailto:jirattichai.w@gmail.com" aria-label="Email">
                <Mail className="h-5 w-5" />
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
      </div>

      <div className="container mt-8 text-center text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} Jirattichai Wantapho. All rights reserved.
      </div>
    </footer>
  );
}
