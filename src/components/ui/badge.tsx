import * as React from "react";
import { cn } from "@/lib/utils";

type BadgeVariant = "default" | "secondary" | "outline" | "signal";

const variants: Record<BadgeVariant, string> = {
  default: "border-transparent bg-primary text-primary-foreground",
  secondary: "border-transparent bg-secondary text-secondary-foreground",
  outline: "border-border text-foreground",
  signal: "border-cyan-500/40 bg-cyan-500/10 text-cyan-700 dark:text-cyan-200",
};

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: BadgeVariant;
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-md border px-2 py-0.5 text-xs font-medium transition-colors",
        variants[variant],
        className,
      )}
      {...props}
    />
  );
}

export { Badge };
