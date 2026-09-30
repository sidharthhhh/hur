"use client";

import React, { useState } from "react";
import { Container } from "@/components/layout/Container";
import { skillsData } from "@/data/skills";

export function Skills() {
  const [activeSkillNote, setActiveSkillNote] = useState<string | null>(null);

  return (
    <section id="skills" className="py-20 sm:py-28 border-t border-border">
      <Container>
        {/* Section Header */}
        <div className="mb-16 sm:mb-20">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">
            04 &bull; Toolkit
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            Skills & Working Tools
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground mt-3 max-w-xl">
            Technologies and operational competencies I work with daily and am actively exploring.
          </p>
        </div>

        {/* Typographic Skills Matrix */}
        <div className="space-y-12 sm:space-y-16">
          {skillsData.map((group, idx) => (
            <div
              key={group.category}
              className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 pb-8 border-b border-border/70 last:border-b-0"
            >
              {/* Category Label */}
              <div className="md:col-span-4">
                <h3 className="text-base font-bold text-foreground">
                  {group.category}
                </h3>
              </div>

              {/* Skills Items */}
              <div className="md:col-span-8 flex flex-wrap gap-x-6 gap-y-3">
                {group.skills.map((skill) => (
                  <span
                    key={skill.name}
                    onMouseEnter={() => setActiveSkillNote(skill.note || null)}
                    onMouseLeave={() => setActiveSkillNote(null)}
                    className="inline-flex items-center gap-1.5 text-sm sm:text-base font-medium text-foreground hover:text-primary transition-colors cursor-default"
                  >
                    <span>{skill.name}</span>
                    <span className="text-muted-foreground/50 text-xs">&bull;</span>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Subtle Interactive Context Descriptor */}
        <div className="h-6 mt-6">
          {activeSkillNote ? (
            <p className="text-xs text-muted-foreground font-mono animate-in fade-in-50 duration-150">
              <span className="text-foreground font-semibold">Focus:</span> {activeSkillNote}
            </p>
          ) : (
            <p className="text-xs text-muted-foreground/60 italic font-mono">
              Hover over any skill to see context.
            </p>
          )}
        </div>
      </Container>
    </section>
  );
}
