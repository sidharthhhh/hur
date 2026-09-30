"use client";

import React from "react";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { learningRoadmapData } from "@/data/learning";
import { Badge } from "@/components/ui/badge";
import { MotionReveal } from "@/components/motion/MotionWrapper";
import { motion } from "motion/react";
import { ArrowRight, Compass } from "lucide-react";

export function Learning() {
  return (
    <Section id="learning" className="border-t border-border/60">
      <MotionReveal>
        <SectionHeading
          eyebrow="Continuous Learning"
          title="Technical Horizon & Learning Tracks"
          description="A structured learning progression expanding from active data analytics and operations into advanced machine learning and technology consulting."
        />
      </MotionReveal>

      <div className="space-y-6">
        {learningRoadmapData.map((track, idx) => (
          <MotionReveal key={track.id} delay={0.08 * idx} direction="up">
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className={`rounded-2xl border p-5 sm:p-7 transition-all duration-300 relative overflow-hidden ${
                track.isCurrent
                  ? "border-primary/50 bg-card shadow-lg shadow-primary/5 ring-1 ring-primary/25"
                  : "border-border/80 bg-card/60 hover:border-primary/40 hover:bg-card/80"
              }`}
            >
              {track.isCurrent && (
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-indigo-500 to-sky-400" />
              )}

              <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
                <div className="flex items-center gap-2.5">
                  <div
                    className={`flex h-8 w-8 items-center justify-center rounded-lg ${
                      track.isCurrent
                        ? "bg-primary text-primary-foreground shadow-xs shadow-primary/30"
                        : "bg-secondary text-muted-foreground"
                    }`}
                  >
                    <Compass className="h-4 w-4" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-foreground">
                    {track.track}
                  </h3>
                </div>

                {track.isCurrent && (
                  <Badge variant="default" className="text-xs px-3 py-1 font-semibold animate-pulse">
                    Active Learning Focus
                  </Badge>
                )}
              </div>

              {/* Connected Track Steps */}
              <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                {track.steps.map((step, sIdx) => (
                  <React.Fragment key={step}>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className={`flex items-center gap-2 rounded-xl px-3.5 py-2 text-xs sm:text-sm font-semibold transition-all duration-200 cursor-default ${
                        track.isCurrent
                          ? "bg-primary/10 text-primary border border-primary/25 shadow-2xs hover:bg-primary/15"
                          : "bg-secondary/70 text-secondary-foreground border border-border/60 hover:border-primary/30"
                      }`}
                    >
                      <span className="h-2 w-2 rounded-full bg-current opacity-80" />
                      <span>{step}</span>
                    </motion.div>

                    {sIdx < track.steps.length - 1 && (
                      <ArrowRight className="h-4 w-4 text-primary/40 shrink-0 hidden sm:inline-block" />
                    )}
                  </React.Fragment>
                ))}
              </div>
            </motion.div>
          </MotionReveal>
        ))}
      </div>
    </Section>
  );
}
