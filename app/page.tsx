import { ContactForm } from "@/components/contact-form";
import { LinkButton } from "@/components/link-button";
import { MailActionButton } from "@/components/mail-action-button";
import { Reveal } from "@/components/reveal";
import { SectionIntro } from "@/components/section-intro";
import { SectionShell } from "@/components/section-shell";
import { TestimonialCard } from "@/components/cards";
import { buildPageMetadata } from "@/lib/metadata";
import {
  homeStats,
  secondaryServices,
  serviceHighlights,
  siteConfig,
  testimonials,
} from "@/lib/site";

export const metadata = buildPageMetadata({
  title: "Home",
  description:
    "Premium dispatching services and scalable business support for trucking carriers, owner operators, and growing companies across the United States.",
  path: "/",
  keywords: [
    "dispatching services",
    "truck dispatch company",
    "dispatch company in Columbus Ohio",
    "business support services",
  ],
});

const heroHighlights = [
  "Professional broker communication with faster follow-through.",
  "Built for owner operators, fleet owners, and growing carriers.",
];

const trustSignals = [
  {
    title: "Dispatch-First Offer",
    description: "The core service stays focused on loads, paperwork, broker communication, and dependable day-to-day support.",
  },
  {
    title: "U.S.-Based Support",
    description: "SiratLink is based in Ohio and positioned to serve carriers that want organized, business-minded communication.",
  },
  {
    title: "Professional Delivery",
    description: "The experience is built around responsiveness, cleaner workflow, and stronger operational discipline.",
  },
  {
    title: "Growth-Ready Brand",
    description: "Virtual assistance, web support, and digital marketing remain available as secondary growth services.",
  },
];

const dispatchPillars = [
  "Load sourcing aligned to lane fit and revenue goals.",
  "Broker-facing communication that sounds sharper and more organized.",
  "Paperwork and route coordination designed to reduce daily friction.",
];

const workflow = [
  {
    step: "01",
    title: "Discovery Call",
    description: "We learn your lanes, truck type, and dispatch priorities.",
  },
  {
    step: "02",
    title: "Support Alignment",
    description: "We align on load criteria, communication style, and workflow expectations.",
  },
  {
    step: "03",
    title: "Daily Execution",
    description: "Support stays focused on cleaner coordination and dependable follow-through.",
  },
];

const finalChecklist = [
  "Dispatching remains the primary service",
  "Clear support path for owner operators and fleets",
  "Additional business support available as you grow",
];

const featuredServiceHighlights = serviceHighlights.slice(0, 4);

