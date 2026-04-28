import { type ReactNode } from "react";

type SectionShellProps = {
  id?: string;
  children: ReactNode;
  className?: string;
};

export function SectionShell({ id, children, className = "" }: SectionShellProps) {
  return (
    <section id={id} className={`px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-24 ${className}`}>
      <div className="mx-auto w-full max-w-7xl">{children}</div>
    </section>
  );
}
