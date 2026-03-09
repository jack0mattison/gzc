import type { AboutContent } from "@/lib/content";
import { SectionWrapper } from "./SectionWrapper";

type Props = {
  about: AboutContent;
};

export function About({ about }: Props) {
  return (
    <SectionWrapper id="about" title={about.heading}>
      <article className="card-surface px-5 py-6 sm:px-7 sm:py-7 lg:px-8 lg:py-8">
        <div className="space-y-3 text-sm leading-relaxed text-slate-700 sm:text-[0.95rem]">
          {about.body.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </article>
    </SectionWrapper>
  );
}

