// components/charts/principal-interest-chart.tsx

"use client";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";
import { Card, CardContent } from "@/components/ui/card";
import { ChartColumn } from "lucide-react";

const data = [
  { month: "1", principal: 3200, interest: 18300 },
  { month: "2", principal: 3250, interest: 18250 },
  { month: "3", principal: 3320, interest: 18180 },
  { month: "4", principal: 3400, interest: 18100 },
  { month: "5", principal: 3470, interest: 18030 },
  { month: "6", principal: 3550, interest: 17950 },
  { month: "7", principal: 3620, interest: 17880 },
  { month: "8", principal: 3710, interest: 17790 },
  { month: "9", principal: 3790, interest: 17710 },
  { month: "10", principal: 3880, interest: 17620 },
  { month: "11", principal: 3970, interest: 17530 },
  { month: "12", principal: 4050, interest: 17450 },
];

export default function PrincipalInterestChart() {
  return (
    <Card className="bg-zinc-900 border-zinc-800 rounded-2xl shadow-xl">
      <CardContent className="p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-10 w-10 rounded-xl bg-zinc-800 flex items-center justify-center">
            <ChartColumn className="h-5 w-5" />
          </div>

          <div>
            <p className="text-sm text-zinc-400">
              EMI Breakdown
            </p>

            <h2 className="font-semibold">
              Principal vs Interest
            </h2>
          </div>
        </div>

        <div className="h-[320px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <defs>
                <linearGradient
                  id="principal"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop
                    offset="5%"
                    stopColor="#22c55e"
                    stopOpacity={0.8}
                  />
                  <stop
                    offset="95%"
                    stopColor="#22c55e"
                    stopOpacity={0}
                  />
                </linearGradient>

                <linearGradient
                  id="interest"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop
                    offset="5%"
                    stopColor="#ef4444"
                    stopOpacity={0.8}
                  />
                  <stop
                    offset="95%"
                    stopColor="#ef4444"
                    stopOpacity={0}
                  />
                </linearGradient>
              </defs>

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

              <Area
                type="monotone"
                dataKey="principal"
                stroke="#22c55e"
                fillOpacity={1}
                fill="url(#principal)"
              />

              <Area
                type="monotone"
                dataKey="interest"
                stroke="#ef4444"
                fillOpacity={1}
                fill="url(#interest)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}