"use client";

import { useState } from "react";
import { Printer, Github, Linkedin, Mail, Phone, MapPin, Globe } from "lucide-react";

// ── Content ───────────────────────────────────────────────────────────────────

const content = {
  en: {
    back: "← Back to Portfolio",
    download: "Download / Print PDF",
    tagline: "Software Engineer · AI Automation & Full-Stack · Python, React, Java",
    summary_title: "Summary",
    summary:
      "Software Engineering student at PUC Minas (graduating Dec 2026) and Technology Intern at Vennx, where I build AI-powered automation systems, REST API integrations, and full-stack SaaS products. Experienced in Python, Java (Spring Boot), and React. International academic background — exchange at Politecnico di Milano — with fluency in 4 languages, enabling effective collaboration in global teams.",
    skills_title: "Technical Skills",
    skill_groups: [
      { title: "Core", skills: ["Python", "AI / LLM", "RAG Pipelines", "REST API", "Automation", "Web Scraping", "Playwright"] },
      { title: "Development", skills: ["Java / Spring Boot", "React", "TypeScript", "Next.js", "SQL", "GOLANG", "Flask", "PHP"] },
      { title: "Tools & Methods", skills: ["Git", "Supabase", "Linux / Red Hat", "Agile / Scrum / Kanban", "Low-code / No-code"] },
    ],
    experience_title: "Professional Experience",
    experience: [
      {
        title: "Technology Intern",
        company: "Vennx",
        period: "Feb 2026 – Present",
        location: "Belo Horizonte, MG",
        bullets: [
          "Built AI-powered LinkedIn outreach bot with GPT-4o two-stage qualification pipeline across 36 topic × pain-point combinations",
          "Rebuilt DeepMeet platform from scratch: tenant/user permission architecture, MS Graph API integration, 30+ production bugs resolved",
          "Developed Vennx Calculator — multi-step web estimator with HubSpot CRM integration and OTP email lead qualification",
          "Created Opportunity Detector: Teams transcript analysis tool that auto-syncs deals and contacts into HubSpot pipeline",
          "Built REST API integrations, Python automation scripts, and web scraping solutions for data extraction and process optimization",
          "Leveraged Supabase Edge Functions, low-code/no-code platforms, and Generative AI to accelerate delivery",
        ],
        confidential: "Projects developed (confidential): LinkedIn Lead Bot, DeepMeet, Vennx Calculator, Opportunity Detector",
      },
      {
        title: "Market Research Administrator",
        company: "Italian-Brazilian Chamber of Commerce, Industry and Agriculture of MG",
        period: "Jun 2021 – Dec 2021",
        location: "Belo Horizonte, MG",
        bullets: [
          "Conducted market data analysis and trend research to support strategic decision-making",
          "Built client communication skills in a multilingual environment; contributed to technical diploma in Administration",
        ],
      },
    ],
    projects_title: "Projects",
    projects: [
      {
        title: "DePinho Multimídias",
        subtitle: "E-commerce · Java, Spring Boot, MySQL, Maven",
        github: "https://github.com/renatoctti/DePinhoMultimidias",
        bullets: [
          "Full e-commerce platform for automotive multimedia with smart car-model compatibility filter and MercadoPago payment integration",
          "Role-based auth with Spring Security; admin panel for catalog management, stock control, and order tracking",
        ],
      },
      {
        title: "TicketTrade",
        subtitle: "Marketplace · Java, Spring Boot, SQL, JavaScript",
        bullets: [
          "Marketplace for buying, selling, and trading event tickets with secure auth flow for buyers and sellers",
          "RESTful backend with Java/Spring Boot, SQL database integration, collaborative development with Git",
        ],
      },
    ],
    education_title: "Education",
    education: [
      { degree: "B.S. Software Engineering", school: "PUC Minas", period: "2023 – Dec 2026" },
      { degree: "Chemical Engineering — Exchange Program", school: "Politecnico di Milano", period: "Aug – Dec 2022", note: "International academic experience in Milan, Italy" },
      { degree: "High School & Technical Diploma in Administration", school: "Fundação Torino — International School", period: "2006 – 2022" },
    ],
    certs_title: "Certifications",
    certs: [
      "Red Hat System Administration (RHCSA)",
      "Technical Diploma — Administration & Public Management",
      "International High School Diploma — Fundação Torino",
    ],
    langs_title: "Languages",
    langs: [
      { lang: "Portuguese", level: "Native" },
      { lang: "Italian", level: "Native / Fluent" },
      { lang: "English", level: "Advanced / Professional" },
      { lang: "Spanish", level: "Intermediate" },
    ],
  },
  pt: {
    back: "← Voltar ao Portfolio",
    download: "Baixar / Imprimir PDF",
    tagline: "Engenheiro de Software · IA, Automação & Full-Stack · Python, React, Java",
    summary_title: "Resumo",
    summary:
      "Estudante de Engenharia de Software na PUC Minas (conclusão em dez/2026) e Estagiário de Tecnologia na Vennx, onde desenvolvo sistemas de automação com IA, integrações via API REST e produtos SaaS full-stack. Experiência em Python, Java (Spring Boot) e React. Formação acadêmica internacional — intercâmbio no Politecnico di Milano — com fluência em 4 idiomas, permitindo colaboração eficaz em equipes globais.",
    skills_title: "Habilidades Técnicas",
    skill_groups: [
      { title: "Core", skills: ["Python", "AI / LLM", "Pipelines RAG", "REST API", "Automação", "Web Scraping", "Playwright"] },
      { title: "Desenvolvimento", skills: ["Java / Spring Boot", "React", "TypeScript", "Next.js", "SQL", "GOLANG", "Flask", "PHP"] },
      { title: "Ferramentas & Métodos", skills: ["Git", "Supabase", "Linux / Red Hat", "Agile / Scrum / Kanban", "Low-code / No-code"] },
    ],
    experience_title: "Experiência Profissional",
    experience: [
      {
        title: "Estagiário de Tecnologia",
        company: "Vennx",
        period: "Fev 2026 – Presente",
        location: "Belo Horizonte, MG",
        bullets: [
          "Desenvolveu bot de outreach no LinkedIn com pipeline GPT-4o de qualificação em dois estágios, cobrindo 36 combinações de tópico × ponto de dor",
          "Reconstruiu a plataforma DeepMeet do zero: arquitetura tenant/usuário, integração com MS Graph API, 30+ bugs de produção resolvidos",
          "Desenvolveu a Calculadora Vennx — estimador web multi-etapas com integração ao HubSpot CRM e qualificação de leads via OTP por e-mail",
          "Criou o Detector de Oportunidades: ferramenta de análise de transcrições do Teams com sincronização automática de negócios no HubSpot",
          "Construiu integrações REST API, scripts Python de automação e soluções de web scraping para extração de dados",
          "Utilizou Supabase Edge Functions, plataformas low-code/no-code e IA Generativa para acelerar entregas",
        ],
        confidential: "Projetos desenvolvidos (confidenciais): LinkedIn Lead Bot, DeepMeet, Calculadora Vennx, Detector de Oportunidades",
      },
      {
        title: "Administrador e Pesquisador de Mercado",
        company: "Câmara Ítalo-Brasileira de Comércio, Indústria e Agricultura de MG",
        period: "Jun 2021 – Dez 2021",
        location: "Belo Horizonte, MG",
        bullets: [
          "Realizou análise de dados de mercado e pesquisa de tendências para apoiar a tomada de decisões estratégicas",
          "Desenvolveu habilidades de comunicação com clientes em ambiente multilíngue; contribuiu para o diploma técnico em Administração",
        ],
      },
    ],
    projects_title: "Projetos",
    projects: [
      {
        title: "DePinho Multimídias",
        subtitle: "E-commerce · Java, Spring Boot, MySQL, Maven",
        github: "https://github.com/renatoctti/DePinhoMultimidias",
        bullets: [
          "Plataforma completa de e-commerce para multimídia automotiva com filtro inteligente de compatibilidade e integração com MercadoPago",
          "Autenticação com controle de acesso por papel via Spring Security; painel admin para gestão de catálogo, estoque e pedidos",
        ],
      },
      {
        title: "TicketTrade",
        subtitle: "Marketplace · Java, Spring Boot, SQL, JavaScript",
        bullets: [
          "Marketplace para compra, venda e troca de ingressos para eventos com fluxo de autenticação seguro",
          "Backend RESTful com Java/Spring Boot, banco SQL e desenvolvimento colaborativo com Git",
        ],
      },
    ],
    education_title: "Formação Acadêmica",
    education: [
      { degree: "Bacharelado em Engenharia de Software", school: "PUC Minas", period: "2023 – Dez 2026" },
      { degree: "Engenharia Química — Programa de Intercâmbio", school: "Politecnico di Milano", period: "Ago – Dez 2022", note: "Experiência acadêmica internacional em Milão, Itália" },
      { degree: "Ensino Médio & Diploma Técnico em Administração", school: "Fundação Torino — Escola Internacional", period: "2006 – 2022" },
    ],
    certs_title: "Certificações",
    certs: [
      "Administração de Sistemas Red Hat (RHCSA)",
      "Diploma Técnico — Administração e Gestão Pública",
      "Diploma de Ensino Médio Internacional — Fundação Torino",
    ],
    langs_title: "Idiomas",
    langs: [
      { lang: "Português", level: "Nativo" },
      { lang: "Italiano", level: "Nativo / Fluente" },
      { lang: "Inglês", level: "Avançado / Profissional" },
      { lang: "Espanhol", level: "Intermediário" },
    ],
  },
};

