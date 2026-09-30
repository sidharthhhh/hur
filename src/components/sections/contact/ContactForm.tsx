"use client";

import React, { useActionState, useEffect, useRef } from "react";
import { submitContactForm, ContactActionResult } from "@/app/actions/contact";
import { CheckCircle2, AlertCircle, Loader2, Send } from "lucide-react";
import { track } from "@/lib/analytics";

export function ContactForm() {
  const [state, formAction, isPending] = useActionState<
    ContactActionResult | null,
    FormData
  >(submitContactForm, null);

  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state?.success) {
      formRef.current?.reset();
      track("contact_submit", { status: "success" });
    }
  }, [state]);

  return (
    <div className="space-y-5">
      {/* Live status banner */}
      <div aria-live="polite">
        {state?.success && (
          <div className="flex items-start gap-3 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-3.5 text-xs text-emerald-400">
            <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400 mt-0.5" />
            <div>
              <p className="font-semibold text-foreground">Message sent successfully</p>
              <p className="mt-0.5 text-muted-foreground">{state.message}</p>
            </div>
          </div>
        )}

        {state && !state.success && (
          <div className="flex items-start gap-3 rounded-xl border border-destructive/30 bg-destructive/10 p-3.5 text-xs text-destructive">
            <AlertCircle className="h-4 w-4 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold">Unable to send message</p>
              <p className="mt-0.5">{state.message}</p>
            </div>
          </div>
        )}
      </div>

      <form ref={formRef} action={formAction} className="space-y-4">
        {/* Anti-spam honeypot field */}
        <div className="hidden" aria-hidden="true">
          <label htmlFor="company_url">Do not fill this field</label>
          <input
            type="text"
            id="company_url"
            name="company_url"
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Name Field */}
          <div className="space-y-1.5">
            <label htmlFor="name" className="text-xs font-semibold text-foreground">
              Your Name <span className="text-primary">*</span>
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Jane Doe"
              required
              disabled={isPending}
              className="w-full rounded-xl border border-black/10 dark:border-white/10 bg-surface px-3.5 py-2.5 text-xs sm:text-sm text-foreground placeholder:text-muted-foreground/60 transition-colors focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/40 disabled:opacity-50"
            />
            {state?.errors?.name && (
              <p className="text-[11px] text-destructive">{state.errors.name[0]}</p>
            )}
          </div>

          {/* Email Field */}
          <div className="space-y-1.5">
            <label htmlFor="email" className="text-xs font-semibold text-foreground">
              Email Address <span className="text-primary">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="jane@example.com"
              required
              disabled={isPending}
              className="w-full rounded-xl border border-black/10 dark:border-white/10 bg-surface px-3.5 py-2.5 text-xs sm:text-sm text-foreground placeholder:text-muted-foreground/60 transition-colors focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/40 disabled:opacity-50"
            />
            {state?.errors?.email && (
              <p className="text-[11px] text-destructive">{state.errors.email[0]}</p>
            )}
          </div>
        </div>

        {/* Subject Field */}
        <div className="space-y-1.5">
          <label htmlFor="subject" className="text-xs font-semibold text-foreground">
            Subject <span className="text-primary">*</span>
          </label>
          <input
            id="subject"
            name="subject"
            type="text"
            placeholder="Project Collaboration / Data Opportunity"
            required
            disabled={isPending}
            className="w-full rounded-xl border border-black/10 dark:border-white/10 bg-surface px-3.5 py-2.5 text-xs sm:text-sm text-foreground placeholder:text-muted-foreground/60 transition-colors focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/40 disabled:opacity-50"
          />
          {state?.errors?.subject && (
            <p className="text-[11px] text-destructive">{state.errors.subject[0]}</p>
          )}
        </div>

        {/* Message Field */}
        <div className="space-y-1.5">
          <label htmlFor="message" className="text-xs font-semibold text-foreground">
            Message <span className="text-primary">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Share details regarding your team, project timeline, or questions..."
            rows={4}
            required
            disabled={isPending}
            className="w-full rounded-xl border border-black/10 dark:border-white/10 bg-surface px-3.5 py-2.5 text-xs sm:text-sm text-foreground placeholder:text-muted-foreground/60 transition-colors focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/40 disabled:opacity-50 resize-y"
          />
          {state?.errors?.message && (
            <p className="text-[11px] text-destructive">{state.errors.message[0]}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isPending}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-primary hover:bg-[#FF8A1A] text-white px-6 py-2.5 text-xs font-semibold shadow-glow-sm transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-60 cursor-pointer"
        >
          {isPending ? (
            <>
              <Loader2 className="h-3.5 w-3.5 animate-spin" />
              <span>Sending...</span>
            </>
          ) : (
            <>
              <Send className="h-3.5 w-3.5" />
              <span>Send message</span>
            </>
          )}
        </button>
      </form>
    </div>
  );
}
