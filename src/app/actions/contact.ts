"use server";

import { contactFormSchema, ContactFormData } from "@/lib/validations";

export interface ContactActionResult {
  success: boolean;
  message: string;
  errors?: Record<string, string[]>;
}

export async function submitContactForm(
  prevState: ContactActionResult | null,
  formData: FormData
): Promise<ContactActionResult> {
  try {
    const rawData = {
      name: formData.get("name")?.toString() || "",
      email: formData.get("email")?.toString() || "",
      subject: formData.get("subject")?.toString() || "",
      message: formData.get("message")?.toString() || "",
      honeypot: formData.get("company_url")?.toString() || "",
    };

    // Honeypot anti-spam check: if filled, silently reject
    if (rawData.honeypot) {
      return {
        success: true,
        message: "Your message has been sent successfully.",
      };
    }

    const validated = contactFormSchema.safeParse(rawData);

    if (!validated.success) {
      return {
        success: false,
        message: "Please correct the highlighted errors in the form.",
        errors: validated.error.flatten().fieldErrors,
      };
    }

    const { name, email, subject, message } = validated.data;
    const resendApiKey = process.env.RESEND_API_KEY;
    const contactToEmail = process.env.CONTACT_TO_EMAIL || "hello@example.com";

    // If Resend API Key is provided in environment
    if (resendApiKey) {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Portfolio Contact <onboarding@resend.dev>",
          to: [contactToEmail],
          reply_to: email,
          subject: `[Portfolio Inquiry] ${subject} - from ${name}`,
          text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`,
        }),
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        // eslint-disable-next-line no-console
        console.error("Resend API error:", errorData);
        return {
          success: false,
          message:
            "We were unable to deliver your message at this moment. Please reach out directly via email or LinkedIn.",
        };
      }
    } else {
      // In development or when no email service is configured
      // eslint-disable-next-line no-console
      console.log("[Contact Form Submitted in Development Mode]:", {
        name,
        email,
        subject,
        message,
      });
    }

    return {
      success: true,
      message: "Thank you! Your message has been sent successfully. I will get back to you shortly.",
    };
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error("Error submitting contact form:", error);
    return {
      success: false,
      message:
        "An unexpected error occurred while sending your message. Please try again or reach out directly.",
    };
  }
}
