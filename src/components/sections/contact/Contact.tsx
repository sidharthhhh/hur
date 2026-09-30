"use client";

import React from "react";
import { Container } from "@/components/layout/Container";
import { profileData } from "@/data/profile";
import { ContactForm } from "./ContactForm";
import { ArrowUpRight } from "lucide-react";
import { track } from "@/lib/analytics";

export function Contact() {
  const { contact } = profileData;

  return (
    <section id="contact" className="py-20 sm:py-28 border-t border-border">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Warm Heading & Direct Links */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">
                06 &bull; Connect
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">
                {contact.heading}
              </h2>
            </div>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed font-normal">
              {contact.body}
            </p>

            <div className="pt-4 space-y-3 text-sm">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">
                  Email
                </p>
                <a
                  href={`mailto:${profileData.email}`}
                  className="font-medium text-foreground hover:text-primary transition-colors inline-flex items-center gap-1"
                >
                  <span>{profileData.email}</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">
                  Profiles
                </p>
                <div className="flex flex-wrap gap-4 pt-0.5">
                  <a
                    href={profileData.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => track("external_profile_click", { platform: "linkedin" })}
                    className="font-medium text-foreground hover:text-primary transition-colors inline-flex items-center gap-1"
                  >
                    <span>LinkedIn</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>

                  <a
                    href={profileData.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => track("external_profile_click", { platform: "github" })}
                    className="font-medium text-foreground hover:text-primary transition-colors inline-flex items-center gap-1"
                  >
                    <span>GitHub</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Minimal Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-xl border border-border bg-card p-6 sm:p-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
