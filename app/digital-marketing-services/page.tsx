import { InfoCard, StepCard } from "@/components/cards";
import { ConsultationBand } from "@/components/consultation-band";
import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { SectionIntro } from "@/components/section-intro";
import { SectionShell } from "@/components/section-shell";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata = buildPageMetadata({
  title: "Digital Marketing Services",
  description:
    "Professional digital marketing services for social media management, paid advertising support, lead generation, branding support, and content strategy.",
  path: "/digital-marketing-services",
  keywords: [
    "digital marketing services",
    "social media management",
    "paid advertising support",
    "lead generation services",
    "branding support",
    "content strategy services",
  ],
});

const marketingAreas = [
  {
    title: "Social Media Management",
    description:
      "Consistent planning, posting support, and platform management that helps businesses show up more professionally online.",
  },
  {
    title: "Paid Advertising Support",
    description:
      "Campaign assistance designed to improve visibility, support lead generation, and create a more measurable growth channel.",
  },
  {
    title: "Lead Generation",
    description:
      "Practical support for attracting and capturing qualified inquiries through clearer offers, messaging, and digital touchpoints.",
  },
  {
    title: "Branding Support",
    description:
      "A more aligned presentation across messaging, visuals, and positioning so the business feels more credible to potential clients.",
  },
  {
    title: "Content Strategy",
    description:
      "Content direction shaped around audience trust, business clarity, and the kind of consistency that supports long-term growth.",
  },
  {
    title: "Growth-Minded Execution",
    description:
      "A business-first approach that keeps digital marketing tied to visibility, trust-building, and practical commercial outcomes.",
  },
];

const workflow = [
  {
    step: "01",
    title: "Define the growth priority",
    description: "We identify whether the business needs more visibility, stronger lead flow, better positioning, or more consistent campaign support.",
  },
  {
    step: "02",
    title: "Align the marketing mix",
    description: "Social media, paid support, content direction, and lead generation priorities are shaped around what the business actually needs.",
  },
  {
    step: "03",
    title: "Support clearer growth execution",
    description: "The service stays tied to practical business outcomes like stronger presentation, steadier visibility, and better inquiry quality.",
  },
];

const faqs = [
  {
    title: "Is digital marketing the main SiratLink service?",
    description:
      "No. Dispatching remains the primary SiratLink offer. Digital marketing is available as a secondary growth service for businesses that need it.",
  },
  {
    title: "What kinds of businesses fit this service best?",
    description:
      "Businesses that need better online visibility, clearer positioning, and more consistent lead generation support are the best fit.",
  },
];

export default function DigitalMarketingServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Digital Marketing Services"
        title="Digital marketing support for businesses that want stronger visibility, clearer positioning, and more qualified opportunities."
        description="Digital marketing is presented as a secondary SiratLink service that supports business growth through social media, paid advertising, lead generation, branding support, and content strategy."
        primaryCta={{ label: "Book a Consultation", href: "/contact" }}
        secondaryCta={{ label: "View All Services", href: "/services" }}
        stats={["Secondary growth service", "Lead generation support", "Professional brand presentation"]}
      >
        <div className="soft-card premium-border rounded-[2.25rem] p-6 sm:p-8">
          <p className="eyebrow">Best Fit</p>
          <div className="mt-5 grid gap-4">
            {[
              "Businesses that need stronger lead flow and online visibility",
              "Teams looking for more consistent social and campaign support",
              "Brands preparing to grow with sharper messaging and positioning",
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
            eyebrow="What This Covers"
            title="A modern digital marketing service built to support visibility, trust, and long-term business growth."
            description="It complements the dispatch-first brand while giving clients access to broader growth support."
            className="mb-10"
          />
        </Reveal>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {marketingAreas.map((area, index) => (
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
              eyebrow="Why It Matters"
              title="Digital growth works better when the business presents itself clearly and consistently."
              description="Marketing support should do more than create activity. It should help a business look more established, generate stronger inquiries, and build a more credible presence."
            />
            <p className="mt-5 text-base leading-8 text-slate">
              SiratLink offers digital marketing as a serious growth service for companies that want structured support around visibility, messaging, and lead generation.
            </p>
          </Reveal>
          <Reveal delay={90}>
            <ContactForm
              title="Discuss digital marketing support"
              description="Share what your business needs most right now, from social media support to lead generation and campaign assistance."
              defaultService="Digital Marketing Services"
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
              title="A cleaner strategy path for businesses that need more visibility and better-quality inquiries."
              description="The process is built to stay strategic and business-first instead of drifting into vague marketing language."
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
              title="A few practical questions before starting a growth conversation."
              description="This keeps the page more complete for businesses evaluating digital support."
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
            title="Book a consultation to discuss digital marketing that supports visibility and real business growth."
            description="If your business needs better online positioning, stronger lead flow, or more consistent campaign support, we can help you identify the right next move."
          />
        </Reveal>
      </SectionShell>
    </>
  );
}
