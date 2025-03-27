"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { GraduationCap, BookOpen } from "lucide-react";
//import { useInView } from "react-intersection-observer";

export function Education() {
  // const { ref, inView } = useInView({
  //   triggerOnce: true,
  //   threshold: 0.1,
  // });

  return (
    // <section
    //   id="education"
    //   ref={ref}
    //   className={`py-16 md:py-24 bg-muted/50 ${inView ? "animate-fadeInUp" : ""}`}
    // >
      <div className="container">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Education</h2>
          <div className="w-20 h-1 bg-primary rounded mb-6"></div>
          <p className="text-muted-foreground max-w-[700px]">
            My academic background and relevant coursework.
          </p>
        </div>

        <Card className="border-none shadow-md bg-card">
          <CardContent className="p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap className="h-8 w-8 text-primary" />
              <div>
                <h3 className="text-xl font-semibold">King Mongkut's University of Technology Thonburi (KMUTT)</h3>
                <p className="text-muted-foreground">Bachelor of Engineering in Computer Engineering</p>
              </div>
            </div>

            <div className="ml-11 mb-8">
              <div className="flex flex-wrap justify-between items-center mb-4">
                <div className="text-lg">Year: 3</div>
                <div className="text-lg">GPAX: 2.99</div>
              </div>
            </div>

            <Separator className="my-6" />

            <div className="flex items-center gap-3 mb-6">
              <BookOpen className="h-7 w-7 text-primary" />
              <h3 className="text-xl font-semibold">Relevant Coursework</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ml-11">
              <Card className="bg-muted/50 border-none">
                <CardContent className="p-4">
                  <h4 className="font-medium mb-2">CPE393: Fundamentals of Cybersecurity</h4>
                  <ul className="list-disc pl-5 text-muted-foreground">
                    <li>Deployed web applications using Docker</li>
                    <li>Performed penetration testing with SQLMap, ZAP, WFuzz, Nogotofail</li>
                    <li>Identified and analyzed security vulnerabilities</li>
                    <li>Implemented vulnerability fixes</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-muted/50 border-none">
                <CardContent className="p-4">
                  <h4 className="font-medium mb-2">CPE314: Computer Networks</h4>
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
    // </section>
  );
}
