import React from "react";
import Link from "next/link";
import { profileData } from "@/data/profile";
import { Container } from "./Container";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { NAV_ITEMS } from "@/lib/constants";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card/50 text-foreground py-12 sm:py-16">
      <Container>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4 lg:grid-cols-5">
          <div className="md:col-span-2 space-y-4">
            <Link
              href="/#hero"
              className="inline-block text-lg font-bold tracking-tight text-foreground hover:text-primary transition-colors"
            >
              {profileData.name}
            </Link>
            <p className="text-sm font-medium text-foreground/80">
              {profileData.positioning.title}
            </p>
            <p className="text-xs text-muted-foreground leading-relaxed max-w-sm">
              {profileData.positioning.tagline}
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              {NAV_ITEMS.slice(0, 4).map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Deep Dives
            </h4>
            <ul className="space-y-2 text-sm">
              {NAV_ITEMS.slice(4).map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Connect
            </h4>
            <div className="flex items-center gap-3 text-muted-foreground">
              {profileData.linkedin ? (
                <a
                  href={profileData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="rounded-full p-2 hover:bg-accent hover:text-foreground transition-colors"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              ) : null}
              {profileData.github ? (
                <a
                  href={profileData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="rounded-full p-2 hover:bg-accent hover:text-foreground transition-colors"
                >
                  <Github className="h-4 w-4" />
                </a>
              ) : null}
              {profileData.email ? (
                <a
                  href={`mailto:${profileData.email}`}
                  aria-label="Send Email"
                  className="rounded-full p-2 hover:bg-accent hover:text-foreground transition-colors"
                >
                  <Mail className="h-4 w-4" />
                </a>
              ) : null}
            </div>
            <a
              href="#hero"
              className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors mt-2"
            >
              <span>Back to top</span>
              <ArrowUp className="h-3 w-3" />
            </a>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>
            &copy; {currentYear} {profileData.name}. All rights reserved.
          </p>
          <p>
            Built with Next.js, TypeScript & Tailwind CSS
          </p>
        </div>
      </Container>
    </footer>
  );
}
