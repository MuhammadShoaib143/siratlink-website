import { Reveal } from "@/components/reveal";
import { StepCard } from "@/components/cards";
import { SectionIntro } from "@/components/section-intro";

type SetupProcessSectionProps = {
  eyebrow: string;
  title: string;
  description: string;
  steps: Array<{
    step: string;
    title: string;
    description: string;
  }>;
};

export function SetupProcessSection({
  eyebrow,
  title,
  description,
  steps,
}: SetupProcessSectionProps) {
  return (
    <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
      <Reveal className="lg:sticky lg:top-28">
        <SectionIntro eyebrow={eyebrow} title={title} description={description} />
        <div className="mt-8 rounded-[2rem] bg-brand-navy px-6 py-6 text-white shadow-soft">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-gold">How Review Moves Forward</p>
          <p className="mt-3 text-sm leading-7 text-white/72">
            The setup flow is designed to keep onboarding structured, document intake organized, and next steps obvious for the carrier.
          </p>
        </div>
      </Reveal>

      <div className="grid gap-4">
        {steps.map((item, index) => (
          <Reveal key={item.step} delay={index * 90}>
            <StepCard step={item.step} title={item.title} description={item.description} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}
