import { InfoCard, StepCard } from "@/components/cards";
import { ConsultationBand } from "@/components/consultation-band";
import { ContactForm } from "@/components/contact-form";
import { LinkButton } from "@/components/link-button";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { SectionIntro } from "@/components/section-intro";
import { SectionShell } from "@/components/section-shell";
import { buildPageMetadata } from "@/lib/metadata";
import { serviceHighlights, siteConfig } from "@/lib/site";

export const metadata = buildPageMetadata({
  title: "Dispatching Services",
  description:
    "Truck dispatch service for owner operators, small carriers, and growing fleets with load sourcing, broker communication, paperwork support, and route coordination.",
  path: "/dispatching-services",
  keywords: [
    "dispatching services",
    "truck dispatch service",
    "dispatch company USA",
    "Columbus Ohio dispatch company",
    "freight dispatch services",
    "owner operator dispatch",
    "small fleet dispatch support",
  ],
});

const whoWeHelp = [
  {
    title: "Owner operators",
    description: "Operators who need help finding better loads, staying organized, and reducing the time lost to broker calls and paperwork.",
  },
  {
    title: "Small fleets",
    description: "Carriers that need more structure, steadier communication, and cleaner dispatch execution across multiple trucks.",
  },
  {
    title: "New carriers",
    description: "Operations that need support building a more consistent dispatch rhythm without sounding inexperienced to brokers.",
  },
  {
    title: "Carriers needing steady support",
    description: "Teams looking for day-to-day dispatch consistency instead of chasing loads and updates in a reactive way.",
  },
];

const operationalBenefits = [
  "Less time spent searching for the next workable load.",
  "Better communication flow with brokers and dispatch contacts.",
  "Organized paperwork support that keeps key details from slipping.",
  "A clearer dispatch process with more consistent follow-through.",
];

const dispatchFaqs = [
  {
    question: "What does SiratLink handle day to day?",
    answer:
      "SiratLink supports load sourcing, broker communication, rate negotiation support, paperwork coordination, route flow, and daily dispatch management built around a cleaner operating process.",
  },
  {
    question: "How do you find loads?",
    answer:
      "The approach centers on lane fit, equipment type, timing, and revenue goals so load searching feels more deliberate than random board activity.",
  },
  {
    question: "How do you communicate with brokers?",
    answer:
      "Communication is handled with a clear, timely, and professional tone so your operation is represented with more confidence and consistency.",
  },
  {
    question: "Do you guarantee better rates or revenue?",
    answer:
      "No. SiratLink focuses on better coordination, stronger negotiation support, and more organized dispatch operations. Actual performance varies by market, lane, equipment, and execution.",
  },
];

const pricingPoints = [
  "Flexible plans based on your operation size and dispatch needs.",
  "Custom pricing for owner operators and fleets.",
  "No hidden fees in the way the service is structured.",
  "No long-term contracts required to start the conversation.",
];

const startSteps = [
  {
    step: "01",
    title: "Tell us about the operation",
    description: "Share truck count, preferred lanes, dispatch pain points, and the level of support you need right now.",
  },
  {
    step: "02",
    title: "Align on support scope",
    description: "We map out how load sourcing, broker communication, paperwork support, and route coordination should be handled.",
  },
  {
    step: "03",
    title: "Move into steady execution",
    description: "Dispatching support stays focused on consistent communication, cleaner workflow, and dependable follow-through.",
  },
];

