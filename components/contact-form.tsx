"use client";

import { FormEvent, useState } from "react";

type ContactFormProps = {
  title?: string;
  description?: string;
  defaultService?: string;
  submitLabel?: string;
};

export function ContactForm({
  title = "Start the conversation",
  description = "Tell us about your business, what support you need, and how you want us to help.",
  defaultService = "Dispatching Services",
  submitLabel = "Send Inquiry",
}: ContactFormProps) {
  const [selectedService, setSelectedService] = useState(defaultService);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="soft-card premium-border rounded-[2rem] p-6 sm:p-8">
      <div className="mb-6">
        <h2 className="font-display text-2xl font-semibold text-ink">{title}</h2>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-slate">{description}</p>
        <div className="mt-5 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
          {["Tailored consultation", "Professional follow-up", "Ready for CRM integration"].map((item) => (
            <span key={item} className="metric-pill text-xs font-semibold uppercase tracking-[0.16em] text-ink">
              {item}
            </span>
          ))}
        </div>
      </div>

      <form className="grid gap-4 sm:grid-cols-2" onSubmit={handleSubmit}>
        <label className="space-y-2">
          <span className="text-sm font-medium text-ink">Full Name</span>
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
          <input className={inputClasses} type="tel" name="phone" placeholder="(000) 000-0000" autoComplete="tel" />
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
            <option>Virtual Assistance</option>
            <option>Web Development</option>
            <option>Digital Marketing Services</option>
            <option>General Business Support</option>
          </select>
        </label>
        <label className="space-y-2">
          <span className="text-sm font-medium text-ink">Business Type</span>
          <select className={inputClasses} name="business_type" defaultValue="">
            <option value="" disabled>
              Select your business type
            </option>
            <option>Owner Operator</option>
            <option>Small Carrier</option>
            <option>Fleet Owner</option>
            <option>Service Business</option>
            <option>Other Business</option>
          </select>
        </label>
        <label className="space-y-2">
          <span className="text-sm font-medium text-ink">Preferred Contact</span>
          <select className={inputClasses} name="contact_method" defaultValue="Email">
            <option>Email</option>
            <option>Phone</option>
            <option>Either is fine</option>
          </select>
        </label>
        <label className="space-y-2 sm:col-span-2">
          <span className="text-sm font-medium text-ink">How can we help?</span>
          <textarea
            className={`${inputClasses} min-h-36 resize-y`}
            name="message"
            placeholder="Share your needs, current challenges, and the support you are looking for."
            required
          />
        </label>
        <div className="sm:col-span-2">
          <button
            type="submit"
            className="inline-flex w-full items-center justify-center rounded-full bg-accent px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-accent-deep sm:w-auto"
          >
            {submitLabel}
          </button>
          <p className="mt-3 text-sm text-slate" aria-live="polite">
            {submitted
              ? "Thank you. Your inquiry has been received, and this form is ready to connect to your preferred email or CRM workflow."
              : "This production-ready front-end form is prepared for email, CRM, or API integration, with a polished experience across mobile and desktop."}
          </p>
        </div>
      </form>
    </div>
  );
}

const inputClasses =
  "w-full rounded-2xl border border-line bg-canvas/80 px-4 py-3 text-sm text-ink outline-none transition placeholder:text-slate/60 focus:border-accent focus:bg-white focus:ring-4 focus:ring-accent/10";
