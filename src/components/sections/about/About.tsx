import React from "react";
import { Container } from "@/components/layout/Container";
import { GraduationCap, MapPin, Compass, BookOpen } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-20 sm:py-28 border-t border-border">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading & Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">
                03 &bull; Story
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">
                A little about me
              </h2>
            </div>

            <div className="space-y-4 text-base sm:text-lg text-muted-foreground leading-relaxed font-normal">
              <p>
                I graduated with a <strong className="text-foreground font-semibold">Bachelor of Technology (B.Tech)</strong> from <strong className="text-foreground font-semibold">Oriental Institute of Science and Technology</strong> in 2024. My interest in technology started with engineering fundamentals and frontend development during my internship at TenSketch.
              </p>
              <p>
                Moving into client-facing operations and account management at TP and Splash India taught me how much of real problem-solving is about people, communication, and clear operational processes—not just lines of code.
              </p>
              <p>
                As an <strong className="text-foreground font-semibold">Assistant Project Coordinator</strong> at Innosecure Technologies, I coordinate timelines, monitor deliverables, and keep cross-functional teams aligned.
              </p>
              <p>
                Right now, I am channeling this operational grounding into <strong className="text-foreground font-semibold">data analytics</strong>—building strong hands-on capabilities in SQL, Python, Excel, and Power BI to turn everyday business data into actionable insight.
              </p>
            </div>
          </div>

          {/* Right Column: Personal Details & Education Box */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-xl border border-border bg-card/60 p-6 sm:p-7 space-y-6">
              <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                At a Glance
              </h3>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground">Location</p>
                    <p className="text-muted-foreground text-xs">Indore, Madhya Pradesh, India</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <GraduationCap className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground">Education</p>
                    <p className="text-muted-foreground text-xs">
                      B.Tech in Engineering (2020 — 2024)
                    </p>
                    <p className="text-muted-foreground/80 text-[11px]">
                      Oriental Institute of Science & Technology
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Compass className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground">Current Direction</p>
                    <p className="text-muted-foreground text-xs">
                      Project Coordination, Data Analytics & Business Intelligence
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <BookOpen className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground">Personal Interests</p>
                    <p className="text-muted-foreground text-xs">
                      Learning new tools, technology systems, reading, and problem solving
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
