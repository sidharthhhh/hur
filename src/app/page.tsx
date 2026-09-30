import React from "react";
import { Hero } from "@/components/sections/hero/Hero";
import { About } from "@/components/sections/about/About";
import { Experience } from "@/components/sections/experience/Experience";
import { Projects } from "@/components/sections/projects/Projects";
import { CaseStudies } from "@/components/sections/case-studies/CaseStudies";
import { Skills } from "@/components/sections/skills/Skills";
import { Learning } from "@/components/sections/learning/Learning";
import { Education } from "@/components/sections/education/Education";
import { Certifications } from "@/components/sections/certifications/Certifications";
import { Solutions } from "@/components/sections/solutions/Solutions";
import { Philosophy } from "@/components/sections/philosophy/Philosophy";
import { Contact } from "@/components/sections/contact/Contact";

export default function Home() {
  return (
    <main className="relative flex flex-col min-h-screen">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. About & What I Bring */}
      <About />

      {/* 3. Experience & Career Journey */}
      <Experience />

      {/* 4. Projects (with interactive filter) */}
      <Projects />

      {/* 5. Case Studies */}
      <CaseStudies />

      {/* 6. Skills */}
      <Skills />

      {/* 7. Currently Learning Roadmap */}
      <Learning />

      {/* 8. Education */}
      <Education />

      {/* 9. Certifications & Achievements */}
      <Certifications />

      {/* 10. Technology & Business Solutions */}
      <Solutions />

      {/* 11. Built for Continuous Growth */}
      <Philosophy />

      {/* 12. Contact Form & Links */}
      <Contact />
    </main>
  );
}
