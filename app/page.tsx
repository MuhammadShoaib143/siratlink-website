import { ContactForm } from "@/components/contact-form";
import { ConsultationBand } from "@/components/consultation-band";
import { LinkButton } from "@/components/link-button";
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
  "Professional broker communication handled with structure, urgency, and follow-through.",
  "Dispatching support designed for owner operators, fleet owners, and small to mid-sized carriers.",
];

const trustSignals = [
  {
    title: "Columbus, Ohio Based",
    description:
      "SiratLink serves owner operators and trucking carriers from Columbus, Ohio with a professional, U.S.-based support standard.",
  },
  {
    title: "Dispatching Comes First",
    description:
      "Dispatching is the main service, with clear support for load coordination, broker communication, paperwork, and daily execution.",
  },
  {
    title: "Clear Communication",
    description:
      "Carriers need timely updates, organized follow-through, and broker communication that reflects well on their business.",
  },
  {
    title: "Built For Long-Term Support",
    description:
      "As SiratLink grows, clients can also access additional support in virtual assistance, web development, and digital marketing.",
  },
];

const differentiators = [
  "Load opportunities sourced with lane fit, revenue goals, and operational practicality in mind.",
  "Broker-facing communication that helps carriers sound more organized and more credible.",
  "Paperwork and trip coordination support designed to reduce friction throughout the day.",
  "A premium client experience built around responsiveness, clarity, and long-term relationships.",
];

const featuredServiceHighlights = serviceHighlights.slice(0, 4);

const workflow = [
  {
    step: "01",
    title: "Discovery Call",
    description:
      "We learn your truck type, lanes, preferences, and operational goals so the support starts from real business context.",
  },
  {
    step: "02",
    title: "Dispatch Alignment",
    description:
      "SiratLink structures the communication style, dispatch priorities, and day-to-day workflow so expectations stay clear.",
  },
  {
    step: "03",
    title: "Consistent Execution",
    description:
      "The service focuses on reliable dispatch coordination, stronger communication, and daily support that feels calm and professional.",
  },
];

const finalChecklist = [
  "Dispatching support for owner operators and growing carriers",
  "Clear communication and organized day-to-day coordination",
  "Additional business support available as your company grows",
];

