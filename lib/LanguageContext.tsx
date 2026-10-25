"use client";

import { createContext, useContext, useSyncExternalStore } from "react";
import { translations, type Lang, type Translations } from "./i18n";

// The saved language lives in localStorage; useSyncExternalStore reads it after
// hydration (server snapshot is always "en"), so there is no mismatch.
const listeners = new Set<() => void>();

const subscribe = (cb: () => void) => {
  listeners.add(cb);
  return () => {
    listeners.delete(cb);
  };
};

const getSnapshot = (): Lang => {
  try {
    return localStorage.getItem("lang") === "pt" ? "pt" : "en";
  } catch {
    return "en";
  }
};

const getServerSnapshot = (): Lang => "en";

interface LanguageContextValue {
  lang: Lang;
  t: Translations;
  toggle: () => void;
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: "en",
  t: translations.en,
  toggle: () => {},
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const lang = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const toggle = () => {
    try {
      localStorage.setItem("lang", lang === "en" ? "pt" : "en");
    } catch {
      // storage unavailable: the language just won't persist
    }
    listeners.forEach((cb) => cb());
  };

  return (
    <LanguageContext.Provider value={{ lang, t: translations[lang], toggle }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
