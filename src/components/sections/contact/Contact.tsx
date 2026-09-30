"use client";

import React from "react";
import { Container } from "@/components/layout/Container";
import { profileData } from "@/data/profile";
import { ContactForm } from "./ContactForm";
import { Mail, Linkedin, Github, Clock, MapPin, ArrowUpRight } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="relative py-16 sm:py-24 border-t border-border/80 scroll-mt-20">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Direct channels and headline */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              <span className="text-[11px] font-mono uppercase tracking-[0.16em] text-muted-foreground">
                09 &mdash; GET IN TOUCH
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground leading-[1.12]">
              Let&apos;s build something{" "}
              <span className="text-primary">useful</span>.
            </h2>

            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Whether you are looking to discuss project coordination, data analytics, operational pipelines, or prospective engineering opportunities, I&apos;d love to connect.
            </p>

            {/* Direct Channels */}
            <div className="space-y-3 pt-3">
              {profileData.email && (
                <a
                  href={`mailto:${profileData.email}`}
                  className="flex items-center justify-between p-3.5 rounded-xl border border-black/8 dark:border-white/8 bg-card text-card-foreground hover:border-primary/40 shadow-sm transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-surface-elevated text-primary border border-black/6 dark:border-white/6">
                      <Mail className="h-4 w-4" />
                    </div>
                    <div>
                      <span className="text-[10px] text-muted-foreground font-mono uppercase block">Email</span>
                      <span className="text-xs sm:text-sm font-semibold text-foreground">{profileData.email}</span>
                    </div>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              )}

              {profileData.linkedin && (
                <a
                  href={profileData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl border border-black/8 dark:border-white/8 bg-card text-card-foreground hover:border-primary/40 shadow-sm transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-surface-elevated text-primary border border-black/6 dark:border-white/6">
                      <Linkedin className="h-4 w-4" />
                    </div>
                    <div>
                      <span className="text-[10px] text-muted-foreground font-mono uppercase block">LinkedIn</span>
                      <span className="text-xs sm:text-sm font-semibold text-foreground">Connect on LinkedIn</span>
                    </div>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              )}

              {profileData.github && (
                <a
                  href={profileData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl border border-black/8 dark:border-white/8 bg-card text-card-foreground hover:border-primary/40 shadow-sm transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-surface-elevated text-primary border border-black/6 dark:border-white/6">
                      <Github className="h-4 w-4" />
                    </div>
                    <div>
                      <span className="text-[10px] text-muted-foreground font-mono uppercase block">GitHub</span>
                      <span className="text-xs sm:text-sm font-semibold text-foreground">View Code Repositories</span>
                    </div>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              )}
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-3 text-xs text-muted-foreground">
              {profileData.location && (
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5 text-primary" />
                  <span>{profileData.location}</span>
                </span>
              )}
              <span className="hidden sm:inline text-black/20 dark:text-white/20">&bull;</span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5 text-primary" />
                <span>Typically responds within 24-48 hours</span>
              </span>
            </div>
          </div>

          {/* Right Column: Minimal Form Card */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-black/10 dark:border-white/10 bg-card text-card-foreground p-6 sm:p-8 shadow-xl">
              <div className="mb-5">
                <h3 className="text-lg font-bold text-foreground">
                  Send a direct message
                </h3>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Leave a note with your project scope or inquiries, and I&apos;ll get back to you promptly.
                </p>
              </div>

              <ContactForm />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
