import { cx } from "@/lib/cx";

import type { ReactNode } from "react";

type BadgeProps = {
  children: ReactNode;
  className?: string;
};

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cx(
        "inline-flex items-center rounded-full border border-[rgba(244,176,122,0.18)] bg-[rgba(255,255,255,0.04)] px-2.5 py-1 text-xs font-medium text-[rgba(246,241,234,0.82)] backdrop-blur",
        className,
      )}
    >
      {children}
    </span>
  );
}
