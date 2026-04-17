// app/history/page.tsx

import Navbar from "@/components/layout/navbar";
import {
  FileText,
  CalendarDays,
  ArrowRight,
  ShieldCheck,
  ShieldAlert,
  ShieldQuestion,
} from "lucide-react";
import Link from "next/link";

const reports: any[] = [];

export default function HistoryPage() {
  const badge = (risk: string) => {
    if (risk === "healthy") {
      return {
        icon: <ShieldCheck className="h-4 w-4 text-green-500" />,
        text: "Healthy",
      };
    }

    if (risk === "moderate") {
      return {
        icon: <ShieldQuestion className="h-4 w-4 text-yellow-500" />,
        text: "Moderate",
      };
    }

    return {
      icon: <ShieldAlert className="h-4 w-4 text-red-500" />,
      text: "High Risk",
    };
  };

  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <Navbar />

      <section className="max-w-6xl mx-auto px-6 py-14">
        {/* Heading */}
        <div className="mb-10">
          <p className="text-sm uppercase tracking-[0.25em] text-zinc-400 mb-3">
            Report History
          </p>

          <h1 className="text-4xl md:text-5xl font-bold">
            Previous Analyses
          </h1>

          <p className="mt-4 text-zinc-400 text-lg leading-8 max-w-2xl">
            Review previously analyzed loan documents,
            compare reports, and revisit savings insights.
          </p>
        </div>

        {/* Cards */}
        <div className="space-y-5">
          {reports.length > 0 ? reports.map((report) => {
            const status = badge(report.risk);

            return (
              <div
                key={report.id}
                className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 hover:border-zinc-700 transition"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
                  
                  {/* Left */}
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-xl bg-zinc-800 flex items-center justify-center">
                      <FileText className="h-5 w-5" />
                    </div>

                    <div>
                      <h3 className="font-semibold text-lg">
                        {report.name}
                      </h3>

                      <div className="flex items-center gap-2 mt-2 text-sm text-zinc-400">
                        <CalendarDays className="h-4 w-4" />
                        {report.date}
                      </div>
                    </div>
                  </div>

                  {/* Right */}
                  <div className="flex items-center gap-6">
                    <div className="text-right">
                      <p className="text-sm text-zinc-400">
                        Score
                      </p>

                      <p className="text-xl font-bold">
                        {report.score}/100
                      </p>
                    </div>

                    <div className="flex items-center gap-2 text-sm">
                      {status.icon}
                      {status.text}
                    </div>

                    <Link
                      href="/dashboard"
                      className="h-11 w-11 rounded-xl bg-white text-black flex items-center justify-center"
                    >
                      <ArrowRight className="h-5 w-5" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          }) : (
            <div className="text-center py-20 border border-dashed border-zinc-800 rounded-3xl">
              <p className="text-zinc-500">No reports analyzed yet.</p>
              <Link href="/upload" className="text-white mt-4 inline-block underline underline-offset-4">
                Upload your first document
              </Link>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}