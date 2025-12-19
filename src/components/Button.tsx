import type { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "neutral";
  size?: "sm" | "md" | "lg";
  children: ReactNode;
}

export default function Button({
  variant = "primary",
  size = "md",
  children,
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles =
    "font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    primary:
      "bg-primary-500 text-white hover:bg-primary-600 focus:ring-primary-500",
    secondary:
      "bg-secondary-500 text-white hover:bg-secondary-600 focus:ring-secondary-500",
    outline:
      "border-2 border-primary-500 text-primary-600 hover:bg-primary-50 focus:ring-primary-500",
    neutral:
      "bg-neutral-200 text-neutral-700 hover:bg-neutral-300 focus:ring-neutral-500",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
