import React from "react";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { profileData } from "@/data/profile";
import { ContactForm } from "./ContactForm";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedContainer } from "@/components/motion/AnimatedContainer";
import { Mail, Linkedin, Github, MessageSquare, Clock, Sparkles } from "lucide-react";

export function Contact() {
  const { contact } = profileData;

  return (
    <Section id="contact" className="border-t border-border/60 relative overflow-hidden">
      {/* Background ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-20 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10 animate-pulse-glow"
      />

      <AnimatedContainer>
        <SectionHeading
          eyebrow="Get in Touch"
          title={contact.heading}
          description={contact.body}
        />
      </AnimatedContainer>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Contact Info Sidebar */}
        <AnimatedContainer delay={0.1} className="lg:col-span-5 space-y-6">
          <Card className="border-primary/30 bg-card/80 backdrop-blur-md shadow-md shadow-primary/5">
            <CardContent className="p-6 sm:p-8 space-y-6">
              <div>
                <h3 className="text-lg font-bold text-foreground mb-1 flex items-center gap-2">
                  <MessageSquare className="h-5 w-5 text-primary" />
                  <span>Direct Communication</span>
                </h3>
                <p className="text-xs text-muted-foreground">
                  Feel free to reach out directly through email, LinkedIn, or send a message using the form.
                </p>
              </div>

              <div className="space-y-4 text-sm">
                {profileData.email && (
                  <a
                    href={`mailto:${profileData.email}`}
                    className="flex items-center gap-3.5 text-muted-foreground hover:text-foreground transition-all duration-200 group p-2.5 rounded-xl hover:bg-accent"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-200 group-hover:scale-105 shadow-2xs">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-muted-foreground">Email</p>
                      <p className="font-bold text-foreground text-xs sm:text-sm">
                        {profileData.email}
                      </p>
                    </div>
                  </a>
                )}

                {profileData.linkedin && (
                  <a
                    href={profileData.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3.5 text-muted-foreground hover:text-foreground transition-all duration-200 group p-2.5 rounded-xl hover:bg-accent"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-200 group-hover:scale-105 shadow-2xs">
                      <Linkedin className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-muted-foreground">LinkedIn</p>
                      <p className="font-bold text-foreground text-xs sm:text-sm">
                        Connect on LinkedIn
                      </p>
                    </div>
                  </a>
                )}

                {profileData.github && (
                  <a
                    href={profileData.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3.5 text-muted-foreground hover:text-foreground transition-all duration-200 group p-2.5 rounded-xl hover:bg-accent"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-200 group-hover:scale-105 shadow-2xs">
                      <Github className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-muted-foreground">GitHub</p>
                      <p className="font-bold text-foreground text-xs sm:text-sm">
                        View Code Repositories
                      </p>
                    </div>
                  </a>
                )}
              </div>

              <div className="pt-4 border-t border-border/60 flex items-center gap-2 text-xs text-muted-foreground">
                <Clock className="h-4 w-4 text-primary shrink-0" />
                <span>Typically responds within 24-48 business hours.</span>
              </div>
            </CardContent>
          </Card>
        </AnimatedContainer>

        {/* Contact Form Card */}
        <AnimatedContainer delay={0.2} className="lg:col-span-7">
          <Card className="border-border shadow-md bg-card/90 backdrop-blur-md">
            <CardContent className="p-6 sm:p-8">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-foreground">
                  Send a Message
                </h3>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Have a question, collaboration proposal, or project discussion? Fill in the details below.
                </p>
              </div>
              <ContactForm />
            </CardContent>
          </Card>
        </AnimatedContainer>
      </div>
    </Section>
  );
}
