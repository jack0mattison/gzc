import type { EducationItem, SiteCopy } from "@/lib/content";
import { SectionWrapper } from "./SectionWrapper";

type Props = {
  education: SiteCopy["education"];
};

export function Education({ education }: Props) {
  return (
    <SectionWrapper
      id="education"
      title={education.heading}
      eyebrow={education.heading}
    >
      <ol className="space-y-4 sm:space-y-5">
        {education.items.map((item: EducationItem, index) => (
          <li
            key={`${item.institution}-${index}`}
            className="card-surface relative overflow-hidden px-5 py-5 sm:px-6 sm:py-5"
          >
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <div>
                <h3 className="text-sm font-semibold text-slate-900 sm:text-base">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 sm:text-sm">
                  {item.institution} · {item.location}
                </p>
              </div>
              <p className="mt-1 text-xs font-medium text-slate-500 sm:mt-0">
                {item.period}
              </p>
            </div>
            {item.current ? (
              <p className="mt-3 inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-1 text-[0.68rem] font-medium text-emerald-700">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                {education.currentLabel}
              </p>
            ) : null}
          </li>
        ))}
      </ol>
    </SectionWrapper>
  );
}

