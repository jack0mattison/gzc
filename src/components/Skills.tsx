import type { SiteCopy, SkillGroup } from "@/lib/content";
import { SectionWrapper } from "./SectionWrapper";

type Props = {
  skills: SiteCopy["skills"];
};

export function Skills({ skills }: Props) {
  return (
    <SectionWrapper
      id="skills"
      title={skills.heading}
      eyebrow={skills.heading}
    >
      <p className="max-w-2xl text-sm text-slate-700 sm:text-[0.95rem]">
        {skills.intro}
      </p>
      <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skills.groups.map((group: SkillGroup) => (
          <div
            key={group.name}
            className="card-surface h-full px-4 py-4 sm:px-5 sm:py-5"
          >
            <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-accent">
              {group.name}
            </h3>
            <ul className="mt-3 flex flex-wrap gap-1.5">
              {group.skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-full bg-slate-50 px-2.5 py-1 text-[0.7rem] font-medium text-slate-700"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}

