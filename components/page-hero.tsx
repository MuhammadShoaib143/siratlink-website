import { type ReactNode } from "react";

import { LinkButton } from "@/components/link-button";
import { Reveal } from "@/components/reveal";
import { SectionShell } from "@/components/section-shell";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  stats?: string[];
  children?: ReactNode;
};

export function PageHero({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
  stats,
  children,
}: PageHeroProps) {
  return (
    <SectionShell className="relative overflow-hidden pb-10 pt-10 sm:pt-14 lg:pb-16 lg:pt-20">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[560px] bg-[radial-gradient(circle_at_top_left,_rgba(15,118,110,0.16),_transparent_38%),radial-gradient(circle_at_top_right,_rgba(212,162,76,0.12),_transparent_24%)]" />
      <div className="grid items-center gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:gap-12">
        <Reveal className="relative z-10">
          <div className="glass-strip inline-flex rounded-full px-4 py-2">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-accent-deep">
              {eyebrow}
            </p>
          </div>
          <h1 className="mt-6 max-w-3xl font-display text-4xl font-semibold leading-[1.02] text-ink sm:text-5xl lg:text-[4rem]">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate lg:text-[1.08rem]">{description}</p>
          {(primaryCta || secondaryCta) && (
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              {primaryCta ? (
                <LinkButton href={primaryCta.href}>{primaryCta.label}</LinkButton>
              ) : null}
              {secondaryCta ? (
                <LinkButton href={secondaryCta.href} variant="secondary">
                  {secondaryCta.label}
                </LinkButton>
              ) : null}
            </div>
          )}
          {stats?.length ? (
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              {stats.map((stat) => (
                <span key={stat} className="metric-pill text-sm font-medium text-ink">
                  {stat}
                </span>
              ))}
            </div>
          ) : null}
        </Reveal>
        {children ? <Reveal delay={120}>{children}</Reveal> : null}
      </div>
    </SectionShell>
  );
}
