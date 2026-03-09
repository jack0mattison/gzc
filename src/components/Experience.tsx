import type { ExperienceItem, SiteCopy } from "@/lib/content";
import { SectionWrapper } from "./SectionWrapper";

type Props = {
  experience: SiteCopy["experience"];
};

export function Experience({ experience }: Props) {
  return (
    <SectionWrapper
      id="experience"
      title={experience.heading}
      eyebrow={experience.heading}
    >
      <div className="space-y-4 sm:space-y-5">
        {experience.items.map((item: ExperienceItem, index) => (
          <article
            key={`${item.company}-${index}`}
            className="card-surface relative overflow-hidden px-5 py-5 sm:px-6 sm:py-6"
          >
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <div>
                <h3 className="text-sm font-semibold text-slate-900 sm:text-base">
                  {item.role}
                </h3>
                <p className="text-xs text-slate-600 sm:text-sm">
                  {item.company} · {item.location}
                </p>
              </div>
              <p className="mt-1 text-xs font-medium text-slate-500 sm:mt-0">
                {item.period}
              </p>
            </div>
            <ul className="mt-3 space-y-1.5 text-xs leading-relaxed text-slate-700 sm:text-[0.84rem]">
              {item.bullets.map((point, idx) => (
                <li key={idx} className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand-accent/70" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </SectionWrapper>
  );
}

