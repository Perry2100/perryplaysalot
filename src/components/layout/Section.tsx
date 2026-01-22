import { cx } from "@/lib/cx";

import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
};

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className,
}: SectionProps) {
  return (
    <section id={id} className={cx("py-14 sm:py-20", className)}>
      <div className="mx-auto w-full max-w-6xl px-5">
        <div className="max-w-2xl">
          {eyebrow ? (
            <div className="text-xs font-semibold tracking-[0.22em] uppercase text-white/50">
              {eyebrow}
            </div>
          ) : null}
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            {title}
          </h2>
          {description ? (
            <p className="mt-3 text-base leading-7 text-white/70">
              {description}
            </p>
          ) : null}
        </div>
        <div className="mt-8">{children}</div>
      </div>
    </section>
  );
}
