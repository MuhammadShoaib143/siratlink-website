import { InfoCard, StepCard } from "@/components/cards";
import { ConsultationBand } from "@/components/consultation-band";
import { ContactForm } from "@/components/contact-form";
import { LinkButton } from "@/components/link-button";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { SectionIntro } from "@/components/section-intro";
import { SectionShell } from "@/components/section-shell";
import { buildPageMetadata } from "@/lib/metadata";
import { serviceHighlights } from "@/lib/site";

export const metadata = buildPageMetadata({
  title: "Dispatching Services",
  description:
    "Premium dispatching services for owner operators and trucking carriers, including load searching, rate negotiation, broker communication, and route coordination.",
  path: "/dispatching-services",
  keywords: [
    "dispatching services",
    "truck dispatch service",
    "truck dispatch company",
    "dispatch company USA",
    "Columbus Ohio dispatch company",
    "owner operator dispatching",
    "owner operator dispatch",
    "carrier dispatch support",
  ],
});

const benefits = [
  "Less time spent chasing loads and more time focused on delivering freight.",
  "More professional broker communication that supports stronger relationships.",
  "A clearer dispatch workflow with organized paperwork and trip coordination.",
  "Operational consistency designed to reduce downtime and improve focus.",
];

const pricingPoints = [
  {
    title: "Flexible By Fleet Size",
    description:
      "Dispatch support is structured around the size and complexity of your operation instead of forcing every client into the same model.",
  },
  {
    title: "Custom Plans For Owner Operators And Fleets",
    description:
      "We tailor the service approach around solo operators, small carriers, and growing fleets so the support feels practical from day one.",
  },
  {
    title: "No Long-Term Contracts",
    description:
      "The offer is positioned to earn trust through performance, communication, and fit rather than locking clients into unnecessary commitments.",
  },
  {
    title: "Performance-Based Options Available",
    description:
      "When appropriate, SiratLink can discuss structures that align the service relationship with measurable dispatch outcomes and growth goals.",
  },
];

