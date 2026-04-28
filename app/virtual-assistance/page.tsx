import { InfoCard, StepCard } from "@/components/cards";
import { ConsultationBand } from "@/components/consultation-band";
import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { SectionIntro } from "@/components/section-intro";
import { SectionShell } from "@/components/section-shell";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata = buildPageMetadata({
  title: "Virtual Assistance",
  description:
    "Professional virtual assistance services for admin support, scheduling, communication, data entry, and scalable business operations.",
  path: "/virtual-assistance",
  keywords: [
    "virtual assistance services",
    "admin support",
    "business operations assistance",
  ],
});

const supportAreas = [
  {
    title: "Administrative Support",
    description:
      "Structured help with recurring admin tasks that consume time and reduce internal focus.",
  },
  {
    title: "Scheduling & Coordination",
    description:
      "Calendar support, follow-up coordination, and day-to-day organization for smoother operations.",
  },
  {
    title: "Communication Assistance",
    description:
      "Inbox organization, routine correspondence, and professional communication support for teams and founders.",
  },
  {
    title: "Data Entry & Documentation",
    description:
      "Accurate handling of operational records, updates, spreadsheets, and business documentation workflows.",
  },
  {
    title: "Operations Assistance",
    description:
      "Practical support for repetitive business processes that need more consistency and less friction.",
  },
  {
    title: "Scalable Support",
    description:
      "A service approach designed to grow as your workload and operational complexity increase over time.",
  },
];

const workflow = [
  {
    step: "01",
    title: "Identify the recurring workload",
    description: "We define which administrative or operations tasks are slowing down the business and need dependable support.",
  },
  {
    step: "02",
    title: "Build the support rhythm",
    description: "We align on communication flow, priorities, scheduling, and the recurring work that needs to happen consistently.",
  },
  {
    step: "03",
    title: "Create steadier execution",
    description: "The service then supports cleaner internal organization, follow-through, and operational consistency over time.",
  },
];

const faqs = [
  {
    title: "What kind of virtual assistance can SiratLink support?",
    description:
      "The service is positioned around scheduling, admin support, inbox help, documentation, data entry, recurring coordination, and broader operations assistance.",
  },
  {
    title: "Is this designed for solo founders or teams?",
    description:
      "Both. The support model can fit a founder who needs leverage or a business team that needs more reliable operational help behind the scenes.",
  },
];

export default function VirtualAssistancePage() {
  return (
    <>
      <PageHero
        eyebrow="Virtual Assistance"
        title="Professional support for businesses that need reliable administrative and operational help."
        description="SiratLink is expanding into virtual assistance services that help businesses stay organized, responsive, and ready to scale without unnecessary internal strain."
        primaryCta={{ label: "Discuss Support Needs", href: "/contact" }}
        secondaryCta={{ label: "View All Services", href: "/services" }}
        stats={["Admin and operations support", "Scalable recurring workflows", "Business-first presentation"]}
      >
        <div className="soft-card premium-border rounded-[2.25rem] p-6 sm:p-8">
          <p className="eyebrow">Ideal For</p>
          <div className="mt-5 grid gap-4">
            {[
              "Founders who need better operational consistency",
              "Teams that want responsive admin and coordination support",
              "Businesses preparing to scale without internal overload",
            ].map((item) => (
              <div key={item} className="rounded-[1.35rem] bg-canvas px-4 py-4 text-sm font-medium leading-7 text-ink">
                {item}
              </div>
            ))}
          </div>
        </div>
      </PageHero>

      <SectionShell>
        <Reveal>
          <SectionIntro
            eyebrow="Service Overview"
            title="Business-focused support that feels polished, dependable, and operationally useful."
            description="This offer stays premium and practical instead of sounding like generic VA marketing."
            className="mb-10"
          />
        </Reveal>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {supportAreas.map((area, index) => (
            <Reveal key={area.title} delay={index * 70}>
              <InfoCard title={area.title} description={area.description} />
            </Reveal>
          ))}
        </div>
      </SectionShell>

      <SectionShell className="section-wash">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <SectionIntro
              eyebrow="Why It Works"
              title="The right support helps businesses operate more smoothly without sacrificing professionalism."
              description="Virtual assistance is not just about offloading tasks. It is about creating reliable support around communication, organization, and repeatable processes."
            />
            <p className="mt-5 text-base leading-8 text-slate">
              SiratLink positions this service as modern operational support for businesses that need responsiveness, structure, and room to grow.
            </p>
          </Reveal>
          <Reveal delay={90}>
            <ContactForm
              title="Request virtual assistance support"
              description="Share the type of administrative or operations support your business needs, and use this form as a polished lead capture experience."
              defaultService="Virtual Assistance"
              submitLabel="Book a Consultation"
            />
          </Reveal>
        </div>
      </SectionShell>

      <SectionShell>
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
          <Reveal>
            <SectionIntro
              eyebrow="Process"
              title="A support model built around cleaner workflow, not random task dumping."
              description="This page now shows a clearer process so the service feels more intentional and premium."
              className="mb-8"
            />
            <div className="grid gap-4">
              {workflow.map((item, index) => (
                <Reveal key={item.step} delay={index * 80}>
                  <StepCard step={item.step} title={item.title} description={item.description} />
                </Reveal>
              ))}
            </div>
          </Reveal>
          <Reveal delay={90}>
            <SectionIntro
              eyebrow="FAQ"
              title="A few practical questions businesses ask before booking."
              description="The service is meant to feel like structured business support, not generic VA marketing."
              className="mb-8"
            />
            <div className="grid gap-4">
              {faqs.map((item, index) => (
                <Reveal key={item.title} delay={index * 80}>
                  <InfoCard title={item.title} description={item.description} />
                </Reveal>
              ))}
            </div>
          </Reveal>
        </div>
      </SectionShell>

      <SectionShell className="pt-0">
        <Reveal>
          <ConsultationBand
            title="Book a consultation for reliable administrative and operational support."
            description="If your business needs consistent communication, cleaner workflows, and more dependable execution behind the scenes, we can help you define the right support model."
          />
        </Reveal>
      </SectionShell>
    </>
  );
}
