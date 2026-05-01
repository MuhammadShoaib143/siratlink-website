import { CarrierSetupForm } from "@/components/carrier-setup-form";
import { ConsultationBand } from "@/components/consultation-band";
import { LinkButton } from "@/components/link-button";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { SectionIntro } from "@/components/section-intro";
import { SectionShell } from "@/components/section-shell";
import { SetupProcessSection } from "@/components/setup-process-section";
import { UploadChecklist } from "@/components/upload-checklist";
import { buildPageMetadata } from "@/lib/metadata";
import {
  carrierSetupChecklistSections,
  carrierSetupDocumentCategories,
  carrierSetupProcessSteps,
} from "@/lib/carrier-setup";
import { siteConfig } from "@/lib/site";

export const metadata = buildPageMetadata({
  title: "Carrier Setup",
  description:
    "Start carrier setup with SiratLink LLC by submitting dispatch onboarding details and any available carrier documents through a secure, professional review flow.",
  path: "/carrier-setup",
  keywords: [
    "carrier setup",
    "dispatch onboarding",
    "truck dispatch setup",
    "carrier document upload",
    "owner operator dispatch setup",
  ],
});

const heroTrust = [
  "Documents used only for setup review",
  "Built for owner operators and fleets",
  "Dispatch onboarding support",
];

export default function CarrierSetupPage() {
  return (
    <>
      <PageHero
        eyebrow="Carrier Setup"
        title="Start Your Carrier Setup"
        description="Submit your carrier information and documents securely so our team can review your setup and contact you with the next steps."
        primaryCta={{ label: "Begin Setup", href: "#carrier-setup-form" }}
        secondaryCta={{ label: "Call Now", href: siteConfig.phoneHref }}
        stats={heroTrust}
      >
        <div className="soft-card premium-border surface-outline rounded-[2.25rem] p-6 sm:p-8">
          <p className="eyebrow">Before You Upload</p>
          <div className="mt-5 grid gap-4">
            {[
              "Carrier information should match the company details your team uses operationally.",
              "Upload only the documents needed for setup review and dispatch onboarding.",
              "If something is missing, our team will follow up with the clearest next step.",
            ].map((item) => (
              <div key={item} className="rounded-[1.35rem] bg-canvas px-4 py-4 text-sm font-medium leading-7 text-ink">
                {item}
              </div>
            ))}
          </div>
          <p className="mt-5 text-sm leading-7 text-slate">
            Your documents are used only for setup review and dispatch onboarding.
          </p>
        </div>
      </PageHero>

      <SectionShell className="section-wash">
        <Reveal>
          <SectionIntro
            eyebrow="Setup Checklist"
            title="A cleaner onboarding flow starts with the right details and the right documents."
            description="Use this checklist to make sure your carrier setup request includes the company details our dispatch team expects before review starts. If some documents are still missing, you can still submit your setup."
            action={
              <LinkButton href="#carrier-setup-form" variant="secondary">
                Upload Documents
              </LinkButton>
            }
            className="mb-10"
          />
        </Reveal>
        <Reveal delay={90}>
          <UploadChecklist sections={carrierSetupChecklistSections} />
        </Reveal>
      </SectionShell>

      <SectionShell>
        <SetupProcessSection
          eyebrow="How Setup Review Works"
          title="A step-by-step carrier onboarding flow that keeps document review clear and professional."
          description="The goal is to help carriers submit what matters, avoid unnecessary back-and-forth, and move into dispatch onboarding with a cleaner process."
          steps={carrierSetupProcessSteps}
        />
      </SectionShell>

      <SectionShell className="section-wash">
        <div className="grid gap-8 lg:grid-cols-[0.86fr_1.14fr]">
          <Reveal>
            <SectionIntro
              eyebrow="Setup Documents"
              title="The upload area is grouped to keep onboarding simple instead of overwhelming."
              description="Each document category accepts multiple files and is organized so carriers can submit what they have now and let our team follow up for anything else."
            />
            <div className="mt-8 grid gap-3">
              {carrierSetupDocumentCategories.slice(0, 5).map((category) => (
                <div
                  key={category.id}
                  className="rounded-[1.35rem] border border-line bg-white/84 px-4 py-4 text-sm leading-7 text-slate shadow-[0_10px_24px_rgba(15,23,42,0.04)]"
                >
                  <p className="font-semibold text-ink">{category.label}</p>
                  <p className="mt-1">{category.description}</p>
                </div>
              ))}
              <div className="rounded-[1.35rem] border border-accent/14 bg-accent/[0.06] px-4 py-4 text-sm leading-7 text-slate shadow-[0_10px_24px_rgba(15,118,110,0.06)]">
                <p className="font-semibold text-ink">Dispatch Agreement</p>
                <p className="mt-1">
                  You do not need to upload a dispatch agreement here. If your carrier setup is approved, SiratLink will send the agreement directly for review and signature.
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={90}>
            <CarrierSetupForm />
          </Reveal>
        </div>
      </SectionShell>

      <SectionShell className="pt-0">
        <Reveal>
          <ConsultationBand
            eyebrow="Need Help First?"
            title="Ready to get set up? Submit your carrier documents securely through our website."
            description="If you want to talk through fit before uploading everything, call SiratLink first. If you already know you want dispatch support, start your carrier setup now."
            primaryLabel="Start Carrier Setup"
            primaryHref="/carrier-setup#carrier-setup-form"
            secondaryLabel={`Call ${siteConfig.phone}`}
            points={[
              "Built for carrier onboarding and dispatch review",
              "Professional intake flow for serious operators",
              "Clear next-step follow-up from our team",
            ]}
          />
        </Reveal>
      </SectionShell>
    </>
  );
}
