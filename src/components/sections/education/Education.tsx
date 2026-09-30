"use client";

import React from "react";
import { Container } from "@/components/layout/Container";
import { educationData } from "@/data/education";
import { GraduationCap, BookOpen, Calendar } from "lucide-react";

export function Education() {
  const edu = educationData[0];

  return (
    <section id="education" className="relative py-14 sm:py-20 border-t border-border/80 scroll-mt-20">
      <Container size="narrow">
        <div className="rounded-2xl border border-black/10 dark:border-white/10 bg-card text-card-foreground p-6 sm:p-8 shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-6 border-b border-black/8 dark:border-white/8">
            <div className="flex items-start gap-3.5">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary border border-primary/20 shrink-0 mt-0.5">
                <GraduationCap className="h-5 w-5" />
              </div>
              <div>
                <span className="text-[11px] font-mono uppercase tracking-[0.14em] text-primary font-semibold">
                  ACADEMIC FOUNDATION
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-foreground tracking-tight mt-0.5">
                  {edu.degree}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground mt-1 font-medium">
                  {edu.branch} &bull; {edu.institution}
                </p>
              </div>
            </div>

            <div className="inline-flex items-center gap-1.5 self-start sm:self-auto font-mono text-xs text-muted-foreground bg-surface-elevated px-3 py-1.5 rounded-full border border-black/6 dark:border-white/6">
              <Calendar className="h-3.5 w-3.5 text-primary" />
              <span>{edu.graduation_year}</span>
            </div>
          </div>

          {/* Coursework & Quantitative Training */}
          {edu.coursework && edu.coursework.length > 0 && (
            <div className="pt-6 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-muted-foreground">
                <BookOpen className="h-3.5 w-3.5 text-primary" />
                <span>Quantitative & Technical Coursework</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {edu.coursework.map((course) => (
                  <span
                    key={course}
                    className="text-xs font-mono px-3 py-1 rounded-full bg-surface-elevated border border-black/6 dark:border-white/6 text-muted-foreground"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
