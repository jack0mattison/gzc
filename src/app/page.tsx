"use client";

import { useEffect, useState } from "react";
import { copy, type Locale } from "@/lib/content";
import { LanguageToggle } from "@/components/LanguageToggle";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Education } from "@/components/Education";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { Certifications } from "@/components/Certifications";
import { Languages } from "@/components/Languages";
import { Contact } from "@/components/Contact";

export default function HomePage() {
  const [locale, setLocale] = useState<Locale>("es");
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const content = copy[locale];

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = locale === "es" ? "es" : "en";
    }
  }, [locale]);

  const handleLocaleChange = (next: Locale) => {
    setLocale(next);
    setMobileNavOpen(false);
  };

  return (
    <div className="min-h-screen">
      <header className="no-print sticky top-0 z-30 border-b border-slate-200/70 bg-white/90 backdrop-blur">
        <nav
          className="section-shell flex items-center justify-between py-2 text-xs sm:py-3 sm:text-sm lg:py-4"
          aria-label={locale === "es" ? "Navegación principal" : "Primary navigation"}
        >
          <div className="flex items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-slate-500">
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-brand-accent/10 text-[0.9rem] text-brand-accent">
              G
            </span>
            <span className="hidden xs:inline">Guiny Zapata Cornejo</span>
          </div>
          <div className="flex items-center gap-2 sm:gap-4">
            <ul className="hidden items-center gap-4 text-[0.78rem] text-slate-600 sm:flex">
              {content.nav
                .filter((item) => item.id !== "hero")
                .map((item) => (
                  <li key={item.id}>
                    <a
                      href={item.href}
                      className="rounded-full px-2.5 py-1 transition hover:bg-slate-100 hover:text-brand-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
            </ul>
            <div className="flex-shrink-0">
              <LanguageToggle locale={locale} onChange={handleLocaleChange} />
            </div>
            <button
              type="button"
              className="no-print inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-soft sm:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              aria-label={mobileNavOpen ? "Cerrar navegación" : "Abrir navegación"}
              onClick={() => setMobileNavOpen((open) => !open)}
            >
              <span className="sr-only">
                {mobileNavOpen
                  ? locale === "es"
                    ? "Cerrar navegación"
                    : "Close navigation"
                  : locale === "es"
                    ? "Abrir navegación"
                    : "Open navigation"}
              </span>
              <span className="flex h-3.5 w-3.5 flex-col justify-between">
                <span
                  className={`block h-[1.5px] w-full rounded-full bg-slate-600 transition-transform duration-200 ease-out ${
                    mobileNavOpen ? "rotate-45" : ""
                  }`}
                />
                <span
                  className={`block h-[1.5px] w-full rounded-full bg-slate-600 transition-opacity duration-150 ${
                    mobileNavOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`block h-[1.5px] w-full rounded-full bg-slate-600 transition-transform duration-200 ease-out ${
                    mobileNavOpen ? "-rotate-45" : ""
                  }`}
                />
              </span>
            </button>
          </div>
        </nav>
        {mobileNavOpen ? (
          <div className="no-print border-t border-slate-200/80 bg-white/95 sm:hidden">
            <div className="section-shell py-2">
              <ul className="flex flex-col gap-1.5 text-sm text-slate-700">
                {content.nav
                  .filter((item) => item.id !== "hero")
                  .map((item) => (
                    <li key={item.id}>
                      <a
                        href={item.href}
                        className="block rounded-full px-3 py-1.5 transition hover:bg-slate-100 hover:text-brand-accent"
                        onClick={() => setMobileNavOpen(false)}
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        ) : null}
      </header>

      <main className="mx-auto max-w-6xl pb-16 pt-3 sm:pt-5 lg:pb-20">
        <Hero hero={content.hero} />
        <About about={content.about} />
        <Education education={content.education} />
        <Experience experience={content.experience} />
        <Skills skills={content.skills} />
        <Certifications certifications={content.certifications} />
        <Languages languages={content.languages} />
        <Contact contact={content.contact} />
      </main>
    </div>
  );
}

