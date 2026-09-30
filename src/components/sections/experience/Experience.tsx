"use client";

import React, { useEffect, useRef } from "react";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { experienceData } from "@/data/experience";
import { Building2, MapPin, CheckCircle2 } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Academic foundation milestone to complete the narrative
const allTimelineItems = [
  ...experienceData,
  {
    id: "exp-edu",
    role: "Engineering Education (B.Tech)",
    company: "Oriental Institute of Science and Technology",
    location: "Indore, Madhya Pradesh, India",
    start: "2020",
    end: "2024",
    responsibilities: [
      "Rigorous coursework in computational systems, software engineering, databases, and algorithms.",
      "Applied quantitative mathematics, data structures, and systematic engineering methodologies.",
    ],
    achievements: [
      "Graduated with comprehensive technical problem solving and quantitative foundations.",
    ],
    skills: ["Engineering Fundamentals", "DBMS", "Data Structures", "Algorithms", "Mathematics"],
  },
];

export function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLElement>(".timeline-entry");
      items.forEach((item) => {
        // Smooth entrance for each timeline entry
        gsap.from(item, {
          opacity: 0,
          y: 24,
          duration: 0.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });

        // Scrubbed line fill animation connecting each node
        const lineFill = item.querySelector(".timeline-line-fill");
        if (lineFill) {
          gsap.to(lineFill, {
            scaleY: 1,
            ease: "none",
            scrollTrigger: {
              trigger: item,
              start: "top 70%",
              end: "bottom 70%",
              scrub: 0.4,
            },
          });
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="experience" ref={containerRef} className="relative py-16 sm:py-24 border-t border-border/80 scroll-mt-20">
      <Container>
        <SectionHeading
          eyebrow="02 &mdash; CAREER JOURNEY"
          title="Professional Experience"
          description="Documented execution across project coordination, client operations, e-commerce account management, and web development."
        />

        {/* Vertical Timeline System with strict column separation to prevent any overlap */}
        <div className="relative mt-12 sm:mt-16 max-w-5xl mx-auto">
          {allTimelineItems.map((item, idx) => {
            const isCurrent = idx === 0;
            const isLast = idx === allTimelineItems.length - 1;

            return (
              <div
                key={item.id}
                className="timeline-entry flex items-start group"
              >
                {/* Column 1: Timeframe / Year (Desktop Only) */}
                <div className="hidden md:block w-48 lg:w-56 shrink-0 text-right pr-6 lg:pr-8 pt-0.5">
                  <div className="font-mono text-xs lg:text-sm font-semibold text-foreground whitespace-nowrap">
                    {item.start} &mdash; {item.end}
                  </div>
                  {isCurrent && (
                    <div className="mt-1.5 flex justify-end">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-primary/15 text-primary border border-primary/30">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                        <span>Active Role</span>
                      </span>
                    </div>
                  )}
                </div>

                {/* Column 2: Spine & Node Indicator */}
                <div className="relative flex flex-col items-center shrink-0 w-8 md:w-10 self-stretch">
                  {/* Background vertical track line */}
                  {!isLast && (
                    <div className="absolute top-3 bottom-0 w-[1.5px] bg-black/10 dark:bg-white/10 pointer-events-none" />
                  )}

                  {/* Animated scroll-driven fill line */}
                  {!isLast && (
                    <div className="timeline-line-fill absolute top-3 bottom-0 w-[1.5px] bg-gradient-to-b from-primary via-[#FF9E40] to-primary/40 pointer-events-none origin-top scale-y-0" />
                  )}

                  {/* Node Dot */}
                  <div
                    className={`relative z-10 flex items-center justify-center rounded-full border-2 transition-all duration-300 mt-1 ${
                      isCurrent
                        ? "h-4 w-4 bg-primary border-background ring-4 ring-primary/25 shadow-glow-sm scale-110"
                        : "h-3.5 w-3.5 bg-background border-muted-foreground/60 group-hover:border-primary group-hover:scale-110"
                    }`}
                  />
                </div>

                {/* Column 3: Role Details & Concise Impact */}
                <div className="flex-1 min-w-0 pl-4 md:pl-8 pb-12 sm:pb-16 space-y-3.5">
                  {/* On Mobile: Display date badge directly above role title */}
                  <div className="md:hidden flex flex-wrap items-center gap-2 mb-2">
                    <span className="font-mono text-xs font-semibold text-foreground">
                      {item.start} &mdash; {item.end}
                    </span>
                    {isCurrent && (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-primary/15 text-primary border border-primary/30">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                        <span>Active Role</span>
                      </span>
                    )}
                  </div>

                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-foreground group-hover:text-primary transition-colors flex items-center gap-2">
                      <span>{item.role}</span>
                    </h3>

                    <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground mt-1">
                      <span className="flex items-center gap-1 font-medium text-foreground/90">
                        <Building2 className="h-3.5 w-3.5 text-primary" />
                        <span>{item.company}</span>
                      </span>
                      {item.location && (
                        <span className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          <span>{item.location}</span>
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Concise Responsibilities (Max 3 points) */}
                  <ul className="space-y-1.5 text-xs sm:text-sm text-muted-foreground">
                    {item.responsibilities.slice(0, 3).map((resp, rIdx) => (
                      <li key={rIdx} className="flex items-start gap-2.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-black/30 dark:bg-white/30 mt-2 shrink-0" />
                        <span className="leading-relaxed">{resp}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Selected Impact / Outcome */}
                  {item.achievements && item.achievements.length > 0 && (
                    <div className="pt-1 flex items-start gap-2 text-xs sm:text-sm">
                      <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                      <span className="text-foreground/90 font-medium">
                        {item.achievements[0]}
                      </span>
                    </div>
                  )}

                  {/* Compact Skill Tags */}
                  {item.skills && item.skills.length > 0 && (
                    <div className="pt-2 flex flex-wrap gap-1.5">
                      {item.skills.slice(0, 5).map((skill) => (
                        <span
                          key={skill}
                          className="text-[11px] px-2.5 py-0.5 rounded-full bg-surface-elevated text-muted-foreground border border-white/6 font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
