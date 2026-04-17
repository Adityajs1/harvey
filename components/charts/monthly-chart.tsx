// components/charts/monthly-chart.tsx

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
import { CalendarDays } from "lucide-react";

const data = [
  { month: "Jan", emi: 21580 },
  { month: "Feb", emi: 21580 },
  { month: "Mar", emi: 21580 },
  { month: "Apr", emi: 21580 },
  { month: "May", emi: 21580 },
  { month: "Jun", emi: 21580 },
];

export default function MonthlyChart() {
  return (
    <Card className="bg-zinc-900 border-zinc-800 rounded-2xl shadow-xl">
      <CardContent className="p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-10 w-10 rounded-xl bg-zinc-800 flex items-center justify-center">
            <CalendarDays className="h-5 w-5" />
          </div>

          <div>
            <p className="text-sm text-zinc-400">
              Monthly View
            </p>

            <h2 className="font-semibold">
              EMI Payment Timeline
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
                dataKey="month"
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
                dataKey="emi"
                radius={[10, 10, 0, 0]}
                fill="#ffffff"
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}