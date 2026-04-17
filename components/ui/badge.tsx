// components/ui/badge.tsx

import * as React from "react";

type BadgeProps = React.HTMLAttributes<HTMLSpanElement> & {
  variant?: "default" | "secondary" | "destructive" | "outline";
};

export function Badge({
  className = "",
  variant = "default",
  children,
  ...props
}: BadgeProps) {
  const styles = {
    default:
      "bg-green-500/15 text-green-400 border border-green-500/30",
    secondary:
      "bg-yellow-500/15 text-yellow-400 border border-yellow-500/30",
    destructive:
      "bg-red-500/15 text-red-400 border border-red-500/30",
    outline:
      "bg-zinc-800 text-zinc-300 border border-zinc-700",
  };

  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${styles[variant]} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
}