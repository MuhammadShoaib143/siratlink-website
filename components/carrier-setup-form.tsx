"use client";

import { FormEvent, useMemo, useState } from "react";
import Link from "next/link";

import { DocumentUploadField, type SelectedCarrierFile } from "@/components/document-upload-field";
import {
  carrierSetupDocumentCategories,
  formatCarrierFileSize,
  isAllowedCarrierFile,
  maxCarrierUploadBundleBytes,
  maxCarrierUploadSizeBytes,
} from "@/lib/carrier-setup";

type SubmissionState =
  | { status: "idle"; message: string }
  | { status: "submitting"; message: string }
  | { status: "success"; message: string }
  | { status: "error"; message: string };

const trackerSteps = [
  "Carrier information",
  "Equipment details",
  "Documents if ready",
  "Review and submit",
];

const inputClasses =
  "w-full rounded-2xl border border-line bg-canvas/78 px-4 py-3 text-sm text-ink outline-none transition placeholder:text-slate/60 focus:border-accent focus:bg-white focus:ring-4 focus:ring-accent/10";

export function CarrierSetupForm() {
  const [uploads, setUploads] = useState<Record<string, SelectedCarrierFile[]>>({});
  const [state, setState] = useState<SubmissionState>({
    status: "idle",
    message: "Submit your information and documents through the secure onboarding intake when you are ready.",
  });
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const totalFiles = useMemo(
    () => Object.values(uploads).reduce((count, entries) => count + entries.length, 0),
    [uploads],
  );
  const totalUploadBytes = useMemo(
    () =>
      Object.values(uploads).reduce(
        (total, entries) => total + entries.reduce((entryTotal, item) => entryTotal + item.file.size, 0),
        0,
      ),
    [uploads],
  );

  function addFiles(categoryId: string, files: File[]) {
    const acceptedFiles: SelectedCarrierFile[] = [];
    const errors: string[] = [];

    files.forEach((file) => {
      if (!isAllowedCarrierFile({ fileName: file.name, mimeType: file.type })) {
        errors.push(`${file.name} is not a supported file type.`);
        return;
      }

      if (file.size > maxCarrierUploadSizeBytes) {
        errors.push(`${file.name} is larger than the 10 MB upload limit.`);
        return;
      }

      acceptedFiles.push({
        id:
          typeof crypto !== "undefined" && "randomUUID" in crypto
            ? crypto.randomUUID()
            : `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`,
        file,
      });
    });

    if (acceptedFiles.length) {
      setUploads((current) => ({
        ...current,
        [categoryId]: [...(current[categoryId] ?? []), ...acceptedFiles],
      }));
    }

    if (errors.length) {
      setState({
        status: "error",
        message: errors[0],
      });
    } else if (state.status === "error") {
      setState({
        status: "idle",
        message: "Submit your information and documents through the secure onboarding intake when you are ready.",
      });
    }
  }

  function removeFile(categoryId: string, fileId: string) {
    setUploads((current) => ({
      ...current,
      [categoryId]: (current[categoryId] ?? []).filter((item) => item.id !== fileId),
    }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    if (totalUploadBytes > maxCarrierUploadBundleBytes) {
      setState({
        status: "error",
        message: `The total upload package is too large. Please keep the combined file size under ${formatCarrierFileSize(
          maxCarrierUploadBundleBytes,
        )} or submit fewer files at once.`,
      });
      return;
    }

    Object.entries(uploads).forEach(([categoryId, files]) => {
      files.forEach((entry) => {
        formData.append(`documents.${categoryId}`, entry.file, entry.file.name);
      });
    });

    setState({
      status: "submitting",
      message: "Preparing carrier details and document uploads for secure setup review...",
    });

    try {
      const response = await fetch("/api/carrier-setup", {
        method: "POST",
        body: formData,
      });

      const data = (await response.json().catch(() => null)) as { message?: string } | null;

      if (!response.ok) {
        throw new Error(
          data?.message ??
            "Carrier setup could not be processed right now. Please try again with fewer or smaller files, or contact SiratLink directly for setup support.",
        );
      }

      form.reset();
      setUploads({});
      setState({
        status: "success",
        message:
          data?.message ??
          "Thank you. Your carrier setup information has been submitted. Our team will review your documents and contact you with the next steps.",
      });
      setShowSuccessModal(true);
    } catch (error) {
      setState({
        status: "error",
        message:
          error instanceof Error
            ? error.message
            : "Carrier setup could not be submitted. Please try again after the secure intake connection is configured.",
      });
    }
  }

  return (
    <div
      id="carrier-setup-form"
      className="soft-card premium-border surface-outline scroll-mt-32 rounded-[2.35rem] p-6 sm:scroll-mt-36 sm:p-8 lg:scroll-mt-40 lg:p-9"
    >
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-3xl">
          <p className="eyebrow">Carrier Information + Documents</p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-[2.6rem]">
            Secure onboarding intake for carriers that want dispatch support.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-slate">
            Complete the setup request below with the company details, operating profile, and onboarding documents our team needs to review dispatch fit and next steps.
          </p>
        </div>
        <div className="rounded-[1.4rem] border border-accent/12 bg-accent/6 px-4 py-4 text-sm leading-7 text-accent-deep shadow-[0_10px_24px_rgba(15,118,110,0.06)]">
          <p className="font-semibold uppercase tracking-[0.18em]">Uploaded files</p>
          <p className="mt-2 font-display text-3xl font-semibold text-ink">{totalFiles}</p>
          <p className="mt-1 text-slate">Files currently attached to this setup request.</p>
          <p className="mt-1 text-xs uppercase tracking-[0.16em] text-slate/80">
            {formatCarrierFileSize(totalUploadBytes)} total
          </p>
        </div>
      </div>

      <div className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {trackerSteps.map((item, index) => (
          <div
            key={item}
            className="rounded-[1.4rem] border border-line bg-white/80 px-4 py-4 shadow-[0_10px_24px_rgba(15,23,42,0.04)]"
          >
            <p className="text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-accent">Step 0{index + 1}</p>
            <p className="mt-2 text-sm font-medium leading-6 text-ink">{item}</p>
          </div>
        ))}
      </div>

      {state.status === "submitting" ? (
        <div className="mt-6 rounded-[1.5rem] border border-accent/12 bg-accent/5 px-4 py-4">
          <div className="h-2 overflow-hidden rounded-full bg-white/80">
            <div className="h-full w-2/3 animate-[carrier-upload-progress_1.3s_ease-in-out_infinite] rounded-full bg-[linear-gradient(90deg,#0f766e,#d4a24c)]" />
          </div>
          <p className="mt-3 text-sm font-medium text-accent-deep">{state.message}</p>
        </div>
      ) : null}

      {state.status === "success" ? (
        <div className="mt-6 rounded-[1.5rem] border border-emerald-200 bg-emerald-50 px-4 py-4 text-sm leading-7 text-emerald-800">
          {state.message}
        </div>
      ) : null}

      {state.status === "error" ? (
        <div className="mt-6 rounded-[1.5rem] border border-rose-200 bg-rose-50 px-4 py-4 text-sm leading-7 text-rose-800">
          {state.message}
        </div>
      ) : null}

      <form className="mt-8 grid gap-6" onSubmit={handleSubmit}>
        <section className="rounded-[2rem] border border-line bg-white/82 p-5 shadow-[0_14px_30px_rgba(15,23,42,0.04)] sm:p-6">
          <div className="mb-5">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Carrier Information</p>
            <p className="mt-2 text-sm leading-7 text-slate">
              Use the primary contact details and company information our team should reference during onboarding review.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <label className="space-y-2">
              <span className="text-sm font-medium text-ink">Full Name</span>
              <input className={inputClasses} type="text" name="fullName" placeholder="Full contact name" autoComplete="name" required />
            </label>
            <label className="space-y-2">
              <span className="text-sm font-medium text-ink">Company Name</span>
              <input className={inputClasses} type="text" name="companyName" placeholder="Registered carrier name" autoComplete="organization" required />
            </label>
            <label className="space-y-2">
              <span className="text-sm font-medium text-ink">Phone Number</span>
              <input className={inputClasses} type="tel" name="phone" placeholder="(000) 000-0000" autoComplete="tel" required />
            </label>
            <label className="space-y-2">
              <span className="text-sm font-medium text-ink">Email Address</span>
              <input className={inputClasses} type="email" name="email" placeholder="dispatch@company.com" autoComplete="email" required />
            </label>
            <label className="space-y-2">
              <span className="text-sm font-medium text-ink">MC Number</span>
              <input className={inputClasses} type="text" name="mcNumber" placeholder="MC number" required />
            </label>
            <label className="space-y-2">
              <span className="text-sm font-medium text-ink">DOT Number</span>
              <input className={inputClasses} type="text" name="dotNumber" placeholder="DOT number" required />
            </label>
            <label className="space-y-2">
              <span className="text-sm font-medium text-ink">Best Time to Contact</span>
              <select className={inputClasses} name="bestTimeToContact" defaultValue="Flexible">
                <option>Flexible</option>
                <option>Morning</option>
                <option>Afternoon</option>
                <option>Evening</option>
              </select>
            </label>
            <label className="space-y-2">
              <span className="text-sm font-medium text-ink">Current Location</span>
              <input className={inputClasses} type="text" name="currentLocation" placeholder="City, state" required />
            </label>
          </div>
        </section>

        <section className="rounded-[2rem] border border-line bg-white/82 p-5 shadow-[0_14px_30px_rgba(15,23,42,0.04)] sm:p-6">
          <div className="mb-5">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Equipment Details + Preferred Lanes</p>
            <p className="mt-2 text-sm leading-7 text-slate">
              Give our dispatch team the operating context they need before they review lane fit and workflow expectations.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <label className="space-y-2">
              <span className="text-sm font-medium text-ink">Truck Type</span>
              <select className={inputClasses} name="truckType" defaultValue="Dry Van" required>
                <option>Dry Van</option>
                <option>Reefer</option>
                <option>Flatbed</option>
                <option>Power Only</option>
                <option>Hotshot</option>
                <option>Box Truck</option>
                <option>Other</option>
              </select>
            </label>
            <label className="space-y-2">
              <span className="text-sm font-medium text-ink">Number of Trucks</span>
              <input className={inputClasses} type="text" name="numberOfTrucks" placeholder="1, 3, 10+" inputMode="numeric" required />
            </label>
            <label className="space-y-2 md:col-span-2">
              <span className="text-sm font-medium text-ink">Preferred Lanes</span>
              <input className={inputClasses} type="text" name="preferredLanes" placeholder="For example: Midwest to Southeast, regional, dedicated, local" required />
            </label>
          </div>
        </section>

        <section className="rounded-[2rem] border border-line bg-white/82 p-5 shadow-[0_14px_30px_rgba(15,23,42,0.04)] sm:p-6">
          <div className="mb-5 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Setup Documents</p>
              <p className="mt-2 max-w-3xl text-sm leading-7 text-slate">
                Please do not submit unnecessary sensitive information. Upload what you already have available now. If something is missing, our team can follow up after review.
              </p>
            </div>
            <div className="rounded-[1.2rem] border border-brand-gold/18 bg-brand-gold/10 px-4 py-3 text-sm leading-6 text-[#74561d]">
              Optional uploads: submit what is ready
            </div>
          </div>
          <div className="grid gap-4 xl:grid-cols-2">
            {carrierSetupDocumentCategories.map((category) => (
              <DocumentUploadField
                key={category.id}
                category={category}
                files={uploads[category.id] ?? []}
                onAddFiles={addFiles}
                onRemoveFile={removeFile}
                disabled={state.status === "submitting"}
              />
            ))}
          </div>
        </section>

        <section className="rounded-[2rem] border border-line bg-white/82 p-5 shadow-[0_14px_30px_rgba(15,23,42,0.04)] sm:p-6">
          <div className="mb-5">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Additional Notes</p>
            <p className="mt-2 text-sm leading-7 text-slate">
              Add any helpful context about lanes, equipment, timing, or questions your team wants addressed during setup review.
            </p>
          </div>
          <label className="space-y-2">
            <span className="text-sm font-medium text-ink">Message or Notes</span>
            <textarea
              className={`${inputClasses} min-h-36 resize-y`}
              name="message"
              placeholder="Anything else our team should know before reviewing your carrier setup package?"
            />
          </label>
        </section>

        <div className="rounded-[2rem] bg-brand-navy px-5 py-5 text-white shadow-soft sm:px-6">
          <div className="grid gap-5 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-gold">Ready To Send</p>
              <p className="mt-3 text-base leading-7 text-white/76">
                Submit your setup request when the carrier details and document list feel complete. Our team will review the package and follow up with the next step.
              </p>
            </div>
            <button
              type="submit"
              disabled={state.status === "submitting"}
              className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3.5 text-sm font-semibold text-brand-navy transition duration-300 hover:-translate-y-0.5 hover:bg-white/92 disabled:cursor-not-allowed disabled:opacity-75"
            >
              {state.status === "submitting" ? "Submitting Setup..." : "Submit Carrier Setup"}
            </button>
          </div>
        </div>
      </form>

      {showSuccessModal ? (
        <div className="fixed inset-0 z-[90] flex items-center justify-center px-4 py-6">
          <button
            type="button"
            aria-label="Close success message"
            className="absolute inset-0 bg-brand-navy/55 backdrop-blur-[3px]"
            onClick={() => setShowSuccessModal(false)}
          />
          <div className="soft-card premium-border surface-outline relative z-[91] w-full max-w-xl rounded-[2.2rem] p-6 shadow-[0_34px_90px_rgba(15,23,42,0.26)] sm:p-8">
            <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-2xl text-emerald-700">
              ✓
            </div>
            <p className="mt-5 text-xs font-semibold uppercase tracking-[0.22em] text-accent">Setup Submitted</p>
            <h3 className="mt-3 font-display text-3xl font-semibold text-ink">Your carrier setup is complete.</h3>
            <p className="mt-4 text-base leading-8 text-slate">
              Thank you. Your carrier information has been submitted successfully. Our team will review everything you shared and contact you with the next steps.
            </p>
            <div className="mt-6 rounded-[1.4rem] border border-line bg-white/78 px-4 py-4 text-sm leading-7 text-slate">
              If any setup documents are still missing, SiratLink can follow up directly instead of blocking your request now.
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={() => setShowSuccessModal(false)}
                className="inline-flex items-center justify-center rounded-full bg-brand-navy px-5 py-3.5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-brand-steel"
              >
                Close
              </button>
              <Link
                href="/dispatching-services"
                className="inline-flex items-center justify-center rounded-full border border-line bg-white px-5 py-3.5 text-sm font-semibold text-ink transition duration-300 hover:-translate-y-0.5 hover:border-accent/35 hover:text-accent"
              >
                Review Dispatching Services
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
