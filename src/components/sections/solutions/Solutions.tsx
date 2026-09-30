"use client";

import React from "react";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { profileData } from "@/data/profile";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  MotionReveal,
  MotionStagger,
  MotionStaggerItem,
} from "@/components/motion/MotionWrapper";
import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";

export function Solutions() {
  const { solutions } = profileData;

  return (
    <Section id="solutions" className="border-t border-border/60 bg-card/20">
      <MotionReveal>
        <SectionHeading
          eyebrow="Solutions & Value Creation"
          title={solutions.heading}
          description={solutions.intro}
        />
      </MotionReveal>

      <MotionStagger staggerDelay={0.06} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {solutions.areas.map((area) => (
          <MotionStaggerItem key={area}>
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.2 }}
              className="h-full"
            >
              <Card className="h-full hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 relative overflow-hidden group bg-card/90">
                <CardHeader className="p-6 pb-2 flex-row items-center gap-3 space-y-0">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground shadow-2xs">
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
            </motion.div>
          </MotionStaggerItem>
        ))}
      </MotionStagger>
    </Section>
  );
}
