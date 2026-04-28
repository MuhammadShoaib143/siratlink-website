import { InfoCard } from "@/components/cards";
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
