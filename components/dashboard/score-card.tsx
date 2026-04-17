// components/dashboard/score-card.tsx

"use client";

import {
  ShieldAlert,
  ShieldCheck,
  ShieldQuestion,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type ScoreCardProps = {
  score?: number;
};

export default function ScoreCard({
  score = 0,
}: ScoreCardProps) {
  const getRisk = (): {
    label: string;
    color: "default" | "secondary" | "destructive" | "outline";
    icon: React.ReactNode;
    desc: string;
  } => {
    if (score < 45)
      return {
        label: "High Risk",
        color: "destructive",
        icon: <ShieldAlert className="h-5 w-5" />,
        desc: "Expensive or borrower-unfriendly terms detected.",
      };

    if (score < 75)
      return {
        label: "Moderate",
        color: "secondary",
        icon: <ShieldQuestion className="h-5 w-5" />,
        desc: "Mixed terms. Some clauses may need attention.",
      };

    return {
      label: "Healthy",
      color: "default",
      icon: <ShieldCheck className="h-5 w-5" />,
      desc: "Loan terms appear balanced and favorable.",
    };
  };

  const risk = getRisk();

  return (
    <Card className="bg-zinc-900 border-zinc-800 rounded-2xl shadow-xl">
      <CardContent className="p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm text-zinc-400 mb-2">
              Loan Health Score
            </p>

            <h2 className="text-4xl font-bold">
              {score}/100
            </h2>
          </div>

          <div className="h-12 w-12 rounded-xl bg-zinc-800 flex items-center justify-center">
            {risk.icon}
          </div>
        </div>

        <Badge
          variant={risk.color}
          className="mt-5"
        >
          {risk.label}
        </Badge>

        <p className="text-sm text-zinc-400 mt-4 leading-6">
          {risk.desc}
        </p>
      </CardContent>
    </Card>
  );
}