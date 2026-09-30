"use client";

import React, { useState } from "react";
import { Container } from "@/components/layout/Container";
import { experienceData } from "@/data/experience";
import { ChevronDown, ChevronUp, Building2, MapPin } from "lucide-react";

export function Experience() {
  const [expandedId, setExpandedId] = useState<string | null>(experienceData[0].id);

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="experience" className="py-20 sm:py-28 border-t border-border">
      <Container>
        {/* Section Heading */}
        <div className="mb-16 sm:mb-20">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">
            02 &bull; Background
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            Experience
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground mt-3 max-w-xl">
            Roles across project coordination, client operations, program advisory, and frontend development.
          </p>
        </div>

        {/* Clean Editorial Expandable Timeline Rows */}
        <div className="space-y-4">
          {experienceData.map((item) => {
            const isExpanded = expandedId === item.id;

            return (
              <div
                key={item.id}
                className={`rounded-xl border transition-all duration-200 ${
                  isExpanded
                    ? "border-foreground/30 bg-card shadow-xs"
                    : "border-border bg-card/40 hover:border-foreground/20"
                }`}
              >
                {/* Clickable Header Row */}
                <button
                  type="button"
                  onClick={() => toggleExpand(item.id)}
                  className="w-full text-left p-6 sm:p-7 flex flex-col sm:flex-row sm:items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isExpanded}
                >
                  <div className="space-y-1.5 max-w-2xl">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono text-muted-foreground font-semibold">
                        {item.start} — {item.end}
                      </span>
                      {item.end === "Present" || item.end === "Apr 2026" ? (
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-semibold">
                          Current / Recent
                        </span>
                      ) : null}
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-foreground">
                      {item.role}{" "}
                      <span className="font-normal text-muted-foreground">
                        at {item.company}
                      </span>
                    </h3>

                    <p className="text-xs sm:text-sm text-muted-foreground line-clamp-1">
                      {item.responsibilities[0]}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 self-end sm:self-center text-xs font-medium text-muted-foreground group-hover:text-foreground shrink-0">
                    <span>{isExpanded ? "Hide details" : "View details"}</span>
                    {isExpanded ? (
                      <ChevronUp className="h-4 w-4" />
                    ) : (
                      <ChevronDown className="h-4 w-4" />
                    )}
                  </div>
                </button>

                {/* Expanded Details Panel */}
                {isExpanded && (
                  <div className="px-6 pb-6 sm:px-7 sm:pb-7 pt-2 border-t border-border/60 space-y-4 animate-in fade-in-50 duration-200">
                    {item.location && (
                      <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                        <MapPin className="h-3.5 w-3.5 text-muted-foreground" />
                        <span>{item.location}</span>
                      </div>
                    )}

                    <div className="space-y-2">
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        Key Responsibilities & Scope
                      </h4>
                      <ul className="space-y-1.5 text-sm text-foreground/90 leading-relaxed">
                        {item.responsibilities.map((resp, i) => (
                          <li key={i} className="flex items-start gap-2.5">
                            <span className="h-1.5 w-1.5 rounded-full bg-foreground mt-2 shrink-0 opacity-60" />
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {item.achievements && item.achievements.length > 0 && (
                      <div className="space-y-2 pt-2">
                        <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                          Impact & Contributions
                        </h4>
                        <ul className="space-y-1.5 text-sm text-foreground/90 leading-relaxed">
                          {item.achievements.map((ach, i) => (
                            <li key={i} className="flex items-start gap-2.5">
                              <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0" />
                              <span className="font-medium">{ach}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {item.skills && item.skills.length > 0 && (
                      <div className="pt-3 border-t border-border/60 flex flex-wrap gap-1.5">
                        {item.skills.map((skill) => (
                          <span
                            key={skill}
                            className="text-xs font-mono px-2.5 py-0.5 rounded-md border border-border bg-secondary/50 text-muted-foreground"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
