// components/dashboard/summary-card.tsx

"use client";

import {
  BadgeIndianRupee,
  Percent,
  CalendarClock,
  Wallet,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

type SummaryCardProps = {
  principal?: string;
  rate?: string;
  tenure?: string;
  emi?: string;
};

export default function SummaryCard({
  principal = "",
  rate = "",
  tenure = "",
  emi = "",
}: SummaryCardProps) {
  const items = [
    {
      label: "Loan Amount",
      value: principal,
      icon: <BadgeIndianRupee className="h-5 w-5" />,
    },
    {
      label: "Interest Rate",
      value: rate,
      icon: <Percent className="h-5 w-5" />,
    },
    {
      label: "Tenure",
      value: tenure,
      icon: <CalendarClock className="h-5 w-5" />,
    },
    {
      label: "Monthly EMI",
      value: emi,
      icon: <Wallet className="h-5 w-5" />,
    },
  ];

  return (
    <Card className="bg-zinc-900 border-zinc-800 rounded-2xl shadow-xl">
      <CardContent className="p-6">
        <div className="mb-5">
          <p className="text-sm text-zinc-400">
            Loan Snapshot
          </p>

          <h2 className="text-xl font-semibold mt-1">
            Key Terms Summary
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {items.map((item, i) => (
            <div
              key={i}
              className="rounded-xl border border-zinc-800 bg-zinc-950 p-4"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="h-10 w-10 rounded-xl bg-zinc-800 flex items-center justify-center">
                  {item.icon}
                </div>

                <p className="text-sm text-zinc-400">
                  {item.label}
                </p>
              </div>

              <p className="text-lg font-semibold">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}