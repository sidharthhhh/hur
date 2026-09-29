import React from "react";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { projectsData } from "@/data/projects";
import { ProjectList } from "./ProjectList";
import { AnimatedContainer } from "@/components/motion/AnimatedContainer";

export function Projects() {
  return (
    <Section id="projects" className="border-t border-border/60">
      <AnimatedContainer>
        <SectionHeading
          eyebrow="Portfolio & Explorations"
          title="Applied Analytics & Systems Projects"
          description="Real-world data modeling, business operations dashboards, and exploratory data science architectures."
        />
      </AnimatedContainer>

      <AnimatedContainer delay={0.1}>
        <ProjectList projects={projectsData} />
      </AnimatedContainer>
    </Section>
  );
}
