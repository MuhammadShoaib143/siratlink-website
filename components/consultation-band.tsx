import { LinkButton } from "@/components/link-button";
import { consultationPoints, siteConfig } from "@/lib/site";

type ConsultationBandProps = {
  eyebrow?: string;
  title: string;
  description: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  points?: string[];
};

export function ConsultationBand({
  eyebrow = "Book a Consultation",
  title,
  description,
  primaryLabel = "Book a Consultation",
  primaryHref = "/contact",
  secondaryLabel = "Call Us",
  secondaryHref = siteConfig.phoneHref,
  points = consultationPoints,
}: ConsultationBandProps) {
  return (
    <div className="spot-grid overflow-hidden rounded-[2.2rem] px-6 py-7 text-white shadow-soft sm:px-8 sm:py-8">
      <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-gold">
            {eyebrow}
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">{title}</h2>
          <p className="mt-4 text-base leading-8 text-white/74">{description}</p>
          {points.length ? (
            <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
              {points.map((point) => (
                <div
                  key={point}
                  className="rounded-[1.4rem] border border-white/10 bg-white/6 px-4 py-4 text-sm leading-7 text-white/78"
                >
                  {point}
                </div>
              ))}
            </div>
          ) : null}
        </div>
        <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
          <LinkButton href={primaryHref} className="w-full sm:w-auto">
            {primaryLabel}
          </LinkButton>
          <a
            href={secondaryHref}
            className="inline-flex w-full items-center justify-center rounded-full border border-white/20 bg-white/10 px-5 py-3.5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-white/14 sm:w-auto"
          >
            {secondaryLabel}
          </a>
        </div>
      </div>
    </div>
  );
}
