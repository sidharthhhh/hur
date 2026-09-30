"use client";

import React from "react";
import { Container } from "@/components/layout/Container";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "motion/react";

export function About() {
  return (
    <section id="about" className="relative py-16 sm:py-24 border-t border-border/80 scroll-mt-20">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column: Editorial Headline & Label */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
            <div className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              <span className="text-[11px] font-mono uppercase tracking-[0.18em] text-muted-foreground">
                01 &mdash; BACKGROUND
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground leading-[1.12]">
              Engineering thinking.
              <span className="block text-muted-foreground font-medium mt-1">
                Business execution.
              </span>
            </h2>

            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Bridging technical computational logic and stakeholder realities to deliver dependable project outcomes, clean data visibility, and reliable operations.
            </p>

            <div className="pt-2">
              <Link
                href="/#experience"
                className="inline-flex items-center gap-2 text-xs font-semibold text-primary hover:text-[#FF9E40] transition-colors group"
              >
                <span>Explore career timeline</span>
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Right Column: Narrative & Typography-Driven Statistics */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <div className="space-y-4 text-base text-muted-foreground leading-relaxed">
              <p>
                Graduated with a <strong className="text-foreground font-semibold">Bachelor of Technology (B.Tech)</strong> from <strong className="text-foreground font-semibold">Oriental Institute of Science and Technology</strong>, cultivating a rigorous foundation in computational algorithms, systems analysis, and structured problem-solving.
              </p>
              <p>
                My professional experience traverses technical and operational environments: from engineering responsive frontend applications at <strong className="text-foreground font-semibold">TenSketch</strong>, to managing high-volume client accounts and SLA benchmarks at <strong className="text-foreground font-semibold">TP</strong>, delivering program advisory at <strong className="text-foreground font-semibold">Splash India</strong>, and currently orchestrating milestone tracking as <strong className="text-foreground font-semibold">Assistant Project Coordinator</strong> at <strong className="text-foreground font-semibold">Innosecure Technologies</strong>.
              </p>
              <p>
                Currently deepening expertise in <strong className="text-foreground font-semibold">data analytics</strong>—building SQL data models, Python data processing scripts, and Power BI dashboards to translate complex business metrics into actionable operational clarity.
              </p>
            </div>

            {/* Typography-Driven Minimal Stats (No heavy boxed cards!) */}
            <div className="pt-6 border-t border-border/80">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
                    2024
                  </div>
                  <div className="text-xs text-muted-foreground mt-1 font-medium">
                    B.Tech Graduate <br className="hidden sm:inline" />(OIST)
                  </div>
                </div>

                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
                    4+
                  </div>
                  <div className="text-xs text-muted-foreground mt-1 font-medium">
                    Cross-Functional <br className="hidden sm:inline" />Roles
                  </div>
                </div>

                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight text-primary">
                    Web &bull; Data
                  </div>
                  <div className="text-xs text-muted-foreground mt-1 font-medium">
                    Applied Technical <br className="hidden sm:inline" />Focus
                  </div>
                </div>

                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
                    100%
                  </div>
                  <div className="text-xs text-muted-foreground mt-1 font-medium">
                    Schedule & SLA <br className="hidden sm:inline" />Focus
                  </div>
                </div>
              </div>
            </div>

            {/* Core Working Competencies */}
            <div className="pt-6 border-t border-border/80 space-y-3">
              <h3 className="text-xs font-mono uppercase tracking-[0.14em] text-muted-foreground">
                Operating Strengths
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                <motion.div
                  whileHover={{ x: 3 }}
                  className="flex items-start gap-2.5 p-3 rounded-xl bg-surface-elevated/70 border border-black/6 dark:border-white/6"
                >
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-foreground">Project Coordination:</span>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      Milestone tracking, cross-functional cadence, and proactive risk unblocking.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 3 }}
                  className="flex items-start gap-2.5 p-3 rounded-xl bg-surface-elevated/70 border border-black/6 dark:border-white/6"
                >
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-foreground">Data Analytics:</span>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      SQL queries, Excel models, and Power BI dashboards around real business KPIs.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 3 }}
                  className="flex items-start gap-2.5 p-3 rounded-xl bg-surface-elevated/70 border border-black/6 dark:border-white/6"
                >
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-foreground">Client Operations:</span>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      Account management, escalation triage, and strict SLA compliance.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 3 }}
                  className="flex items-start gap-2.5 p-3 rounded-xl bg-surface-elevated/70 border border-black/6 dark:border-white/6"
                >
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-foreground">Web Technologies:</span>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      JavaScript, HTML5, CSS3, DOM manipulation, and responsive UI engineering.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
