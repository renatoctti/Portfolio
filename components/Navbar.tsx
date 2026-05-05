"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/lib/LanguageContext";

const SECTION_IDS = ["about", "skills", "experience", "projects", "education", "contact"];

export default function Navbar() {
  const { t, lang, toggle } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const y = window.scrollY + 100;
      let current = "";
      for (const id of SECTION_IDS) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= y) current = id;
      }
      setActiveSection(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#about",      label: t.nav.about,      id: "about" },
    { href: "#skills",     label: t.nav.skills,     id: "skills" },
    { href: "#experience", label: t.nav.experience, id: "experience" },
    { href: "#projects",   label: t.nav.projects,   id: "projects" },
    { href: "#education",  label: t.nav.education,  id: "education" },
    { href: "#contact",    label: t.nav.contact,    id: "contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#0f0f0f]/90 backdrop-blur-md border-b border-[#2e2e2e]" : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="text-base font-semibold text-white tracking-tight">
          Renato Cazzoletti
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => {
            const active = activeSection === link.id;
            return (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm transition-colors duration-200 relative pb-0.5 ${
                  active ? "text-white" : "text-[#9ca3af] hover:text-white"
                }`}
              >
                {link.label}
                <span
                  className="absolute bottom-0 left-0 h-px rounded-full bg-[#7c3aed] transition-all duration-300"
                  style={{ width: active ? "100%" : "0%" }}
                />
              </a>
            );
          })}
        </div>

        {/* GitHub + Lang toggle + mobile hamburger */}
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/renatoctti"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#9ca3af] hover:text-white transition-colors duration-200"
            aria-label="GitHub"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </a>

          <button
            onClick={toggle}
            className="text-xs font-semibold px-3 py-1.5 rounded-full border border-[#2e2e2e] text-[#9ca3af] hover:border-[#7c3aed] hover:text-white transition-all duration-200"
          >
            {lang === "en" ? "PT" : "EN"}
          </button>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-[#9ca3af] hover:text-white"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
              {menuOpen ? (
                <>
                  <line x1="4" y1="4" x2="18" y2="18" />
                  <line x1="18" y1="4" x2="4" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="6" x2="19" y2="6" />
                  <line x1="3" y1="12" x2="19" y2="12" />
                  <line x1="3" y1="18" x2="19" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu — animated slide */}
      <div
        className="md:hidden overflow-hidden"
        style={{
          maxHeight: menuOpen ? "320px" : "0px",
          opacity: menuOpen ? 1 : 0,
          transition: "max-height 0.3s ease-in-out, opacity 0.25s ease-in-out",
        }}
      >
        <div className="bg-[#1a1a1a] border-b border-[#2e2e2e] px-6 py-4 flex flex-col gap-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`text-sm transition-colors ${
                activeSection === link.id ? "text-white" : "text-[#9ca3af] hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
