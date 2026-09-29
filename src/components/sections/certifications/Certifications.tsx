import React from "react";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { certificationsData, achievementsData } from "@/data/certifications";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AnimatedContainer } from "@/components/motion/AnimatedContainer";
import { Award, ExternalLink, Trophy, CheckCircle2 } from "lucide-react";

export function Certifications() {
  return (
    <Section id="certifications" className="border-t border-border/60">
      <AnimatedContainer>
        <SectionHeading
          eyebrow="Credentials & Honors"
          title="Certifications & Achievements"
          description="Continuous professional upskilling and documented accomplishments across analytics and operations."
        />
      </AnimatedContainer>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Certifications Block */}
        <div>
          <AnimatedContainer delay={0.1}>
            <div className="flex items-center gap-2 mb-4">
              <Award className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-bold tracking-tight text-foreground">
                Certifications
              </h3>
            </div>
          </AnimatedContainer>

          <div className="space-y-4">
            {certificationsData.map((cert) => (
              <AnimatedContainer key={cert.id} delay={0.15}>
                <Card className="hover:border-primary/30 transition-all">
                  <CardHeader className="p-5 pb-3">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <CardTitle className="text-base font-semibold">
                          {cert.name}
                        </CardTitle>
                        <p className="text-xs text-muted-foreground mt-0.5">
                          {cert.provider} &bull; {cert.year}
                        </p>
                      </div>
                      {cert.url && (
                        <Button asChild variant="ghost" size="sm" className="h-8 gap-1 text-xs">
                          <a href={cert.url} target="_blank" rel="noopener noreferrer">
                            <span>Verify</span>
                            <ExternalLink className="h-3.5 w-3.5" />
                          </a>
                        </Button>
                      )}
                    </div>
                  </CardHeader>
                  {cert.credential_id && (
                    <CardContent className="p-5 pt-0 text-xs text-muted-foreground font-mono">
                      <span>Credential ID: {cert.credential_id}</span>
                    </CardContent>
                  )}
                </Card>
              </AnimatedContainer>
            ))}
          </div>
        </div>

        {/* Achievements Block */}
        <div>
          <AnimatedContainer delay={0.1}>
            <div className="flex items-center gap-2 mb-4">
              <Trophy className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-bold tracking-tight text-foreground">
                Recognitions & Milestones
              </h3>
            </div>
          </AnimatedContainer>

          <div className="space-y-4">
            {achievementsData.map((ach) => (
              <AnimatedContainer key={ach.id} delay={0.15}>
                <Card className="hover:border-primary/30 transition-all">
                  <CardHeader className="p-5 pb-2">
                    <div className="flex items-center justify-between gap-2">
                      <CardTitle className="text-base font-semibold">
                        {ach.title}
                      </CardTitle>
                      <Badge variant="secondary" className="text-[10px] font-mono">
                        {ach.year}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="p-5 pt-0">
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {ach.context}
                    </p>
                  </CardContent>
                </Card>
              </AnimatedContainer>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
