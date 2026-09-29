import React from "react";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { learningRoadmapData } from "@/data/learning";
import { Badge } from "@/components/ui/badge";
import { AnimatedContainer } from "@/components/motion/AnimatedContainer";
import { ArrowRight, Compass } from "lucide-react";

export function Learning() {
  return (
    <Section id="learning" className="border-t border-border/60">
      <AnimatedContainer>
        <SectionHeading
          eyebrow="Growth Roadmap"
          title="Currently Learning & Technical Horizon"
          description="A structured progression expanding from active data analytics into machine learning systems and technology leadership."
        />
      </AnimatedContainer>

      <div className="space-y-6">
        {learningRoadmapData.map((track, idx) => (
          <AnimatedContainer key={track.id} delay={0.08 * idx}>
            <div
              className={`rounded-xl border p-5 sm:p-6 transition-all duration-200 ${
                track.isCurrent
                  ? "border-primary/40 bg-card shadow-xs ring-1 ring-primary/20"
                  : "border-border/80 bg-card/60"
              }`}
            >
              <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                <div className="flex items-center gap-2">
                  <Compass
                    className={`h-4 w-4 ${
                      track.isCurrent ? "text-primary" : "text-muted-foreground"
                    }`}
                  />
                  <h3 className="text-base font-semibold text-foreground">
                    {track.track}
                  </h3>
                </div>

                {track.isCurrent && (
                  <Badge variant="default" className="text-xs">
                    Current Focus
                  </Badge>
                )}
              </div>

              {/* Connected Track Steps */}
              <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                {track.steps.map((step, sIdx) => (
                  <React.Fragment key={step}>
                    <div
                      className={`flex items-center gap-2 rounded-lg px-3 py-2 text-xs sm:text-sm font-medium transition-colors ${
                        track.isCurrent
                          ? "bg-primary/10 text-primary border border-primary/20"
                          : "bg-secondary/70 text-secondary-foreground border border-border/50"
                      }`}
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-current opacity-80" />
                      <span>{step}</span>
                    </div>

                    {sIdx < track.steps.length - 1 && (
                      <ArrowRight className="h-3.5 w-3.5 text-muted-foreground/60 shrink-0 hidden sm:inline-block" />
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </AnimatedContainer>
        ))}
      </div>
    </Section>
  );
}
