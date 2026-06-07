import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/LanguageContext";
import { Analytics } from "@vercel/analytics/next";

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
    "Portfolio of Renato Cazzoletti — Software Engineering student at PUC Minas, Full-Stack Software Developer at Vennx, AI & automation enthusiast.",
  keywords: ["software engineer", "portfolio", "python", "AI", "automation", "React", "Next.js"],
  authors: [{ name: "Renato Cazzoletti" }],
  openGraph: {
    title: "Renato Cazzoletti — Software Engineer",
    description:
      "Building intelligent tools that automate the complex and amplify human potential.",
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
        <Analytics />
      </body>
    </html>
  );
}
