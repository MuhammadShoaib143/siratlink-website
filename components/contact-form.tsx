"use client";

import { FormEvent, useState } from "react";

import { siteConfig } from "@/lib/site";

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
    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") ?? "");
    const company = String(formData.get("company") ?? "");
    const email = String(formData.get("email") ?? "");
    const phone = String(formData.get("phone") ?? "");
    const service = String(formData.get("service") ?? selectedService);
    const businessType = String(formData.get("business_type") ?? "");
    const contactMethod = String(formData.get("contact_method") ?? "");
    const message = String(formData.get("message") ?? "");

    const subject = `${service} inquiry${company ? ` - ${company}` : name ? ` - ${name}` : ""}`;
    const body = [
      `Name: ${name}`,
      `Company: ${company}`,
      `Email: ${email}`,
      `Phone: ${phone || "Not provided"}`,
      `Service Needed: ${service}`,
      `Business Type: ${businessType || "Not provided"}`,
      `Preferred Contact: ${contactMethod || "Not provided"}`,
      "",
      "Message:",
      message,
    ].join("\n");

    window.location.href = `mailto:${siteConfig.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  }

  return (
    <div className="soft-card premium-border rounded-[2rem] p-6 sm:p-8">
      <div className="mb-6">
        <h2 className="font-display text-2xl font-semibold text-ink">{title}</h2>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-slate">{description}</p>
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
              ? `Your email draft is being prepared for ${siteConfig.email}. If your email app does not open, send your details directly to that address.`
              : `This form opens a ready-to-send email to ${siteConfig.email} with your inquiry details.`}
          </p>
        </div>
      </form>
    </div>
  );
}

const inputClasses =
  "w-full rounded-2xl border border-line bg-canvas/80 px-4 py-3 text-sm text-ink outline-none transition placeholder:text-slate/60 focus:border-accent focus:bg-white focus:ring-4 focus:ring-accent/10";
