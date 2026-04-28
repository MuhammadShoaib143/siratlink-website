import Link from "next/link";
import { type ReactNode } from "react";

export function InfoCard({
  title,
  description,
  eyebrow,
  className = "",
  children,
}: {
  title: string;
  description: string;
  eyebrow?: string;
  className?: string;
  children?: ReactNode;
}) {
  return (
    <div className={`soft-card premium-border rounded-[2rem] p-6 transition duration-300 hover:-translate-y-1 hover:shadow-soft ${className}`}>
      {eyebrow ? (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          {eyebrow}
        </p>
      ) : null}
      <h3 className="font-display text-xl font-semibold text-ink">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate">{description}</p>
      {children ? <div className="mt-5">{children}</div> : null}
    </div>
  );
}

export function ServiceCard({
  title,
  description,
  href,
  featured = false,
}: {
  title: string;
  description: string;
  href?: string;
  featured?: boolean;
}) {
  return (
    <div
      className={`group rounded-[2rem] p-6 transition duration-300 hover:-translate-y-1 ${
        featured
          ? "relative overflow-hidden border border-accent/20 bg-brand-navy text-white shadow-soft"
          : "soft-card premium-border text-ink"
      }`}
    >
      {featured ? (
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(212,162,76,0.14),_transparent_24%),radial-gradient(circle_at_bottom_right,_rgba(255,255,255,0.06),_transparent_18%)]" />
      ) : null}
      <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${featured ? "bg-white/10 text-brand-gold" : "bg-accent/12 text-accent"}`}>
        <span className="text-lg font-semibold">{title.slice(0, 1)}</span>
      </div>
      <h3 className={`relative mt-5 font-display text-2xl font-semibold ${featured ? "text-white" : ""}`}>
        {title}
      </h3>
      <p className={`relative mt-3 text-sm leading-7 ${featured ? "text-white/78" : "text-slate"}`}>
        {description}
      </p>
      {href ? (
        <Link
          href={href}
          className={`relative mt-5 inline-flex items-center gap-2 text-sm font-semibold ${
            featured ? "text-white" : "text-accent"
          }`}
        >
          Learn more
          <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-0.5">
            →
          </span>
        </Link>
      ) : null}
    </div>
  );
}

export function StepCard({
  step,
  title,
  description,
}: {
  step: string;
  title: string;
  description: string;
}) {
  return (
    <div className="soft-card premium-border rounded-[2rem] p-6">
      <div className="inline-flex rounded-full bg-accent-soft px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-accent-deep">
        {step}
      </div>
      <h3 className="mt-5 font-display text-xl font-semibold text-ink">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate">{description}</p>
    </div>
  );
}

export function TestimonialCard({
  quote,
  name,
  role,
}: {
  quote: string;
  name: string;
  role: string;
}) {
  return (
    <div className="soft-card premium-border rounded-[2rem] p-6">
      <p className="text-base leading-8 text-ink">“{quote}”</p>
      <div className="mt-6 border-t border-line pt-4">
        <p className="font-semibold text-ink">{name}</p>
        <p className="text-sm text-slate">{role}</p>
      </div>
    </div>
  );
}
