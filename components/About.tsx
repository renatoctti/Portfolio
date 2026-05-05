"use client";
import { useLanguage } from "@/lib/LanguageContext";
import AnimateIn from "./AnimateIn";

// ── Keyword highlighter ──────────────────────────────────────────────────────
type KwType = "tech" | "proper";
interface Keyword { text: string; type: KwType }

function hl(text: string, keywords: Keyword[]) {
  if (!keywords.length) return <>{text}</>;
  const escaped = keywords.map(k => k.text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
  const regex = new RegExp(`(${escaped.join("|")})`, "gi");
  const parts = text.split(regex);
  return (
    <>
      {parts.map((part, i) => {
        const kw = keywords.find(k => k.text.toLowerCase() === part.toLowerCase());
        if (!kw) return <span key={i}>{part}</span>;
        return kw.type === "tech"
          ? <span key={i} className="text-[#a855f7] font-medium">{part}</span>
          : <span key={i} className="text-white font-semibold">{part}</span>;
      })}
    </>
  );
}

// ── Keyword lists (EN / PT) ───────────────────────────────────────────────────
const KW_EN = {
  p1: [
    { text: "PUC Minas",                   type: "proper" },
    { text: "Vennx",                       type: "proper" },
    { text: "automation scripts",          type: "tech"   },
    { text: "REST API integrations",       type: "tech"   },
    { text: "AI-powered tools",            type: "tech"   },
    { text: "full-stack web applications", type: "tech"   },
  ],
  p2: [
    { text: "Politecnico di Milano", type: "proper" },
    { text: "four languages",        type: "tech"   },
    { text: "Portuguese",            type: "tech"   },
    { text: "Italian",               type: "tech"   },
    { text: "English",               type: "tech"   },
    { text: "Spanish",               type: "tech"   },
  ],
  p3: [
    { text: "AI",                  type: "tech"  },
    { text: "automation",          type: "tech"  },
    { text: "real business impact",type: "proper"},
    { text: "intelligent software",type: "tech"  },
  ],
} satisfies Record<string, Keyword[]>;

const KW_PT = {
  p1: [
    { text: "PUC Minas",    type: "proper" },
    { text: "Vennx",        type: "proper" },
    { text: "automação",    type: "tech"   },
    { text: "API REST",     type: "tech"   },
    { text: "IA",           type: "tech"   },
    { text: "full-stack",   type: "tech"   },
  ],
  p2: [
    { text: "Politecnico di Milano",          type: "proper" },
    { text: "quatro idiomas",                 type: "tech"   },
    { text: "português",                      type: "tech"   },
    { text: "italiano",                       type: "tech"   },
    { text: "inglês",                         type: "tech"   },
    { text: "espanhol",                       type: "tech"   },
  ],
  p3: [
    { text: "IA",                              type: "tech"   },
    { text: "automação",                       type: "tech"   },
    { text: "impacto real nos negócios",       type: "proper" },
    { text: "software limpo e inteligente",    type: "tech"   },
  ],
} satisfies Record<string, Keyword[]>;

// ── Highlight cards ───────────────────────────────────────────────────────────
const getHighlights = (t: ReturnType<typeof useLanguage>["t"]) => [
  { icon: "🌐", title: t.about.highlight_languages, sub: t.about.highlight_languages_sub },
  { icon: "✈️",  title: t.about.highlight_intl,      sub: t.about.highlight_intl_sub      },
  { icon: "🐧", title: t.about.highlight_redhat,    sub: t.about.highlight_redhat_sub    },
];

// ── Component ─────────────────────────────────────────────────────────────────
export default function About() {
  const { t, lang } = useLanguage();
  const kw = lang === "en" ? KW_EN : KW_PT;

  return (
    <section id="about" className="py-24 bg-[#0f0f0f]">
      <div className="max-w-6xl mx-auto px-6">
        <AnimateIn>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
            <span className="text-[#7c3aed]">/</span> {t.about.section_title}
          </h2>
        </AnimateIn>

        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* ── Left: paragraphs ── */}
          <div className="space-y-6 text-[#9ca3af] text-base md:text-lg leading-relaxed">

            <AnimateIn delay={0}>
              <p>{hl(t.about.p1, kw.p1)}</p>
            </AnimateIn>

            <AnimateIn delay={100}>
              <p>{hl(t.about.p2, kw.p2)}</p>
            </AnimateIn>

            {/* p3 — conclusion callout */}
            <AnimateIn delay={200}>
              <div className="rounded-r-xl border-l-2 border-[#7c3aed] pl-4 py-3 bg-[#7c3aed]/5">
                <p className="text-[#c4b5fd] leading-relaxed">
                  {hl(t.about.p3, kw.p3)}
                </p>
              </div>
            </AnimateIn>
          </div>

          {/* ── Right: avatar + cards ── */}
          <div className="space-y-6">
            <AnimateIn from="right">
              <div className="relative w-32 h-32 rounded-full mx-auto md:mx-0">
                <div
                  className="avatar-ring-spin absolute inset-0 rounded-full"
                  style={{
                    background: "conic-gradient(from 0deg, #7c3aed, #a855f7, #6366f1, #c026d3, #7c3aed)",
                  }}
                />
                <div className="absolute inset-[3px] rounded-full overflow-hidden bg-[#0f0f0f]">
                  <img
                    src="/photo.jpg"
                    alt="Renato Cazzoletti"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </AnimateIn>

            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-1 lg:grid-cols-3 gap-4">
              {getHighlights(t).map((h, i) => (
                <AnimateIn key={h.title} delay={i * 80} from="right">
                  <div className="bg-[#1a1a1a] border border-[#2e2e2e] rounded-xl p-4 text-center hover:border-[#7c3aed]/50 transition-colors duration-200">
                    <div className="text-2xl mb-2">{h.icon}</div>
                    <p className="text-white font-semibold text-sm">{h.title}</p>
                    <p className="text-[#9ca3af] text-xs mt-1">{h.sub}</p>
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
