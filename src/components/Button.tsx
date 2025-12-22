import { ButtonHTMLAttributes } from "react";
import { clsx } from "clsx";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(
        "inline-flex items-center justify-center rounded-md transition-all duration-200 hover:scale-105",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        {
          "bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200":
            variant === "primary",
          "bg-white dark:bg-black text-black dark:text-white border-2 border-black dark:border-white hover:bg-gray-100 dark:hover:bg-gray-800":
            variant === "secondary",
          "bg-transparent text-black dark:text-white border-2 border-black dark:border-white hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black":
            variant === "outline",
          "px-3 py-1.5 text-sm": size === "sm",
          "px-6 py-3": size === "md",
          "px-8 py-4 text-lg": size === "lg",
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
