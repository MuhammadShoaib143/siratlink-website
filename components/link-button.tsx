import Link from "next/link";
import { type ReactNode } from "react";

type LinkButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

const variantClasses: Record<NonNullable<LinkButtonProps["variant"]>, string> = {
  primary:
    "group bg-[linear-gradient(135deg,#0f766e,#115e59)] text-white shadow-lift ring-1 ring-accent/10 shadow-[0_16px_34px_rgba(15,118,110,0.18)] hover:-translate-y-0.5 hover:shadow-[0_20px_42px_rgba(15,118,110,0.24)]",
  secondary:
    "group border border-line bg-white/92 text-ink shadow-[0_12px_26px_rgba(15,23,42,0.06)] hover:-translate-y-0.5 hover:border-accent/35 hover:bg-white hover:text-accent",
  ghost:
    "group text-ink hover:bg-white/80 hover:text-accent",
};

export function LinkButton({
  href,
  children,
  variant = "primary",
  className = "",
}: LinkButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-5 py-3.5 text-sm font-semibold tracking-[0.01em] transition duration-300 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-accent/15 sm:px-6 ${variantClasses[variant]} ${className}`}
    >
      {children}
      <span aria-hidden="true" className="text-base transition-transform duration-300 group-hover:translate-x-0.5">
        →
      </span>
    </Link>
  );
}
