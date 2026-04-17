// components/ui/card.tsx

import * as React from "react";

type DivProps = React.HTMLAttributes<HTMLDivElement>;

export function Card({
  className = "",
  children,
  ...props
}: DivProps) {
  return (
    <div
      className={`rounded-2xl border border-zinc-800 bg-zinc-900 shadow-xl ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardContent({
  className = "",
  children,
  ...props
}: DivProps) {
  return (
    <div
      className={`p-6 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}