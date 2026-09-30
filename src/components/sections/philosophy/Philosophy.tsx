"use client";

import React from "react";
import { Section } from "@/components/layout/Section";
import { profileData } from "@/data/profile";
import { MotionReveal } from "@/components/motion/MotionWrapper";
import { motion } from "motion/react";
import { TrendingUp } from "lucide-react";

export function Philosophy() {
  const { philosophy } = profileData;

  return (
    <Section id="philosophy" className="border-t border-border/60">
      <MotionReveal>
        <motion.div
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.3 }}
          className="relative overflow-hidden rounded-2xl border border-primary/30 bg-gradient-to-br from-card via-card to-primary/10 p-8 sm:p-12 shadow-lg shadow-primary/5"
        >
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-primary mb-4">
              <TrendingUp className="h-3.5 w-3.5" />
              <span>Core Mindset</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mb-4">
              {philosophy.heading}
            </h2>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              {philosophy.body}
            </p>
          </div>
        </motion.div>
      </MotionReveal>
    </Section>
  );
}
