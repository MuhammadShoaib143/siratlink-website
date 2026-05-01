import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { SectionShell } from "@/components/section-shell";
import { buildPageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const metadata = buildPageMetadata({
  title: "Terms and Conditions",
  description:
    "Review the SiratLink LLC terms and conditions for website use, service inquiries, disclaimers, and limitations of liability.",
  path: "/terms-and-conditions",
});

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Terms and Conditions"
        title="Terms for using the SiratLink LLC website and service inquiry pages."
        description="Review the terms that govern use of the SiratLink LLC website, service inquiries, and related business communications."
        stats={["Professional website use terms", "Ohio governing law", "Service inquiry and disclaimer coverage"]}
      >
        <div className="soft-card premium-border rounded-[2.25rem] p-6 sm:p-8">
          <p className="eyebrow">Quick Summary</p>
          <div className="mt-5 grid gap-4">
            {[
              "Covers website use, inquiries, and service disclaimers",
              "Clarifies that a form submission does not create a client relationship",
              "Outlines limitations, liabilities, and governing law",
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
              These Terms and Conditions (“Terms”) govern your use of the website operated by {siteConfig.name} (“Company,” “we,” “our,” or “us”). By accessing or using this website, you agree to these Terms.
            </p>
            <h2>Website Use</h2>
            <p>
              You agree to use this website only for lawful purposes and in a manner that does not interfere with the operation, security, or accessibility of the site.
            </p>
            <h2>Service Information</h2>
            <p>
              Information on this website is provided for general business and marketing purposes. Submission of a contact form or inquiry does not create a client relationship unless and until both parties agree to specific services in writing.
            </p>
            <h2>Intellectual Property</h2>
            <p>
              All website content, including text, layout, branding, graphics, and design elements, is the property of {siteConfig.name} unless otherwise stated. Unauthorized copying, distribution, or reuse is prohibited.
            </p>
            <h2>No Guarantee of Results</h2>
            <p>
              While we strive to provide reliable and professional support, we do not guarantee specific business, financial, or operational outcomes from use of our website or services.
            </p>
            <h2>Third-Party Services</h2>
            <p>
              Our website may reference or link to third-party platforms, brokers, tools, or service providers. We are not responsible for third-party content, terms, or performance.
            </p>
            <h2>Disclaimer</h2>
            <p>
              This website is provided on an “as is” and “as available” basis without warranties of any kind, whether express or implied, to the fullest extent permitted by law.
            </p>
            <h2>Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by applicable law, {siteConfig.name} shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from or related to use of this website.
            </p>
            <h2>Indemnification</h2>
            <p>
              You agree to indemnify and hold harmless {siteConfig.name} from claims, losses, or liabilities arising out of your misuse of the website or violation of these Terms.
            </p>
            <h2>Governing Law</h2>
            <p>
              These Terms shall be governed by the laws of the State of Ohio, without regard to conflict of law principles.
            </p>
            <h2>Changes to Terms</h2>
            <p>
              We may update these Terms from time to time. Changes will be effective when posted on this page with an updated effective date.
            </p>
            <h2>Contact</h2>
            <p>
              For questions about these Terms, please contact {siteConfig.name} at {siteConfig.email}, {siteConfig.phone}, or {siteConfig.location}.
            </p>
          </article>
        </Reveal>
      </SectionShell>
    </>
  );
}
