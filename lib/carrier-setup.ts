export type CarrierDocumentCategory = {
  id: string;
  label: string;
  description: string;
  required?: boolean;
};

export const carrierSetupDocumentCategories: CarrierDocumentCategory[] = [
  {
    id: "mc-authority",
    label: "MC Authority",
    description: "Operating authority confirmation for dispatch onboarding review.",
  },
  {
    id: "w9",
    label: "W9",
    description: "W9 for company verification and onboarding records.",
  },
  {
    id: "certificate-of-insurance",
    label: "Certificate of Insurance",
    description: "Insurance confirmation showing current carrier coverage.",
  },
  {
    id: "notice-of-assignment",
    label: "Notice of Assignment",
    description: "Notice of assignment if factoring is part of your workflow.",
  },
  {
    id: "voided-check",
    label: "Voided Check or Direct Deposit Form",
    description: "Banking setup documentation if required for payment coordination.",
  },
  {
    id: "driver-license",
    label: "Driver License",
    description: "Driver identification for setup review when needed.",
  },
  {
    id: "dispatch-agreement",
    label: "Dispatch Agreement",
    description: "Upload a signed dispatch agreement if you already have it ready for review.",
  },
  {
    id: "other-documents",
    label: "Other Documents",
    description: "Any additional onboarding files your operation wants to share.",
  },
];

export const carrierSetupChecklistSections = [
  {
    title: "Carrier details to prepare",
    items: [
      "MC number, DOT number, company contact details, and truck count.",
      "Preferred lanes, current operating location, and truck type.",
      "Best contact window for setup review and onboarding follow-up.",
    ],
  },
  {
    title: "Core onboarding documents",
    items: ["MC Authority", "W9", "Certificate of Insurance", "Driver License if available"],
  },
  {
    title: "Additional setup records",
    items: [
      "Notice of assignment, banking details, and dispatch agreement only if they apply to your operation.",
      "If something is missing, submit what you have and our team will follow up with the next step.",
    ],
  },
];

export const carrierSetupProcessSteps = [
  {
    step: "01",
    title: "Submit the carrier setup form",
    description:
      "Share your company information, truck details, preferred lanes, and the onboarding documents your team already has prepared.",
  },
  {
    step: "02",
    title: "Review and dispatch fit check",
    description:
      "Our team reviews your dispatch onboarding package and confirms what additional information, if any, is still needed.",
  },
  {
    step: "03",
    title: "Receive next-step guidance",
    description:
      "Once the review is complete, SiratLink follows up with the clearest next step for dispatch onboarding and support alignment.",
  },
];

export const carrierUploadAccept = ".pdf,.jpg,.jpeg,.png,.doc,.docx";

export const carrierUploadMimeTypes = [
  "application/pdf",
  "image/jpeg",
  "image/png",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

export const carrierUploadExtensions = [".pdf", ".jpg", ".jpeg", ".png", ".doc", ".docx"];

export const maxCarrierUploadSizeBytes = 10 * 1024 * 1024;

export function isAllowedCarrierFile({
  fileName,
  mimeType,
}: {
  fileName: string;
  mimeType?: string | null;
}) {
  const normalizedName = fileName.toLowerCase();
  const hasAllowedExtension = carrierUploadExtensions.some((extension) => normalizedName.endsWith(extension));

  if (mimeType && carrierUploadMimeTypes.includes(mimeType)) {
    return true;
  }

  return hasAllowedExtension;
}

export function formatCarrierFileSize(bytes: number) {
  if (bytes < 1024 * 1024) {
    return `${Math.max(1, Math.round(bytes / 1024))} KB`;
  }

  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}
