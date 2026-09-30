"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, FileText, CheckCircle2, TrendingUp, Layers, Activity } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { profileData } from "@/data/profile";
import { track } from "@/lib/analytics";
import gsap from "gsap";

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const eyebrowRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subheadRef = useRef<HTMLParagraphElement>(null);
  const statusRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Respect user's motion preference
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(eyebrowRef.current, {
        opacity: 0,
        y: 16,
        duration: 0.5,
      })
        .from(
          headlineRef.current?.children || [],
          {
            opacity: 0,
            y: 28,
            duration: 0.6,
            stagger: 0.12,
          },
          "-=0.3"
        )
        .from(
          subheadRef.current,
          {
            opacity: 0,
            y: 18,
            duration: 0.5,
          },
          "-=0.3"
        )
        .from(
          statusRef.current,
          {
            opacity: 0,
            y: 12,
            duration: 0.4,
          },
          "-=0.3"
        )
        .from(
          ctaRef.current?.children || [],
          {
            opacity: 0,
            y: 14,
            duration: 0.4,
            stagger: 0.08,
          },
          "-=0.2"
        )
        .from(
          visualRef.current,
          {
            opacity: 0,
            scale: 0.96,
            y: 24,
            duration: 0.7,
            ease: "power2.out",
          },
          "-=0.5"
        )
        .from(
          ".hero-kpi-item",
          {
            opacity: 0,
            y: 10,
            stagger: 0.06,
            duration: 0.4,
          },
          "-=0.4"
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-[88vh] sm:min-h-[92vh] flex items-center pt-28 sm:pt-32 pb-14 sm:pb-20 overflow-hidden bg-subtle-dots"
    >
      {/* Subtle warm ambient light in background */}
      <div className="ambient-glow-orange top-1/4 right-1/4 w-[500px] h-[350px]" />
      <div className="ambient-glow-orange -top-10 left-1/3 w-[300px] h-[200px] opacity-40" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Strong SaaS Typography & Positioning */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-7 text-left">
            {/* Eyebrow */}
            <div ref={eyebrowRef} className="inline-flex items-center gap-2.5">
              <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
              <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                PROJECT COORDINATION &bull; DATA &bull; TECHNOLOGY
              </span>
            </div>

            {/* Headline with deliberate contrast */}
            <h1
              ref={headlineRef}
              className="text-4xl sm:text-5xl lg:text-[62px] font-extrabold tracking-tight text-foreground leading-[1.08]"
            >
              <span className="block text-foreground">
                Hi, I&apos;m Sakshi.
              </span>
              <span className="block mt-2 font-normal text-muted-foreground text-2xl sm:text-3xl lg:text-[34px] leading-snug">
                I turn complex work into{" "}
                <span className="font-semibold text-foreground underline decoration-primary/40 decoration-2 underline-offset-4">
                  clear, measurable outcomes
                </span>
                .
              </span>
            </h1>

            {/* Short positioning copy */}
            <p
              ref={subheadRef}
              className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl font-normal"
            >
              Engineering graduate with cross-functional execution experience across project tracking, e-commerce operations, and data analytics. Applying structured thinking and technical workflows to keep teams aligned and deliverables on schedule.
            </p>

            {/* Status line */}
            <div
              ref={statusRef}
              className="inline-flex items-center gap-2.5 rounded-full border border-black/10 dark:border-white/10 bg-surface/80 px-3.5 py-1.5 text-xs text-muted-foreground backdrop-blur-md"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>Currently exploring data, technology & business systems.</span>
            </div>

            {/* CTAs */}
            <div
              ref={ctaRef}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2"
            >
              <Link
                href="/#projects"
                onClick={() => track("hero_cta_click", { target: "projects" })}
                className="inline-flex items-center justify-center gap-2.5 rounded-full bg-primary hover:bg-[#FF8A1A] text-white px-6 py-3 text-sm font-semibold shadow-glow-sm transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>View selected work</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>

              <a
                href={profileData.resume}
                download
                onClick={() => track("resume_download", { source: "hero" })}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-black/15 dark:border-white/15 bg-surface/80 hover:bg-surface-elevated text-foreground hover:border-black/30 dark:hover:border-white/30 px-5 py-3 text-sm font-medium transition-all duration-200"
              >
                <FileText className="h-4 w-4 text-primary" />
                <span>Download résumé</span>
              </a>
            </div>

            {/* Inline subtle proof points */}
            <div className="pt-4 flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-muted-foreground border-t border-black/8 dark:border-white/8">
              <div className="flex items-center gap-1.5">
                <span className="font-semibold text-foreground">2024</span>
                <span>B.Tech (OIST)</span>
              </div>
              <span className="text-muted-foreground/40">&bull;</span>
              <div className="flex items-center gap-1.5">
                <span className="font-semibold text-foreground">Assistant Project Coordinator</span>
                <span className="hidden sm:inline">Innosecure</span>
              </div>
              <span className="text-muted-foreground/40">&bull;</span>
              <div className="flex items-center gap-1.5">
                <span className="font-semibold text-foreground">100%</span>
                <span>SLA Focus</span>
              </div>
            </div>
          </div>

          {/* Right Column: Internal SaaS Operational Visual Panel */}
          <div ref={visualRef} className="lg:col-span-5 w-full">
            <div className="relative rounded-2xl border border-black/10 dark:border-white/12 bg-white/95 dark:bg-[#111111]/90 p-5 sm:p-6 shadow-2xl backdrop-blur-xl transition-all duration-300 hover:border-primary/40 text-foreground">
              {/* Window Titlebar */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-black/8 dark:border-white/8">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/70" />
                  </div>
                  <span className="ml-2 font-mono text-[11px] text-muted-foreground">
                    project-cadence.io
                  </span>
                </div>

                <div className="flex items-center gap-1.5 text-[11px] font-medium text-emerald-600 dark:text-emerald-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Telemetry Live</span>
                </div>
              </div>

              {/* KPI Strip */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="hero-kpi-item rounded-xl bg-surface-elevated border border-black/6 dark:border-white/6 p-3.5">
                  <div className="flex items-center justify-between text-muted-foreground mb-1">
                    <span className="text-[11px] font-medium">SLA Schedule Fidelity</span>
                    <Activity className="h-3.5 w-3.5 text-primary" />
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-xl sm:text-2xl font-extrabold text-foreground tracking-tight">
                      99.4%
                    </span>
                    <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-medium">
                      +1.8% vs base
                    </span>
                  </div>
                </div>

                <div className="hero-kpi-item rounded-xl bg-surface-elevated border border-black/6 dark:border-white/6 p-3.5">
                  <div className="flex items-center justify-between text-muted-foreground mb-1">
                    <span className="text-[11px] font-medium">Deliverables Tracked</span>
                    <Layers className="h-3.5 w-3.5 text-primary" />
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-xl sm:text-2xl font-extrabold text-foreground tracking-tight">
                      14 / 14
                    </span>
                    <span className="text-[10px] text-muted-foreground font-medium">
                      On schedule
                    </span>
                  </div>
                </div>
              </div>

              {/* Operational Workflow Node Diagram */}
              <div className="hero-kpi-item rounded-xl bg-surface-elevated/60 border border-black/6 dark:border-white/6 p-4 mb-4">
                <div className="flex items-center justify-between mb-3 text-xs">
                  <span className="font-semibold text-foreground flex items-center gap-1.5">
                    <TrendingUp className="h-3.5 w-3.5 text-primary" />
                    <span>Project Execution Pipeline</span>
                  </span>
                  <span className="text-[10px] font-mono text-muted-foreground">
                    Innosecure &bull; Q1/Q2
                  </span>
                </div>

                <div className="space-y-2.5">
                  {/* Step 1 */}
                  <div className="flex items-center justify-between text-xs p-2 rounded-lg bg-surface border border-black/4 dark:border-white/4">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                      <span className="font-medium text-foreground">Milestone & Scope Baselines</span>
                    </div>
                    <span className="text-[10px] text-muted-foreground font-mono">100% Locked</span>
                  </div>

                  {/* Step 2 */}
                  <div className="flex items-center justify-between text-xs p-2 rounded-lg bg-surface border border-primary/30">
                    <div className="flex items-center gap-2">
                      <span className="h-3.5 w-3.5 rounded-full border-2 border-primary border-t-transparent animate-spin shrink-0" />
                      <span className="font-medium text-primary">Cross-Functional Daily Sync</span>
                    </div>
                    <span className="text-[10px] text-primary font-mono font-semibold">Active Cadence</span>
                  </div>

                  {/* Step 3 */}
                  <div className="flex items-center justify-between text-xs p-2 rounded-lg bg-surface border border-black/4 dark:border-white/4">
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-muted-foreground/60 shrink-0 ml-0.5" />
                      <span className="font-medium text-muted-foreground">Power BI Operational Reporting</span>
                    </div>
                    <span className="text-[10px] text-muted-foreground font-mono">Automated</span>
                  </div>
                </div>
              </div>

              {/* Bottom Insight Snippet */}
              <div className="hero-kpi-item flex items-center justify-between gap-3 p-3 rounded-xl bg-primary/10 border border-primary/20 text-xs">
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                  <span className="text-foreground font-medium line-clamp-1">
                    Analytics: SQL queries & cohort modeling in progress
                  </span>
                </div>
                <span className="text-[10px] font-mono text-primary font-semibold shrink-0">
                  SQL &bull; BI
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