export default function DispatchingServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Dispatching Services"
        title="Dispatching support designed to help carriers run with more structure, stronger communication, and steadier momentum."
        description="SiratLink provides professional dispatching services that keep operations organized, loads moving, and communication handled with the level of care serious trucking businesses expect."
        primaryCta={{ label: "Book a Dispatch Consultation", href: "/contact" }}
        secondaryCta={{ label: "View All Services", href: "/services" }}
        stats={["Owner operators and fleets", "Professional broker communication", "Flexible support model"]}
      >
        <div className="soft-card premium-border rounded-[2.25rem] p-6 sm:p-8">
          <p className="eyebrow">What Clients Come For</p>
          <h2 className="mt-4 font-display text-2xl font-semibold text-ink">
            What you can expect from SiratLink dispatching
          </h2>
          <ul className="mt-6 space-y-3 text-sm leading-7 text-slate">
            {benefits.map((benefit) => (
              <li key={benefit} className="flex gap-3">
                <span className="mt-2 h-2.5 w-2.5 rounded-full bg-accent" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </PageHero>

      <SectionShell>
        <Reveal>
          <SectionIntro
            eyebrow="Service Scope"
            title="Dispatch coordination that covers the core needs of daily trucking operations."
            description="The service scope stays practical and easy to understand so carriers can quickly see what is being handled and why it matters."
            className="mb-10"
          />
        </Reveal>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {serviceHighlights.map((service, index) => (
            <Reveal key={service.title} delay={index * 80}>
              <InfoCard title={service.title} description={service.description} />
            </Reveal>
          ))}
        </div>
      </SectionShell>

      <SectionShell className="section-wash">
        <Reveal>
          <SectionIntro
            eyebrow="How We Support Carriers"
            title="A dispatching approach built around professionalism, communication, and consistent support."
            description="The workflow stays clear from onboarding to daily execution so the offer feels more trustworthy and easier to act on."
            className="mb-10"
          />
        </Reveal>
        <div className="grid gap-4 lg:grid-cols-3">
          <Reveal>
            <StepCard
              step="01"
              title="Operational Alignment"
              description="We get clear on your lanes, equipment, revenue priorities, and dispatch workflow needs."
            />
          </Reveal>
          <Reveal delay={90}>
            <StepCard
              step="02"
              title="Daily Load Coordination"
              description="SiratLink supports load searching, broker communication, rate discussions, and trip coordination with a structured process."
            />
          </Reveal>
          <Reveal delay={180}>
            <StepCard
              step="03"
              title="Ongoing Carrier Support"
              description="We stay focused on dependable follow-through, paperwork support, and steady carrier support."
            />
          </Reveal>
        </div>
      </SectionShell>

      <SectionShell>
        <div className="grid gap-8 xl:grid-cols-[0.88fr_1.12fr]">
          <Reveal>
            <SectionIntro
              eyebrow="Pricing Strategy"
              title="Flexible dispatch pricing built around fit, support level, and operational complexity."
              description="SiratLink does not use one-size-fits-all pricing. Plans are structured around fleet size, support needs, lane profile, and the level of day-to-day coordination required."
            />
            <div className="mt-8 rounded-[2rem] bg-brand-navy p-6 text-white shadow-soft sm:p-7">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-gold">
                What To Expect
              </p>
              <p className="mt-4 text-base leading-8 text-white/76">
                Flexible plans based on your operation, custom pricing for owner operators and fleets, no hidden fees, and no long-term contracts.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-4 md:grid-cols-2">
            {pricingPoints.map((item, index) => (
              <Reveal key={item.title} delay={index * 80}>
                <InfoCard title={item.title} description={item.description} />
              </Reveal>
            ))}
            <Reveal delay={pricingPoints.length * 80} className="md:col-span-2">
              <div className="soft-card premium-border rounded-[2rem] p-6 sm:p-7">
                <p className="eyebrow">Custom Planning</p>
                <h3 className="mt-4 font-display text-2xl font-semibold text-ink">
                  Let&apos;s discuss the right dispatch model for your operation.
                </h3>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-slate">
                  We will review your equipment, lanes, current workflow, and support expectations so you receive a custom recommendation that makes sense for your business.
                </p>
                <LinkButton href="/contact" className="mt-6 w-full sm:w-auto">
                  Get Your Custom Plan
                </LinkButton>
              </div>
            </Reveal>
          </div>
        </div>
      </SectionShell>

      <SectionShell>
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <SectionIntro
              eyebrow="Why It Matters"
              title="Dispatching should help you operate smarter, communicate better, and protect your time."
              description="For owner operators and small carriers, scattered communication and inconsistent planning create unnecessary strain. SiratLink brings more structure to the process so your operation feels better supported every day."
            />
            <div className="mt-8 space-y-4">
              {[
                "Load searching",
                "Rate negotiation",
                "Broker communication",
                "Paperwork support",
                "Route coordination",
                "Dispatch management",
                "Carrier support",
              ].map((item) => (
                <div key={item} className="soft-card premium-border flex items-center gap-3 rounded-2xl px-4 py-4">
                  <span className="h-2.5 w-2.5 rounded-full bg-accent" />
                  <span className="text-sm font-medium text-ink">{item}</span>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={90}>
            <ContactForm
              title="Request dispatch support"
              description="Tell us about your trucks, lanes, and dispatch needs and prepare a ready-to-send consultation inquiry."
              defaultService="Dispatching Services"
              submitLabel="Get Your Custom Plan"
            />
          </Reveal>
        </div>
      </SectionShell>

      <SectionShell className="pt-0">
        <Reveal>
          <ConsultationBand
            title="Book a dispatch consultation built around your lane, fleet size, and growth goals."
            description="If you are looking for dependable dispatch support without a generic pricing pitch, we can review your operation and recommend the right structure."
            primaryLabel="Book a Dispatch Consultation"
          />
        </Reveal>
      </SectionShell>
    </>
  );
}
