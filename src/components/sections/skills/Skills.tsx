"use client";

import React from "react";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { motion } from "motion/react";
import { Sparkles, BarChart3, Briefcase, Code2 } from "lucide-react";

interface SkillGroup {
  id: string;
  category: string;
  icon: React.ElementType;
  description: string;
  skills: string[];
  learning?: string[];
}

const skillGroups: SkillGroup[] = [
  {
    id: "project-ops",
    category: "Project & Operations",
    icon: Briefcase,
    description: "Orchestrating schedules, sprint dependencies, stakeholder communications, and strict SLA compliance.",
    skills: [
      "Project Coordination",
      "Timeline Tracking",
      "Stakeholder Communication",
      "Documentation",
      "Account Management",
      "SLA Management",
      "Cross-Functional Alignment",
    ],
  },
  {
    id: "data-analytics",
    category: "Data & Business Analytics",
    icon: BarChart3,
    description: "Transforming raw operational data into structured relational models, exploratory insights, and executive dashboards.",
    skills: [
      "SQL",
      "Python",
      "Pandas",
      "NumPy",
      "Power BI",
      "Microsoft Excel (Advanced)",
      "Data Cleaning",
      "Exploratory Data Analysis",
      "KPI Dashboards",
    ],
  },
  {
    id: "web-dev",
    category: "Web Development",
    icon: Code2,
    description: "Building responsive, semantic, and interactive frontend interfaces without heavy bloated dependencies.",
    skills: [
      "JavaScript",
      "HTML5",
      "CSS3",
      "REST APIs",
      "Git & GitHub",
      "DOM Manipulation",
      "Responsive Web Design",
    ],
  },
  {
    id: "learning-growth",
    category: "Active Expansion",
    icon: Sparkles,
    description: "Self-directed upskilling across modern frameworks, statistical modeling, and applied machine learning.",
    skills: [
      "TypeScript",
      "React",
      "Next.js",
      "Statistical Modeling",
      "Machine Learning Basics",
      "Tableau",
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-16 sm:py-24 border-t border-border/80 scroll-mt-20">
      <Container>
        <SectionHeading
          eyebrow="05 &mdash; CAPABILITIES"
          title="Skills & Technical Toolkit"
          description="A clear, organized breakdown of verified capabilities across project coordination, data analytics, web engineering, and active learning."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mt-12">
          {skillGroups.map((group) => {
            const Icon = group.icon;
            const isLearning = group.id === "learning-growth";

            return (
              <motion.div
                key={group.id}
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
                className={`rounded-2xl border p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 ${
                  isLearning
                    ? "border-primary/30 bg-primary/5 hover:border-primary/50"
                    : "border-black/10 dark:border-white/10 bg-card text-card-foreground hover:border-primary/30"
                }`}
              >
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className={`flex h-9 w-9 items-center justify-center rounded-xl ${
                        isLearning
                          ? "bg-primary/20 text-primary"
                          : "bg-surface-elevated text-foreground border border-black/6 dark:border-white/6"
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-foreground">
                        {group.category}
                      </h3>
                      {isLearning && (
                        <span className="text-[10px] font-mono text-primary font-semibold uppercase tracking-wider">
                          Active Focus
                        </span>
                      )}
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-5">
                    {group.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-black/6 dark:border-white/6">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`text-xs px-3 py-1 rounded-full font-medium transition-colors ${
                        isLearning
                          ? "bg-primary/10 text-primary border border-primary/25"
                          : "bg-surface-elevated text-muted-foreground border border-black/6 dark:border-white/6 hover:text-foreground hover:border-black/15 dark:hover:border-white/15"
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
