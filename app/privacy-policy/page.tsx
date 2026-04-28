import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { SectionShell } from "@/components/section-shell";
import { buildPageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const metadata = buildPageMetadata({
  title: "Privacy Policy",
  description:
    "Review the SiratLink LLC privacy policy for information about data collection, use, communications, and user rights.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Privacy Policy"
        title="A professional privacy policy framework for a U.S. business website."
        description="This policy is written for a real service business website and includes placeholder business details that should be reviewed with legal counsel before launch."
        stats={["U.S. business website framework", "Placeholder details for review", "Professional launch-ready format"]}
      >
        <div className="soft-card premium-border rounded-[2.25rem] p-6 sm:p-8">
          <p className="eyebrow">Quick Summary</p>
          <div className="mt-5 grid gap-4">
            {[
              "Explains what information the site may collect",
              "Describes how inquiries and communications are handled",
              "Flags placeholder business details for final legal review",
            ].map((item) => (
              <div key={item} className="rounded-[1.35rem] bg-canvas px-4 py-4 text-sm font-medium leading-7 text-ink">
                {item}
              </div>
            ))}
          </div>
        </div>
      </PageHero>

      <SectionShell>
        <Reveal className="soft-card premium-border rounded-[2.25rem] p-8 lg:p-10">
          <article className="max-w-none space-y-5 [&_h2]:pt-3 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:text-ink [&_li]:ml-5 [&_li]:list-disc [&_li]:pl-1 [&_li]:text-slate [&_p]:leading-8 [&_p]:text-slate">
            <p>Effective date: April 19, 2026</p>
            <p>
              {siteConfig.name} (“Company,” “we,” “our,” or “us”) respects your privacy and is committed to protecting the personal information you provide through this website.
            </p>
            <h2>Information We Collect</h2>
            <p>
              We may collect information you voluntarily provide through forms, including your name, email address, phone number, company information, and details related to your service inquiry.
            </p>
            <p>
              We may also collect limited technical information automatically, such as browser type, device information, and general website usage data for analytics, performance, and security purposes.
            </p>
            <h2>How We Use Information</h2>
            <p>We may use collected information to:</p>
            <ul>
              <li>Respond to inquiries and provide requested services</li>
              <li>Communicate about dispatching, business support, or related service opportunities</li>
              <li>Improve website performance, functionality, and user experience</li>
              <li>Maintain website security and prevent misuse</li>
            </ul>
            <h2>Sharing of Information</h2>
            <p>
              We do not sell personal information. We may share information with trusted service providers who support website hosting, communications, analytics, or operational processes, subject to appropriate confidentiality and business-use limitations.
            </p>
            <h2>Cookies and Analytics</h2>
            <p>
              This website may use cookies or similar technologies to support performance, analytics, and user experience improvements. You may adjust your browser settings to manage cookie preferences.
            </p>
            <h2>Data Retention</h2>
            <p>
              We retain information for as long as reasonably necessary to respond to inquiries, provide services, comply with legal obligations, and maintain appropriate business records.
            </p>
            <h2>Your Rights</h2>
            <p>
              Depending on applicable law, you may have the right to request access to, correction of, or deletion of certain personal information. To make a request, please contact us using the business contact information listed on this website.
            </p>
            <h2>Third-Party Links</h2>
            <p>
              This website may contain links to third-party websites. We are not responsible for the privacy practices or content of those external sites.
            </p>
            <h2>Children’s Privacy</h2>
            <p>
              This website is intended for business use and is not directed to children under 13. We do not knowingly collect personal information from children.
            </p>
            <h2>Policy Updates</h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date.
            </p>
            <h2>Contact</h2>
            <p>
              For privacy-related questions, please contact {siteConfig.name} at {siteConfig.email}, {siteConfig.phone}, or {siteConfig.location}.
            </p>
          </article>
        </Reveal>
      </SectionShell>
    </>
  );
}
