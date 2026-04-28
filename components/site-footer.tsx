import Image from "next/image";
import Link from "next/link";

import { footerNav, siteConfig } from "@/lib/site";

export function SiteFooter() {
  const mailingAddressLineOne = [siteConfig.mailingAddress.street1, siteConfig.mailingAddress.street2]
    .filter(Boolean)
    .join(", ");

  const mailingAddressLineTwo = `${siteConfig.mailingAddress.city}, ${siteConfig.mailingAddress.region} ${siteConfig.mailingAddress.postalCode}`;

  return (
    <footer className="border-t border-line bg-brand-navy text-white">
      <div className="mx-auto max-w-7xl px-4 pt-10 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] px-6 py-6 shadow-soft sm:px-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-gold">Start With SiratLink</p>
              <h2 className="mt-3 font-display text-2xl font-semibold text-white sm:text-3xl">
                Premium dispatching and business support built for companies that want dependable execution.
              </h2>
            </div>
            <div className="flex flex-wrap gap-3 text-sm text-white/75">
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">Dispatching</span>
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">Virtual Assistance</span>
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">Web Development</span>
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">Digital Marketing</span>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-14 sm:px-6 lg:grid-cols-[1.1fr_0.6fr_0.6fr_0.6fr] lg:px-8">
        <div>
          <div className="relative h-[8.75rem] w-[8.75rem] overflow-hidden rounded-[1.75rem] border border-white/10 bg-[linear-gradient(180deg,rgba(243,246,248,0.96),rgba(233,238,243,0.9))] shadow-soft ring-1 ring-white/10">
            <Image
              src="/siratlink-logo-transparent-clean.png"
              alt="SiratLink LLC logo"
              fill
              sizes="140px"
              className="object-contain p-3.5"
            />
          </div>
          <p className="mt-6 max-w-md text-sm leading-7 text-white/72">
            SiratLink supports carriers, owner operators, and growth-minded businesses with dependable execution, organized communication, and a premium client experience.
          </p>
          <div className="mt-5 space-y-2 text-sm text-white/80">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/55">Contact</p>
            <p>{siteConfig.location}</p>
            <p>{mailingAddressLineOne}</p>
            <p>{mailingAddressLineTwo}</p>
            <p>
              <a href={siteConfig.phoneHref} className="transition hover:text-white">
                {siteConfig.phone}
              </a>
            </p>
            <p>
              <a href={siteConfig.emailHref} className="transition hover:text-white">
                {siteConfig.email}
              </a>
            </p>
          </div>
        </div>

        <FooterColumn title="Company" links={footerNav.company} />
        <FooterColumn title="Services" links={footerNav.services} />
        <FooterColumn title="Legal" links={footerNav.legal} />
      </div>
      <div className="border-t border-white/10 px-4 py-4 text-center text-sm text-white/60 sm:px-6 lg:px-8">
        © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
      </div>
    </footer>
  );
}

type FooterColumnProps = {
  title: string;
  links: Array<{ label: string; href: string }>;
};

function FooterColumn({ title, links }: FooterColumnProps) {
  return (
    <div>
      <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-white/60">{title}</h2>
      <ul className="mt-5 space-y-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="text-sm text-white/76 transition hover:text-white">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
