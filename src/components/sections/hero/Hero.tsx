"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, MapPin } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { profileData } from "@/data/profile";
import { track } from "@/lib/analytics";

const workflowNodes = [
  { label: "People", desc: "Understanding customer needs & team dynamics" },
  { label: "Process", desc: "Mapping operations, SLAs & milestones" },
  { label: "Data", desc: "Querying records, trends & performance" },
  { label: "Solutions", desc: "Clear reporting & structured execution" },
];

export function Hero() {
  const [activeNode, setActiveNode] = useState<number | null>(null);

  return (
    <section
      id="hero"
      className="relative min-h-[85vh] flex flex-col justify-center pt-32 pb-16 sm:pt-40 sm:pb-24"
    >
      <Container>
        <div className="max-w-4xl space-y-8 sm:space-y-10">
          {/* Availability / Location Tag */}
          <div className="inline-flex items-center gap-2 text-xs font-medium text-muted-foreground">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            <span>Available for Project Coordination & Data Analytics roles</span>
            <span className="text-border">/</span>
            <span className="flex items-center gap-1">
              <MapPin className="h-3 w-3 text-muted-foreground" />
              {profileData.location}
            </span>
          </div>

          {/* Large Editorial Headline */}
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
              Sakshi
            </p>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground leading-[1.18] max-w-3xl">
              I like understanding how things work — and finding better ways to make them work.
            </h1>
          </div>

          {/* Human, concise description */}
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl font-normal">
            Engineering graduate with experience across project coordination, client operations, e-commerce account management, and web development. Currently focused on data analytics (SQL, Python, Power BI) and building deeper technical depth.
          </p>

          {/* Signature Interactive Work Flow Visual */}
          <div className="pt-2 pb-2">
            <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-3">
              How I connect the dots
            </p>
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              {workflowNodes.map((node, idx) => {
                const isActive = activeNode === idx;
                return (
                  <React.Fragment key={node.label}>
                    <button
                      type="button"
                      onMouseEnter={() => setActiveNode(idx)}
                      onMouseLeave={() => setActiveNode(null)}
                      onClick={() => setActiveNode(isActive ? null : idx)}
                      className={`relative text-xs sm:text-sm font-medium px-3.5 py-1.5 rounded-md border transition-all duration-200 cursor-pointer ${
                        isActive
                          ? "border-foreground bg-foreground text-background shadow-xs"
                          : "border-border bg-card/60 text-foreground hover:border-foreground/40"
                      }`}
                    >
                      <span>{node.label}</span>
                    </button>

                    {idx < workflowNodes.length - 1 && (
                      <span className="text-muted-foreground text-xs font-mono select-none">
                        &rarr;
                      </span>
                    )}
                  </React.Fragment>
                );
              })}
            </div>

            {/* Micro descriptor when hovering/clicking node */}
            <div className="h-6 mt-2">
              {activeNode !== null ? (
                <p className="text-xs text-foreground font-medium transition-opacity duration-150">
                  <span className="text-primary font-semibold">{workflowNodes[activeNode].label}:</span>{" "}
                  {workflowNodes[activeNode].desc}
                </p>
              ) : (
                <p className="text-xs text-muted-foreground/70 italic">
                  Hover or tap any step to see how I think about problems.
                </p>
              )}
            </div>
          </div>

          {/* CTAs and quick links */}
          <div className="pt-4 flex flex-wrap items-center gap-4 sm:gap-6 text-sm">
            <Link
              href="#work"
              className="inline-flex items-center gap-2 font-semibold text-foreground hover:text-primary transition-colors group"
            >
              <span>Explore Selected Work</span>
              <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-1" />
            </Link>

            <Link
              href="#contact"
              className="inline-flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
            >
              <span>Get in touch</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>

            <a
              href={profileData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => track("external_profile_click", { platform: "linkedin" })}
              className="inline-flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors ml-auto sm:ml-0"
            >
              <span>LinkedIn</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>

            <a
              href={profileData.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => track("external_profile_click", { platform: "github" })}
              className="inline-flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
            >
              <span>GitHub</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
