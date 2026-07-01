import * as React from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "default" | "secondary" | "outline" | "ghost";
type ButtonSize = "default" | "sm" | "icon";

const variants: Record<ButtonVariant, string> = {
  default:
    "bg-primary text-primary-foreground shadow-sm hover:bg-primary/90 focus-visible:ring-primary/40",
  secondary:
    "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80 focus-visible:ring-secondary/40",
  outline:
    "border border-input bg-background/70 shadow-sm hover:bg-accent hover:text-accent-foreground focus-visible:ring-ring/35",
  ghost: "hover:bg-accent hover:text-accent-foreground focus-visible:ring-ring/35",
};

const sizes: Record<ButtonSize, string> = {
  default: "h-10 px-4 py-2",
  sm: "h-9 px-3",
  icon: "h-10 w-10",
};

export function buttonVariants({
  variant = "default",
  size = "default",
  className,
}: {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
} = {}) {
  return cn(
    "inline-flex shrink-0 items-center justify-center gap-2 rounded-md text-sm font-medium transition-colors",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    "disabled:pointer-events-none disabled:opacity-50",
    variants[variant],
    sizes[size],
    className,
  );
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <button className={buttonVariants({ variant, size, className })} ref={ref} {...props} />
  ),
);
Button.displayName = "Button";

export { Button };
