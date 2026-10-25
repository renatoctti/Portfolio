"use client";

import { useState } from "react";
import { Printer, Mail, Phone, MapPin, Globe } from "lucide-react";

const GithubIcon = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

// ── Content ───────────────────────────────────────────────────────────────────

const content = {
  en: {
    back: "← Back to Portfolio",
    download: "Download / Print PDF",
    tagline: "Full Cycle Software Engineer · TypeScript, Node.js, React, PostgreSQL, AWS · AI Automation",
    summary_title: "Professional Summary",
    summary:
      "Full Cycle Software Engineer with 1.5 years of professional experience shipping production systems end to end (TypeScript, Node.js, React, PostgreSQL, AWS) and applied AI automation (LLMs, RAG). Currently at One Investimentos, building a corporate due-diligence platform for a Brazilian wealth advisory firm; previously at Vennx, delivering AI-powered SaaS and automation. B.S. in Software Engineering student at PUC Minas (graduating Jun 2027). Based in Brazil (UTC-3), available for remote roles. Trilingual (Portuguese, Italian, English).",
    skills_title: "Technical Skills",
    skill_groups: [
      { title: "Languages", skills: ["TypeScript", "JavaScript", "Python", "Java", "SQL"] },
      { title: "Backend", skills: ["Node.js (NestJS)", "REST API design", "Event-driven background jobs", "FastAPI", "Celery", "Spring Boot", "Supabase Edge Functions"] },
      { title: "Frontend & Data", skills: ["React", "Next.js", "PostgreSQL", "Drizzle ORM", "Supabase"] },
      { title: "AI & Automation", skills: ["LLMs (OpenAI GPT-4 / OpenRouter)", "RAG", "Prompt Engineering", "Web Scraping (Playwright)", "Process Automation"] },
      { title: "Cloud & DevOps", skills: ["AWS", "Docker", "GitHub Actions (CI/CD)", "Git", "Linux"] },
      { title: "Testing & Practices", skills: ["Vitest", "pytest", "JUnit", "Unit / integration / E2E testing", "TDD", "Code review", "Agile (Scrum, Kanban)"] },
    ],
    experience_title: "Professional Experience",
    experience: [
      {
        title: "Full Cycle Developer",
        company: "One Investimentos",
        period: "Sep 2026 – Present",
        location: "Nova Lima, MG · Brazilian wealth advisory firm (R$ 20B+ under advisory), BTG Pactual partner",
        bullets: [
          "Built the Corporate Client Due Diligence (KYC) platform: parallel queries to two external data providers, cross-checking of every shared field, lawsuit and shareholder, and an analyst workflow to resolve divergences (choose a source or enter a manual value, with bulk actions).",
          "Automated shareholder checks and evidence extraction from provider PDF reports; added a 10-criteria risk-scoring calculator, versioned KYC dossiers exported to PDF, and a committee approval flow with role-based permissions and e-mail notifications.",
          "Delivered a webhook for a reconciliation application with operator authorization, audit trail and a documented contract; built financial data views for the analytics team and event-driven background jobs.",
          "Cover the module with 1,000+ automated unit and end-to-end tests (Vitest) and ship through GitHub Actions CI/CD on AWS. Stack: TypeScript, Node.js (NestJS), React (Next.js), PostgreSQL (Drizzle ORM).",
        ],
      },
      {
        title: "Full-Stack Developer",
        company: "Vennx",
        period: "Jul 2025 – Sep 2026",
        location: "Belo Horizonte, MG · AI-powered software, SaaS & automation",
        bullets: [
          "Developed the Opportunity Detector, which analyzes Microsoft Teams transcripts and auto-syncs deals and contacts into HubSpot CRM, eliminating 10+ hours/week of manual data entry.",
          "Created the Vennx Calculator, a multi-step web estimator with HubSpot CRM integration and OTP email lead qualification, feeding qualified leads straight into the sales pipeline.",
          "Built 6 REST API integrations (HubSpot, Teams, Deepgram, OpenRouter, Unipile, Supabase), Python automation and web scraping solutions, and delivered features across 4 internal SaaS products using Supabase Edge Functions and Generative AI (LLMs).",
        ],
      },
      {
        title: "Market Research Intern",
        company: "Italian-Brazilian Chamber of Commerce",
        period: "Jun 2021 – Dec 2021",
        location: "Belo Horizonte, MG",
        bullets: [
          "Market research and trend analysis for member companies, supporting clients in Portuguese, Italian and English.",
        ],
      },
    ],
    projects_title: "Projects",
    projects: [
      {
        title: "DeepMeet — AI meeting-intelligence platform (Vennx)",
        subtitle: "Python, FastAPI, React, GPT-4, RAG",
        bullets: [
          "Designed the AI pipeline that converts 100+ monthly Microsoft Teams recordings into structured insights (summaries, action items, opportunities) using Deepgram, GPT-4 via OpenRouter and RAG, synced to HubSpot CRM.",
        ],
      },
      {
        title: "LinkedIn Bot — AI sales-automation platform (Vennx)",
        subtitle: "Python, FastAPI, Celery, PostgreSQL, React",
        bullets: [
          "Designed a modular automation architecture for prospecting, lead enrichment and outbound messaging (Unipile API, OpenAI/GPT lead classification), with Celery background processing, retry/error recovery and a monitoring dashboard handling 500+ leads per month.",
        ],
      },
    ],
    education_title: "Education",
    education: [
      { degree: "B.S. in Software Engineering", school: "PUC Minas", period: "Jan 2023 – Jun 2027 (expected)" },
      { degree: "Chemical Engineering (coursework)", school: "Politecnico di Milano, Italy", period: "Aug 2022 – Dec 2022" },
      { degree: "International High School Diploma & Technical Diploma in Administration", school: "Fundação Torino", period: "2022" },
    ],
    certs_title: "Training",
    certs: [
      "Red Hat System Administration (certificate of attendance), 2024",
    ],
    langs_title: "Languages",
    langs: [
      { lang: "Portuguese", level: "Native" },
      { lang: "Italian", level: "Native / Fluent" },
      { lang: "English", level: "Professional / Advanced" },
      { lang: "Spanish", level: "Intermediate" },
    ],
  },
  pt: {
    back: "← Voltar ao Portfolio",
    download: "Baixar / Imprimir PDF",
    tagline: "Engenheiro de Software Full Cycle · TypeScript, Node.js, React, PostgreSQL, AWS · Automação com IA",
    summary_title: "Resumo Profissional",
    summary:
      "Engenheiro de Software Full Cycle com 1,5 ano de experiência profissional entregando sistemas em produção de ponta a ponta (TypeScript, Node.js, React, PostgreSQL, AWS) e automação com IA aplicada (LLMs, RAG). Atualmente na One Investimentos, construindo uma plataforma de due diligence corporativa para uma assessoria de investimentos brasileira; antes, na Vennx, entregando SaaS com IA e automação. Cursando Engenharia de Software na PUC Minas (conclusão em jun/2027). Moro no Brasil (UTC-3) e estou disponível para vagas remotas. Trilíngue (português, italiano, inglês).",
    skills_title: "Habilidades Técnicas",
    skill_groups: [
      { title: "Linguagens", skills: ["TypeScript", "JavaScript", "Python", "Java", "SQL"] },
      { title: "Backend", skills: ["Node.js (NestJS)", "Design de REST API", "Jobs em segundo plano orientados a eventos", "FastAPI", "Celery", "Spring Boot", "Supabase Edge Functions"] },
      { title: "Frontend & Dados", skills: ["React", "Next.js", "PostgreSQL", "Drizzle ORM", "Supabase"] },
      { title: "IA & Automação", skills: ["LLMs (OpenAI GPT-4 / OpenRouter)", "RAG", "Prompt Engineering", "Web Scraping (Playwright)", "Automação de processos"] },
      { title: "Cloud & DevOps", skills: ["AWS", "Docker", "GitHub Actions (CI/CD)", "Git", "Linux"] },
      { title: "Testes & Práticas", skills: ["Vitest", "pytest", "JUnit", "Testes unitários / integração / E2E", "TDD", "Code review", "Agile (Scrum, Kanban)"] },
    ],
    experience_title: "Experiência Profissional",
    experience: [
      {
        title: "Desenvolvedor Full Cycle",
        company: "One Investimentos",
        period: "Set 2026 – Presente",
        location: "Nova Lima, MG · Assessoria de investimentos (R$ 20 bi+ sob assessoria), parceira do BTG Pactual",
        bullets: [
          "Construiu a plataforma de Due Diligence (KYC) de clientes corporativos: consultas em paralelo a dois provedores externos, cruzamento de todos os campos em comum, processos e sócios, e fluxo para o analista resolver divergências (escolher a fonte ou informar valor manual, com ações em lote).",
          "Automatizou a checagem dos sócios e a extração de evidências dos relatórios em PDF dos provedores; adicionou calculadora de risco com 10 critérios, dossiês de KYC versionados exportados em PDF e fluxo de aprovação em comitê com permissões por perfil e e-mails.",
          "Entregou um webhook para uma aplicação de conciliação com autorização de operador, trilha de auditoria e contrato documentado; construiu visões de dados financeiros para o time de analytics e jobs em segundo plano orientados a eventos.",
          "Cobre o módulo com mais de 1.000 testes automatizados unitários e end-to-end (Vitest) e publica via GitHub Actions CI/CD na AWS. Stack: TypeScript, Node.js (NestJS), React (Next.js), PostgreSQL (Drizzle ORM).",
        ],
      },
      {
        title: "Desenvolvedor Full-Stack",
        company: "Vennx",
        period: "Jul 2025 – Set 2026",
        location: "Belo Horizonte, MG · Software com IA, SaaS & automação",
        bullets: [
          "Desenvolveu o Detector de Oportunidades, que analisa transcrições do Microsoft Teams e sincroniza automaticamente negócios e contatos no HubSpot CRM, eliminando mais de 10 horas semanais de digitação manual.",
          "Criou a Calculadora Vennx, estimador web multi-etapas com integração ao HubSpot CRM e qualificação de leads por OTP via e-mail, alimentando o funil comercial com leads qualificados.",
          "Construiu 6 integrações via API REST (HubSpot, Teams, Deepgram, OpenRouter, Unipile, Supabase), automações em Python e web scraping, e entregou funcionalidades em 4 produtos SaaS internos com Supabase Edge Functions e IA Generativa (LLMs).",
        ],
      },
      {
        title: "Estagiário de Pesquisa de Mercado",
        company: "Câmara Ítalo-Brasileira de Comércio",
        period: "Jun 2021 – Dez 2021",
        location: "Belo Horizonte, MG",
        bullets: [
          "Pesquisa de mercado e análise de tendências para empresas associadas, com atendimento a clientes em português, italiano e inglês.",
        ],
      },
    ],
    projects_title: "Projetos",
    projects: [
      {
        title: "DeepMeet — plataforma de inteligência de reuniões com IA (Vennx)",
        subtitle: "Python, FastAPI, React, GPT-4, RAG",
        bullets: [
          "Projetou o pipeline de IA que converte mais de 100 gravações mensais do Microsoft Teams em insights estruturados (resumos, itens de ação, oportunidades) com Deepgram, GPT-4 via OpenRouter e RAG, sincronizado ao HubSpot CRM.",
        ],
      },
      {
        title: "LinkedIn Bot — plataforma de automação de vendas com IA (Vennx)",
        subtitle: "Python, FastAPI, Celery, PostgreSQL, React",
        bullets: [
          "Projetou uma arquitetura modular de automação para prospecção, enriquecimento de leads e mensagens (API Unipile, classificação de leads com OpenAI/GPT), com processamento em segundo plano via Celery, recuperação de falhas e dashboard de monitoramento para mais de 500 leads por mês.",
        ],
      },
    ],
    education_title: "Formação Acadêmica",
    education: [
      { degree: "Bacharelado em Engenharia de Software", school: "PUC Minas", period: "Jan 2023 – Jun 2027 (previsão)" },
      { degree: "Engenharia Química (disciplinas cursadas)", school: "Politecnico di Milano, Itália", period: "Ago 2022 – Dez 2022" },
      { degree: "Ensino Médio Internacional & Diploma Técnico em Administração", school: "Fundação Torino", period: "2022" },
    ],
    certs_title: "Formação Complementar",
    certs: [
      "Administração de Sistemas Red Hat (certificado de participação), 2024",
    ],
    langs_title: "Idiomas",
    langs: [
      { lang: "Português", level: "Nativo" },
      { lang: "Italiano", level: "Nativo / Fluente" },
      { lang: "Inglês", level: "Profissional / Avançado" },
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
            <span className="flex items-center gap-1.5"><MapPin size={11} /> Belo Horizonte, MG — Brazil (UTC-3)</span>
            <a href="https://linkedin.com/in/renato-cazzoletti" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-white print:text-gray-600 transition-colors">
              <LinkedinIcon /> linkedin.com/in/renato-cazzoletti
            </a>
            <a href="https://github.com/renatoctti" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-white print:text-gray-600 transition-colors">
              <GithubIcon /> github.com/renatoctti
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
            </div>
          ))}
        </Section>

        {/* Projects */}
        <Section title={c.projects_title}>
          {c.projects.map((p, i) => (
            <div key={i} className="mb-4 last:mb-0">
              <div className="flex items-center gap-2 mb-0.5">
                <span className="text-white print:text-gray-900 font-semibold text-sm">{p.title}</span>
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
