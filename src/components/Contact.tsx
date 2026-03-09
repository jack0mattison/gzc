import type { SiteCopy } from "@/lib/content";
import { SectionWrapper } from "./SectionWrapper";

type Props = {
  contact: SiteCopy["contact"];
};

export function Contact({ contact }: Props) {
  const info = contact.info;

  const mailHref = `mailto:${info.email}`;
  const telHref = `tel:${info.phone.replace(/\s+/g, "")}`;

  return (
    <SectionWrapper
      id="contact"
      title={contact.heading}
      eyebrow={contact.heading}
    >
      <div className="card-surface px-5 py-5 sm:px-6 sm:py-6">
        <p className="max-w-2xl text-sm text-slate-700 sm:text-[0.95rem]">
          {contact.intro}
        </p>
        <dl className="mt-4 grid gap-3 text-sm text-slate-700 sm:grid-cols-3">
          <div>
            <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
              {info.emailLabel}
            </dt>
            <dd className="mt-1">
              <a
                href={mailHref}
                className="text-brand-accent underline-offset-2 hover:underline"
              >
                {info.email}
              </a>
            </dd>
          </div>
          <div>
            <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
              {info.phoneLabel}
            </dt>
            <dd className="mt-1">
              <a
                href={telHref}
                className="text-brand-accent underline-offset-2 hover:underline"
              >
                {info.phone}
              </a>
            </dd>
          </div>
          <div>
            <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
              {info.linkedinLabel}
            </dt>
            <dd className="mt-1">
              <a
                href={info.linkedin}
                className="text-brand-accent underline-offset-2 hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                {info.linkedin}
              </a>
            </dd>
          </div>
        </dl>
        <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
          <a
            href={mailHref}
            className="no-print inline-flex items-center gap-2 rounded-full bg-brand-accent px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-teal-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 focus-visible:ring-offset-white"
          >
            {info.contactCta}
          </a>
          {contact.printNote ? (
            <p className="text-[0.7rem] text-slate-500">{contact.printNote}</p>
          ) : null}
        </div>
      </div>
    </SectionWrapper>
  );
}