export default function HomePage() {
  return (
    <>
      <SectionShell className="relative overflow-hidden pb-12 pt-8 sm:pt-12 lg:pb-20 lg:pt-16">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(15,118,110,0.2),_transparent_34%),radial-gradient(circle_at_top_right,_rgba(212,162,76,0.16),_transparent_20%),linear-gradient(180deg,_rgba(255,255,255,0.28),_transparent)]" />
        <div className="relative grid items-start gap-10 lg:grid-cols-[1.03fr_0.97fr]">
          <Reveal className="relative z-10">
            <div className="glass-strip inline-flex rounded-full px-4 py-2">
              <span className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-accent-deep">
                Columbus, Ohio Based • Premium Dispatching Support
              </span>
            </div>
            <h1 className="mt-6 max-w-5xl font-display text-4xl font-semibold leading-[1.02] text-ink sm:text-5xl lg:text-[4.7rem]">
              Dispatching support for serious carriers who need better loads, stronger communication, and a more dependable daily operation.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate sm:text-[1.1rem]">
              SiratLink LLC helps owner operators, fleet owners, and small to mid-sized trucking carriers operate with more structure, clearer broker communication, and a stronger day-to-day dispatch workflow across the United States.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {heroHighlights.map((item) => (
                <div
                  key={item}
                  className="glass-strip rounded-[1.4rem] px-4 py-4 text-sm leading-7 text-slate"
                >
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
                className="w-full border-white/70 bg-white/80 sm:w-auto"
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
              <a
                href={siteConfig.emailHref}
                className="inline-flex items-center justify-center rounded-full border border-line bg-white/76 px-4 py-3 text-sm font-medium text-ink shadow-[0_12px_26px_rgba(15,23,42,0.05)] transition duration-300 hover:-translate-y-0.5 hover:border-accent/35 hover:text-accent"
              >
                Email {siteConfig.email}
              </a>
            </div>

            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              {[
                "Owner operators",
                "Small and mid-sized carriers",
                "Fleet owners",
              ].map((item) => (
                <span key={item} className="metric-pill text-sm font-medium text-ink">
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {homeStats.map((stat, index) => (
                <Reveal key={stat.label} delay={index * 90}>
                  <div className="soft-card premium-border rounded-[1.8rem] p-5">
                    <p className="font-display text-lg font-semibold text-ink">{stat.value}</p>
                    <p className="mt-2 text-sm leading-6 text-slate">{stat.label}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="relative">
              <div className="absolute -right-6 top-8 hidden h-28 w-28 rounded-full bg-brand-gold/15 blur-3xl lg:block" />
              <div className="absolute -left-8 bottom-20 hidden h-32 w-32 rounded-full bg-accent/15 blur-3xl lg:block" />

              <div className="hero-panel premium-border relative overflow-hidden rounded-[2.4rem] p-5 sm:p-7">
                <div className="grid-dots absolute inset-0 opacity-30" />
                <div className="relative">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="inline-flex items-center gap-2 rounded-full border border-accent/15 bg-white/90 px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-accent-deep">
                      Dispatch Operations View
                    </span>
                    <span className="rounded-full bg-brand-navy px-3 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-white/75">
                      U.S. Based Support
                    </span>
                  </div>

                  <div className="mt-4 rounded-[2rem] bg-brand-navy p-6 text-white shadow-soft">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-sm text-white/60">Today&apos;s Priority</p>
                        <p className="mt-2 font-display text-3xl font-semibold leading-tight">
                          Keep trucks moving with more structure and less friction.
                        </p>
                      </div>
                      <div className="rounded-full border border-white/10 bg-white/10 px-3 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-white/70">
                        Active Support
                      </div>
                    </div>

                    <div className="mt-6 grid gap-4 sm:grid-cols-2">
                      <MetricPanel
                        label="Focus"
                        value="Better loads and cleaner workflow"
                      />
                      <MetricPanel
                        label="Approach"
                        value="Professional broker-facing communication"
                      />
                    </div>
                  </div>

                  <div className="mt-4 grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
                    <div className="animate-float soft-card premium-border rounded-[1.8rem] p-5">
                      <p className="eyebrow">Dispatching Core</p>
                      <div className="mt-4 space-y-4">
                        {[
                          "Load searching aligned to lanes and goals",
                          "Rate negotiation focused on margin protection",
                          "Paperwork support and route coordination",
                        ].map((item) => (
                          <div key={item} className="flex items-start gap-3">
                            <span className="mt-2 h-2.5 w-2.5 rounded-full bg-accent" />
                            <p className="text-sm leading-7 text-slate">{item}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="grid gap-4">
                      <div className="rounded-[1.8rem] border border-line bg-canvas/90 p-5">
                        <p className="eyebrow">Best Fit</p>
                        <p className="mt-4 font-display text-xl font-semibold text-ink">
                          Owner operators and carriers who need dependable daily support.
                        </p>
                      </div>
                      <div className="rounded-[1.8rem] border border-white/10 bg-accent-deep p-5 text-white shadow-soft">
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/65">
                          Additional Services
                        </p>
                        <p className="mt-3 text-sm leading-7 text-white/78">
                          Virtual assistance, web development, and digital marketing are available as secondary services for businesses that need broader support.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 rounded-[1.8rem] border border-white/70 bg-white/88 p-5 shadow-soft">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                      Why Clients Reach Out
                    </p>
                    <p className="mt-3 text-sm leading-7 text-slate">
                      Carriers come to SiratLink when they need dependable support, stronger communication, and a more organized dispatch process.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </SectionShell>

      <SectionShell className="pt-4">
        <Reveal>
          <div className="glass-strip rounded-[2rem] px-5 py-6 sm:px-6">
            <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <SectionIntro
                eyebrow="Why SiratLink"
                title="Support built around professionalism, responsiveness, and day-to-day reliability."
                description={`${siteConfig.shortName} helps carriers stay organized, communicate more clearly, and run with more confidence across daily dispatch operations.`}
              />
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  "Professional broker communication",
                  "U.S.-based business positioning",
                  "Clear dispatch workflow support",
                  "Long-term growth mindset",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-[1.25rem] bg-white/75 px-4 py-4 text-sm font-medium text-ink shadow-[0_12px_24px_rgba(15,23,42,0.05)]"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {trustSignals.map((signal, index) => (
            <Reveal key={signal.title} delay={index * 80}>
              <TrustCard title={signal.title} description={signal.description} />
            </Reveal>
          ))}
        </div>
      </SectionShell>

      <SectionShell className="section-wash">
        <div className="relative">
          <SectionIntro
            eyebrow="Dispatching Services"
            title="Dispatching is the core service and the clearest place to get started with SiratLink."
            description="We focus on the dispatch work that matters most to carriers: better loads, professional communication, cleaner coordination, and dependable support."
            action={
              <LinkButton href="/dispatching-services" variant="secondary">
                View Full Dispatching Page
              </LinkButton>
            }
          />

          <div className="mt-10 grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
            <Reveal>
              <div className="overflow-hidden rounded-[2.2rem] bg-brand-navy p-6 text-white shadow-soft sm:p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-gold">
                  Dispatching Services
                </p>
                <h2 className="mt-4 font-display text-3xl font-semibold sm:text-[2.6rem]">
                  Dispatching support that helps carriers stay profitable, responsive, and organized.
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-8 text-white/74">
                  SiratLink focuses on the practical parts of dispatching that directly affect how a carrier operates: load sourcing, communication, coordination, and day-to-day execution.
                </p>

                <div className="mt-7 grid gap-3 sm:grid-cols-2">
                  {differentiators.map((item) => (
                    <div
                      key={item}
                      className="rounded-[1.45rem] border border-white/10 bg-white/6 px-4 py-4 text-sm leading-7 text-white/80"
                    >
                      {item}
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
              <Reveal delay={featuredServiceHighlights.length * 70}>
                <div className="soft-card premium-border rounded-[1.8rem] p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                    Also Included
                  </p>
                  <p className="mt-3 text-sm leading-7 text-slate">
                    Route coordination and paperwork support remain part of the dispatching offer, with the full scope available on the dedicated service page.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </SectionShell>

      <SectionShell className="pt-0">
        <Reveal>
          <ConsultationBand
            eyebrow="Book A Consultation"
            title="Talk with SiratLink about dispatch support that fits your operation."
            description="If you need help with loads, broker communication, or daily coordination, we can talk through what support makes the most sense for your business."
          />
        </Reveal>
      </SectionShell>

      <SectionShell>
        <div className="grid gap-8 lg:grid-cols-[0.96fr_1.04fr] lg:items-start">
          <Reveal>
            <SectionIntro
              eyebrow="Why Carriers Choose SiratLink"
              title="The goal is simple: help carriers operate with more consistency and less daily friction."
              description="SiratLink focuses on the practical things that make a real difference to carriers: communication, coordination, responsiveness, and reliable follow-through."
            />

            <div className="mt-8 space-y-4">
              {[
                "Broker communication handled in a more professional and organized way.",
                "Dependable follow-through that helps loads move with less confusion.",
                "A cleaner workflow around paperwork, coordination, and execution.",
                "Support that helps owner operators and carriers protect time and stay focused on the road.",
              ].map((item) => (
                <div
                  key={item}
                  className="soft-card premium-border flex items-start gap-3 rounded-[1.6rem] px-5 py-5"
                >
                  <span className="mt-2 h-2.5 w-2.5 rounded-full bg-accent" />
                  <p className="text-sm leading-7 text-slate">{item}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            <Reveal>
              <FeaturedInsight
                eyebrow="Professional Support"
                title="Reliable communication helps carriers protect relationships and stay on schedule."
                description="From broker updates to trip coordination, consistent communication reduces friction and helps the business run more smoothly."
              />
            </Reveal>
            <Reveal delay={90}>
              <FeaturedInsight
                eyebrow="Operational Focus"
                title="Better organization leads to fewer delays, less confusion, and more productive days."
                description="SiratLink brings structure to the dispatch process so carriers can stay focused on execution instead of chasing details."
              />
            </Reveal>
            <Reveal delay={180} className="sm:col-span-2">
              <div className="overflow-hidden rounded-[2rem] bg-accent-deep p-6 text-white shadow-soft sm:p-7">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/70">Good Fit</p>
                <p className="mt-4 font-display text-2xl font-semibold sm:text-3xl">
                  A strong fit for owner operators, small carriers, and fleets that want dependable dispatch support without unnecessary complications.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </SectionShell>

      <SectionShell className="bg-white/55">
        <Reveal>
          <SectionIntro
            eyebrow="How It Works"
            title="A clearer three-step process for getting started."
            align="center"
            description="This keeps the conversion path simple for busy operators while still sounding premium and operationally grounded."
            className="mb-10"
          />
        </Reveal>

        <div className="grid gap-4 lg:grid-cols-3">
          {workflow.map((item, index) => (
            <Reveal key={item.step} delay={index * 90}>
              <div className="soft-card premium-border rounded-[2rem] p-6">
                <div className="inline-flex rounded-full bg-accent-soft px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-accent-deep">
                  Step {item.step}
                </div>
                <h3 className="mt-5 font-display text-2xl font-semibold text-ink">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </SectionShell>

      <SectionShell>
        <SectionIntro
          eyebrow="Additional Services"
          title="SiratLink also offers business support services beyond dispatching."
          description="These services are secondary to dispatching, but they give clients access to broader support as their business needs grow."
          className="mb-10"
        />

        <div className="grid gap-4 lg:grid-cols-3">
          {secondaryServices.map((service, index) => (
            <Reveal key={service.title} delay={index * 90}>
              <FutureServiceCard
                title={service.title}
                description={service.description}
                href={service.href}
                featured={service.title === "Virtual Assistance"}
              />
            </Reveal>
          ))}
        </div>
      </SectionShell>

      <SectionShell className="section-wash">
        <div className="relative">
          <SectionIntro
            eyebrow="Client Feedback"
            title="Realistic client feedback built around trust, consistency, and communication."
            description="These testimonials reflect the kind of support carriers expect when they are trusting someone with a critical part of daily operations."
            className="mb-10"
          />

          <div className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
            <Reveal>
              <div className="overflow-hidden rounded-[2.1rem] bg-brand-navy p-6 text-white shadow-soft sm:p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-gold">
                  Reputation Matters
                </p>
                <h3 className="mt-4 font-display text-3xl font-semibold">
                  Carriers want support that makes the business feel more composed, not more chaotic.
                </h3>
                <p className="mt-5 text-base leading-8 text-white/74">
                  Clear communication, steady follow-through, and organized execution are what make dispatch support worth trusting.
                </p>
              </div>
            </Reveal>

            <div className="grid gap-4 md:grid-cols-2">
              {testimonials.map((testimonial, index) => (
                <Reveal
                  key={testimonial.name}
                  delay={index * 90}
                  className={index === 2 ? "md:col-span-2" : ""}
                >
                  <TestimonialCard {...testimonial} />
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </SectionShell>

      <SectionShell>
        <Reveal>
          <div className="spot-grid overflow-hidden rounded-[2.35rem] bg-brand-navy px-6 py-8 text-white shadow-soft sm:px-8 lg:px-10 lg:py-10">
            <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-gold">
                  Get Started
                </p>
                <h2 className="mt-4 font-display text-3xl font-semibold sm:text-4xl">
                  Start with a consultation and see how SiratLink can support your operation with more structure and less friction.
                </h2>
                <p className="mt-5 max-w-xl text-base leading-8 text-white/74">
                  Tell us about your lanes, dispatch needs, or broader business support goals, and we&apos;ll help you identify the right next step.
                </p>

                <div className="mt-6 space-y-3">
                  {finalChecklist.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 rounded-[1.35rem] border border-white/10 bg-white/6 px-4 py-4 text-sm leading-7 text-white/80"
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
                description="Use this homepage form to capture serious inquiries from carriers, owner operators, and future support clients."
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

function TrustCard({
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
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Dispatching Highlight
          </p>
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

function FeaturedInsight({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="soft-card premium-border rounded-[2rem] p-6">
      <p className="eyebrow">{eyebrow}</p>
      <h3 className="mt-4 font-display text-2xl font-semibold text-ink">{title}</h3>
      <p className="mt-4 text-sm leading-7 text-slate">{description}</p>
    </div>
  );
}

function FutureServiceCard({
  title,
  description,
  href,
  featured = false,
}: {
  title: string;
  description: string;
  href: string;
  featured?: boolean;
}) {
  return (
    <div
      className={`rounded-[2rem] p-6 transition duration-300 hover:-translate-y-1 ${
        featured
          ? "border border-accent/15 bg-accent-deep text-white shadow-soft"
          : "soft-card premium-border text-ink"
      }`}
    >
      <p
        className={`text-xs font-semibold uppercase tracking-[0.2em] ${
          featured ? "text-white/65" : "text-accent"
        }`}
      >
        Additional Service
      </p>
      <h3 className="mt-4 font-display text-2xl font-semibold">{title}</h3>
      <p className={`mt-4 text-sm leading-7 ${featured ? "text-white/78" : "text-slate"}`}>
        {description}
      </p>
      <div className="mt-6">
        <LinkButton
          href={href}
          variant={featured ? "secondary" : "secondary"}
          className={
            featured
              ? "border-white/20 bg-white/10 text-white hover:bg-white/14 hover:text-white"
              : ""
          }
        >
          Learn More
        </LinkButton>
      </div>
    </div>
  );
}
