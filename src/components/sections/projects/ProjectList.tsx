"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { ProjectItem, ProjectCategory } from "@/types";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, ExternalLink, BookOpen, Layers } from "lucide-react";
import { track } from "@/lib/analytics";

interface ProjectListProps {
  projects: ProjectItem[];
}

type FilterCategory = "all" | ProjectCategory;

const filterOptions: { label: string; value: FilterCategory }[] = [
  { label: "All Projects", value: "all" },
  { label: "Data Analytics", value: "analytics" },
  { label: "Business & Ops", value: "business" },
  { label: "Data Science (Future)", value: "data-science" },
  { label: "Technology", value: "technology" },
];

export function ProjectList({ projects }: ProjectListProps) {
  const [selectedCategory, setSelectedCategory] = useState<FilterCategory>("all");

  const filteredProjects = useMemo(() => {
    if (selectedCategory === "all") return projects;
    return projects.filter((p) => p.category === selectedCategory);
  }, [projects, selectedCategory]);

  return (
    <div className="space-y-8">
      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 pb-2">
        {filterOptions.map((opt) => {
          // Hide empty categories
          const count =
            opt.value === "all"
              ? projects.length
              : projects.filter((p) => p.category === opt.value).length;

          if (count === 0 && opt.value !== "all") return null;

          const isSelected = selectedCategory === opt.value;
          return (
            <button
              key={opt.value}
              onClick={() => setSelectedCategory(opt.value)}
              className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-medium transition-all duration-200 ${
                isSelected
                  ? "bg-primary text-primary-foreground shadow-xs"
                  : "bg-secondary/60 text-muted-foreground hover:bg-secondary hover:text-foreground"
              }`}
            >
              <span>{opt.label}</span>
              <span
                className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                  isSelected ? "bg-primary-foreground/20 text-primary-foreground" : "bg-muted text-muted-foreground"
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <Card
            key={project.id}
            className="flex flex-col justify-between hover:-translate-y-1 hover:border-primary/40 hover:shadow-sm transition-all duration-200"
          >
            <div>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                    {project.category.replace("-", " ")}
                  </span>
                  <Badge
                    variant={
                      project.status === "completed"
                        ? "success"
                        : project.status === "in-progress"
                        ? "default"
                        : "secondary"
                    }
                    className="text-[10px] py-0 font-medium"
                  >
                    {project.status === "completed"
                      ? "Completed"
                      : project.status === "in-progress"
                      ? "In Progress"
                      : "Exploring"}
                  </Badge>
                </div>

                <CardTitle className="text-base sm:text-lg line-clamp-2">
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
                  <div className="text-xs space-y-1 rounded-md bg-secondary/30 p-2.5">
                    <p className="text-muted-foreground">
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
                      className="text-[11px] font-normal text-muted-foreground"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </div>

            <CardFooter className="pt-3 border-t border-border/60 flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                {project.hasCaseStudy && (
                  <Button asChild size="sm" variant="default" className="text-xs gap-1.5 h-8">
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
                  <Button asChild size="sm" variant="ghost" className="h-8 w-8 p-0">
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
        ))}
      </div>
    </div>
  );
}