export default function HomePage() {
  return (
    <>
      <SectionShell className="relative overflow-hidden pb-12 pt-8 sm:pt-12 lg:pb-20 lg:pt-16">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(15,118,110,0.18),_transparent_34%),radial-gradient(circle_at_top_right,_rgba(212,162,76,0.12),_transparent_20%),linear-gradient(180deg,_rgba(255,255,255,0.3),_transparent)]" />
        <div className="relative grid items-start gap-10 lg:grid-cols-[1fr_0.96fr]">
          <Reveal className="relative z-10">
            <div className="glass-strip inline-flex rounded-full px-4 py-2">
              <span className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-accent-deep">
                Columbus, Ohio Based • Dispatching Comes First
              </span>
            </div>

            <h1 className="mt-6 max-w-5xl font-display text-4xl font-semibold leading-[0.98] text-ink sm:text-5xl lg:text-[4.9rem]">
              Premium dispatch support for carriers that need stronger communication and steadier execution.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate sm:text-[1.08rem]">
              SiratLink helps owner operators, fleet owners, and growing carriers run with more structure, cleaner broker communication, and dependable daily support.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {heroHighlights.map((item) => (
                <div key={item} className="glass-strip rounded-[1.4rem] px-4 py-4 text-sm leading-7 text-slate">
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <LinkButton href="/contact" className="w-full sm:w-auto">
                Book a Consultation
              </LinkButton>
              <LinkButton
                href="/dispatching-services"
                variant="secondary"
                className="w-full border-white/70 bg-white/85 sm:w-auto"
              >
                Explore Dispatching Services
              </LinkButton>
            </div>

            <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href={siteConfig.phoneHref}
                className="inline-flex items-center justify-center rounded-full border border-line bg-white/88 px-4 py-3 text-sm font-medium text-ink shadow-[0_12px_26px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-0.5 hover:border-accent/35 hover:text-accent"
              >
                Call {siteConfig.phone}
              </a>
              <MailActionButton
                email={siteConfig.email}
                label={`Email ${siteConfig.email}`}
                copiedLabel="Email Copied"
                className="inline-flex items-center justify-center rounded-full border border-line bg-white/82 px-4 py-3 text-sm font-medium text-ink shadow-[0_12px_26px_rgba(15,23,42,0.05)] transition duration-300 hover:-translate-y-0.5 hover:border-accent/35 hover:text-accent"
              />
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {homeStats.map((stat, index) => (
                <Reveal key={stat.label} delay={index * 80}>
                  <div className="soft-card premium-border rounded-[1.75rem] p-5">
                    <p className="font-display text-lg font-semibold text-ink">{stat.value}</p>
                    <p className="mt-2 text-sm leading-6 text-slate">{stat.label}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="relative">
              <div className="absolute -right-8 top-6 hidden h-28 w-28 rounded-full bg-brand-gold/12 blur-3xl lg:block" />
              <div className="absolute -left-8 bottom-16 hidden h-32 w-32 rounded-full bg-accent/14 blur-3xl lg:block" />

              <div className="hero-panel premium-border relative overflow-hidden rounded-[2.5rem] p-5 sm:p-7">
                <div className="grid-dots absolute inset-0 opacity-25" />
                <div className="relative">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="inline-flex items-center gap-2 rounded-full border border-accent/15 bg-white/92 px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-accent-deep">
                      Dispatch Operations View
                    </span>
                    <span className="rounded-full bg-brand-navy px-3 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-white/75">
                      U.S. Based Support
                    </span>
                  </div>

                  <div className="mt-4 rounded-[2rem] bg-brand-navy p-6 text-white shadow-soft">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-sm text-white/58">Priority</p>
                        <p className="mt-2 font-display text-3xl font-semibold leading-tight">
                          Keep trucks moving with more structure and less friction.
                        </p>
                      </div>
                      <div className="rounded-full border border-white/10 bg-white/10 px-3 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-white/70">
                        Active Support
                      </div>
                    </div>

                    <div className="mt-6 grid gap-4 sm:grid-cols-2">
                      <MetricPanel label="Focus" value="Better loads and cleaner workflow" />
                      <MetricPanel label="Approach" value="Professional broker-facing communication" />
                    </div>
                  </div>

                  <div className="mt-4 grid gap-4 sm:grid-cols-2">
                    <CompactPanel
                      eyebrow="Core Scope"
                      title="Load search, paperwork, negotiation, and daily coordination."
                    />
                    <CompactPanel
                      eyebrow="Best Fit"
                      title="Owner operators, small carriers, and fleets that want dependable daily support."
                    />
                  </div>

                  <div className="mt-4 rounded-[1.8rem] border border-white/70 bg-white/88 p-5 shadow-soft">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Why Clients Reach Out</p>
                    <p className="mt-3 text-sm leading-7 text-slate">
                      SiratLink is built for carriers that want a more composed dispatch process and a more credible business-facing presence.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </SectionShell>

      <SectionShell className="pt-4">
        <div className="grid gap-8 lg:grid-cols-[0.86fr_1.14fr]">
          <Reveal>
            <SectionIntro
              eyebrow="Why SiratLink"
              title="A dispatch-first service model with a more professional operating standard."
              description="The site now leads with the offer more clearly: dispatching is the main service, and everything else supports a stronger business experience."
            />
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {trustSignals.map((signal, index) => (
              <Reveal key={signal.title} delay={index * 70}>
                <SignalCard title={signal.title} description={signal.description} />
              </Reveal>
            ))}
          </div>
        </div>
      </SectionShell>

      <SectionShell className="section-wash">
        <SectionIntro
          eyebrow="Primary Service"
          title="Dispatching is the clearest place to start with SiratLink."
          description="The value proposition stays tight: better loads, cleaner communication, and more dependable daily coordination."
          action={
            <LinkButton href="/dispatching-services" variant="secondary">
              View Full Dispatching Page
            </LinkButton>
          }
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-[1.04fr_0.96fr]">
          <Reveal>
            <div className="overflow-hidden rounded-[2.25rem] bg-brand-navy p-6 text-white shadow-soft sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-gold">Dispatching Services</p>
              <h2 className="mt-4 font-display text-3xl font-semibold sm:text-[2.7rem]">
                Dispatch support built for profitable, well-organized operations.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-white/74">
                SiratLink focuses on the parts of dispatching that directly affect how a carrier runs each day.
              </p>

              <div className="mt-7 space-y-3">
                {dispatchPillars.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-[1.45rem] border border-white/10 bg-white/6 px-4 py-4 text-sm leading-7 text-white/80"
                  >
                    <span className="mt-2 h-2.5 w-2.5 rounded-full bg-brand-gold" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <LinkButton href="/contact">Book a Consultation</LinkButton>
                <LinkButton
                  href="/dispatching-services"
                  variant="secondary"
                  className="border-white/20 bg-white/10 text-white hover:bg-white/14 hover:text-white"
                >
                  See Dispatching Details
                </LinkButton>
              </div>
            </div>
          </Reveal>

          <div className="grid gap-4">
            {featuredServiceHighlights.map((service, index) => (
              <Reveal key={service.title} delay={index * 70}>
                <DispatchServiceCard {...service} />
              </Reveal>
            ))}
          </div>
        </div>
      </SectionShell>

      <SectionShell>
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <Reveal>
            <SectionIntro
              eyebrow="How It Works"
              title="A cleaner three-step path from first call to daily support."
              description="The process is intentionally simple so busy operators can understand the next step quickly."
            />

            <div className="mt-8 space-y-4">
              {workflow.map((item) => (
                <CompactStep key={item.step} step={item.step} title={item.title} description={item.description} />
              ))}
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="rounded-[2.25rem] border border-line bg-white/82 p-6 shadow-[0_18px_45px_rgba(15,23,42,0.06)] backdrop-blur-sm sm:p-8">
              <p className="eyebrow">Secondary Services</p>
              <h2 className="mt-3 font-display text-3xl font-semibold leading-[1.06] text-ink">
                Additional services are available, but they stay secondary to dispatching.
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-slate">
                SiratLink can also support broader business needs as clients grow and need more operational coverage.
              </p>

              <div className="mt-8 grid gap-4">
                {secondaryServices.map((service, index) => (
                  <Reveal key={service.title} delay={index * 70}>
                    <SecondaryServiceCard
                      title={service.title}
                      description={service.description}
                      href={service.href}
                    />
                  </Reveal>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </SectionShell>

      <SectionShell className="section-wash">
        <SectionIntro
          eyebrow="Client Confidence"
          title="Support that feels composed, credible, and worth trusting."
          description="The strongest proof point is still the same: carriers want dispatch support that reduces friction and improves communication."
          className="mb-10"
        />

        <div className="grid gap-4 lg:grid-cols-[0.84fr_1.16fr]">
          <Reveal>
            <div className="overflow-hidden rounded-[2.2rem] bg-brand-navy p-6 text-white shadow-soft sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-gold">Reputation Matters</p>
              <h3 className="mt-4 font-display text-3xl font-semibold">
                Carriers remember the dispatch partners who communicate well and follow through.
              </h3>
              <p className="mt-5 text-base leading-7 text-white/74">
                Clear updates, dependable coordination, and steadier execution are what make the service feel valuable.
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
        <Reveal>
          <div className="spot-grid overflow-hidden rounded-[2.35rem] px-6 py-8 text-white shadow-soft sm:px-8 lg:px-10 lg:py-10">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-gold">Get Started</p>
                <h2 className="mt-4 font-display text-3xl font-semibold sm:text-4xl">
                  Start with a consultation and see what support fits your operation best.
                </h2>
                <p className="mt-5 max-w-xl text-base leading-7 text-white/74">
                  Tell us about your lanes, dispatch needs, or broader support goals and we&apos;ll help you identify the right next step.
                </p>

                <div className="mt-6 space-y-3">
                  {finalChecklist.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 rounded-[1.35rem] border border-white/10 bg-white/6 px-4 py-4 text-sm leading-6 text-white/80"
                    >
                      <span className="mt-2 h-2.5 w-2.5 rounded-full bg-brand-gold" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <LinkButton href="/contact">Book a Consultation</LinkButton>
                  <LinkButton
                    href="/dispatching-services"
                    variant="secondary"
                    className="border-white/20 bg-white/10 text-white hover:bg-white/14 hover:text-white"
                  >
                    Review Dispatching Services
                  </LinkButton>
                </div>
              </div>

              <ContactForm
                title="Request your consultation"
                description="Share the essentials and open a ready-to-send inquiry email."
                submitLabel="Book a Consultation"
              />
            </div>
          </div>
        </Reveal>
      </SectionShell>
    </>
  );
}

function MetricPanel({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-[1.35rem] bg-white/6 p-4">
      <p className="text-xs uppercase tracking-[0.18em] text-white/55">{label}</p>
      <p className="mt-2 text-lg font-semibold">{value}</p>
    </div>
  );
}

function CompactPanel({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <div className="rounded-[1.8rem] border border-line bg-white/88 p-5 shadow-soft">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">{eyebrow}</p>
      <p className="mt-3 font-display text-xl font-semibold text-ink">{title}</p>
    </div>
  );
}

function SignalCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="soft-card premium-border rounded-[1.8rem] px-5 py-6">
      <div className="mb-4 h-11 w-11 rounded-2xl bg-accent/10" />
      <h3 className="font-display text-xl font-semibold text-ink">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate">{description}</p>
    </div>
  );
}

function DispatchServiceCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="soft-card premium-border rounded-[1.8rem] p-5 transition duration-300 hover:-translate-y-1">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Dispatching Highlight</p>
          <h3 className="mt-3 font-display text-2xl font-semibold text-ink">{title}</h3>
        </div>
        <span className="rounded-full bg-accent-soft px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent-deep">
          Core
        </span>
      </div>
      <p className="mt-4 text-sm leading-7 text-slate">{description}</p>
    </div>
  );
}

function CompactStep({
  step,
  title,
  description,
}: {
  step: string;
  title: string;
  description: string;
}) {
  return (
    <div className="soft-card premium-border rounded-[1.8rem] p-6">
      <div className="inline-flex rounded-full bg-accent-soft px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-accent-deep">
        Step {step}
      </div>
      <h3 className="mt-5 font-display text-2xl font-semibold text-ink">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate">{description}</p>
    </div>
  );
}

function SecondaryServiceCard({
  title,
  description,
  href,
}: {
  title: string;
  description: string;
  href: string;
}) {
  return (
    <div className="soft-card premium-border rounded-[1.8rem] p-5 transition duration-300 hover:-translate-y-1">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Secondary Service</p>
      <h3 className="mt-3 font-display text-2xl font-semibold text-ink">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate">{description}</p>
      <div className="mt-5">
        <LinkButton href={href} variant="secondary">
          Learn More
        </LinkButton>
      </div>
    </div>
  );
}
