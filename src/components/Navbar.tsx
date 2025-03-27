"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Education", href: "#education" },
  { name: "Coursework", href: "#coursework" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const isDarkMode = theme === "dark";

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id || "home");
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/90 backdrop-blur-md animate-fadeInDown glass">
      <div className="container flex h-16 items-center justify-between">
        <div className="font-semibold text-xl relative group">
          <Link href="/" className="relative z-10">
            Jirattichai Wantapho
          </Link>
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
        </div>
        <nav className="hidden md:flex md:gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-all duration-300 hover:text-primary relative group ${
                activeSection === (link.href === "/" ? "home" : link.href.slice(1))
                  ? "text-primary font-bold"
                  : ""
              }`}
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}
        </nav>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setTheme(isDarkMode ? "light" : "dark")}
          aria-label="Toggle theme"
          className="transition-all duration-300 hover:bg-primary/20 hover:text-primary animate-pulse-slow"
        >
          {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
        </Button>
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon"
              className={`${menuOpen ? 'open' : ''}`}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <div className="w-5 flex flex-col gap-1.5">
                <span className="hamburger-line block h-0.5 w-full bg-current"></span>
                <span className="hamburger-line block h-0.5 w-full bg-current"></span>
                <span className="hamburger-line block h-0.5 w-full bg-current"></span>
              </div>
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[250px] sm:w-[300px] glass">
            <nav className="flex flex-col gap-4 mt-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-sm font-medium transition-all duration-300 hover:text-primary hover:translate-x-1"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
