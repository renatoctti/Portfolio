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
  title: "Renato Cazzoletti — Software Engineer",
  description:
    "Portfolio of Renato Cazzoletti — Full Cycle Software Engineer (TypeScript, Node.js, React, PostgreSQL, AWS) working on AI automation, available for remote roles.",
  keywords: ["software engineer", "full cycle", "portfolio", "TypeScript", "Node.js", "NestJS", "React", "PostgreSQL", "AWS", "AI", "automation", "remote"],
  authors: [{ name: "Renato Cazzoletti" }],
  openGraph: {
    title: "Renato Cazzoletti — Software Engineer",
    description:
      "Shipping production systems end to end, and applying AI to automate the complex.",
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
