import { ContactForm } from "@/components/contact-form";
import { ConsultationBand } from "@/components/consultation-band";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { SectionIntro } from "@/components/section-intro";
import { SectionShell } from "@/components/section-shell";
import { buildPageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const metadata = buildPageMetadata({
  title: "Contact",
  description:
    "Contact SiratLink LLC for dispatching services, virtual assistance, web development, digital marketing, and business support consultations.",
  path: "/contact",
  keywords: [
    "contact dispatch company",
    "dispatching consultation",
    "digital marketing services consultation",
    "business support contact",
  ],
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Book a professional consultation for dispatching, business support, or digital growth services."
        description="Whether you need dispatching right away or you are planning for broader support, SiratLink makes it easy to start a serious business conversation with a clear next step."
        primaryCta={{ label: "Book a Consultation", href: "#contact-form" }}
        secondaryCta={{ label: "View Dispatching Services", href: "/dispatching-services" }}
        stats={["Responsive contact experience", "Built for carriers and business clients", "Columbus, Ohio based"]}
      >
        <div className="soft-card premium-border rounded-[2.25rem] p-6 sm:p-8">
          <p className="eyebrow">Reach Out With Confidence</p>
          <div className="mt-5 grid gap-4">
            {[
              "Dispatching inquiries for carriers and owner operators",
              "Virtual assistance and business support conversations",
              "Website and digital marketing support requests",
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
          eyebrow="Start The Conversation"
          title="A polished inquiry experience built to convert serious leads cleanly on every screen size."
          description="The contact page keeps the next step simple: call, email, or submit a detailed request so we can recommend the right service path for your business."
          className="mb-10"
        />
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <div className="rounded-[2.25rem] border border-white/70 bg-brand-navy p-8 text-white shadow-soft">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-gold">Direct Contact</p>
              <h2 className="mt-4 font-display text-3xl font-semibold">Reach SiratLink LLC</h2>
              <p className="mt-4 text-base leading-8 text-white/72">
                Use the form or contact details below to start a professional conversation about your business needs.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href={siteConfig.phoneHref}
                  className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3.5 text-sm font-semibold text-brand-navy transition duration-300 hover:-translate-y-0.5 hover:bg-white/92"
                >
                  Call {siteConfig.phone}
                </a>
                <a
                  href={siteConfig.emailHref}
                  className="inline-flex items-center justify-center rounded-full border border-white/16 bg-white/10 px-5 py-3.5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-white/14"
                >
                  Email Us
                </a>
              </div>
              <div className="mt-8 space-y-5">
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-white/50">Email</p>
                  <p className="mt-2 text-lg font-medium">
                    <a href={siteConfig.emailHref} className="transition hover:text-white/80">
                      {siteConfig.email}
                    </a>
                  </p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-white/50">Phone</p>
                  <p className="mt-2 text-lg font-medium">
                    <a href={siteConfig.phoneHref} className="transition hover:text-white/80">
                      {siteConfig.phone}
                    </a>
                  </p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-white/50">Location</p>
                  <p className="mt-2 text-lg font-medium">{siteConfig.location}</p>
                </div>
              </div>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  "Consultations for owner operators and carriers",
                  "Clear recommendations based on service fit",
                  "Responsive business-first communication",
                  "Digital and operations support discussions",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-[1.25rem] border border-white/10 bg-white/8 px-4 py-4 text-sm leading-7 text-white/76"
                  >
                    {item}
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-[1.75rem] bg-white/8 p-5">
                <p className="text-sm leading-7 text-white/76">
                  Best for trucking carriers, owner operators, and businesses looking for reliable back-office support, virtual assistance, web development, or digital marketing support.
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={90}>
            <div id="contact-form">
              <ContactForm
                title="Request your consultation"
                description="Tell us what kind of support you need, how soon you want to get started, and the best way to reach you."
                submitLabel="Book a Consultation"
              />
            </div>
          </Reveal>
        </div>
      </SectionShell>

      <SectionShell className="pt-0">
        <Reveal>
          <ConsultationBand
            eyebrow="Ready To Talk"
            title="Serious businesses need a clear next step, not friction."
            description="If you are comparing dispatching partners or looking for broader business support, book a consultation and we will help you move forward with confidence."
            primaryLabel="Book a Consultation"
            secondaryLabel={`Call ${siteConfig.phone}`}
          />
        </Reveal>
      </SectionShell>
    </>
  );
}