type Lang = "en" | "pt";

// ── Helper components ─────────────────────────────────────────────────────────

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-6 print:mb-5">
      <h2 className="text-[10px] font-bold uppercase tracking-widest text-[#7c3aed] print:text-purple-700 mb-3 pb-1.5 border-b border-[#2e2e2e] print:border-gray-200">
        {title}
      </h2>
      {children}
    </div>
  );
}

function SkillGroup({ title, skills }: { title: string; skills: string[] }) {
  return (
    <div>
      <p className="text-[10px] font-semibold text-[#9ca3af]/50 print:text-gray-400 uppercase tracking-wider mb-2">
        {title}
      </p>
      <div className="flex flex-wrap gap-1.5">
        {skills.map((s) => (
          <span key={s} className="text-xs px-2 py-0.5 bg-[#242424] print:bg-gray-100 border border-[#3a3a3a] print:border-gray-200 rounded text-[#9ca3af] print:text-gray-700">
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}

// ── Page ─────────────────────────────────────────────────────────────────────

export default function CVPage() {
  const [lang, setLang] = useState<Lang>("en");
  const c = content[lang];

  return (
    <div className="min-h-screen bg-[#0f0f0f] print:bg-white py-10 px-4 print:py-0 print:px-0">

      {/* Toolbar */}
      <div className="max-w-4xl mx-auto mb-5 flex items-center justify-between print:hidden">
        <a href="/" className="text-[#9ca3af] text-sm hover:text-white transition-colors flex items-center gap-1.5">
          {c.back}
        </a>

        <div className="flex items-center gap-3">
          {/* Language toggle */}
          <div className="flex rounded-lg border border-[#2e2e2e] overflow-hidden text-xs font-semibold">
            {(["en", "pt"] as Lang[]).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`px-4 py-2 transition-colors duration-200 ${
                  lang === l
                    ? "bg-[#7c3aed] text-white"
                    : "text-[#9ca3af] hover:text-white hover:bg-[#2e2e2e]"
                }`}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>

          <button
            onClick={() => window.print()}
            className="flex items-center gap-2 px-4 py-2 bg-[#7c3aed] hover:bg-[#6d28d9] text-white rounded-lg transition-colors text-sm font-medium"
          >
            <Printer size={15} />
            {c.download}
          </button>
        </div>
      </div>

      {/* CV Paper */}
      <div className="max-w-4xl mx-auto bg-[#1a1a1a] print:bg-white rounded-2xl print:rounded-none shadow-xl print:shadow-none p-10 print:p-8">

        {/* Header */}
        <div className="border-b border-[#2e2e2e] print:border-gray-200 pb-5 mb-6">
          <h1 className="text-3xl font-bold text-white print:text-gray-900 mb-0.5">Renato Cazzoletti</h1>
          <p className="text-[#a855f7] print:text-purple-700 font-medium text-base mb-4">{c.tagline}</p>
          <div className="flex flex-wrap gap-x-5 gap-y-1.5 text-xs text-[#9ca3af] print:text-gray-600">
            <span className="flex items-center gap-1.5"><Phone size={11} /> +55 (31) 99520-4041</span>
            <span className="flex items-center gap-1.5"><Mail size={11} /> renato.cazzoletti7@gmail.com</span>
            <span className="flex items-center gap-1.5"><MapPin size={11} /> Belo Horizonte, MG — Brazil</span>
            <a href="https://linkedin.com/in/renatocazzoletti-179862299" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-white print:text-gray-600 transition-colors">
              <Linkedin size={11} /> linkedin.com/in/renatocazzoletti
            </a>
            <a href="https://github.com/renatoctti" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-white print:text-gray-600 transition-colors">
              <Github size={11} /> github.com/renatoctti
            </a>
            <a href="https://portfolio-jet-nine-lttxmn09s8.vercel.app" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-white print:text-gray-600 transition-colors">
              <Globe size={11} /> portfolio-jet-nine-lttxmn09s8.vercel.app
            </a>
          </div>
        </div>

        {/* Summary */}
        <Section title={c.summary_title}>
          <p className="text-xs text-[#9ca3af] print:text-gray-700 leading-relaxed">{c.summary}</p>
        </Section>

        {/* Skills */}
        <Section title={c.skills_title}>
          <div className="grid grid-cols-3 gap-5">
            {c.skill_groups.map((g) => (
              <SkillGroup key={g.title} title={g.title} skills={g.skills} />
            ))}
          </div>
        </Section>

        {/* Experience */}
        <Section title={c.experience_title}>
          {c.experience.map((exp, i) => (
            <div key={i} className="mb-5 last:mb-0">
              <div className="flex items-start justify-between gap-4 mb-1">
                <div>
                  <span className="text-white print:text-gray-900 font-semibold text-sm">{exp.title}</span>
                  <span className="text-[#7c3aed] print:text-purple-700 font-semibold text-sm"> · {exp.company}</span>
                </div>
                <span className="text-[#9ca3af] print:text-gray-500 text-xs whitespace-nowrap">{exp.period}</span>
              </div>
              <p className="text-[#9ca3af]/60 print:text-gray-400 text-xs mb-2">{exp.location}</p>
              <ul className="space-y-1">
                {exp.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-xs text-[#9ca3af] print:text-gray-700 leading-relaxed">
                    <span className="text-[#7c3aed] print:text-purple-600 mt-0.5 flex-shrink-0">▸</span>
                    {b}
                  </li>
                ))}
              </ul>
              {exp.confidential && (
                <p className="mt-2 text-[10px] text-[#9ca3af]/40 print:text-gray-400 italic">{exp.confidential}</p>
              )}
            </div>
          ))}
        </Section>

        {/* Projects */}
        <Section title={c.projects_title}>
          {c.projects.map((p, i) => (
            <div key={i} className="mb-4 last:mb-0">
              <div className="flex items-center gap-2 mb-0.5">
                <span className="text-white print:text-gray-900 font-semibold text-sm">{p.title}</span>
                {p.github && (
                  <a href={p.github} target="_blank" rel="noopener noreferrer" className="text-[#7c3aed] print:text-purple-700 text-[10px] hover:underline">
                    GitHub ↗
                  </a>
                )}
              </div>
              <p className="text-[#9ca3af]/60 print:text-gray-400 text-xs mb-1.5">{p.subtitle}</p>
              <ul className="space-y-1">
                {p.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-xs text-[#9ca3af] print:text-gray-700 leading-relaxed">
                    <span className="text-[#7c3aed] print:text-purple-600 mt-0.5 flex-shrink-0">▸</span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </Section>

        {/* Education */}
        <Section title={c.education_title}>
          <div className="space-y-3">
            {c.education.map((e, i) => (
              <div key={i} className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-white print:text-gray-900 font-semibold text-sm">{e.degree}</p>
                  <p className="text-[#9ca3af]/70 print:text-gray-500 text-xs">{e.school}</p>
                  {e.note && <p className="text-[#9ca3af]/50 print:text-gray-400 text-xs italic">{e.note}</p>}
                </div>
                <span className="text-[#9ca3af] print:text-gray-500 text-xs whitespace-nowrap">{e.period}</span>
              </div>
            ))}
          </div>
        </Section>

        {/* Certifications + Languages */}
        <div className="grid grid-cols-2 gap-8">
          <Section title={c.certs_title}>
            <ul className="space-y-1.5">
              {c.certs.map((cert) => (
                <li key={cert} className="flex items-start gap-2 text-xs text-[#9ca3af] print:text-gray-700">
                  <span className="text-[#7c3aed] print:text-purple-600 mt-0.5 flex-shrink-0">▸</span>
                  {cert}
                </li>
              ))}
            </ul>
          </Section>

          <Section title={c.langs_title}>
            <div className="space-y-1.5">
              {c.langs.map((l) => (
                <div key={l.lang} className="flex items-center justify-between text-xs">
                  <span className="text-white print:text-gray-900 font-medium">{l.lang}</span>
                  <span className="text-[#9ca3af] print:text-gray-500">{l.level}</span>
                </div>
              ))}
            </div>
          </Section>
        </div>

      </div>
    </div>
  );
}
