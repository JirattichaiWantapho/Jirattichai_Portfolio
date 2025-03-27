import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Coursework } from "@/components/Coursework";
import { Education } from "@/components/Education";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Education />
      <Coursework />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
