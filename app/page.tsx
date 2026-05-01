import { ContactForm } from "@/components/contact-form";
import { LinkButton } from "@/components/link-button";
import { Reveal } from "@/components/reveal";
import { SectionIntro } from "@/components/section-intro";
import { SectionShell } from "@/components/section-shell";
import { ServiceCard, TestimonialCard } from "@/components/cards";
import { buildPageMetadata } from "@/lib/metadata";
import {
  secondaryServices,
  serviceHighlights,
  siteConfig,
  testimonials,
} from "@/lib/site";

export const metadata = buildPageMetadata({
  title: "Home",
  description:
    "Dispatch support for owner operators, small carriers, and growing fleets across the United States with cleaner broker communication, load coordination, and dependable daily execution.",
  path: "/",
  keywords: [
    "dispatching services",
    "truck dispatch service",
    "freight dispatch services",
    "dispatch company USA",
    "Columbus Ohio dispatch company",
    "owner operator dispatch",
    "business support services",
  ],
});

const heroTrustBadges = [
  "Columbus, Ohio based",
  "Dispatch-first support",
  "Built for owner operators and fleets",
];

const operatorSegments = [
  {
    eyebrow: "Owner Operators",
    title: "More support around loads, brokers, and paperwork without losing control of your operation.",
  },
  {
    eyebrow: "Small Carriers",
    title: "A cleaner dispatch workflow for teams that need consistency, clearer updates, and steadier follow-through.",
  },
  {
    eyebrow: "Growing Fleets",
    title: "Structured dispatch support that helps operations scale without communication becoming a weak point.",
  },
];

const dispatchBenefits = [
  {
    title: "Better load coordination",
    description: "Support around load sourcing, lane fit, and rate conversations so dispatch decisions feel more deliberate.",
  },
  {
    title: "Stronger broker communication",
    description: "A sharper business-facing tone that helps brokers experience your operation as organized and dependable.",
  },
  {
    title: "Less daily friction",
    description: "Paperwork support, route coordination, and dependable follow-through built to reduce avoidable stress.",
  },
  {
    title: "More operational consistency",
    description: "A steadier dispatch rhythm for carriers that want clearer expectations and fewer dropped details.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Book the consultation",
    description: "Tell us about your trucks, lanes, current dispatch pain points, and what dependable support looks like for your operation.",
  },
  {
    step: "02",
    title: "Align on the workflow",
    description: "We define how loads will be sourced, how broker communication will be handled, and what paperwork support is needed day to day.",
  },
  {
    step: "03",
    title: "Operate with more structure",
    description: "Dispatching support stays focused on cleaner execution, clearer updates, and a more stable operating rhythm.",
  },
];

const trustReasons = [
  "Professional support without overpromising results",
  "No long-term contracts required to start",
  "Flexible dispatch plans based on operation size",
  "Secondary business support available as you grow",
];

const featuredDispatchHighlights = serviceHighlights.slice(0, 6);

