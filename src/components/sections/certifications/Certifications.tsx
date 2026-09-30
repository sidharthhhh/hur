"use client";

import React from "react";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { certificationsData, achievementsData } from "@/data/certifications";
import { Award, Trophy, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";

export function Certifications() {
  return (
    <section id="certifications" className="relative py-14 sm:py-20 border-t border-border/80 scroll-mt-20">
      <Container>
        <SectionHeading
          eyebrow="07 &mdash; VALIDATION"
          title="Certifications & Recognitions"
          description="Documented credentials and operational recognitions across data analytics and cross-functional leadership."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10">
          {/* Left Column: Certifications */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-2">
              <Award className="h-4 w-4 text-primary" />
              <h3 className="text-sm font-mono uppercase tracking-[0.14em] text-foreground font-semibold">
                Certifications & Training
              </h3>
            </div>

            <div className="space-y-3">
              {certificationsData.map((cert) => (
                <motion.div
                  key={cert.id}
                  whileHover={{ y: -2 }}
                  className="rounded-xl border border-black/8 dark:border-white/8 bg-card text-card-foreground p-5 transition-all hover:border-primary/40 shadow-sm"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h4 className="text-base font-bold text-foreground">
                        {cert.name}
                      </h4>
                      <p className="text-xs text-muted-foreground mt-1">
                        Applied training in relational database queries, data manipulation, and analytical summaries.
                      </p>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20 font-semibold shrink-0">
                      Verified
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Achievements & Recognitions */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-2">
              <Trophy className="h-4 w-4 text-primary" />
              <h3 className="text-sm font-mono uppercase tracking-[0.14em] text-foreground font-semibold">
                Operational Milestones & Recognitions
              </h3>
            </div>

            <div className="space-y-3">
              {achievementsData.map((ach) => (
                <motion.div
                  key={ach.id}
                  whileHover={{ y: -2 }}
                  className="rounded-xl border border-black/8 dark:border-white/8 bg-card text-card-foreground p-5 transition-all hover:border-primary/40 shadow-sm"
                >
                  <div className="flex items-start justify-between gap-2 mb-1.5">
                    <h4 className="text-base font-bold text-foreground flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                      <span>{ach.title}</span>
                    </h4>
                    <span className="text-[10px] font-mono text-muted-foreground bg-surface-elevated px-2 py-0.5 rounded-full border border-black/6 dark:border-white/6">
                      {ach.year}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed pl-6">
                    {ach.context}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
