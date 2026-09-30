"use client";

import React from "react";
import { Container } from "@/components/layout/Container";
import { profileData } from "@/data/profile";
import { Sparkles } from "lucide-react";

export function Philosophy() {
  const { philosophy } = profileData;

  return (
    <section id="philosophy" className="relative py-14 sm:py-20 border-t border-border/80 scroll-mt-20">
      <Container size="narrow">
        <div className="relative rounded-2xl border border-black/10 dark:border-white/10 bg-card text-card-foreground p-8 sm:p-12 shadow-xl overflow-hidden">
          <div className="ambient-glow-orange top-0 right-0 w-[300px] h-[200px] opacity-20 dark:opacity-30" />

          <div className="relative z-10 space-y-4">
            <div className="inline-flex items-center gap-2">
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              <span className="text-[11px] font-mono uppercase tracking-[0.16em] text-muted-foreground">
                CORE MINDSET
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
              {philosophy.heading}
            </h2>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed font-normal">
              {philosophy.body}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
