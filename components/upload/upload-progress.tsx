"use client";

import { Loader2, ScanSearch, CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { Progress } from "../ui/progress";

type UploadProgressProps = {
  progress?: number;
  status?: "uploading" | "analyzing" | "done";
};

export default function UploadProgress({
  progress = 65,
  status = "analyzing",
}: UploadProgressProps) {
  const getTitle = () => {
    if (status === "uploading") return "Uploading document...";
    if (status === "done") return "Analysis complete";
    return "Analyzing loan terms...";
  };

  const getDesc = () => {
    if (status === "uploading")
      return "Securely sending your file for processing.";
    if (status === "done")
      return "Your report is ready to review.";
    return "Scanning clauses, rates, penalties, and repayment structure.";
  };

  const getIcon = () => {
    if (status === "done")
      return <CheckCircle2 className="h-5 w-5 text-green-500" />;

    if (status === "uploading")
      return <Loader2 className="h-5 w-5 animate-spin" />;

    return <ScanSearch className="h-5 w-5 text-yellow-500" />;
  };

  return (
    <Card className="bg-zinc-900 border-zinc-800 rounded-2xl shadow-xl">
      <CardContent className="p-6 space-y-5">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-zinc-800 flex items-center justify-center">
            {getIcon()}
          </div>

          <div>
            <p className="font-semibold">{getTitle()}</p>
            <p className="text-sm text-zinc-400">
              {getDesc()}
            </p>
          </div>
        </div>

        <Progress value={progress} className="h-2" />

        <div className="flex items-center justify-between text-xs text-zinc-400">
          <span>{progress}% completed</span>
          <span>Harvey Engine</span>
        </div>
      </CardContent>
    </Card>
  );
}