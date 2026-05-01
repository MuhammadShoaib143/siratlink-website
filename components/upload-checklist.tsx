type UploadChecklistProps = {
  sections: Array<{
    title: string;
    items: string[];
  }>;
};

export function UploadChecklist({ sections }: UploadChecklistProps) {
  return (
    <div className="grid gap-4 lg:grid-cols-3">
      {sections.map((section) => (
        <div key={section.title} className="soft-card premium-border surface-outline rounded-[1.9rem] p-5 sm:p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">{section.title}</p>
          <div className="mt-4 space-y-3">
            {section.items.map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-[1.15rem] bg-white/72 px-4 py-3">
                <span className="mt-1.5 inline-flex h-2.5 w-2.5 shrink-0 rounded-full bg-accent" />
                <p className="text-sm leading-7 text-slate">{item}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
