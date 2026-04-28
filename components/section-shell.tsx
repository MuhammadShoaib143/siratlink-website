import { type ReactNode } from "react";

type SectionShellProps = {
  id?: string;
  children: ReactNode;
  className?: string;
};

export function SectionShell({ id, children, className = "" }: SectionShellProps) {
  return (
    <section id={id} className={`px-[var(--page-gutter)] py-[var(--section-space)] ${className}`}>
      <div className="mx-auto w-full max-w-7xl">{children}</div>
    </section>
  );
}
