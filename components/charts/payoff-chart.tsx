// components/charts/payoff-chart.tsx

"use client";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingDown } from "lucide-react";

const data = [
  { year: "0", balance: 2000000 },
  { year: "1", balance: 1945000 },
  { year: "2", balance: 1882000 },
  { year: "3", balance: 1809000 },
  { year: "4", balance: 1723000 },
  { year: "5", balance: 1625000 },
  { year: "6", balance: 1514000 },
  { year: "7", balance: 1387000 },
  { year: "8", balance: 1242000 },
  { year: "9", balance: 1076000 },
  { year: "10", balance: 885000 },
];

export default function PayoffChart() {
  return (
    <Card className="bg-zinc-900 border-zinc-800 rounded-2xl shadow-xl">
      <CardContent className="p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-10 w-10 rounded-xl bg-zinc-800 flex items-center justify-center">
            <TrendingDown className="h-5 w-5" />
          </div>

          <div>
            <p className="text-sm text-zinc-400">
              Outstanding Balance
            </p>

            <h2 className="font-semibold">
              Loan Payoff Projection
            </h2>
          </div>
        </div>

        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="#27272a"
              />

              <XAxis
                dataKey="year"
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

              <Line
                type="monotone"
                dataKey="balance"
                stroke="#22c55e"
                strokeWidth={3}
                dot={{ r: 3 }}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}