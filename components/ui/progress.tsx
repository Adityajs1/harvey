"use client";

type ProgressProps = {
  value?: number;
  className?: string;
};

export function Progress({
  value = 0,
  className = "",
}: ProgressProps) {
  return (
    <div className={`h-2 w-full bg-zinc-800 rounded-full overflow-hidden ${className}`}>
      <div
        className="h-full bg-white transition-all duration-500"
        style={{ width: `${value}%` }}
      />
    </div>
  );
}