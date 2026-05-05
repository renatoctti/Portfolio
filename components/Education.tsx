"use client";
import { useLanguage } from "@/lib/LanguageContext";
import AnimateIn from "./AnimateIn";

const schoolMeta: Record<string, { abbr: string; color: string; current?: boolean }> = {
  "PUC Minas":             { abbr: "PUC",    color: "#7c3aed", current: true },
  "Politecnico di Milano": { abbr: "PoliMi", color: "#0ea5e9" },
  "Fundação Torino":       { abbr: "FT",     color: "#6366f1" },
};

const IconShield = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <polyline points="9 12 11 14 15 10" />
  </svg>
);

export default function Education() {
  const { t } = useLanguage();

  const schools = [
    { institution: "PUC Minas",             degree: t.education.puc_degree,    period: t.education.puc_period,    note: null                    },
    { institution: "Politecnico di Milano",  degree: t.education.polimi_degree, period: t.education.polimi_period, note: t.education.polimi_note },
    { institution: "Fundação Torino",        degree: t.education.torino_degree, period: t.education.torino_period, note: null                    },
  ];

  const certs = [
    t.education.cert_redhat,
    t.education.cert_admin,
    t.education.cert_hs,
  ];

  return (
    <section id="education" className="py-24 bg-[#0f0f0f]">
      <div className="max-w-6xl mx-auto px-6">
        <AnimateIn>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
            <span className="text-[#7c3aed]">/</span> {t.education.section_title}
          </h2>
        </AnimateIn>

        <div className="grid md:grid-cols-2 gap-12">

          {/* Schools */}
          <div className="space-y-5">
            {schools.map((school, i) => {
              const meta = schoolMeta[school.institution];
              return (
                <AnimateIn key={school.institution} delay={i * 100} from="left">
                  <div className="bg-[#1a1a1a] border border-[#2e2e2e] rounded-xl p-5 hover:border-[#7c3aed]/50 transition-colors duration-200">
                    <div className="flex items-start gap-4">

                      {/* Abbreviation badge */}
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center text-xs font-bold flex-shrink-0 tracking-wide"
                        style={{
                          background: `${meta.color}18`,
                          color: meta.color,
                          border: `1px solid ${meta.color}35`,
                        }}
                      >
                        {meta.abbr}
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2 mb-0.5">
                          <p style={{ color: meta.color }} className="font-semibold text-sm">
                            {school.institution}
                          </p>
                          {meta.current && (
                            <span className="inline-flex items-center gap-1 text-[10px] px-2 py-0.5 rounded-full bg-[#7c3aed]/15 border border-[#7c3aed]/30 text-[#a855f7] font-semibold uppercase tracking-wider">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#7c3aed] animate-pulse" />
                              {t.experience.present}
                            </span>
                          )}
                        </div>
                        <h3 className="text-white font-bold leading-snug">{school.degree}</h3>
                        <p className="text-[#9ca3af] text-sm mt-0.5">{school.period}</p>
                        {school.note && (
                          <p className="text-[#9ca3af]/70 text-xs mt-1 italic">{school.note}</p>
                        )}
                      </div>
                    </div>
                  </div>
                </AnimateIn>
              );
            })}
          </div>

          {/* Certifications */}
          <div>
            <AnimateIn>
              <h3 className="text-lg font-semibold text-white mb-6">{t.education.certifications_title}</h3>
            </AnimateIn>
            <div className="space-y-4">
              {certs.map((cert, i) => (
                <AnimateIn key={cert} delay={i * 80} from="right">
                  <div className="flex items-start gap-3 bg-[#1a1a1a] border border-[#2e2e2e] rounded-xl p-4 hover:border-[#7c3aed]/40 transition-colors duration-200 group">
                    <span className="flex-shrink-0 mt-0.5 text-[#7c3aed] group-hover:text-[#a855f7] transition-colors duration-200">
                      <IconShield />
                    </span>
                    <p className="text-[#9ca3af] text-sm leading-relaxed group-hover:text-white/80 transition-colors duration-200">
                      {cert}
                    </p>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
