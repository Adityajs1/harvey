"use client";

import * as React from "react";

export function RadioGroup({
  children,
  className = "",
  value,
  onValueChange,
}: {
  children: React.ReactNode;
  className?: string;
  value?: string;
  onValueChange?: (value: string) => void;
}) {
  return (
    <div className={className} role="radiogroup">
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          const childProps = child.props as { value?: string };
          return React.cloneElement(child as React.ReactElement<{ checked: boolean; onChange: () => void }>, {
            checked: childProps.value === value,
            onChange: () => onValueChange?.(childProps.value || ""),
          });
        }
        return child;
      })}
    </div>
  );
}

export function RadioGroupItem(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      type="radio"
      className="accent-white"
      {...props}
    />
  );
}