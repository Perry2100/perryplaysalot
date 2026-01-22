import { cx } from "@/lib/cx";

import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export function Card({ children, className }: CardProps) {
  return (
    <div
      className={cx(
        "rounded-2xl border border-[rgba(244,176,122,0.14)] bg-[rgba(255,255,255,0.04)] p-5 shadow-sm backdrop-blur transition will-change-transform",
        className,
      )}
    >
      {children}
    </div>
  );
}
