"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { ProjectItem, ProjectCategory } from "@/types";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, ExternalLink, BookOpen, Layers, Code2 } from "lucide-react";
import { track } from "@/lib/analytics";
import { motion, AnimatePresence } from "motion/react";

interface ProjectListProps {
  projects: ProjectItem[];
}

type FilterCategory = "all" | ProjectCategory;

const filterOptions: { label: string; value: FilterCategory }[] = [
  { label: "All Projects", value: "all" },
  { label: "Web Applications", value: "technology" },
  { label: "Data Analytics", value: "analytics" },
  { label: "Business & Ops", value: "business" },
  { label: "Data Science (Future)", value: "data-science" },
];

export function ProjectList({ projects }: ProjectListProps) {
  const [selectedCategory, setSelectedCategory] = useState<FilterCategory>("all");

  const filteredProjects = useMemo(() => {
    if (selectedCategory === "all") return projects;
    return projects.filter((p) => p.category === selectedCategory);
  }, [projects, selectedCategory]);

  return (
    <div className="space-y-8">
      {/* Filter Tabs with Framer Motion layout transition */}
      <div className="flex flex-wrap items-center gap-2 pb-2">
        {filterOptions.map((opt) => {
          const count =
            opt.value === "all"
              ? projects.length
              : projects.filter((p) => p.category === opt.value).length;

          if (count === 0 && opt.value !== "all") return null;

          const isSelected = selectedCategory === opt.value;
          return (
            <motion.button
              key={opt.value}
              onClick={() => setSelectedCategory(opt.value)}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold transition-all duration-200 cursor-pointer ${
                isSelected
                  ? "bg-primary text-primary-foreground shadow-md shadow-primary/25"
                  : "bg-card/80 border border-border/80 text-muted-foreground hover:bg-accent hover:text-foreground hover:border-primary/40"
              }`}
            >
              <span>{opt.label}</span>
              <span
                className={`text-[10px] px-2 py-0.5 rounded-full font-mono ${
                  isSelected
                    ? "bg-primary-foreground/20 text-primary-foreground font-bold"
                    : "bg-muted text-muted-foreground"
                }`}
              >
                {count}
              </span>
            </motion.button>
          );
        })}
      </div>

      {/* Projects Grid with fluid AnimatePresence transitions */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.3 }}
              whileHover={{ y: -6 }}
              className="h-full"
            >
              <Card className="h-full flex flex-col justify-between hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 relative overflow-hidden group bg-card/90 backdrop-blur-xs">
                {/* Top gradient line accent on card */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 transition-opacity duration-300 ${
                    project.category === "technology"
                      ? "bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500"
                      : project.category === "analytics"
                      ? "bg-gradient-to-r from-emerald-400 via-teal-500 to-blue-500"
                      : "bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500"
                  }`}
                />

                <div>
                  <CardHeader className="pb-3 pt-6">
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1">
                        <Code2 className="h-3 w-3 text-primary" />
                        <span>{project.category.replace("-", " ")}</span>
                      </span>
                      <Badge
                        variant={
                          project.status === "completed"
                            ? "success"
                            : project.status === "in-progress"
                            ? "default"
                            : "secondary"
                        }
                        className="text-[10px] py-0 font-semibold"
                      >
                        {project.status === "completed"
                          ? "Completed"
                          : project.status === "in-progress"
                          ? "In Progress"
                          : "Exploring"}
                      </Badge>
                    </div>

                    <CardTitle className="text-base sm:text-lg font-bold line-clamp-2 text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    {project.summary && (
                      <p className="text-xs sm:text-sm text-muted-foreground line-clamp-3 leading-relaxed">
                        {project.summary}
                      </p>
                    )}

                    {/* Structured 1-line Problem & Solution */}
                    {project.problem && (
                      <div className="text-xs space-y-1.5 rounded-lg bg-secondary/40 border border-border/50 p-3">
                        <p className="text-muted-foreground leading-relaxed">
                          <strong className="text-foreground">Problem:</strong> {project.problem}
                        </p>
                      </div>
                    )}

                    {/* Stack Badges */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {project.stack.map((tech) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className="text-[11px] font-normal text-muted-foreground bg-card/50"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </div>

                <CardFooter className="pt-3 pb-5 border-t border-border/60 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    {project.hasCaseStudy && (
                      <Button asChild size="sm" variant="default" className="text-xs gap-1.5 h-8 shadow-xs hover:shadow-primary/20">
                        <Link
                          href={`/case-studies/${project.slug}`}
                          onClick={() =>
                            track("project_click", {
                              project: project.slug,
                              type: "case_study",
                            })
                          }
                        >
                          <BookOpen className="h-3.5 w-3.5" />
                          <span>Case Study</span>
                        </Link>
                      </Button>
                    )}

                    {project.demo && (
                      <Button asChild size="sm" variant="outline" className="text-xs gap-1.5 h-8">
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() =>
                            track("project_click", {
                              project: project.slug,
                              type: "live_demo",
                            })
                          }
                        >
                          <ExternalLink className="h-3.5 w-3.5" />
                          <span>Demo</span>
                        </a>
                      </Button>
                    )}

                    {project.github && (
                      <Button asChild size="sm" variant="ghost" className="h-8 w-8 p-0 hover:text-foreground">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="GitHub Repository"
                          onClick={() =>
                            track("project_click", {
                              project: project.slug,
                              type: "github",
                            })
                          }
                        >
                          <Github className="h-4 w-4" />
                        </a>
                      </Button>
                    )}
                  </div>

                  {project.status === "exploring" && (
                    <span className="text-[11px] text-muted-foreground italic flex items-center gap-1">
                      <Layers className="h-3 w-3" />
                      <span>Planned scope</span>
                    </span>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
