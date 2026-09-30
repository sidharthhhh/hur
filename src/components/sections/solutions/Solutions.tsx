import React from "react";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { profileData } from "@/data/profile";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AnimatedContainer } from "@/components/motion/AnimatedContainer";
import { CheckCircle2, Sparkles, ArrowRight } from "lucide-react";

export function Solutions() {
  const { solutions } = profileData;

  return (
    <Section id="solutions" className="border-t border-border/60 bg-card/20">
      <AnimatedContainer>
        <SectionHeading
          eyebrow="Solutions & Value Creation"
          title={solutions.heading}
          description={solutions.intro}
        />
      </AnimatedContainer>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {solutions.areas.map((area, idx) => (
          <AnimatedContainer key={area} delay={0.05 * idx}>
            <Card className="h-full hover:border-primary/50 hover:-translate-y-1.5 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 relative overflow-hidden group">
              <CardHeader className="p-6 pb-2 flex-row items-center gap-3 space-y-0">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground">
                  <CheckCircle2 className="h-4 w-4" />
                </div>
                <CardTitle className="text-base font-bold text-foreground group-hover:text-primary transition-colors">
                  {area}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 pt-2">
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Applying structured project planning, data models, and analytical tools to streamline operational workflows and eliminate bottlenecks.
                </p>
              </CardContent>
            </Card>
          </AnimatedContainer>
        ))}
      </div>
    </Section>
  );
}
