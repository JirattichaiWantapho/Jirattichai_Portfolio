"use client";

import { Card, CardContent } from "@/components/ui/card";

export function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-muted/50">
      <div className="container">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary rounded mb-6"></div>
          <p className="text-muted-foreground max-w-[700px]">
            Get to know more about my background, skills, and experiences.
          </p>
        </div>

        <Card className="border-none shadow-md bg-card">
          <CardContent className="p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-3">
                <h3 className="text-xl font-semibold mb-4">Personal Profile</h3>
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
