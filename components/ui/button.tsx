// components/ui/button.tsx

"use client";

import * as React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "outline" | "ghost" | "destructive";
};

export function Button({
  className = "",
  variant = "default",
  children,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium transition disabled:opacity-50 disabled:pointer-events-none";

  const styles = {
    default:
      "bg-white text-black hover:opacity-90",
    outline:
      "border border-zinc-700 bg-transparent text-white hover:bg-zinc-900",
    ghost:
      "bg-transparent text-white hover:bg-zinc-900",
    destructive:
      "bg-red-500 text-white hover:opacity-90",
  };

  return (
    <button
      className={`${base} ${styles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}