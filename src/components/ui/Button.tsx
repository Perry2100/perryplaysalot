import Link from "next/link";

import { cx } from "@/lib/cx";

import type { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonSize = "sm" | "md";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
};

export function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  className,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full font-semibold transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--bg)]";

  const sizes: Record<ButtonSize, string> = {
    sm: "h-10 px-4 text-sm",
    md: "h-12 px-5 text-sm",
  };

  const variants: Record<ButtonVariant, string> = {
    primary:
      "bg-[color:var(--accent)] text-black hover:brightness-110 active:brightness-95",
    secondary:
      "border border-[color:rgba(244,176,122,0.22)] bg-[rgba(255,255,255,0.04)] text-white hover:bg-[rgba(255,255,255,0.07)]",
    ghost: "text-[rgba(246,241,234,0.75)] hover:text-white",
  };

  return (
    <Link href={href} className={cx(base, sizes[size], variants[variant], className)}>
      {children}
    </Link>
  );
}
