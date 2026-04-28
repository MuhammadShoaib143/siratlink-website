import { ServiceCard } from "@/components/cards";
import { ConsultationBand } from "@/components/consultation-band";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { SectionIntro } from "@/components/section-intro";
import { SectionShell } from "@/components/section-shell";
import { buildPageMetadata } from "@/lib/metadata";
import { secondaryServices } from "@/lib/site";

export const metadata = buildPageMetadata({
  title: "Services",
  description:
    "Explore SiratLink LLC services including dispatching, virtual assistance, web development, digital marketing, and scalable business support.",
  path: "/services",
  keywords: [
    "dispatching services",
    "truck dispatch service",
    "virtual assistance services",
    "web development services",
    "digital marketing services",
    "business support services",
  ],
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Premium business support with dispatching as the clear lead service."
        description="Dispatching remains the primary SiratLink offer, while virtual assistance, web development, and digital marketing support the brand as polished secondary services."
        primaryCta={{ label: "Book a Consultation", href: "/contact" }}
        secondaryCta={{ label: "Explore Dispatching", href: "/dispatching-services" }}
        stats={["Dispatching stays primary", "Secondary services support growth", "Built for premium business positioning"]}
      >
        <div className="soft-card premium-border rounded-[2.25rem] p-6 sm:p-8">
          <p className="eyebrow">Service Structure</p>
          <div className="mt-5 grid gap-4">
            {[
              "Dispatching services for carriers and owner operators",
              "Virtual assistance for recurring operational support",
              "Web development for stronger digital credibility",
              "Digital marketing support for lead generation and visibility",
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
          eyebrow="Core Services"
          title="Dispatching leads the service lineup and stays the clearest conversion path."
          description="The supporting services are positioned to strengthen the SiratLink brand without competing with the primary dispatching offer."
          className="mb-10"
        />
        <div className="grid gap-4 xl:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr]">
          <Reveal>
            <ServiceCard
              title="Dispatching Services"
              description="Our most prominent service. SiratLink supports carriers and owner operators with load searching, rate negotiation, broker communication, route coordination, paperwork support, and daily dispatch management."
              href="/dispatching-services"
              featured
            />
          </Reveal>
          <Reveal delay={90}>
            <ServiceCard
              title="Virtual Assistance"
              description="Professional business support for scheduling, communication, administrative tasks, reporting, data entry, and workflow assistance."
              href="/virtual-assistance"
            />
          </Reveal>
          <Reveal delay={180}>
            <ServiceCard
              title="Web Development"
              description="Modern websites and digital support for businesses that need a more credible online presence and a stronger platform for growth."
              href="/web-development"
            />
          </Reveal>
          <Reveal delay={270}>
            <ServiceCard
              title="Digital Marketing Services"
              description="Social media management, paid advertising support, lead generation, branding support, and content strategy for businesses focused on visibility and growth."
              href="/digital-marketing-services"
            />
          </Reveal>
        </div>
      </SectionShell>

      <SectionShell className="section-wash">
        <Reveal>
          <SectionIntro
            eyebrow="Growth Services"
            title="Secondary services presented with the same premium standard."
            description="These services give growth-minded clients access to broader support while keeping dispatching front and center."
            className="mb-10"
          />
        </Reveal>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {secondaryServices.map((service, index) => (
            <Reveal key={service.title} delay={index * 90}>
              <ServiceCard title={service.title} description={service.description} href={service.href} />
            </Reveal>
          ))}
        </div>
      </SectionShell>

      <SectionShell>
        <Reveal className="soft-card premium-border rounded-[2.25rem] p-8 lg:p-10">
          <p className="eyebrow">Why Clients Choose SiratLink</p>
          <div className="mt-6 grid gap-5 lg:grid-cols-3">
            <div className="rounded-[1.75rem] bg-canvas p-5">
              <h3 className="font-display text-xl font-semibold text-ink">Professional Communication</h3>
              <p className="mt-3 text-sm leading-7 text-slate">
                We prioritize clarity, responsiveness, and communication that strengthens business credibility.
              </p>
            </div>
            <div className="rounded-[1.75rem] bg-canvas p-5">
              <h3 className="font-display text-xl font-semibold text-ink">Scalable Support</h3>
              <p className="mt-3 text-sm leading-7 text-slate">
                The service model is designed to adapt as operational needs grow more complex.
              </p>
            </div>
            <div className="rounded-[1.75rem] bg-canvas p-5">
              <h3 className="font-display text-xl font-semibold text-ink">Business-Focused Execution</h3>
              <p className="mt-3 text-sm leading-7 text-slate">
                Every offer is shaped around saving time, reducing friction, and supporting better execution.
              </p>
            </div>
          </div>
        </Reveal>
      </SectionShell>

      <SectionShell className="pt-0">
        <Reveal>
          <ConsultationBand
            title="Talk with SiratLink about the service mix your business needs today."
            description="Whether you need dispatching immediately or you are planning for broader operational and digital support, we will help you identify the right next step without unnecessary complexity."
          />
        </Reveal>
      </SectionShell>
    </>
  );
}
