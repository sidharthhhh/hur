"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { projectsData } from "@/data/projects";
import { ProjectVisual } from "./ProjectVisual";
import { ArrowUpRight, BookOpen, Github } from "lucide-react";
import { track } from "@/lib/analytics";

export function Projects() {
  const [selectedFilter, setSelectedFilter] = useState<string>("all");

  const filtered = useMemo(() => {
    if (selectedFilter === "all") return projectsData;
    return projectsData.filter((p) => p.category === selectedFilter);
  }, [selectedFilter]);

  return (
    <section id="work" className="py-20 sm:py-28 border-t border-border">
      <Container>
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 sm:mb-20">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">
              01 &bull; Portfolio
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">
              Selected Work
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground mt-3 max-w-xl">
              Practical analytics projects, exploratory data studies, and interactive frontend applications.
            </p>
          </div>

          {/* Simple Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {[
              { label: "All Projects", value: "all" },
              { label: "Data Analytics", value: "analytics" },
              { label: "Web Applications", value: "technology" },
            ].map((tab) => (
              <button
                key={tab.value}
                onClick={() => setSelectedFilter(tab.value)}
                className={`text-xs font-medium px-3.5 py-1.5 rounded-full border transition-all duration-150 cursor-pointer ${
                  selectedFilter === tab.value
                    ? "border-foreground bg-foreground text-background font-semibold"
                    : "border-border text-muted-foreground hover:text-foreground hover:border-foreground/40"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Large Editorial Project Rows */}
        <div className="space-y-16 sm:space-y-24">
          {filtered.map((project, idx) => {
            const rowNumber = String(idx + 1).padStart(2, "0");
            return (
              <article
                key={project.id}
                className="group pt-8 border-t border-border/80 first:border-t-0 first:pt-0"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  {/* Left Column: Project Description */}
                  <div className="lg:col-span-6 space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono font-bold text-muted-foreground">
                        {rowNumber}
                      </span>
                      <span className="text-border">/</span>
                      <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                        {project.category === "technology"
                          ? "Frontend Web App"
                          : "Data Analytics"}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight leading-snug group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      {project.summary}
                    </p>

                    {/* Stack tags */}
                    <div className="pt-2 flex flex-wrap gap-2 text-xs font-mono text-muted-foreground">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-md border border-border bg-card/50"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action links */}
                    <div className="pt-4 flex items-center gap-4 text-sm font-semibold">
                      {project.hasCaseStudy ? (
                        <Link
                          href={`/case-studies/${project.slug}`}
                          onClick={() =>
                            track("project_click", {
                              project: project.slug,
                              type: "case_study",
                            })
                          }
                          className="inline-flex items-center gap-1.5 text-primary hover:underline underline-offset-4"
                        >
                          <BookOpen className="h-4 w-4" />
                          <span>Read Case Study</span>
                          <ArrowUpRight className="h-3.5 w-3.5" />
                        </Link>
                      ) : null}

                      {project.github ? (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() =>
                            track("project_click", {
                              project: project.slug,
                              type: "github",
                            })
                          }
                          className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors"
                        >
                          <Github className="h-4 w-4" />
                          <span>View Code</span>
                          <ArrowUpRight className="h-3.5 w-3.5" />
                        </a>
                      ) : null}
                    </div>
                  </div>

                  {/* Right Column: Large Visual Mock Representation */}
                  <div className="lg:col-span-6 transition-transform duration-300 group-hover:scale-[1.01]">
                    {project.hasCaseStudy ? (
                      <Link href={`/case-studies/${project.slug}`} className="block">
                        <ProjectVisual slug={project.slug} category={project.category} />
                      </Link>
                    ) : (
                      <ProjectVisual slug={project.slug} category={project.category} />
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
