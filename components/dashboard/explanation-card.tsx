// components/dashboard/explanation-card.tsx

"use client";

import {
  Sparkles,
  TriangleAlert,
  CircleCheckBig,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

type ExplanationCardProps = {
  summary?: string;
};

export default function ExplanationCard({
  summary = "Your loan interest rate appears slightly above average. A long repayment tenure means you may pay a significant amount in total interest. However, the absence of foreclosure charges gives you flexibility to close the loan early and save money.",
}: ExplanationCardProps) {
  return (
    <Card className="bg-zinc-900 border-zinc-800 rounded-2xl shadow-xl">
      <CardContent className="p-6">
        <div className="flex items-center gap-3 mb-5">
          <div className="h-10 w-10 rounded-xl bg-zinc-800 flex items-center justify-center">
            <Sparkles className="h-5 w-5" />
          </div>

          <div>
            <p className="text-sm text-zinc-400">
              AI Explanation
            </p>

            <h2 className="font-semibold">
              What This Means For You
            </h2>
          </div>
        </div>

        <p className="text-sm leading-7 text-zinc-300">
          {summary}
        </p>

        <div className="mt-6 space-y-3">
          <div className="flex gap-3 text-sm text-zinc-300">
            <TriangleAlert className="h-4 w-4 text-red-500 mt-0.5" />
            Long tenure may increase total interest paid.
          </div>

          <div className="flex gap-3 text-sm text-zinc-300">
            <CircleCheckBig className="h-4 w-4 text-green-500 mt-0.5" />
            Early repayment flexibility is beneficial.
          </div>
        </div>
      </CardContent>
    </Card>
  );
}