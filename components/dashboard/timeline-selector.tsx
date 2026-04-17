// components/dashboard/timeline-selector.tsx

"use client";

import { useState } from "react";
import { CalendarRange } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";

const ranges = [
  { label: "3 Months", value: "3m" },
  { label: "6 Months", value: "6m" },
  { label: "12 Months", value: "12m" },
  { label: "3 Years", value: "3y" },
  { label: "5 Years", value: "5y" },
];

export default function TimelineSelector() {
  const [selected, setSelected] = useState("12m");

  return (
    <Card className="bg-zinc-900 border-zinc-800 rounded-2xl shadow-xl">
      <CardContent className="p-6">
        <div className="flex items-center gap-3 mb-5">
          <div className="h-10 w-10 rounded-xl bg-zinc-800 flex items-center justify-center">
            <CalendarRange className="h-5 w-5" />
          </div>

          <div>
            <p className="text-sm text-zinc-400">
              Graph Timeline
            </p>

            <h2 className="font-semibold">
              Select Analysis Range
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {ranges.map((range) => (
            <Label
              key={range.value}
              htmlFor={range.value}
              className={`rounded-xl border p-4 cursor-pointer transition flex items-center gap-3 ${
                selected === range.value
                  ? "border-white bg-zinc-800"
                  : "border-zinc-800 bg-zinc-950 hover:border-zinc-700"
              }`}
            >
              <RadioGroupItem
                value={range.value}
                id={range.value}
                name="timeline"
                checked={selected === range.value}
                onChange={() => setSelected(range.value)}
              />

              <span className="text-sm font-medium">
                {range.label}
              </span>
            </Label>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}