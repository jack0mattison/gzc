"use client";

import type { Locale } from "@/lib/content";

type Props = {
  locale: Locale;
  onChange: (locale: Locale) => void;
};

export function LanguageToggle({ locale, onChange }: Props) {
  const isSpanish = locale === "es";

  return (
    <div
      className="no-print inline-flex items-center gap-1 rounded-full border border-slate-200/80 bg-white/90 px-1.5 py-1 shadow-soft backdrop-blur"
      role="group"
      aria-label="Seleccionar idioma / Select language"
    >
      <button
        type="button"
        onClick={() => onChange("es")}
        className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 focus-visible:ring-offset-white ${
          isSpanish ? "bg-brand-accent text-white" : "text-slate-600 hover:bg-slate-100"
        }`}
        aria-pressed={isSpanish}
      >
        <span aria-hidden="true">🇪🇸</span>
        <span className="hidden sm:inline">ES</span>
      </button>
      <span className="h-4 w-px bg-slate-200" aria-hidden="true" />
      <button
        type="button"
        onClick={() => onChange("en")}
        className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 focus-visible:ring-offset-white ${
          !isSpanish
            ? "bg-brand-accent text-white"
            : "text-slate-600 hover:bg-slate-100"
        }`}
        aria-pressed={!isSpanish}
      >
        <span aria-hidden="true">🇬🇧</span>
        <span className="hidden sm:inline">EN</span>
      </button>
    </div>
  );
}

