import React from "react";
import { Container } from "@/components/layout/Container";
import { learningStepsData } from "@/data/learning";

export function Learning() {
  return (
    <section id="learning" className="py-20 sm:py-28 border-t border-border">
      <Container>
        {/* Section Header */}
        <div className="mb-16 sm:mb-20">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">
            05 &bull; Trajectory
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            Right now
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground mt-3 max-w-xl">
            Where my learning and technical exploration are currently focused.
          </p>
        </div>

        {/* Clean 3-Step Progression Rows */}
        <div className="space-y-6 sm:space-y-8">
          {learningStepsData.map((step) => (
            <div
              key={step.number}
              className={`rounded-xl border p-6 sm:p-7 transition-all duration-200 ${
                step.status === "Active Focus"
                  ? "border-foreground/40 bg-card shadow-xs"
                  : "border-border bg-card/40"
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-2">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono font-bold text-muted-foreground">
                    {step.number}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-foreground">
                    {step.title}
                  </h3>
                </div>

                <span
                  className={`text-[10px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full self-start sm:self-auto ${
                    step.status === "Active Focus"
                      ? "bg-primary/10 text-primary border border-primary/20"
                      : "bg-secondary text-muted-foreground"
                  }`}
                >
                  {step.status}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed pl-7">
                {step.focus}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
