import { type ReactNode } from "react";

type SectionIntroProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  action?: ReactNode;
  className?: string;
};

export function SectionIntro({
  eyebrow,
  title,
  description,
  align = "left",
  action,
  className = "",
}: SectionIntroProps) {
  const centered = align === "center";

  return (
    <div
      className={`${centered ? "mx-auto text-center" : ""} ${
        action ? "flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between" : ""
      } ${className}`}
    >
      <div className={centered ? "mx-auto max-w-3xl" : "max-w-3xl"}>
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl">
          {title}
        </h2>
        {description ? (
          <p className="mt-4 max-w-2xl text-base leading-8 text-slate">
            {description}
          </p>
        ) : null}
      </div>
      {action ? <div className={centered ? "mx-auto" : ""}>{action}</div> : null}
    </div>
  );
}
