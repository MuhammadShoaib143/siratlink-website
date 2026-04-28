import { InfoCard } from "@/components/cards";
import { ConsultationBand } from "@/components/consultation-band";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { SectionIntro } from "@/components/section-intro";
import { SectionShell } from "@/components/section-shell";
import { buildPageMetadata } from "@/lib/metadata";
import { values } from "@/lib/site";

export const metadata = buildPageMetadata({
  title: "About",
  description:
    "Learn about SiratLink LLC, our mission, values, and commitment to reliable dispatching and operational excellence.",
  path: "/about",
  keywords: [
    "about SiratLink LLC",
    "dispatch company in Columbus Ohio",
    "business support company",
  ],
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About SiratLink"
        title="A modern service company built around trust, operational discipline, and long-term client growth."
        description="SiratLink LLC is a Columbus, Ohio based professional service company focused on dependable dispatching and scalable business support. We are building the kind of client experience that feels responsive, organized, and ready for real-world execution."
        primaryCta={{ label: "Contact Us", href: "/contact" }}
        secondaryCta={{ label: "View Services", href: "/services" }}
        stats={["Columbus, Ohio based", "Dispatch-first service model", "Built for long-term client support"]}
      >
        <div className="soft-card premium-border rounded-[2.25rem] p-6 sm:p-8">
          <p className="eyebrow">What Defines Us</p>
          <div className="mt-5 grid gap-4">
            {[
              "Trust and reliability in every interaction",
              "Operational excellence over empty promises",
              "A long-term growth mindset for client support",
            ].map((item) => (
              <div key={item} className="rounded-[1.35rem] bg-canvas px-4 py-4 text-sm font-medium leading-7 text-ink">
                {item}
              </div>
            ))}
          </div>
        </div>
      </PageHero>

      <SectionShell>
        <SectionIntro
          eyebrow="Foundation"
          title="SiratLink is being built to become a dependable business partner, not just a service vendor."
          description="The positioning is intentionally premium and grounded: clear support, operational discipline, and a client experience that feels established from the start."
          className="mb-10"
        />
        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal>
            <InfoCard
              eyebrow="Mission"
              title="Support clients with dependable service that improves how their business operates."
              description="Our mission is to provide professional support that helps carriers, owner operators, and growing businesses work more efficiently, communicate more clearly, and operate with greater confidence."
            />
          </Reveal>
          <Reveal delay={90}>
            <InfoCard
              eyebrow="Vision"
              title="Grow into a trusted multi-service partner for operations, communication, and digital support."
              description="While dispatching is our current priority, SiratLink is being built to support broader business needs over time, including virtual assistance, web development, digital marketing, digital operations support, and scalable back-office services."
            />
          </Reveal>
        </div>
      </SectionShell>

      <SectionShell className="section-wash">
        <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr]">
          <Reveal>
            <SectionIntro
              eyebrow="Business Philosophy"
              title="Strong operations come from clear systems, respectful communication, and consistent follow-through."
              description="We believe great service should remove friction, not create more of it. That means being organized, answering promptly, handling details carefully, and supporting clients in a way that reflects well on their business every step of the way."
            />
            <p className="mt-5 text-base leading-8 text-slate">
              SiratLink is committed to operational excellence because our clients rely on real outcomes, not just promises. We take a practical, professional approach that values trust, reliability, and measurable support.
            </p>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {values.map((value, index) => (
              <Reveal key={value.title} delay={index * 90}>
                <InfoCard title={value.title} description={value.description} />
              </Reveal>
            ))}
          </div>
        </div>
      </SectionShell>

      <SectionShell>
        <Reveal className="soft-card premium-border rounded-[2.25rem] p-8 lg:p-10">
          <p className="eyebrow">Commitment</p>
          <h2 className="mt-4 font-display text-3xl font-semibold text-ink sm:text-4xl">
            We are committed to reliable client support, professional representation, and steady service improvement.
          </h2>
          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            <div className="rounded-[1.75rem] bg-canvas p-5">
              <h3 className="font-display text-xl font-semibold text-ink">Operational Excellence</h3>
              <p className="mt-3 text-sm leading-7 text-slate">
                Organized workflows, clear next steps, and disciplined execution that help businesses run with more confidence.
              </p>
            </div>
            <div className="rounded-[1.75rem] bg-canvas p-5">
              <h3 className="font-display text-xl font-semibold text-ink">Client Care</h3>
              <p className="mt-3 text-sm leading-7 text-slate">
                Responsive support that keeps people informed, respected, and positioned for better business outcomes.
              </p>
            </div>
            <div className="rounded-[1.75rem] bg-canvas p-5">
              <h3 className="font-display text-xl font-semibold text-ink">Long-Term Growth</h3>
              <p className="mt-3 text-sm leading-7 text-slate">
                A service model designed to scale alongside client needs rather than remaining limited to one narrow task.
              </p>
            </div>
          </div>
        </Reveal>
      </SectionShell>

      <SectionShell className="pt-0">
        <Reveal>
          <ConsultationBand
            eyebrow="Work With SiratLink"
            title="Partner with a service company built around trust, reliability, and operational discipline."
            description="If you want support that feels responsive, organized, and ready for long-term business relationships, book a consultation and let&apos;s talk through the right fit."
          />
        </Reveal>
      </SectionShell>
    </>
  );
}
