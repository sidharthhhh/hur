"use client";

import React, { useState } from "react";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface RoadmapStep {
  id: string;
  stepNumber: string;
  title: string;
  tagline: string;
  description: string;
  topics: string[];
  status: "active" | "in-progress" | "upcoming";
}

const roadmapSteps: RoadmapStep[] = [
  {
    id: "sql",
    stepNumber: "01",
    title: "SQL & Relational Modeling",
    tagline: "Structured Data Extraction & Query Optimization",
    description:
      "Writing robust queries using window functions, multi-table joins, subqueries, and aggregations to transform raw relational records into analysis-ready datasets.",
    topics: ["Window Functions", "CTEs & Subqueries", "Data Validation", "Schema Modeling"],
    status: "active",
  },
  {
    id: "python",
    stepNumber: "02",
    title: "Python (Pandas & NumPy)",
    tagline: "Automated Data Processing & Exploratory Pipelines",
    description:
      "Cleaning messy operational logs, handling missing values, calculating business metrics, and building repeatable exploratory data analysis (EDA) workflows.",
    topics: ["Pandas DataFrames", "Data Wrangling", "NumPy Vectorization", "Automated Scripts"],
    status: "active",
  },
  {
    id: "stats",
    stepNumber: "03",
    title: "Statistics & Quantitative Analysis",
    tagline: "Inferential Metrics & Cohort Mathematics",
    description:
      "Applying descriptive statistics, variance analysis, probability distributions, and cohort retention math to measure real operational behavior.",
    topics: ["Descriptive Statistics", "Cohort Retention Curves", "A/B Testing Concepts", "Correlation Analysis"],
    status: "in-progress",
  },
  {
    id: "power-bi",
    stepNumber: "04",
    title: "Power BI & Business Intelligence",
    tagline: "Executive KPI Dashboards & Operational Telemetry",
    description:
      "Designing intuitive, interactive business dashboards with DAX calculations, scheduled data refreshes, and clear visual storytelling for stakeholders.",
    topics: ["DAX Measures", "Interactive Visuals", "SLA Monitoring", "Executive Dashboards"],
    status: "in-progress",
  },
  {
    id: "ml",
    stepNumber: "05",
    title: "Applied Machine Learning",
    tagline: "Predictive Analytics & Workflow Intelligence",
    description:
      "Exploring feature engineering, supervised regression and classification models in scikit-learn to forecast operational bottlenecks and customer churn.",
    topics: ["Feature Engineering", "Classification & Regression", "Model Evaluation", "scikit-learn"],
    status: "upcoming",
  },
];

export function Learning() {
  const [activeStepId, setActiveStepId] = useState<string>("sql");

  return (
    <section id="learning" className="relative py-16 sm:py-24 border-t border-border/80 scroll-mt-20">
      <Container>
        <SectionHeading
          eyebrow="06 &mdash; CONTINUOUS LEARNING"
          title="Curiosity & Technical Progression"
          description="A structured visual roadmap representing disciplined self-directed evolution from active data modeling into applied operational intelligence."
        />

        {/* Interactive Visual Roadmap */}
        <div className="mt-12 max-w-4xl mx-auto space-y-4">
          {roadmapSteps.map((step, idx) => {
            const isSelected = activeStepId === step.id;
            const isLast = idx === roadmapSteps.length - 1;

            return (
              <div key={step.id} className="relative">
                {/* Connecting spine line to next step */}
                {!isLast && (
                  <div className="absolute left-6 top-14 bottom-[-16px] w-[1.5px] bg-black/10 dark:bg-white/10 z-0 pointer-events-none" />
                )}

                <motion.div
                  layout
                  onClick={() => setActiveStepId(step.id)}
                  onMouseEnter={() => setActiveStepId(step.id)}
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                  className={`relative z-10 rounded-2xl border p-5 sm:p-6 cursor-pointer transition-all duration-300 ${
                    isSelected
                      ? "border-primary/50 bg-card text-card-foreground shadow-xl shadow-primary/5"
                      : "border-black/8 dark:border-white/8 bg-card/70 hover:border-primary/30 hover:bg-card"
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3 sm:gap-4">
                      {/* Step Number Circle */}
                      <div
                        className={`flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-xl font-mono text-xs sm:text-sm font-bold shrink-0 transition-colors ${
                          isSelected
                            ? "bg-primary text-white shadow-glow-sm"
                            : "bg-surface-elevated text-muted-foreground border border-black/6 dark:border-white/6"
                        }`}
                      >
                        {step.stepNumber}
                      </div>

                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="text-base sm:text-lg font-bold text-foreground">
                            {step.title}
                          </h3>
                          {step.status === "active" && (
                            <span className="hidden sm:inline-flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 rounded-full bg-primary/15 text-primary border border-primary/25 font-semibold">
                              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                              Active Focus
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-muted-foreground mt-0.5 font-medium">
                          {step.tagline}
                        </p>
                      </div>
                    </div>

                    <ChevronRight
                      className={`h-4 w-4 text-muted-foreground transition-transform duration-200 mt-2 ${
                        isSelected ? "rotate-90 text-primary" : ""
                      }`}
                    />
                  </div>

                  {/* Expandable Description and Focus Topics */}
                  <AnimatePresence>
                    {isSelected && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden pt-4 mt-4 border-t border-black/8 dark:border-white/8 space-y-3"
                      >
                        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                          {step.description}
                        </p>

                        <div className="flex flex-wrap items-center gap-1.5 pt-1">
                          <span className="text-[11px] font-mono text-muted-foreground mr-1">Focus Topics:</span>
                          {step.topics.map((topic) => (
                            <span
                              key={topic}
                              className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-surface-elevated border border-black/8 dark:border-white/8 text-foreground/90 font-medium"
                            >
                              {topic}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
