"use client";

import Image from "next/image";
import { useState } from "react";
import type { HeroContent } from "@/lib/content";

type Props = {
  hero: HeroContent;
};

export function Hero({ hero }: Props) {
  const [imageError, setImageError] = useState(false);

  return (
    <header
      id="hero"
      className="section-shell no-print pt-14 pb-10 sm:pt-20 sm:pb-14 lg:pt-24 lg:pb-18"
    >
      <div className="card-surface relative overflow-hidden px-6 py-8 sm:px-10 sm:py-10 lg:px-12 lg:py-12">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-brand-accent/6 via-transparent to-brand-accent/10" />
        <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center">
          <div className="flex-1 space-y-4 sm:space-y-5">
            <div className="flex flex-wrap items-center gap-2">
              <span className="pill bg-white/90 text-brand-accent">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-accent" />
                {hero.badge}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-[0.7rem] font-medium text-emerald-700">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                <span>{hero.availability}</span>
              </span>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.32em] text-slate-500">
                {hero.cvLabel}
              </p>
              <h1 className="mt-2 font-serif text-3xl leading-tight text-slate-900 sm:text-4xl lg:text-[2.6rem]">
                {hero.name}
              </h1>
            </div>
            <p className="text-base font-semibold text-brand-accent sm:text-lg">
              {hero.title}
            </p>
            <p className="max-w-xl text-sm text-slate-600 sm:text-base">
              {hero.subtitle}
            </p>
            <div className="flex flex-wrap items-center gap-3 text-sm text-slate-600">
              <div className="inline-flex items-center gap-1.5 rounded-full bg-slate-50 px-3 py-1 text-xs sm:text-sm">
                <LocationIcon />
                <span>{hero.locationLine}</span>
              </div>
            </div>
          </div>
          <div className="flex justify-start lg:justify-end lg:pl-10">
            <div className="relative h-40 w-40 shrink-0 overflow-hidden rounded-3xl border border-white/80 bg-slate-100 shadow-soft sm:h-48 sm:w-48 lg:h-52 lg:w-52">
              {imageError ? (
                <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200">
                  <span className="text-3xl font-semibold tracking-tight text-slate-500">
                    GZC
                  </span>
                </div>
              ) : (
                <Image
                  src="/images/guiny.jpg"
                  alt={hero.altText}
                  fill
                  sizes="(min-width: 1024px) 13rem, (min-width: 640px) 12rem, 10rem"
                  className="object-cover"
                  priority
                  onError={() => setImageError(true)}
                />
              )}
            </div>
          </div>
        </div>
        <div className="relative mt-6 flex items-center justify-between text-xs text-slate-500">
          <p className="hidden sm:block">{hero.scrollHint}</p>
          <a
            href="#about"
            className="group inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-white/80 px-3 py-1.5 text-xs font-medium text-slate-700 shadow-sm transition hover:border-brand-accent/60 hover:text-brand-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 focus-visible:ring-offset-white"
          >
            <span>{hero.ctaLabel}</span>
            <span
              aria-hidden="true"
              className="flex h-5 w-5 items-center justify-center rounded-full bg-brand-accent/10 text-brand-accent transition group-hover:bg-brand-accent group-hover:text-white"
            >
              <ChevronDownIcon />
            </span>
          </a>
        </div>
      </div>
    </header>
  );
}

function LocationIcon() {
  return (
    <svg
      className="h-3.5 w-3.5 text-brand-accent"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M10 2.5c-2.623 0-4.75 2.127-4.75 4.75 0 3.32 3.634 7.238 4.304 7.968.115.125.279.197.446.197.168 0 .331-.072.446-.197.67-.73 4.304-4.648 4.304-7.968 0-2.623-2.127-4.75-4.75-4.75zm0 6.5a1.75 1.75 0 1 1 0-3.5 1.75 1.75 0 0 1 0 3.5z"
        fill="currentColor"
      />
    </svg>
  );
}

function ChevronDownIcon() {
  return (
    <svg
      className="h-3 w-3"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M5.5 7.5 10 12l4.5-4.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

