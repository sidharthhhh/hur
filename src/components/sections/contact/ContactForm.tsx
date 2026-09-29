"use client";

import React, { useActionState, useEffect, useRef } from "react";
import { submitContactForm, ContactActionResult } from "@/app/actions/contact";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
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
    <div className="space-y-6">
      {/* Live status banner */}
      <div aria-live="polite" className="transition-all duration-200">
        {state?.success && (
          <div className="flex items-start gap-3 rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-4 text-sm text-emerald-800 dark:text-emerald-300">
            <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-600 dark:text-emerald-400 mt-0.5" />
            <div>
              <p className="font-semibold">Message sent successfully</p>
              <p className="mt-0.5 text-xs text-muted-foreground">{state.message}</p>
            </div>
          </div>
        )}

        {state && !state.success && (
          <div className="flex items-start gap-3 rounded-lg border border-destructive/30 bg-destructive/10 p-4 text-sm text-destructive">
            <AlertCircle className="h-5 w-5 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold">Unable to send message</p>
              <p className="mt-0.5 text-xs">{state.message}</p>
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
            <Label htmlFor="name">
              Your Name <span className="text-destructive">*</span>
            </Label>
            <Input
              id="name"
              name="name"
              placeholder="e.g. Jane Doe"
              required
              aria-required="true"
              aria-describedby={state?.errors?.name ? "name-error" : undefined}
              disabled={isPending}
            />
            {state?.errors?.name && (
              <p id="name-error" className="text-xs text-destructive">
                {state.errors.name[0]}
              </p>
            )}
          </div>

          {/* Email Field */}
          <div className="space-y-1.5">
            <Label htmlFor="email">
              Email Address <span className="text-destructive">*</span>
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="e.g. jane@example.com"
              required
              aria-required="true"
              aria-describedby={state?.errors?.email ? "email-error" : undefined}
              disabled={isPending}
            />
            {state?.errors?.email && (
              <p id="email-error" className="text-xs text-destructive">
                {state.errors.email[0]}
              </p>
            )}
          </div>
        </div>

        {/* Subject Field */}
        <div className="space-y-1.5">
          <Label htmlFor="subject">
            Subject <span className="text-destructive">*</span>
          </Label>
          <Input
            id="subject"
            name="subject"
            placeholder="e.g. Project Discussion / Analytics Opportunity"
            required
            aria-required="true"
            aria-describedby={
              state?.errors?.subject ? "subject-error" : undefined
            }
            disabled={isPending}
          />
          {state?.errors?.subject && (
            <p id="subject-error" className="text-xs text-destructive">
              {state.errors.subject[0]}
            </p>
          )}
        </div>

        {/* Message Field */}
        <div className="space-y-1.5">
          <Label htmlFor="message">
            Message <span className="text-destructive">*</span>
          </Label>
          <Textarea
            id="message"
            name="message"
            placeholder="Describe your inquiry, project scope, or opportunity..."
            rows={5}
            required
            aria-required="true"
            aria-describedby={
              state?.errors?.message ? "message-error" : undefined
            }
            disabled={isPending}
          />
          {state?.errors?.message && (
            <p id="message-error" className="text-xs text-destructive">
              {state.errors.message[0]}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          disabled={isPending}
          className="w-full sm:w-auto min-w-[160px] gap-2 shadow-xs"
        >
          {isPending ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              <span>Sending...</span>
            </>
          ) : (
            <>
              <Send className="h-4 w-4" />
              <span>Send Message</span>
            </>
          )}
        </Button>
      </form>
    </div>
  );
}
