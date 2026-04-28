"use client";

type MailActionButtonProps = {
  email: string;
  label: string;
  className?: string;
  subject?: string;
  body?: string;
};

export function MailActionButton({
  email,
  label,
  className = "",
  subject,
  body,
}: MailActionButtonProps) {
  const gmailParams = new URLSearchParams({
    view: "cm",
    fs: "1",
    to: email,
  });

  if (subject) {
    gmailParams.set("su", subject);
  }

  if (body) {
    gmailParams.set("body", body);
  }

  async function handleClick() {
    const gmailUrl = `https://mail.google.com/mail/?${gmailParams.toString()}`;
    const openedWindow = window.open(gmailUrl, "_blank", "noopener,noreferrer");

    if (openedWindow) {
      return;
    }

    const mailtoParams = new URLSearchParams();
    if (subject) {
      mailtoParams.set("subject", subject);
    }
    if (body) {
      mailtoParams.set("body", body);
    }

    const mailtoUrl = `mailto:${email}${mailtoParams.toString() ? `?${mailtoParams.toString()}` : ""}`;
    window.location.href = mailtoUrl;
  }

  return (
    <button type="button" onClick={handleClick} className={className}>
      {label}
    </button>
  );
}
