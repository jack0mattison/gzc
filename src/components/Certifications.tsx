import type { CertificationItem, SiteCopy } from "@/lib/content";
import { SectionWrapper } from "./SectionWrapper";

type Props = {
  certifications: SiteCopy["certifications"];
};

export function Certifications({ certifications }: Props) {
  return (
    <SectionWrapper
      id="certifications"
      title={certifications.heading}
      eyebrow={certifications.heading}
    >
      <ul className="space-y-3 sm:space-y-4">
        {certifications.items.map((item: CertificationItem, index) => (
          <li
            key={`${item.name}-${index}`}
            className="card-surface px-4 py-4 sm:px-5 sm:py-4"
          >
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <div>
                <h3 className="text-sm font-semibold text-slate-900">
                  {item.name}
                </h3>
                <p className="text-xs text-slate-600 sm:text-[0.8rem]">
                  {item.issuer}
                </p>
              </div>
              {item.year ? (
                <p className="mt-1 text-xs font-medium text-slate-500 sm:mt-0">
                  {item.year}
                </p>
              ) : null}
            </div>
          </li>
        ))}
      </ul>
    </SectionWrapper>
  );
}

