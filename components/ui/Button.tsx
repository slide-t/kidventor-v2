import { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
};

export default function Button({
  className,
  variant = "primary",
  children,
  ...props
}: ButtonProps) {
  const variants = {
    primary:
      "bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:scale-105 hover:shadow-lg",

    secondary:
      "border border-white/20 bg-white/5 text-white hover:bg-white/10",
  };

  return (
    <button
      className={cn(
        "rounded-xl px-6 py-3 font-semibold transition-all duration-300",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}