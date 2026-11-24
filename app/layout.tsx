import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/LanguageContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Renato Cazzoletti — Full-Stack Engineer, AI / LLM Applications",
  description:
    "Portfolio of Renato Cazzoletti — full-stack software engineer building LLM applications (agents, RAG, evaluation) and production systems with TypeScript, Python, React and PostgreSQL. Available for remote roles.",
  keywords: ["software engineer", "full cycle", "portfolio", "TypeScript", "Node.js", "NestJS", "React", "PostgreSQL", "AWS", "AI", "LLM", "RAG", "agents", "MCP", "Python", "automation", "remote"],
  authors: [{ name: "Renato Cazzoletti" }],
  openGraph: {
    title: "Renato Cazzoletti — Full-Stack Engineer, AI / LLM Applications",
    description:
      "Production systems end to end, and LLM applications that are measured: agents, RAG and evaluation.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
