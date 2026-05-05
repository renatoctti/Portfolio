"use client";
import { useState } from "react";
import { useLanguage } from "@/lib/LanguageContext";
import AnimateIn from "./AnimateIn";

const IconEmail = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const IconCheck = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const IconLinkedIn = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const IconGitHub = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const IconPhone = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.21h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.08 6.08l.96-.94a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const EMAIL = "renato.cazzoletti7@gmail.com";

export default function Contact() {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(EMAIL).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const externalLinks = [
    {
      href: "https://www.linkedin.com/in/renato-cazzoletti-179862299",
      icon: <IconLinkedIn />,
      label: t.contact.linkedin_label,
      value: "linkedin.com/in/renato-cazzoletti",
    },
    {
      href: "https://github.com/renatoctti",
      icon: <IconGitHub />,
      label: "GitHub",
      value: "github.com/renatoctti",
    },
    {
      href: "https://wa.me/5531995204041",
      icon: <IconPhone />,
      label: t.contact.phone_label,
      value: "+55 31 99520-4041",
    },
  ];

  return (
    <section id="contact" className="py-24 bg-[#1a1a1a]">
      <div className="max-w-6xl mx-auto px-6">
        <AnimateIn>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            <span className="text-[#7c3aed]">/</span> {t.contact.section_title}
          </h2>
          <p className="text-[#9ca3af] text-lg mb-12 max-w-xl">{t.contact.subtitle}</p>
        </AnimateIn>

        <div className="flex flex-wrap gap-4 mb-20">

          {/* Email — copy to clipboard */}
          <AnimateIn delay={0}>
            <button
              onClick={copyEmail}
              className="flex items-center gap-3 px-6 py-4 bg-[#242424] border rounded-xl text-white transition-all duration-200 group cursor-pointer"
              style={{
                borderColor: copied ? "#22c55e" : "#2e2e2e",
              }}
            >
              <span
                className="transition-colors duration-200"
                style={{ color: copied ? "#22c55e" : "#9ca3af" }}
              >
                {copied ? <IconCheck /> : <IconEmail />}
              </span>
              <div>
                <p className="text-xs text-[#9ca3af] text-left">{t.contact.email_label}</p>
                <p
                  className="font-semibold transition-colors duration-200"
                  style={{ color: copied ? "#22c55e" : "white" }}
                >
                  {copied ? (t.contact.copied ?? "Copied!") : EMAIL}
                </p>
              </div>
            </button>
          </AnimateIn>

          {/* External links */}
          {externalLinks.map((link, i) => (
            <AnimateIn key={link.href} delay={(i + 1) * 80}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-4 bg-[#242424] border border-[#2e2e2e] rounded-xl text-white hover:border-[#7c3aed] transition-all duration-200 group"
              >
                <span className="text-[#9ca3af] group-hover:text-[#a855f7] transition-colors duration-200">
                  {link.icon}
                </span>
                <div>
                  <p className="text-xs text-[#9ca3af]">{link.label}</p>
                  <p className="font-semibold group-hover:text-[#a855f7] transition-colors">{link.value}</p>
                </div>
              </a>
            </AnimateIn>
          ))}
        </div>

        <AnimateIn>
          <div className="border-t border-[#2e2e2e] pt-8 flex flex-wrap items-center justify-between gap-4">
            <p className="text-[#9ca3af] text-sm">{t.contact.footer}</p>
            <p className="text-[#9ca3af] text-sm">Renato Cazzoletti © 2026</p>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