export default function DispatchingServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Truck Dispatch Service"
        title="Dispatch support for owner operators and fleets that need stronger coordination, clearer communication, and a more dependable daily process."
        description="SiratLink provides dispatch-first support for carriers who want load sourcing, broker communication, paperwork support, route coordination, and day-to-day execution handled with more discipline."
        primaryCta={{ label: "Get Your Custom Plan", href: "#dispatch-contact-form" }}
        secondaryCta={{ label: "Call Now", href: siteConfig.phoneHref }}
        stats={["Owner operators and small fleets", "Broker-facing communication", "Flexible support without long-term contracts"]}
      >
        <div className="soft-card premium-border surface-outline rounded-[2.25rem] p-6 sm:p-8">
          <p className="eyebrow">What Carriers Care About</p>
          <div className="mt-5 grid gap-4">
            {operationalBenefits.map((item) => (
              <div key={item} className="rounded-[1.35rem] bg-canvas px-4 py-4 text-sm font-medium leading-7 text-ink">
                {item}
              </div>
            ))}
          </div>
        </div>
      </PageHero>

      <SectionShell>
        <div className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr]">
          <Reveal>
            <SectionIntro
              eyebrow="Who We Help"
              title="The offer is built for carriers who want steadier support, not more chaos."
              description="This service is built for carriers who want dependable support, clearer communication, and a dispatch process that feels more stable day to day."
            />
          </Reveal>

          <div className="grid gap-4 md:grid-cols-2">
            {whoWeHelp.map((item, index) => (
              <Reveal key={item.title} delay={index * 70}>
                <InfoCard title={item.title} description={item.description} eyebrow="Best Fit" />
              </Reveal>
            ))}
          </div>
        </div>
      </SectionShell>

      <SectionShell className="section-wash">
        <Reveal>
          <SectionIntro
            eyebrow="Service Scope"
            title="What the dispatching service actually covers day to day."
            description="The scope stays grounded in what real carriers look for before they book a call."
            className="mb-10"
          />
        </Reveal>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {serviceHighlights.map((service, index) => (
            <Reveal key={service.title} delay={index * 70}>
              <InfoCard title={service.title} description={service.description} />
            </Reveal>
          ))}
        </div>
      </SectionShell>

      <SectionShell>
        <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <Reveal className="lg:sticky lg:top-28">
            <SectionIntro
              eyebrow="How Carriers Start"
              title="A clean process built around fit, expectations, and steady operating support."
              description="The goal is to make the next step clear, keep expectations aligned, and start the relationship with a more organized workflow."
            />
            <div className="mt-8 rounded-[2rem] bg-brand-navy px-6 py-6 text-white shadow-soft">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-gold">Why Carriers Value It</p>
              <p className="mt-3 text-sm leading-7 text-white/72">
                Better coordination, more organized paperwork, consistent communication, and a dispatch process that feels more stable from the start.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-4">
            {startSteps.map((item, index) => (
              <Reveal key={item.step} delay={index * 90}>
                <StepCard step={item.step} title={item.title} description={item.description} />
              </Reveal>
            ))}
          </div>
        </div>
      </SectionShell>

      <SectionShell className="section-wash">
        <div className="grid gap-8 xl:grid-cols-[0.88fr_1.12fr]">
          <Reveal>
            <SectionIntro
              eyebrow="Pricing Strategy"
              title="Flexible dispatch pricing that fits the operation instead of forcing every carrier into the same structure."
              description="No exact pricing is shown here on purpose. The pricing conversation should reflect truck count, workflow complexity, lane profile, and how much day-to-day support is needed."
            />
            <div className="mt-8 rounded-[2rem] bg-brand-navy p-6 text-white shadow-soft sm:p-7">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-gold">What To Expect</p>
              <div className="mt-5 grid gap-3">
                {pricingPoints.map((point) => (
                  <div
                    key={point}
                    className="rounded-[1.35rem] border border-white/10 bg-white/6 px-4 py-4 text-sm leading-7 text-white/78"
                  >
                    {point}
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <div className="flex flex-col gap-3 sm:flex-row">
                  <LinkButton href="#dispatch-contact-form">Get Your Custom Plan</LinkButton>
                  <LinkButton href="/carrier-setup#carrier-setup-form" variant="secondary">
                    Upload Documents
                  </LinkButton>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              {
                title: "Flexible by fleet size",
                description:
                  "Support can be shaped around a single truck, a small carrier, or a growing fleet instead of using a one-size-fits-all model.",
              },
              {
                title: "Custom plans for real operations",
                description:
                  "The right dispatch structure depends on lanes, truck count, communication expectations, and the complexity of the day-to-day workflow.",
              },
              {
                title: "No hidden fees",
                description:
                  "The service is built around clarity and trust, not surprising cost structures that create friction before the relationship starts.",
              },
              {
                title: "No long-term contracts",
                description:
                  "The support model is meant to earn trust through fit, communication, and execution rather than forcing long-term commitment too early.",
              },
            ].map((item, index) => (
              <Reveal key={item.title} delay={index * 70}>
                <InfoCard title={item.title} description={item.description} />
              </Reveal>
            ))}
          </div>
        </div>
      </SectionShell>

      <SectionShell>
        <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
          <Reveal>
            <SectionIntro
              eyebrow="FAQ"
              title="Answers to the questions serious carriers ask before they commit to a dispatch partner."
              description="The language stays practical and avoids overpromising so the service feels more credible."
            />
            <div className="mt-8 grid gap-4">
              {dispatchFaqs.map((item, index) => (
                <Reveal key={item.question} delay={index * 70}>
                  <InfoCard title={item.question} description={item.answer} />
                </Reveal>
              ))}
            </div>
            <div className="mt-8 rounded-[1.9rem] border border-line bg-white/86 px-5 py-5 shadow-[0_14px_30px_rgba(15,23,42,0.04)]">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">Carrier Setup</p>
              <p className="mt-3 text-sm leading-7 text-slate">
                Ready to get set up? Submit your carrier information and onboarding documents through the SiratLink carrier setup flow before your dispatch consultation.
              </p>
              <div className="mt-5">
                <LinkButton href="/carrier-setup#carrier-setup-form">Start Carrier Setup</LinkButton>
              </div>
            </div>
          </Reveal>

          <Reveal delay={90}>
            <div id="dispatch-contact-form">
              <ContactForm
                title="Request dispatch support"
                description="Tell us about your operation, number of trucks, current dispatch needs, and how you want the support relationship to work."
                defaultService="Dispatching Services"
                submitLabel="Get Your Custom Plan"
              />
            </div>
          </Reveal>
        </div>
      </SectionShell>

      <SectionShell className="pt-0">
        <Reveal>
          <ConsultationBand
            eyebrow="Book The Consultation"
            title="Discuss the right dispatch structure for your lanes, truck count, and daily operating needs."
            description="If you need a dispatch partner that sounds more professional, stays more organized, and supports a cleaner workflow, let’s talk through what your operation needs next."
            primaryLabel="Get Your Custom Plan"
            secondaryLabel={`Call ${siteConfig.phone}`}
          />
        </Reveal>
      </SectionShell>
    </>
  );
}
