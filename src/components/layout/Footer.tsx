import React from "react";
import Link from "next/link";
import { profileData } from "@/data/profile";
import { Container } from "./Container";
import { ArrowUpRight, ArrowUp } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-12 sm:py-16 text-foreground bg-card/40">
      <Container>
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="space-y-1">
            <Link
              href="/#hero"
              className="text-base font-bold text-foreground hover:opacity-80 transition-opacity"
            >
              {profileData.name}
            </Link>
            <p className="text-xs text-muted-foreground">
              Operations &bull; Data &bull; Web
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs font-medium text-muted-foreground">
            <a
              href={profileData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors inline-flex items-center gap-1"
            >
              <span>LinkedIn</span>
              <ArrowUpRight className="h-3 w-3" />
            </a>

            <a
              href={profileData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors inline-flex items-center gap-1"
            >
              <span>GitHub</span>
              <ArrowUpRight className="h-3 w-3" />
            </a>

            <a
              href={`mailto:${profileData.email}`}
              className="hover:text-foreground transition-colors inline-flex items-center gap-1"
            >
              <span>Email</span>
              <ArrowUpRight className="h-3 w-3" />
            </a>

            <a
              href="#hero"
              className="hover:text-foreground transition-colors inline-flex items-center gap-1 border border-border rounded-full px-2.5 py-1"
            >
              <span>Top</span>
              <ArrowUp className="h-3 w-3" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border/60 text-xs text-muted-foreground flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
          <p>&copy; {currentYear} {profileData.name}. Designed & Built with Next.js.</p>
          <p>Indore, Madhya Pradesh, India</p>
        </div>
      </Container>
    </footer>
  );
}
