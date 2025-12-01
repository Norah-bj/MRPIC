import type { ComponentPropsWithoutRef, ReactNode } from "react";
import clsx from "clsx";

type BadgeProps = {
  children: ReactNode;
} & ComponentPropsWithoutRef<"span">;

export function Badge({ children, className, ...props }: BadgeProps) {
  return (
    <span
      className={clsx(
        "inline-flex items-center gap-1 border border-white/30 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white",
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
