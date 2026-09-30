"use client";

import React from "react";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { certificationsData, achievementsData } from "@/data/certifications";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MotionReveal } from "@/components/motion/MotionWrapper";
import { motion } from "motion/react";
import { Award, ExternalLink, Trophy } from "lucide-react";

export function Certifications() {
  return (
    <Section id="certifications" className="border-t border-border/60">
      <MotionReveal>
        <SectionHeading
          eyebrow="Credentials & Honors"
          title="Certifications & Achievements"
          description="Continuous professional upskilling and documented accomplishments across analytics and operations."
        />
      </MotionReveal>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Certifications Block */}
        <div>
          <MotionReveal delay={0.1}>
            <div className="flex items-center gap-2 mb-4">
              <Award className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-bold tracking-tight text-foreground">
                Certifications
              </h3>
            </div>
          </MotionReveal>

          <div className="space-y-4">
            {certificationsData.map((cert) => (
              <MotionReveal key={cert.id} delay={0.15}>
                <motion.div
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.2 }}
                >
                  <Card className="hover:border-primary/40 hover:shadow-md transition-all bg-card/90">
                    <CardHeader className="p-5 pb-3">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <CardTitle className="text-base font-bold">
                            {cert.name}
                          </CardTitle>
                          <p className="text-xs text-muted-foreground mt-0.5 font-medium">
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
                </motion.div>
              </MotionReveal>
            ))}
          </div>
        </div>

        {/* Achievements Block */}
        <div>
          <MotionReveal delay={0.1}>
            <div className="flex items-center gap-2 mb-4">
              <Trophy className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-bold tracking-tight text-foreground">
                Recognitions & Milestones
              </h3>
            </div>
          </MotionReveal>

          <div className="space-y-4">
            {achievementsData.map((ach) => (
              <MotionReveal key={ach.id} delay={0.15}>
                <motion.div
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.2 }}
                >
                  <Card className="hover:border-primary/40 hover:shadow-md transition-all bg-card/90">
                    <CardHeader className="p-5 pb-2">
                      <div className="flex items-center justify-between gap-2">
                        <CardTitle className="text-base font-bold">
                          {ach.title}
                        </CardTitle>
                        <Badge variant="secondary" className="text-[10px] font-mono font-semibold">
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
                </motion.div>
              </MotionReveal>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
