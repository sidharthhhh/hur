"use client";

import React from "react";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { projectsData } from "@/data/projects";
import { ProjectList } from "./ProjectList";

export function Projects() {
  return (
    <section id="projects" className="relative py-16 sm:py-24 border-t border-border/80 scroll-mt-20">
      <Container>
        <SectionHeading
          eyebrow="03 &mdash; SELECTED WORK"
          title="Applied Analytics & Systems"
          description="Production data modeling, operational intelligence dashboards, and interactive web applications built around real business challenges."
        />

        <ProjectList projects={projectsData} />
      </Container>
    </section>
  );
}
