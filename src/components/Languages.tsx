import type { SiteCopy, LanguageItem } from "@/lib/content";
import { SectionWrapper } from "./SectionWrapper";

type Props = {
  languages: SiteCopy["languages"];
};

export function Languages({ languages }: Props) {
  return (
    <SectionWrapper
      id="languages"
      title={languages.heading}
      eyebrow={languages.heading}
    >
      <ul className="grid gap-3 sm:grid-cols-2">
        {languages.items.map((item: LanguageItem) => (
          <li
            key={item.name}
            className="card-surface flex items-start justify-between gap-3 px-4 py-4 sm:px-5 sm:py-4"
          >
            <div className="min-w-0">
              <p className="text-sm font-semibold text-slate-900">
                {item.name}
              </p>
              <p className="text-xs text-slate-600 sm:text-[0.8rem]">
                {item.level}
              </p>
              {item.note ? (
                <p className="mt-1 text-[0.72rem] text-slate-600">{item.note}</p>
              ) : null}
            </div>
            {item.badge ? (
              <span className="mt-0.5 inline-flex h-6 flex-none items-center rounded-full bg-emerald-50 px-2 text-[0.68rem] font-medium text-emerald-700 whitespace-nowrap">
                {item.badge}
              </span>
            ) : null}
          </li>
        ))}
      </ul>
    </SectionWrapper>
  );
}

