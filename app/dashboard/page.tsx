// app/dashboard/page.tsx

import Navbar from "@/components/layout/navbar";
import ScoreCard from "@/components/dashboard/score-card";
import SummaryCard from "@/components/dashboard/summary-card";
import TimelineSelector from "@/components/dashboard/timeline-selector";
import ExplanationCard from "@/components/dashboard/explanation-card";
import MetricsGrid from "@/components/dashboard/metrics-grid";

import PrincipalInterestChart from "@/components/charts/principal-interest-chart";
import MonthlyChart from "@/components/charts/monthly-chart";
import PayoffChart from "@/components/charts/payoff-chart";
import SavingsChart from "@/components/charts/savings-chart";

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <Navbar />

      <section className="max-w-7xl mx-auto px-6 py-14">
        {/* Heading */}
        <div className="mb-10">
          <p className="text-sm uppercase tracking-[0.25em] text-zinc-400 mb-3">
            Loan Report
          </p>

          <h1 className="text-4xl md:text-5xl font-bold">
            Smart Loan Analysis
          </h1>

          <p className="mt-4 text-zinc-400 text-lg max-w-3xl leading-8">
            Understand your interest burden, repayment path,
            hidden risks, and opportunities to save money.
          </p>
        </div>

        {/* Top Grid */}
        <div className="grid xl:grid-cols-3 gap-6">
          <div className="xl:col-span-1">
            <ScoreCard score={0} />
          </div>

          <div className="xl:col-span-2">
            <SummaryCard />
          </div>
        </div>

        {/* Metrics */}
        <div className="mt-6">
          <MetricsGrid />
        </div>

        {/* AI + Timeline */}
        <div className="grid xl:grid-cols-2 gap-6 mt-6">
          <ExplanationCard />
          <TimelineSelector />
        </div>

        {/* Charts */}
        <div className="grid xl:grid-cols-2 gap-6 mt-6">
          <PrincipalInterestChart />
          <MonthlyChart />
        </div>

        <div className="grid xl:grid-cols-2 gap-6 mt-6">
          <PayoffChart />
          <SavingsChart />
        </div>
      </section>
    </main>
  );
}