"use client";

import React from "react";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/layout/SectionHeading";
import {
  CalendarClock,
  BarChart3,
  TrendingUp,
  Users2,
  FileCheck,
  ShoppingBag,
  LayoutGrid,
} from "lucide-react";
import { motion } from "motion/react";

interface SolutionItem {
  title: string;
  copy: string;
  icon: React.ElementType;
}

const solutionCapabilities: SolutionItem[] = [
  {
    title: "Project Planning & Tracking",
    copy: "Structure milestone baselines, inter-team dependencies, and delivery schedules to maintain predictable sprint execution.",
    icon: CalendarClock,
  },
  {
    title: "Business Operations & Reporting",
    copy: "Turn operational tracking logs into clear executive reporting, SLA monitoring, and decision visibility.",
    icon: TrendingUp,
  },
  {
    title: "Data Dashboards & Analytics",
    copy: "Build practical dashboards around core business questions using Power BI, SQL, and advanced Excel.",
    icon: BarChart3,
  },
  {
    title: "Cross-Functional Coordination",
    copy: "Keep technical development teams, operations, and external stakeholders continuously aligned across cadences.",
    icon: Users2,
  },
  {
    title: "Process Documentation & SLAs",
    copy: "Create repeatable standard operating procedures, documentation frameworks, and SLA compliance benchmarks.",
    icon: FileCheck,
  },
  {
    title: "E-Commerce Account Operations",
    copy: "Manage client account workflows, rapid escalation triage, and day-to-day operational deliverables.",
    icon: ShoppingBag,
  },
  {
    title: "Frontend Web Solutions",
    copy: "Build responsive, accessible web interfaces tailored to real-world user workflows using modern JavaScript, HTML, and CSS.",
    icon: LayoutGrid,
  },
];

export function Solutions() {
  return (
    <section id="solutions" className="relative py-16 sm:py-24 border-t border-border/80 scroll-mt-20">
      <Container>
        <SectionHeading
          eyebrow="08 &mdash; VALUE CREATION"
          title="Technology & Business Solutions"
          description="Applying structured project coordination, data analytics, and software workflows to optimize operational delivery."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 mt-12">
          {solutionCapabilities.map((item, idx) => {
            const Icon = item.icon;
            // Let the 7th item span 2 columns on lg or fit cleanly
            const isFullWidth = idx === 6;

            return (
              <motion.div
                key={item.title}
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
                className={`rounded-2xl border border-black/8 dark:border-white/8 bg-card text-card-foreground p-6 flex flex-col justify-between transition-all duration-300 hover:border-primary/40 shadow-sm group ${
                  isFullWidth ? "md:col-span-2 lg:col-span-3 lg:flex-row lg:items-center" : ""
                }`}
              >
                <div className={`space-y-3 ${isFullWidth ? "lg:flex lg:items-center lg:gap-5 lg:space-y-0" : ""}`}>
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-surface-elevated text-primary border border-black/6 dark:border-white/6 shrink-0 transition-colors group-hover:bg-primary group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-foreground group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className={`text-xs sm:text-sm text-muted-foreground leading-relaxed mt-1 ${isFullWidth ? "lg:max-w-3xl" : ""}`}>
                      {item.copy}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