export default function HomePage() {
  return (
    <>
      <SectionShell className="relative overflow-hidden pb-14 pt-8 sm:pt-12 lg:pb-24 lg:pt-16">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(15,118,110,0.18),_transparent_30%),radial-gradient(circle_at_top_right,_rgba(212,162,76,0.12),_transparent_18%),linear-gradient(180deg,_rgba(255,255,255,0.24),_transparent)]" />
        <div className="relative grid items-start gap-10 lg:grid-cols-[1.02fr_0.98fr]">
          <Reveal className="relative z-10">
            <div className="glass-strip inline-flex rounded-full px-4 py-2">
              <span className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-accent-deep">
                Dispatching Comes First
              </span>
            </div>

            <h1 className="text-fade-mask mt-6 max-w-5xl font-display text-[2.95rem] font-semibold leading-[0.92] text-ink sm:text-[4.2rem] lg:text-[5.55rem]">
              Dispatch support built for carriers who move serious freight.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate sm:text-lg">
              SiratLink helps owner operators and growing fleets with load coordination, broker communication, paperwork support, and reliable dispatch operations so drivers can stay focused on the road.
            </p>

            <div className="mt-6 flex flex-wrap gap-2.5">
              {heroTrustBadges.map((badge) => (
                <span
                  key={badge}
                  className="glass-strip inline-flex rounded-full px-3.5 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-accent-deep"
                >
                  {badge}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <LinkButton href="/contact" className="w-full sm:w-auto">
                Book a Consultation
              </LinkButton>
              <a
                href={siteConfig.phoneHref}
                className="inline-flex w-full items-center justify-center rounded-full border border-line bg-white/92 px-5 py-3.5 text-sm font-semibold text-ink shadow-[0_12px_26px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-0.5 hover:border-accent/35 hover:text-accent sm:w-auto"
              >
                Call Now
              </a>
            </div>

            <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <LinkButton href="/dispatching-services" variant="secondary" className="w-full sm:w-auto">
                Explore Dispatching Services
              </LinkButton>
              <LinkButton href="/carrier-setup#carrier-setup-form" variant="secondary" className="w-full sm:w-auto">
                Start Carrier Setup
              </LinkButton>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="hero-panel premium-border surface-outline relative overflow-hidden rounded-[2.7rem] p-5 sm:p-7">
              <div className="hero-route-lines" />
              <div className="grid-dots absolute inset-0 opacity-20" />
              <div className="relative">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center gap-2 rounded-full border border-accent/15 bg-white/92 px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-accent-deep">
                    Dispatch Operations View
                  </span>
                  <span className="rounded-full bg-brand-navy px-3 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-white/75">
                    U.S. Support Team
                  </span>
                </div>

                <div className="mt-4 rounded-[2rem] bg-brand-navy p-6 text-white shadow-soft">
                  <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
                    <div>
                      <p className="text-sm uppercase tracking-[0.2em] text-white/52">Today&apos;s Focus</p>
                      <p className="mt-3 max-w-md font-display text-3xl font-semibold leading-tight sm:text-[2.55rem]">
                        Keep trucks moving with cleaner coordination and less friction.
                      </p>
                    </div>
                    <div className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-white/72">
                      Active Support
                    </div>
                  </div>

                  <div className="mt-7 grid gap-4 sm:grid-cols-2">
                    <DashboardMetric label="Load Focus" value="Lane fit, timing, margin protection" />
                    <DashboardMetric label="Broker Facing" value="Clear, professional follow-through" />
                  </div>
                </div>

                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  <DashboardPanel eyebrow="Core Scope" title="Load searching, paperwork support, rate negotiation, and route coordination." />
                  <DashboardPanel eyebrow="Best Fit" title="Owner operators, small carriers, and fleets that need dependable daily dispatch support." />
                </div>

                <div className="mt-4 grid gap-4 md:grid-cols-[1.1fr_0.9fr]">
                  <div className="soft-card premium-border surface-outline rounded-[1.8rem] p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Support Snapshot</p>
                    <div className="mt-4 grid gap-3 text-sm leading-7 text-slate">
                      <div className="flex items-start gap-3 rounded-[1.15rem] bg-canvas/76 px-4 py-3">
                        <span className="mt-2 h-2.5 w-2.5 rounded-full bg-accent" />
                        <span>Better communication around loads, confirmations, and updates.</span>
                      </div>
                      <div className="flex items-start gap-3 rounded-[1.15rem] bg-canvas/76 px-4 py-3">
                        <span className="mt-2 h-2.5 w-2.5 rounded-full bg-brand-gold" />
                        <span>Operational support designed to reduce time lost to daily dispatch friction.</span>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-[1.8rem] border border-white/70 bg-white/88 p-5 shadow-soft">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Why Serious Carriers Reach Out</p>
                    <p className="mt-3 text-sm leading-7 text-slate">
                      They want structured dispatching, cleaner broker conversations, and a support partner that treats the operation like a real business.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </SectionShell>

      <SectionShell className="pt-0">
        <Reveal className="rounded-[2.25rem] border border-line bg-white/86 px-6 py-6 shadow-[0_18px_45px_rgba(15,23,42,0.06)] backdrop-blur-xl sm:px-8">
          <div className="grid gap-4 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <p className="eyebrow">Built For Serious Operators</p>
              <h2 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-[2.55rem]">
                Within seconds, the story should be clear: SiratLink helps carriers run better.
              </h2>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                "Dispatch focused support",
                "Clear communication",
                "Flexible plans",
                "No long-term contracts",
              ].map((item) => (
                <div key={item} className="soft-card premium-border rounded-[1.4rem] px-4 py-4 text-sm font-medium text-ink">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </SectionShell>

      <SectionShell>
        <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
          <Reveal>
            <SectionIntro
              eyebrow="Who We Help"
              title="Dispatch support built for operators who need more than a generic load board approach."
              description="This service is built for carriers who want cleaner workflow, dependable communication, and a more stable operating rhythm."
            />
          </Reveal>

          <div className="grid gap-4 md:grid-cols-3">
            {operatorSegments.map((segment, index) => (
              <Reveal key={segment.eyebrow} delay={index * 70}>
                <AudienceCard {...segment} />
              </Reveal>
            ))}
          </div>
        </div>
      </SectionShell>

      <SectionShell className="section-wash">
        <SectionIntro
          eyebrow="Primary Service"
          title="Dispatching stays front and center because it is the clearest business problem we solve."
          description="Dispatching stays primary, while the rest of the service mix remains available for clients who need broader operational or digital support."
          action={
            <LinkButton href="/dispatching-services" variant="secondary">
              View Full Dispatching Page
            </LinkButton>
          }
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-[1.02fr_0.98fr]">
          <Reveal>
            <div className="spot-grid overflow-hidden rounded-[2.4rem] px-6 py-7 text-white shadow-soft sm:px-8 sm:py-8">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-gold">Dispatching Services</p>
              <h2 className="mt-4 max-w-2xl font-display text-3xl font-semibold sm:text-[2.85rem]">
                Better coordination, stronger negotiation support, and more organized dispatch operations.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-white/74">
                SiratLink supports the daily pieces carriers actually care about: loads, broker conversations, route flow, confirmations, and follow-through.
              </p>

              <div className="mt-7 grid gap-3">
                {dispatchBenefits.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-[1.45rem] border border-white/10 bg-white/6 px-4 py-4"
                  >
                    <p className="text-sm font-semibold text-white">{item.title}</p>
                    <p className="mt-2 text-sm leading-7 text-white/72">{item.description}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <LinkButton href="/contact">Book a Consultation</LinkButton>
                <LinkButton href="/carrier-setup#carrier-setup-form" variant="secondary">
                  Upload Documents
                </LinkButton>
                <a
                  href={siteConfig.phoneHref}
                  className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-5 py-3.5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-white/14"
                >
                  Call Now
                </a>
              </div>
            </div>
          </Reveal>

          <div className="grid gap-4 md:grid-cols-2">
            {featuredDispatchHighlights.map((service, index) => (
              <Reveal key={service.title} delay={index * 70}>
                <ServiceCard title={service.title} description={service.description} />
              </Reveal>
            ))}
          </div>
        </div>
      </SectionShell>

      <SectionShell>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <Reveal className="lg:sticky lg:top-28">
            <SectionIntro
              eyebrow="How It Works"
              title="A clean dispatch process built to reduce back-and-forth and make the next step obvious."
              description="Carriers should be able to see quickly how support starts, what SiratLink handles, and what the working relationship looks like."
            />
            <div className="mt-8 rounded-[2rem] bg-brand-navy px-6 py-6 text-white shadow-soft">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-gold">Why This Matters</p>
              <p className="mt-3 text-sm leading-7 text-white/72">
                Less time searching. More organized paperwork. Consistent communication. A clearer dispatch process from the start.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-4">
            {processSteps.map((item, index) => (
              <Reveal key={item.step} delay={index * 90}>
                <ProcessCard {...item} />
              </Reveal>
            ))}
          </div>
        </div>
      </SectionShell>

      <SectionShell className="section-wash">
        <div className="grid gap-8 lg:grid-cols-[1.02fr_0.98fr]">
          <Reveal>
            <SectionIntro
              eyebrow="Secondary Services"
              title="Additional support is available, but the site keeps dispatching as the primary conversion path."
              description="Virtual assistance, web development, and digital marketing are available for clients who need them without diluting the dispatch-first message."
            />
          </Reveal>

          <div className="grid gap-4 md:grid-cols-3">
            {secondaryServices.map((service, index) => (
              <Reveal key={service.title} delay={index * 70}>
                <ServiceCard title={service.title} description={service.description} href={service.href} />
              </Reveal>
            ))}
          </div>
        </div>
      </SectionShell>

      <SectionShell>
        <SectionIntro
          eyebrow="Why Carriers Choose SiratLink"
          title="Trust is built through disciplined communication, practical support, and a serious business presentation."
          description="Carriers want to know who they are working with, how communication will be handled, and whether support will stay consistent day to day."
          className="mb-10"
        />

        <div className="grid gap-4 lg:grid-cols-[0.84fr_1.16fr]">
          <Reveal>
            <div className="spot-grid overflow-hidden rounded-[2.2rem] px-6 py-7 text-white shadow-soft sm:px-8">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-gold">Trust Layer</p>
              <h3 className="mt-4 font-display text-3xl font-semibold">
                Built for serious operators who care about how their dispatch partner communicates.
              </h3>
              <div className="mt-6 grid gap-3">
                {trustReasons.map((reason) => (
                  <div
                    key={reason}
                    className="rounded-[1.35rem] border border-white/10 bg-white/6 px-4 py-4 text-sm leading-6 text-white/78"
                  >
                    {reason}
                  </div>
                ))}
              </div>
              <p className="mt-6 text-xs uppercase tracking-[0.18em] text-white/46">
                Performance language is illustrative only. Exact results vary by lane, market, equipment, and execution.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-4 md:grid-cols-2">
            {testimonials.map((testimonial, index) => (
              <Reveal key={testimonial.name} delay={index * 80} className={index === 2 ? "md:col-span-2" : ""}>
                <TestimonialCard {...testimonial} />
              </Reveal>
            ))}
          </div>
        </div>
      </SectionShell>

      <SectionShell>
        <Reveal className="mb-10">
          <div className="soft-card premium-border surface-outline rounded-[2.15rem] px-6 py-6 shadow-soft sm:px-8">
            <div className="grid gap-5 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="eyebrow">Carrier Onboarding</p>
                <h2 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-[2.5rem]">
                  Ready to get set up? Submit your carrier documents securely through our website.
                </h2>
                <p className="mt-4 max-w-3xl text-base leading-7 text-slate">
                  Carriers who are ready to move forward can send company details, onboarding documents, and dispatch setup notes directly through the new carrier setup flow.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <LinkButton href="/carrier-setup#carrier-setup-form">Start Carrier Setup</LinkButton>
                <LinkButton href="/carrier-setup" variant="secondary">
                  View Setup Checklist
                </LinkButton>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="spot-grid overflow-hidden rounded-[2.4rem] px-6 py-8 text-white shadow-soft sm:px-8 lg:px-10 lg:py-10">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-gold">Ready To Start</p>
                <h2 className="mt-4 font-display text-3xl font-semibold sm:text-4xl">
                  Tell us what your operation needs and we&apos;ll respond with the best next step.
                </h2>
                <p className="mt-5 max-w-xl text-base leading-7 text-white/74">
                  If you need dispatch support now, use the consultation form below. If you are still comparing options, call us and we&apos;ll talk through fit first.
                </p>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <LinkButton href="/contact">Book a Consultation</LinkButton>
                  <a
                    href={siteConfig.phoneHref}
                    className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-5 py-3.5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-white/14"
                  >
                    Call Now
                  </a>
                </div>
              </div>

              <ContactForm
                title="Request dispatch support"
                description="Tell us about your company, number of trucks, and what kind of dispatch or business support you need."
                submitLabel="Book a Consultation"
              />
            </div>
          </div>
        </Reveal>
      </SectionShell>
    </>
  );
}

function DashboardMetric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-[1.35rem] bg-white/6 p-4">
      <p className="text-xs uppercase tracking-[0.18em] text-white/55">{label}</p>
      <p className="mt-2 text-lg font-semibold">{value}</p>
    </div>
  );
}

function DashboardPanel({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="rounded-[1.8rem] border border-line bg-white/88 p-5 shadow-soft">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">{eyebrow}</p>
      <p className="mt-3 font-display text-xl font-semibold text-ink">{title}</p>
    </div>
  );
}

function AudienceCard({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="soft-card premium-border premium-hover-card surface-outline rounded-[1.85rem] p-5">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">{eyebrow}</p>
      <h3 className="mt-4 font-display text-2xl font-semibold text-ink">{title}</h3>
    </div>
  );
}

function ProcessCard({
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
        Step {step}
      </div>
      <h3 className="mt-5 font-display text-2xl font-semibold text-ink">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate">{description}</p>
    </div>
  );
}
