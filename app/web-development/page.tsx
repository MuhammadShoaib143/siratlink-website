import { InfoCard } from "@/components/cards";
import { ConsultationBand } from "@/components/consultation-band";
import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { SectionIntro } from "@/components/section-intro";
import { SectionShell } from "@/components/section-shell";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata = buildPageMetadata({
  title: "Web Development",
  description:
    "Professional web development services for responsive websites, modern design, stronger business presence, and digital growth.",
  path: "/web-development",
  keywords: [
    "web development services",
    "responsive websites",
    "business website design",
  ],
});

const offerings = [
  {
    title: "Responsive Websites",
    description:
      "Modern websites designed to look polished and trustworthy across phones, tablets, laptops, and large screens.",
  },
  {
    title: "Modern Design Direction",
    description:
      "A premium visual approach that helps businesses look established, clear, and ready for serious clients.",
  },
  {
    title: "Business Presence",
    description:
      "Web experiences built to strengthen credibility, explain services clearly, and support real conversions.",
  },
  {
    title: "Digital Support",
    description:
      "Broader website and online support that helps businesses improve structure, messaging, and presentation.",
  },
  {
    title: "Growth-Focused Strategy",
    description:
      "A future-ready approach that aligns digital presence with sales, trust-building, and operational scale.",
  },
  {
    title: "Maintainable Execution",
    description:
      "Clean, structured builds intended to be easier to manage, evolve, and build on over time.",
  },
];

export default function WebDevelopmentPage() {
  return (
    <>
      <PageHero
        eyebrow="Web Development"
        title="Premium websites and digital support for businesses that want to look more credible and grow online with confidence."
        description="SiratLink is positioned to support businesses with modern website development, responsive design, and a stronger digital presence that reflects the quality of their work."
        primaryCta={{ label: "Discuss a Website Project", href: "/contact" }}
        secondaryCta={{ label: "Explore Services", href: "/services" }}
        stats={["Responsive modern websites", "Premium business presence", "Future-focused digital support"]}
      >
        <div className="soft-card premium-border rounded-[2.25rem] p-6 sm:p-8">
          <p className="eyebrow">Best Fit</p>
          <div className="mt-5 grid gap-4">
            {[
              "Businesses that need a more credible online presence",
              "Service companies that want clearer messaging and stronger trust",
              "Growth-minded brands preparing for digital expansion",
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
            eyebrow="What This Service Covers"
            title="Web support built for modern business presentation, responsiveness, and long-term value."
            description="The service is framed as premium, strategic, and practical for businesses that care about how they show up online."
            className="mb-10"
          />
        </Reveal>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {offerings.map((offering, index) => (
            <Reveal key={offering.title} delay={index * 70}>
              <InfoCard title={offering.title} description={offering.description} />
            </Reveal>
          ))}
        </div>
      </SectionShell>

      <SectionShell className="section-wash">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <SectionIntro
              eyebrow="Future-Focused Positioning"
              title="A strong website helps a business look established before a conversation even begins."
              description="Businesses increasingly need a digital presence that communicates credibility, clarity, and quality. SiratLink’s web development direction is designed to help clients present themselves better."
            />
            <p className="mt-5 text-base leading-8 text-slate">
              This service is positioned as premium, modern, and practical for companies that want their online presence to match the professionalism of their business.
            </p>
          </Reveal>
          <Reveal delay={90}>
            <ContactForm
              title="Start a web development conversation"
              description="Use this form to capture future website and digital support inquiries with a clean, premium lead experience."
              defaultService="Web Development"
              submitLabel="Book a Consultation"
            />
          </Reveal>
        </div>
      </SectionShell>

      <SectionShell className="pt-0">
        <Reveal>
          <ConsultationBand
            title="Discuss a website project that helps your business look more credible and convert more clearly."
            description="From modern responsive websites to broader digital support, SiratLink can help you create a stronger online presence with a professional, business-first approach."
          />
        </Reveal>
      </SectionShell>
    </>
  );
}
