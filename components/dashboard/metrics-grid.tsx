// components/dashboard/metrics-grid.tsx

"use client";

import {
  IndianRupee,
  Percent,
  TrendingUp,
  Clock3,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

type MetricsGridProps = {
  totalInterest?: string;
  totalPayable?: string;
  principalRatio?: string;
  payoffTime?: string;
};

export default function MetricsGrid({
  totalInterest = "₹31,79,200",
  totalPayable = "₹51,79,200",
  principalRatio = "61%",
  payoffTime = "20 Years",
}: MetricsGridProps) {
  const metrics = [
    {
      label: "Total Interest",
      value: totalInterest,
      icon: <Percent className="h-5 w-5" />,
    },
    {
      label: "Total Payable",
      value: totalPayable,
      icon: <IndianRupee className="h-5 w-5" />,
    },
    {
      label: "Principal Coverage",
      value: principalRatio,
      icon: <TrendingUp className="h-5 w-5" />,
    },
    {
      label: "Payoff Time",
      value: payoffTime,
      icon: <Clock3 className="h-5 w-5" />,
    },
  ];

  return (
    <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-4">
      {metrics.map((item, i) => (
        <Card
          key={i}
          className="bg-zinc-900 border-zinc-800 rounded-2xl shadow-xl"
        >
          <CardContent className="p-5">
            <div className="h-11 w-11 rounded-xl bg-zinc-800 flex items-center justify-center mb-4">
              {item.icon}
            </div>

            <p className="text-sm text-zinc-400">
              {item.label}
            </p>

            <h3 className="text-xl font-semibold mt-1">
              {item.value}
            </h3>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}