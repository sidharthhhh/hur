"use client";

import React from "react";
import { Play, Volume2, Clock, CheckCircle2, AlertTriangle, Users, Award } from "lucide-react";

interface ProjectVisualProps {
  slug: string;
}

export function ProjectVisual({ slug }: ProjectVisualProps) {
  switch (slug) {
    case "ecommerce-analytics":
      return (
        <div className="rounded-xl border border-black/8 dark:border-white/10 bg-surface-elevated/70 dark:bg-[#0C0C0C] p-4 text-xs font-mono space-y-3 shadow-inner">
          <div className="flex items-center justify-between border-b border-black/6 dark:border-white/8 pb-2 text-[11px] text-muted-foreground">
            <span>COHORT_RETENTION_MATRIX</span>
            <span className="text-primary font-semibold">Power BI Model</span>
          </div>

          <div className="grid grid-cols-2 gap-2 text-foreground">
            <div className="p-2.5 rounded-lg bg-surface border border-black/6 dark:border-white/6">
              <span className="text-[10px] text-muted-foreground block">Top 15% Products</span>
              <span className="text-lg font-bold text-foreground tracking-tight">62.4%</span>
              <span className="text-[10px] text-primary block mt-0.5">Net Revenue Share</span>
            </div>
            <div className="p-2.5 rounded-lg bg-surface border border-black/6 dark:border-white/6">
              <span className="text-[10px] text-muted-foreground block">Repeat Buyer Margin</span>
              <span className="text-lg font-bold text-emerald-600 dark:text-emerald-400 tracking-tight">48.2%</span>
              <span className="text-[10px] text-muted-foreground block mt-0.5">Gross Contribution</span>
            </div>
          </div>

          {/* Mini cohort dropoff bars */}
          <div className="space-y-1.5 pt-1">
            <div className="flex justify-between text-[10px] text-muted-foreground">
              <span>Month 1 (First Purchase)</span>
              <span>100%</span>
            </div>
            <div className="h-1.5 w-full rounded-full bg-black/5 dark:bg-surface-elevated overflow-hidden">
              <div className="h-full bg-primary rounded-full w-full" />
            </div>

            <div className="flex justify-between text-[10px] text-muted-foreground pt-1">
              <span>Month 2 (Re-engagement Leak)</span>
              <span className="text-primary font-semibold">32% (-68%)</span>
            </div>
            <div className="h-1.5 w-full rounded-full bg-black/5 dark:bg-surface-elevated overflow-hidden">
              <div className="h-full bg-primary/70 rounded-full w-[32%]" />
            </div>

            <div className="flex justify-between text-[10px] text-muted-foreground pt-1">
              <span>Month 3+ (Loyal Cohort)</span>
              <span className="text-emerald-600 dark:text-emerald-400 font-semibold">82% Retained</span>
            </div>
            <div className="h-1.5 w-full rounded-full bg-black/5 dark:bg-surface-elevated overflow-hidden">
              <div className="h-full bg-emerald-500 dark:bg-emerald-400 rounded-full w-[82%]" />
            </div>
          </div>
        </div>
      );

    case "music-player-app":
      return (
        <div className="rounded-xl border border-black/8 dark:border-white/10 bg-surface-elevated/70 dark:bg-[#0C0C0C] p-4 text-xs space-y-3">
          <div className="flex items-center justify-between border-b border-black/6 dark:border-white/8 pb-2 text-[10px] text-muted-foreground font-mono">
            <span>WEB_AUDIO_API</span>
            <span className="flex items-center gap-1 text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              PLAYING
            </span>
          </div>

          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-lg bg-primary/15 border border-primary/30 flex items-center justify-center text-primary shrink-0">
              <Play className="h-4 w-4 fill-current ml-0.5" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="font-semibold text-foreground text-xs truncate">Acoustic Resonance #04</p>
              <p className="text-[10px] text-muted-foreground font-mono">Dynamic Playlist Queue</p>
            </div>
            <Volume2 className="h-4 w-4 text-muted-foreground shrink-0" />
          </div>

          {/* Audio Waveform visualization */}
          <div className="flex items-end gap-1 h-7 pt-1">
            {[40, 70, 45, 90, 60, 100, 75, 50, 85, 95, 40, 65, 80, 55, 90, 45, 70].map((h, i) => (
              <div
                key={i}
                style={{ height: `${h}%` }}
                className={`flex-1 rounded-full transition-all ${
                  i < 9 ? "bg-primary" : "bg-black/15 dark:bg-white/15"
                }`}
              />
            ))}
          </div>

          <div className="flex items-center justify-between text-[10px] font-mono text-muted-foreground">
            <span>01:42</span>
            <span>03:28</span>
          </div>
        </div>
      );

    case "dynamic-quiz-engine":
      return (
        <div className="rounded-xl border border-black/8 dark:border-white/10 bg-surface-elevated/70 dark:bg-[#0C0C0C] p-4 text-xs space-y-2.5">
          <div className="flex items-center justify-between border-b border-black/6 dark:border-white/8 pb-2 text-[10px] text-muted-foreground font-mono">
            <span>QUESTION 08 / 10</span>
            <span className="flex items-center gap-1 text-primary font-semibold">
              <Clock className="h-3 w-3" /> 00:18s
            </span>
          </div>

          <p className="font-semibold text-foreground text-xs">
            What is the time complexity of looking up a key in a hash table?
          </p>

          <div className="space-y-1.5 pt-1">
            <div className="flex items-center justify-between p-2 rounded-lg bg-primary/10 border border-primary/30 text-primary text-[11px] font-medium">
              <span>A. O(1) Average Case</span>
              <CheckCircle2 className="h-3.5 w-3.5" />
            </div>
            <div className="flex items-center justify-between p-2 rounded-lg bg-surface border border-black/6 dark:border-white/4 text-muted-foreground text-[11px]">
              <span>B. O(n) Worst Case</span>
            </div>
          </div>

          <div className="pt-1 flex items-center justify-between text-[10px] font-mono text-muted-foreground">
            <span>SCORE: 80 PTS</span>
            <span className="text-emerald-600 dark:text-emerald-400 font-semibold">+10 SPEED BONUS</span>
          </div>
        </div>
      );

    case "customer-support-analytics":
      return (
        <div className="rounded-xl border border-black/8 dark:border-white/10 bg-surface-elevated/70 dark:bg-[#0C0C0C] p-4 text-xs font-mono space-y-3">
          <div className="flex items-center justify-between border-b border-black/6 dark:border-white/8 pb-2 text-[10px] text-muted-foreground">
            <span>SLA_OPERATIONAL_ANALYSIS</span>
            <span className="text-emerald-600 dark:text-emerald-400 font-semibold">25K+ Logs</span>
          </div>

          <div className="space-y-2 text-foreground">
            <div className="flex items-center justify-between p-2 rounded-lg bg-surface border border-black/6 dark:border-white/6">
              <div className="flex items-center gap-2">
                <AlertTriangle className="h-3.5 w-3.5 text-primary" />
                <span className="text-[11px]">Peak Ticket Window</span>
              </div>
              <span className="text-xs font-bold text-foreground">11 AM &mdash; 2 PM</span>
            </div>

            <div className="p-2.5 rounded-lg bg-surface border border-black/6 dark:border-white/6 space-y-1.5">
              <div className="flex justify-between text-[10px] text-muted-foreground">
                <span>Arrival vs Staff Capacity Gap</span>
                <span className="text-primary font-bold">45% vs 30%</span>
              </div>
              <div className="h-1.5 w-full rounded-full bg-black/5 dark:bg-surface-elevated overflow-hidden flex">
                <div className="h-full bg-primary w-[45%]" />
                <div className="h-full bg-muted-foreground/30 w-[55%]" />
              </div>
            </div>

            <div className="flex items-center justify-between text-[10px] text-muted-foreground">
              <span>Multi-Handoff CSAT Risk</span>
              <span className="text-primary font-semibold">3.4x Higher Drop</span>
            </div>
          </div>
        </div>
      );

    case "hr-workforce-analytics":
      return (
        <div className="rounded-xl border border-black/8 dark:border-white/10 bg-surface-elevated/70 dark:bg-[#0C0C0C] p-4 text-xs font-mono space-y-3">
          <div className="flex items-center justify-between border-b border-black/6 dark:border-white/8 pb-2 text-[10px] text-muted-foreground">
            <span>ATTRITION_RISK_BENCHMARK</span>
            <span className="text-primary font-semibold">Tenure Cohorts</span>
          </div>

          <div className="space-y-2 text-foreground">
            <div className="flex items-center justify-between p-2 rounded-lg bg-surface border border-black/6 dark:border-white/6">
              <div className="flex items-center gap-2">
                <Users className="h-3.5 w-3.5 text-primary" />
                <span className="text-[11px]">Critical Attrition Window</span>
              </div>
              <span className="text-xs font-bold text-primary">Day 90 &mdash; 180</span>
            </div>

            <div className="p-2.5 rounded-lg bg-surface border border-black/6 dark:border-white/6 space-y-1">
              <div className="flex justify-between text-[10px] text-muted-foreground">
                <span>Structured Mentorship Impact</span>
                <span className="text-emerald-600 dark:text-emerald-400 font-bold">+40% Retention</span>
              </div>
              <div className="h-1.5 w-full rounded-full bg-black/5 dark:bg-surface-elevated overflow-hidden">
                <div className="h-full bg-emerald-500 dark:bg-emerald-400 rounded-full w-[78%]" />
              </div>
            </div>
          </div>
        </div>
      );

    case "e-learning-platform":
    default:
      return (
        <div className="rounded-xl border border-black/8 dark:border-white/10 bg-surface-elevated/70 dark:bg-[#0C0C0C] p-4 text-xs space-y-2.5">
          <div className="flex items-center justify-between border-b border-black/6 dark:border-white/8 pb-2 text-[10px] text-muted-foreground font-mono">
            <span>CURRICULUM_PORTAL</span>
            <span className="text-primary font-semibold">4 Modules</span>
          </div>

          <div className="space-y-1.5">
            <div className="p-2 rounded-lg bg-primary/10 border border-primary/25 flex items-center justify-between text-[11px]">
              <span className="font-semibold text-foreground">Module 01: Core Fundamentals</span>
              <Award className="h-3.5 w-3.5 text-primary" />
            </div>
            <div className="p-2 rounded-lg bg-surface border border-black/6 dark:border-white/4 flex items-center justify-between text-[11px] text-muted-foreground">
              <span>Module 02: Interactive Workflows</span>
              <span className="text-[10px] font-mono">8 Lessons</span>
            </div>
          </div>

          <div className="pt-1 flex items-center justify-between text-[10px] font-mono text-muted-foreground">
            <span>COMPLETION: 65%</span>
            <span className="text-emerald-600 dark:text-emerald-400 font-semibold">ON TRACK</span>
          </div>
        </div>
      );
  }
}
