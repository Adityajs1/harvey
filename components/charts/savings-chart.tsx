// components/charts/savings-chart.tsx

"use client";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";
import { Card, CardContent } from "@/components/ui/card";
import { PiggyBank } from "lucide-react";

const data = [
  { plan: "Current", savings: 0 },
  { plan: "+₹2k EMI", savings: 180000 },
  { plan: "+₹5k EMI", savings: 420000 },
  { plan: "1 Extra EMI", savings: 510000 },
];

export default function SavingsChart() {
  return (
    <Card className="bg-zinc-900 border-zinc-800 rounded-2xl shadow-xl">
      <CardContent className="p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-10 w-10 rounded-xl bg-zinc-800 flex items-center justify-center">
            <PiggyBank className="h-5 w-5" />
          </div>

          <div>
            <p className="text-sm text-zinc-400">
              Optimization Impact
            </p>

            <h2 className="font-semibold">
              Interest Savings Scenarios
            </h2>
          </div>
        </div>

        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="#27272a"
              />

              <XAxis
                dataKey="plan"
                stroke="#71717a"
              />

              <YAxis stroke="#71717a" />

              <Tooltip
                contentStyle={{
                  background: "#18181b",
                  border: "1px solid #27272a",
                  borderRadius: "12px",
                }}
              />

              <Bar
                dataKey="savings"
                fill="#22c55e"
                radius={[10, 10, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}