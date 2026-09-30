"use client";

import React from "react";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { caseStudiesData } from "@/data/case-studies";
import { ArrowRight, TrendingUp, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";

export function CaseStudies() {
  return (
    <section id="case-studies" className="relative py-16 sm:py-24 border-t border-border/80 scroll-mt-20">
      <Container>
        <SectionHeading
          eyebrow="04 &mdash; DEEP DIVES"
          title="Analytical Case Studies"
          description="Detailed analytical walk-throughs spanning data validation, SQL aggregation, modeling decisions, and executive recommendations."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-12">
          {caseStudiesData.map((study, idx) => (
            <motion.div
              key={study.projectSlug}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
              className="rounded-2xl border border-black/10 dark:border-white/10 bg-card text-card-foreground p-6 sm:p-7 flex flex-col justify-between shadow-xl transition-all duration-300 hover:border-primary/50 group"
            >
              <div className="space-y-4">
                {/* Case Study Index */}
                <div className="flex items-center justify-between text-[11px] font-mono">
                  <span className="px-2.5 py-0.5 rounded-full bg-primary/15 text-primary border border-primary/25 font-semibold">
                    CASE STUDY 0{idx + 1}
                  </span>
                  <span className="text-muted-foreground">9-Step Analysis</span>
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-foreground group-hover:text-primary transition-colors leading-snug">
                  {study.title}
                </h3>

                {/* Subtitle / Short problem */}
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed line-clamp-2">
                  {study.subtitle || study.problem}
                </p>

                {/* Key Insight Visual Box */}
                <div className="rounded-xl bg-surface-elevated/70 border border-black/6 dark:border-white/6 p-3.5 space-y-2">
                  <div className="flex items-center gap-1.5 text-[11px] font-mono text-primary font-semibold">
                    <TrendingUp className="h-3 w-3" />
                    <span>PRIMARY INSIGHT</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-foreground/90 leading-relaxed font-medium">
                    <CheckCircle2 className="h-3.5 w-3.5 text-primary shrink-0 mt-0.5" />
                    <p className="line-clamp-2">{study.insights[0]}</p>
                  </div>
                </div>

                {/* Tools used */}
                <div className="flex flex-wrap gap-1 pt-1">
                  {study.tools.slice(0, 3).map((tool) => (
                    <span
                      key={tool}
                      className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-surface border border-black/6 dark:border-white/6 text-muted-foreground"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-6 pt-4 border-t border-black/8 dark:border-white/8">
                <Link
                  href={`/case-studies/${study.projectSlug}`}
                  className="inline-flex items-center gap-2 text-xs font-semibold text-primary group-hover:text-[#FF9E40] transition-colors"
                >
                  <span>Read case study</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
