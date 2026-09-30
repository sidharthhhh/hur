import React from "react";

interface ProjectVisualProps {
  slug: string;
  category: string;
}

export function ProjectVisual({ slug, category }: ProjectVisualProps) {
  if (slug === "ecommerce-analytics") {
    return (
      <div className="w-full h-full min-h-[220px] rounded-xl border border-border bg-card/60 p-5 flex flex-col justify-between font-mono text-xs select-none">
        <div className="flex items-center justify-between pb-3 border-b border-border/80">
          <span className="text-muted-foreground">cohort_retention_summary.sql</span>
          <span className="text-[10px] px-2 py-0.5 rounded-full bg-primary/10 text-primary font-semibold">
            SQL &bull; Power BI
          </span>
        </div>

        {/* Minimal bar chart visualization */}
        <div className="py-4 space-y-2.5">
          <div className="space-y-1">
            <div className="flex justify-between text-[11px] text-muted-foreground">
              <span>Month 01 (Initial Order)</span>
              <span className="text-foreground font-semibold">100% baseline</span>
            </div>
            <div className="w-full h-2 rounded-full bg-secondary overflow-hidden">
              <div className="h-full bg-primary rounded-full w-full" />
            </div>
          </div>

          <div className="space-y-1">
            <div className="flex justify-between text-[11px] text-muted-foreground">
              <span>Month 02 (Re-order drop-off)</span>
              <span className="text-foreground font-semibold">Repeat segment</span>
            </div>
            <div className="w-full h-2 rounded-full bg-secondary overflow-hidden">
              <div className="h-full bg-primary/70 rounded-full w-[38%]" />
            </div>
          </div>

          <div className="space-y-1">
            <div className="flex justify-between text-[11px] text-muted-foreground">
              <span>Month 03+ (Core cohort)</span>
              <span className="text-foreground font-semibold">Long-term buyers</span>
            </div>
            <div className="w-full h-2 rounded-full bg-secondary overflow-hidden">
              <div className="h-full bg-primary/50 rounded-full w-[24%]" />
            </div>
          </div>
        </div>

        <div className="pt-2 border-t border-border/60 flex items-center justify-between text-[10px] text-muted-foreground">
          <span>Focus: Revenue concentration & cohort retention</span>
          <span>Personal analytics project</span>
        </div>
      </div>
    );
  }

  if (slug === "customer-support-analytics") {
    return (
      <div className="w-full h-full min-h-[220px] rounded-xl border border-border bg-card/60 p-5 flex flex-col justify-between font-mono text-xs select-none">
        <div className="flex items-center justify-between pb-3 border-b border-border/80">
          <span className="text-muted-foreground">support_sla_analysis.py</span>
          <span className="text-[10px] px-2 py-0.5 rounded-full bg-primary/10 text-primary font-semibold">
            Python &bull; Power BI
          </span>
        </div>

        {/* Minimal queue distribution */}
        <div className="py-4 grid grid-cols-4 gap-2 text-center">
          <div className="p-2.5 rounded-lg bg-secondary/50 border border-border/60">
            <p className="text-[10px] text-muted-foreground">9 AM - 11 AM</p>
            <p className="text-sm font-bold text-foreground mt-1">Normal</p>
          </div>
          <div className="p-2.5 rounded-lg bg-primary/10 border border-primary/20">
            <p className="text-[10px] text-primary font-semibold">11 AM - 2 PM</p>
            <p className="text-sm font-bold text-primary mt-1">Peak Vol</p>
          </div>
          <div className="p-2.5 rounded-lg bg-secondary/50 border border-border/60">
            <p className="text-[10px] text-muted-foreground">2 PM - 5 PM</p>
            <p className="text-sm font-bold text-foreground mt-1">Steady</p>
          </div>
          <div className="p-2.5 rounded-lg bg-secondary/50 border border-border/60">
            <p className="text-[10px] text-muted-foreground">Tier Handoffs</p>
            <p className="text-sm font-bold text-foreground mt-1">SLA Risk</p>
          </div>
        </div>

        <div className="pt-2 border-t border-border/60 flex items-center justify-between text-[10px] text-muted-foreground">
          <span>Focus: Midday arrival peaks & escalation bottlenecks</span>
          <span>Operations study</span>
        </div>
      </div>
    );
  }

  if (slug === "music-player-app") {
    return (
      <div className="w-full h-full min-h-[220px] rounded-xl border border-border bg-card/60 p-5 flex flex-col justify-between font-mono text-xs select-none">
        <div className="flex items-center justify-between pb-3 border-b border-border/80">
          <span className="text-muted-foreground">AudioPlayer.js</span>
          <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-semibold">
            JavaScript &bull; HTML5 &bull; CSS3
          </span>
        </div>

        <div className="py-4 space-y-3 font-sans">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold text-foreground">Interactive Audio Controller</p>
              <p className="text-[10px] text-muted-foreground">Custom Seekbar & Playlist Navigation</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[10px] font-mono text-muted-foreground">02:45 / 04:12</span>
            </div>
          </div>

          <div className="w-full h-1.5 rounded-full bg-secondary overflow-hidden">
            <div className="h-full bg-foreground rounded-full w-[65%]" />
          </div>

          <div className="flex items-center justify-center gap-4 text-sm pt-1">
            <span className="cursor-pointer text-muted-foreground">&laquo;</span>
            <span className="h-7 w-7 rounded-full bg-foreground text-background flex items-center justify-center text-xs font-bold">
              &#9654;
            </span>
            <span className="cursor-pointer text-muted-foreground">&raquo;</span>
          </div>
        </div>

        <div className="pt-2 border-t border-border/60 flex items-center justify-between text-[10px] text-muted-foreground font-mono">
          <span>Built at TenSketch</span>
          <span>Vanilla JavaScript</span>
        </div>
      </div>
    );
  }

  if (slug === "dynamic-quiz-engine") {
    return (
      <div className="w-full h-full min-h-[220px] rounded-xl border border-border bg-card/60 p-5 flex flex-col justify-between font-mono text-xs select-none">
        <div className="flex items-center justify-between pb-3 border-b border-border/80">
          <span className="text-muted-foreground">QuizEngine.js</span>
          <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-semibold">
            JavaScript &bull; Web App
          </span>
        </div>

        <div className="py-3 space-y-2 font-sans">
          <div className="flex justify-between text-[11px] text-muted-foreground">
            <span>Question 04 of 10</span>
            <span className="font-mono text-foreground font-semibold">Score: 3/3 (100%)</span>
          </div>
          <p className="text-xs font-medium text-foreground">
            Dynamic option validation with immediate feedback algorithms
          </p>
          <div className="grid grid-cols-2 gap-1.5 text-[10px] pt-1">
            <div className="p-1.5 rounded-md bg-secondary text-muted-foreground">Option A: Queues</div>
            <div className="p-1.5 rounded-md bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 font-semibold">
              Option B: Arrays ✓
            </div>
          </div>
        </div>

        <div className="pt-2 border-t border-border/60 flex items-center justify-between text-[10px] text-muted-foreground font-mono">
          <span>Built at TenSketch</span>
          <span>Interactive state handling</span>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full min-h-[220px] rounded-xl border border-border bg-card/60 p-5 flex flex-col justify-between font-mono text-xs select-none">
      <div className="flex items-center justify-between pb-3 border-b border-border/80">
        <span className="text-muted-foreground">{slug}</span>
        <span className="text-[10px] px-2 py-0.5 rounded-full bg-secondary text-foreground">
          {category}
        </span>
      </div>
      <div className="py-6 text-center text-muted-foreground font-sans text-xs">
        Structured exploratory analysis and responsive user interface design.
      </div>
      <div className="pt-2 border-t border-border/60 flex items-center justify-between text-[10px] text-muted-foreground">
        <span>Clean code & architecture</span>
        <span>Public dataset / exploration</span>
      </div>
    </div>
  );
}
