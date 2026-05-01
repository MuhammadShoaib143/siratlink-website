"use client";

import { formatCarrierFileSize } from "@/lib/carrier-setup";

type FileUploadCardProps = {
  fileName: string;
  fileSize: number;
  onRemove: () => void;
};

export function FileUploadCard({ fileName, fileSize, onRemove }: FileUploadCardProps) {
  const extension = fileName.includes(".") ? fileName.split(".").pop()?.toUpperCase() : "FILE";

  return (
    <div className="flex items-start justify-between gap-3 rounded-[1.25rem] border border-line bg-white/84 px-4 py-4 shadow-[0_10px_24px_rgba(15,23,42,0.05)]">
      <div className="min-w-0">
        <div className="flex items-center gap-2">
          <span className="inline-flex h-8 min-w-8 items-center justify-center rounded-full bg-accent/10 px-2 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-accent-deep">
            {extension}
          </span>
          <p className="truncate text-sm font-semibold text-ink">{fileName}</p>
        </div>
        <p className="mt-2 text-xs uppercase tracking-[0.16em] text-slate">
          {formatCarrierFileSize(fileSize)}
        </p>
      </div>
      <button
        type="button"
        onClick={onRemove}
        className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line bg-white text-sm font-semibold text-slate transition duration-300 hover:border-accent/35 hover:text-accent"
      >
        ×
      </button>
    </div>
  );
}
