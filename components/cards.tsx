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
    <div className={`soft-card premium-border premium-hover-card surface-outline rounded-[2rem] p-6 sm:p-7 ${className}`}>
      <div className="mb-4 flex items-center justify-between gap-3">
        {eyebrow ? (
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            {eyebrow}
          </p>
        ) : (
          <div className="h-px flex-1 bg-[linear-gradient(90deg,rgba(15,118,110,0.24),transparent)]" />
        )}
        <div className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-accent/70" />
          <span className="h-2 w-2 rounded-full bg-brand-gold/60" />
        </div>
      </div>
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
      className={`group premium-hover-card rounded-[2rem] p-6 sm:p-7 ${
        featured
          ? "surface-outline relative overflow-hidden border border-accent/18 bg-brand-navy text-white shadow-soft"
          : "soft-card premium-border surface-outline text-ink"
      }`}
    >
      {featured ? (
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(212,162,76,0.14),_transparent_24%),radial-gradient(circle_at_bottom_right,_rgba(255,255,255,0.06),_transparent_18%)]" />
      ) : null}
      <ServiceGlyph featured={featured} />
      <h3 className={`relative mt-5 font-display text-2xl font-semibold ${featured ? "text-white" : ""}`}>
        {title}
      </h3>
      <p className={`relative mt-3 text-sm leading-7 ${featured ? "text-white/78" : "text-slate"}`}>
        {description}
      </p>
      <div className={`relative mt-5 h-px w-full ${featured ? "bg-white/10" : "bg-line"}`} />
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

function ServiceGlyph({ featured }: { featured: boolean }) {
  return (
    <div
      className={`relative flex h-12 w-12 items-center justify-center rounded-2xl transition duration-300 group-hover:scale-105 ${
        featured ? "bg-white/10" : "bg-accent/12"
      }`}
    >
      <span
        className={`absolute left-[11px] top-[13px] h-[2px] w-5 rounded-full ${
          featured ? "bg-brand-gold/90" : "bg-accent"
        }`}
      />
      <span
        className={`absolute left-[11px] top-[23px] h-[2px] w-3 rounded-full ${
          featured ? "bg-white/80" : "bg-brand-steel/70"
        }`}
      />
      <span
        className={`absolute right-[11px] top-[18px] h-3 w-3 rounded-full border ${
          featured ? "border-white/60 bg-white/10" : "border-accent/40 bg-white"
        }`}
      />
      <span
        className={`absolute left-[17px] bottom-[11px] h-[2px] w-4 rounded-full ${
          featured ? "bg-white/70" : "bg-brand-gold/80"
        }`}
      />
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
    <div className="soft-card premium-border premium-hover-card surface-outline rounded-[2rem] p-6 sm:p-7">
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
    <div className="soft-card premium-border premium-hover-card surface-outline rounded-[2rem] p-6 sm:p-7">
      <div className="mb-4 inline-flex rounded-full border border-accent/10 bg-accent/5 px-3 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-accent-deep">
        Carrier Feedback
      </div>
      <p className="text-base leading-8 text-ink">“{quote}”</p>
      <div className="mt-6 border-t border-line pt-4">
        <p className="font-semibold text-ink">{name}</p>
        <p className="text-sm text-slate">{role}</p>
      </div>
    </div>
  );
}
