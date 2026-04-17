// components/ui/input.tsx

"use client";

import * as React from "react";

type InputProps =
  React.InputHTMLAttributes<HTMLInputElement>;

export function Input({
  className = "",
  type = "text",
  ...props
}: InputProps) {
  return (
    <input
      type={type}
      className={`w-full rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-500 focus:border-white ${className}`}
      {...props}
    />
  );
}