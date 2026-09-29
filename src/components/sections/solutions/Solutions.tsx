import React from "react";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { profileData } from "@/data/profile";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AnimatedContainer } from "@/components/motion/AnimatedContainer";
import { CheckCircle, Sparkles } from "lucide-react";

export function Solutions() {
  const { solutions } = profileData;

  return (
    <Section id="solutions" className="border-t border-border/60">
      <AnimatedContainer>
        <SectionHeading
          eyebrow="Value Creation"
          title={solutions.heading}
          description={solutions.intro}
        />
      </AnimatedContainer>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {solutions.areas.map((area, idx) => (
          <AnimatedContainer key={area} delay={0.06 * idx}>
            <Card className="h-full hover:border-primary/40 hover:-translate-y-1 transition-all duration-200">
              <CardHeader className="p-5 pb-2 flex-row items-center gap-3 space-y-0">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary shrink-0">
                  <CheckCircle className="h-4 w-4" />
                </div>
                <CardTitle className="text-base font-semibold text-foreground">
                  {area}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-5 pt-2">
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Applying analytical workflows, automation logic, and systems thinking to eliminate process friction and deliver structured visibility.
                </p>
              </CardContent>
            </Card>
          </AnimatedContainer>
        ))}
      </div>
    </Section>
  );
}
