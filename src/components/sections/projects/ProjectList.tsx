"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { ProjectItem, ProjectCategory } from "@/types";
import { ArrowRight, BookOpen, ExternalLink, Github, Sparkles } from "lucide-react";
import { track } from "@/lib/analytics";
import { motion, AnimatePresence } from "motion/react";
import { ProjectVisual } from "./ProjectCardVisual";

interface ProjectListProps {
  projects: ProjectItem[];
}

type FilterCategory = "all" | ProjectCategory;

const filterOptions: { label: string; value: FilterCategory }[] = [
  { label: "All Work", value: "all" },
  { label: "Data Analytics", value: "analytics" },
  { label: "Web Applications", value: "technology" },
];

export function ProjectList({ projects }: ProjectListProps) {
  const [selectedCategory, setSelectedCategory] = useState<FilterCategory>("all");

  const filteredProjects = useMemo(() => {
    if (selectedCategory === "all") return projects;
    return projects.filter((p) => p.category === selectedCategory);
  }, [projects, selectedCategory]);

  // Designate the flagship analytics project as featured when in "all" or "analytics"
  const featuredProject = useMemo(() => {
    return filteredProjects.find((p) => p.slug === "ecommerce-analytics") || filteredProjects[0];
  }, [filteredProjects]);

  const secondaryProjects = useMemo(() => {
    return filteredProjects.filter((p) => p.id !== featuredProject?.id);
  }, [filteredProjects, featuredProject]);

  return (
    <div className="space-y-10">
      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center gap-2">
        {filterOptions.map((opt) => {
          const isSelected = selectedCategory === opt.value;
          const count =
            opt.value === "all"
              ? projects.length
              : projects.filter((p) => p.category === opt.value).length;

          return (
            <button
              key={opt.value}
              onClick={() => setSelectedCategory(opt.value)}
              className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold transition-all duration-200 cursor-pointer ${
                isSelected
                  ? "bg-primary text-white shadow-glow-sm"
                  : "bg-surface-elevated text-muted-foreground border border-black/8 dark:border-white/6 hover:text-foreground hover:border-black/15 dark:hover:border-white/15"
              }`}
            >
              <span>{opt.label}</span>
              <span
                className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                  isSelected ? "bg-white/20 text-white" : "bg-black/5 dark:bg-white/5 text-muted-foreground"
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={selectedCategory}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.3 }}
          className="space-y-8"
        >
          {/* 1. Flagship Featured Project Card (Large 2-column layout) */}
          {featuredProject && (
            <div className="rounded-2xl border border-black/10 dark:border-white/12 bg-card text-card-foreground p-6 sm:p-8 lg:p-10 shadow-xl relative overflow-hidden group transition-all duration-300 hover:border-primary/50">
              {/* Subtle orange accent gradient bar at top */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-[#FF9E40] to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
                {/* Left/Top: Meaningful Data Visual Preview */}
                <div className="lg:col-span-6 w-full">
                  <div className="mb-2 flex items-center justify-between text-[11px] font-mono text-muted-foreground">
                    <span className="flex items-center gap-1.5 text-primary font-semibold">
                      <Sparkles className="h-3 w-3" />
                      FEATURED ARCHITECTURE
                    </span>
                    <span className="uppercase">{featuredProject.status}</span>
                  </div>

                  <ProjectVisual slug={featuredProject.slug} />
                </div>

                {/* Right/Bottom: Project Details */}
                <div className="lg:col-span-6 space-y-4">
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-[0.14em] text-primary font-semibold">
                      {featuredProject.category === "analytics" ? "Data Analytics & Cohort Modeling" : "Web Application"}
                    </span>
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-foreground tracking-tight mt-1 leading-snug">
                      {featuredProject.title}
                    </h3>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {featuredProject.summary}
                  </p>

                  {/* Problem & Solution block */}
                  <div className="rounded-xl bg-surface-elevated/70 border border-black/6 dark:border-white/6 p-3.5 space-y-1.5 text-xs">
                    <p className="text-muted-foreground leading-relaxed">
                      <strong className="text-foreground">Problem:</strong> {featuredProject.problem}
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      <strong className="text-foreground">Solution:</strong> {featuredProject.solution}
                    </p>
                  </div>

                  {/* Stack pills (max 4) */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {featuredProject.stack.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-surface border border-black/8 dark:border-white/8 text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="pt-2 flex flex-wrap items-center gap-3">
                    {featuredProject.hasCaseStudy && (
                      <Link
                        href={`/case-studies/${featuredProject.slug}`}
                        onClick={() => track("project_click", { project: featuredProject.slug, type: "case_study" })}
                        className="inline-flex items-center gap-2 rounded-full bg-primary hover:bg-[#FF8A1A] text-white px-5 py-2 text-xs font-semibold shadow-glow-sm transition-all duration-200 hover:scale-[1.02]"
                      >
                        <BookOpen className="h-3.5 w-3.5" />
                        <span>Read Case Study</span>
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    )}

                    {featuredProject.demo && (
                      <a
                        href={featuredProject.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-full border border-black/10 dark:border-white/12 bg-surface hover:bg-surface-elevated text-foreground px-4 py-2 text-xs font-semibold transition-colors"
                      >
                        <ExternalLink className="h-3.5 w-3.5" />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 2. Secondary Projects (2-column responsive grid with varied cards) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {secondaryProjects.map((project) => (
              <motion.div
                key={project.id}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="rounded-2xl border border-black/10 dark:border-white/10 bg-card text-card-foreground p-5 sm:p-6 shadow-xl flex flex-col justify-between transition-all duration-300 hover:border-primary/40 group"
              >
                <div className="space-y-4">
                  {/* Category & Status */}
                  <div className="flex items-center justify-between text-[11px] font-mono">
                    <span className="text-primary font-semibold uppercase tracking-wider">
                      {project.category}
                    </span>
                    <span className="text-muted-foreground uppercase text-[10px]">
                      {project.status}
                    </span>
                  </div>

                  {/* Purposeful Visual Component Preview */}
                  <ProjectVisual slug={project.slug} />

                  <div>
                    <h4 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors leading-snug">
                      {project.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-muted-foreground mt-1.5 leading-relaxed line-clamp-2">
                      {project.summary}
                    </p>
                  </div>

                  {/* Problem Statement */}
                  {project.problem && (
                    <div className="rounded-lg bg-surface-elevated/80 border border-black/6 dark:border-white/4 p-2.5 text-xs text-muted-foreground">
                      <strong className="text-foreground">Problem: </strong>
                      <span className="line-clamp-2">{project.problem}</span>
                    </div>
                  )}

                  {/* Stack pills */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.stack.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-surface border border-black/8 dark:border-white/6 text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer action buttons */}
                <div className="mt-5 pt-3 border-t border-black/8 dark:border-white/8 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {project.hasCaseStudy && (
                      <Link
                        href={`/case-studies/${project.slug}`}
                        onClick={() => track("project_click", { project: project.slug, type: "case_study" })}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-[#FF9E40] transition-colors"
                      >
                        <span>Case study</span>
                        <ArrowRight className="h-3 w-3" />
                      </Link>
                    )}

                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <ExternalLink className="h-3 w-3" />
                        <span>Demo</span>
                      </a>
                    )}

                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <Github className="h-3.5 w-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
