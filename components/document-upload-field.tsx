"use client";

import { useId, useRef, useState } from "react";

import { FileUploadCard } from "@/components/file-upload-card";
import { carrierUploadAccept, type CarrierDocumentCategory } from "@/lib/carrier-setup";

export type SelectedCarrierFile = {
  id: string;
  file: File;
};

type DocumentUploadFieldProps = {
  category: CarrierDocumentCategory;
  files: SelectedCarrierFile[];
  onAddFiles: (categoryId: string, files: File[]) => void;
  onRemoveFile: (categoryId: string, fileId: string) => void;
  disabled?: boolean;
};

export function DocumentUploadField({
  category,
  files,
  onAddFiles,
  onRemoveFile,
  disabled = false,
}: DocumentUploadFieldProps) {
  const inputId = useId();
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [dragActive, setDragActive] = useState(false);

  function handleFiles(fileList: FileList | null) {
    if (!fileList) {
      return;
    }

    const nextFiles = Array.from(fileList);
    onAddFiles(category.id, nextFiles);
  }

  return (
    <div
      className="soft-card premium-border surface-outline rounded-[1.75rem] p-5 transition duration-300"
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">{category.label}</p>
            <span className="rounded-full bg-brand-navy/[0.06] px-2.5 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-slate">
              Optional
            </span>
          </div>
          <p className="mt-2 text-sm leading-7 text-slate">{category.description}</p>
        </div>
        <div className="rounded-full border border-accent/12 bg-accent/5 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-accent-deep">
          {files.length} file{files.length === 1 ? "" : "s"}
        </div>
      </div>

      <input
        id={inputId}
        ref={inputRef}
        type="file"
        multiple
        accept={carrierUploadAccept}
        className="hidden"
        onChange={(event) => {
          handleFiles(event.target.files);
          event.currentTarget.value = "";
        }}
        disabled={disabled}
      />

      <div
        role="button"
        tabIndex={0}
        onClick={() => inputRef.current?.click()}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            inputRef.current?.click();
          }
        }}
        onDragOver={(event) => {
          event.preventDefault();
          if (!disabled) {
            setDragActive(true);
          }
        }}
        onDragLeave={(event) => {
          event.preventDefault();
          setDragActive(false);
        }}
        onDrop={(event) => {
          event.preventDefault();
          setDragActive(false);
          if (!disabled) {
            handleFiles(event.dataTransfer.files);
          }
        }}
        className={`mt-5 rounded-[1.5rem] border border-dashed px-4 py-5 text-left transition duration-300 ${
          dragActive
            ? "border-accent bg-accent/6 shadow-[0_14px_28px_rgba(15,118,110,0.08)]"
            : "border-line bg-white/74 hover:border-accent/35 hover:bg-white/84"
        } ${disabled ? "cursor-not-allowed opacity-70" : "cursor-pointer"}`}
      >
        <div className="flex items-start gap-4">
          <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-brand-navy text-lg text-white shadow-[0_10px_24px_rgba(15,23,42,0.12)]">
            ↑
          </div>
          <div>
            <p className="text-sm font-semibold text-ink">Drag files here or click to browse</p>
            <p className="mt-2 text-sm leading-7 text-slate">
              PDF, JPG, PNG, DOC, and DOCX accepted. Upload only the documents needed for dispatch onboarding review.
            </p>
          </div>
        </div>
      </div>

      {files.length ? (
        <div className="mt-4 grid gap-3">
          {files.map((item) => (
            <FileUploadCard
              key={item.id}
              fileName={item.file.name}
              fileSize={item.file.size}
              onRemove={() => onRemoveFile(category.id, item.id)}
            />
          ))}
        </div>
      ) : (
        <p className="mt-4 text-sm leading-7 text-slate">No files added yet for this category.</p>
      )}
    </div>
  );
}
