"use client";

import { FormEvent, useState } from "react";

import { siteConfig } from "@/lib/site";

type ContactFormProps = {
  title?: string;
  description?: string;
  defaultService?: string;
  submitLabel?: string;
};

type SubmissionState =
  | { status: "idle"; message: string }
  | { status: "submitting"; message: string }
  | { status: "success"; message: string }
  | { status: "error"; message: string };

export function ContactForm({
  title = "Start the conversation",
  description = "Tell us about your business, what support you need, and how you want us to help.",
  defaultService = "Dispatching Services",
  submitLabel = "Send Inquiry",
}: ContactFormProps) {
  const [selectedService, setSelectedService] = useState(defaultService);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [state, setState] = useState<SubmissionState>({
    status: "idle",
    message: `Your inquiry will be delivered securely to ${siteConfig.email} for review.`,
  });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") ?? "").trim(),
      company: String(formData.get("company") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      phone: String(formData.get("phone") ?? "").trim(),
      trucks: String(formData.get("trucks") ?? "").trim(),
      service: String(formData.get("service") ?? selectedService).trim(),
      message: String(formData.get("message") ?? "").trim(),
    };

    setState({
      status: "submitting",
      message: "Sending your inquiry to the SiratLink team for review...",
    });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = (await response.json().catch(() => null)) as { message?: string } | null;

      if (!response.ok) {
        throw new Error(
          data?.message ??
            "Your inquiry could not be delivered right now. Please try again in a moment or contact SiratLink directly by phone or email.",
        );
      }

      form.reset();
      setSelectedService(defaultService);
      setState({
        status: "success",
        message:
          data?.message ??
          "Thank you. Your inquiry has been delivered successfully. The SiratLink team will review it and respond with the best next step.",
      });
      setShowSuccessModal(true);
    } catch (error) {
      setState({
        status: "error",
        message:
          error instanceof Error
            ? error.message
            : "Your inquiry could not be submitted right now. Please try again or contact SiratLink directly.",
      });
    }
  }

  return (
    <div className="soft-card premium-border surface-outline rounded-[2rem] p-6 sm:p-8">
      <div className="mb-6">
        <h2 className="font-display text-2xl font-semibold text-ink">{title}</h2>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-slate">{description}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {["Secure backend capture", "Mobile friendly", "Built for serious inquiries"].map((item) => (
            <span
              key={item}
              className="rounded-full border border-accent/10 bg-accent/5 px-3 py-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-accent-deep"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className="mb-6 grid gap-3 sm:grid-cols-3">
        {[
          { label: "Response style", value: "Clear next-step guidance" },
          { label: "Best for", value: "Carriers and growth-minded businesses" },
          { label: "Delivery path", value: "Secure server-side inquiry capture" },
        ].map((item) => (
          <div key={item.label} className="rounded-[1.35rem] border border-line bg-white/78 px-4 py-4">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-accent">{item.label}</p>
            <p className="mt-2 text-sm font-medium leading-6 text-ink">{item.value}</p>
          </div>
        ))}
      </div>

      {state.status === "submitting" ? (
        <div className="mb-6 rounded-[1.5rem] border border-accent/12 bg-accent/5 px-4 py-4" aria-live="polite">
          <div className="h-2 overflow-hidden rounded-full bg-white/80">
            <div className="h-full w-2/3 animate-[carrier-upload-progress_1.3s_ease-in-out_infinite] rounded-full bg-[linear-gradient(90deg,#0f766e,#d4a24c)]" />
          </div>
          <p className="mt-3 text-sm font-medium text-accent-deep">{state.message}</p>
        </div>
      ) : null}

      {state.status === "success" ? (
        <div className="mb-6 rounded-[1.5rem] border border-emerald-200 bg-emerald-50 px-4 py-4 text-sm leading-7 text-emerald-800" aria-live="polite">
          {state.message}
        </div>
      ) : null}

      {state.status === "error" ? (
        <div className="mb-6 rounded-[1.5rem] border border-rose-200 bg-rose-50 px-4 py-4 text-sm leading-7 text-rose-800" aria-live="assertive">
          {state.message}
        </div>
      ) : null}

      <form className="grid gap-4 sm:grid-cols-2" onSubmit={handleSubmit}>
        <label className="space-y-2">
          <span className="text-sm font-medium text-ink">Name</span>
          <input className={inputClasses} type="text" name="name" placeholder="Your name" autoComplete="name" required />
        </label>
        <label className="space-y-2">
          <span className="text-sm font-medium text-ink">Company Name</span>
          <input className={inputClasses} type="text" name="company" placeholder="Company or carrier name" autoComplete="organization" required />
        </label>
        <label className="space-y-2">
          <span className="text-sm font-medium text-ink">Email Address</span>
          <input className={inputClasses} type="email" name="email" placeholder="you@company.com" autoComplete="email" required />
        </label>
        <label className="space-y-2">
          <span className="text-sm font-medium text-ink">Phone Number</span>
          <input className={inputClasses} type="tel" name="phone" placeholder="(000) 000-0000" autoComplete="tel" required />
        </label>
        <label className="space-y-2">
          <span className="text-sm font-medium text-ink">Number of Trucks</span>
          <input className={inputClasses} type="text" name="trucks" placeholder="1, 3, 10+" inputMode="numeric" />
        </label>
        <label className="space-y-2 sm:col-span-2">
          <span className="text-sm font-medium text-ink">Service Needed</span>
          <select
            className={inputClasses}
            name="service"
            value={selectedService}
            onChange={(event) => setSelectedService(event.target.value)}
          >
            <option>Dispatching Services</option>
            <option>Carrier Setup</option>
            <option>Virtual Assistance</option>
            <option>Web Development</option>
            <option>Digital Marketing Services</option>
            <option>General Business Support</option>
          </select>
        </label>
        <label className="space-y-2 sm:col-span-2">
          <span className="text-sm font-medium text-ink">Message</span>
          <textarea
            className={`${inputClasses} min-h-36 resize-y`}
            name="message"
            placeholder="Tell us what support you need, the lanes or business context involved, and how you want SiratLink to help."
            required
          />
        </label>
        <div className="sm:col-span-2">
          <button
            type="submit"
            className="inline-flex w-full items-center justify-center rounded-full bg-accent px-5 py-3.5 text-sm font-semibold text-white shadow-[0_16px_34px_rgba(15,118,110,0.18)] transition duration-300 hover:-translate-y-0.5 hover:bg-accent-deep sm:w-auto"
          >
            {submitLabel}
          </button>
          <p className="mt-3 text-sm text-slate" aria-live="polite">
            {state.status === "idle"
              ? `This form sends your inquiry directly to ${siteConfig.email} through secure backend delivery.`
              : state.status === "submitting"
                ? state.message
                : state.message}
          </p>
        </div>
      </form>

      {showSuccessModal ? (
        <div className="fixed inset-0 z-[90] flex items-center justify-center px-4">
          <button
            type="button"
            aria-label="Close confirmation"
            className="absolute inset-0 bg-brand-navy/55 backdrop-blur-[3px]"
            onClick={() => setShowSuccessModal(false)}
          />
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-success-title"
            className="soft-card premium-border surface-outline relative z-[91] w-full max-w-xl rounded-[2.2rem] p-6 shadow-[0_34px_90px_rgba(15,23,42,0.26)] sm:p-8"
          >
            <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-2xl text-emerald-700">
              ✓
            </div>
            <p className="mt-5 text-xs font-semibold uppercase tracking-[0.22em] text-accent">Inquiry Delivered</p>
            <h3 id="contact-success-title" className="mt-3 font-display text-3xl font-semibold text-ink">
              Your consultation request is complete.
            </h3>
            <p className="mt-4 text-base leading-8 text-slate">
              Thank you. Your inquiry has been sent to the SiratLink team. We’ll review it and respond with the best next step for your dispatching, support, or digital growth needs.
            </p>
            <div className="mt-6 rounded-[1.5rem] border border-line bg-canvas px-4 py-4 text-sm leading-7 text-slate">
              For urgent requests, you can also call{" "}
              <a className="font-semibold text-ink underline-offset-4 hover:underline" href={siteConfig.phoneHref}>
                {siteConfig.phone}
              </a>
              .
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-full bg-accent px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-accent-deep"
                onClick={() => setShowSuccessModal(false)}
              >
                Close
              </button>
              <a
                href="/dispatching-services"
                className="inline-flex items-center justify-center rounded-full border border-line px-5 py-3 text-sm font-semibold text-ink transition duration-300 hover:-translate-y-0.5 hover:border-accent/30 hover:bg-white"
              >
                View Dispatching Services
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

const inputClasses =
  "w-full rounded-2xl border border-line bg-canvas/80 px-4 py-3 text-sm text-ink outline-none transition placeholder:text-slate/60 focus:border-accent focus:bg-white focus:ring-4 focus:ring-accent/10";
