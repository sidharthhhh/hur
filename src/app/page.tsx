import React from "react";
import { Hero } from "@/components/sections/hero/Hero";
import { Projects } from "@/components/sections/projects/Projects";
import { Experience } from "@/components/sections/experience/Experience";
import { About } from "@/components/sections/about/About";
import { Skills } from "@/components/sections/skills/Skills";
import { Learning } from "@/components/sections/learning/Learning";
import { Contact } from "@/components/sections/contact/Contact";

export default function Home() {
  return (
    <main className="relative flex flex-col min-h-screen">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Selected Work (The Star) */}
      <Projects />

      {/* 3. Experience (Expandable Editorial Timeline) */}
      <Experience />

      {/* 4. About (Personal Story & Education) */}
      <About />

      {/* 5. Toolkit / Skills (Typographic Groups) */}
      <Skills />

      {/* 6. Right Now / Learning Trajectory */}
      <Learning />

      {/* 7. Contact (Warm & Direct) */}
      <Contact />
    </main>
  );
}
