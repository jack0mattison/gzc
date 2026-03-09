"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  id: string;
  eyebrow?: string;
  title: string;
  children: React.ReactNode;
  className?: string;
};

export function SectionWrapper({ id, eyebrow, title, children, className }: Props) {
  const ref = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      id={id}
      ref={ref}
      className={`section-shell py-10 sm:py-12 lg:py-14 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      } transition-all duration-700 ease-out ${className ?? ""}`}
    >
      <div className="mb-6 flex flex-col gap-2 sm:mb-8">
        {eyebrow ? (
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-accent">
            {eyebrow}
          </span>
        ) : null}
        <h2 className="font-serif text-2xl sm:text-3xl lg:text-[2rem] text-slate-900">
          {title}
        </h2>
      </div>
      <div className="space-y-4">{children}</div>
    </section>
  );
}

