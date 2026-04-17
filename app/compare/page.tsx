// app/compare/page.tsx

import Navbar from "@/components/layout/navbar";
import {
  ArrowRightLeft,
  TrendingDown,
  BadgeIndianRupee,
  Clock3,
  Percent,
  Sparkles,
} from "lucide-react";

export default function ComparePage() {
  const plans = [
    {
      title: "Current Loan",
      rate: "10.5%",
      emi: "₹21,580",
      tenure: "20 Years",
      interest: "₹31,79,200",
      active: false,
    },
    {
      title: "Refinanced Option",
      rate: "8.9%",
      emi: "₹20,144",
      tenure: "17 Years",
      interest: "₹21,10,400",
      active: true,
    },
  ];

  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <Navbar />

      <section className="max-w-7xl mx-auto px-6 py-14">
        {/* Header */}
        <div className="mb-10">
          <p className="text-sm uppercase tracking-[0.25em] text-zinc-400 mb-3">
            Compare Loans
          </p>

          <h1 className="text-4xl md:text-5xl font-bold">
            Which Loan Saves More?
          </h1>

          <p className="mt-4 text-zinc-400 text-lg max-w-3xl leading-8">
            Compare your current loan with a refinance or new
            offer to discover lower interest burden and faster
            payoff opportunities.
          </p>
        </div>

        {/* Compare Cards */}
        <div className="grid lg:grid-cols-2 gap-6">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`rounded-2xl border p-6 shadow-xl ${
                plan.active
                  ? "border-green-500/40 bg-zinc-900"
                  : "border-zinc-800 bg-zinc-900"
              }`}
            >
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold">
                  {plan.title}
                </h2>

                {plan.active && (
                  <span className="text-xs px-3 py-1 rounded-full bg-green-500/15 text-green-400 border border-green-500/30">
                    Better Option
                  </span>
                )}
              </div>

              <div className="grid sm:grid-cols-2 gap-4 mt-6">
                <Metric
                  icon={<Percent className="h-4 w-4" />}
                  label="Rate"
                  value={plan.rate}
                />

                <Metric
                  icon={<BadgeIndianRupee className="h-4 w-4" />}
                  label="EMI"
                  value={plan.emi}
                />

                <Metric
                  icon={<Clock3 className="h-4 w-4" />}
                  label="Tenure"
                  value={plan.tenure}
                />

                <Metric
                  icon={<TrendingDown className="h-4 w-4" />}
                  label="Interest"
                  value={plan.interest}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="mt-8 rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-10 w-10 rounded-xl bg-zinc-800 flex items-center justify-center">
              <Sparkles className="h-5 w-5" />
            </div>

            <div>
              <p className="text-sm text-zinc-400">
                Smart Suggestion
              </p>

              <h3 className="font-semibold">
                Recommended Move
              </h3>
            </div>
          </div>

          <p className="text-zinc-300 leading-7">
            Switching to the refinanced option could save you
            nearly <span className="font-semibold text-white">₹10.6 lakh</span>{" "}
            in total interest and close the loan about{" "}
            <span className="font-semibold text-white">
              3 years earlier
            </span>.
          </p>

          <button className="mt-5 inline-flex items-center gap-2 px-5 py-2 rounded-xl bg-white text-black font-medium">
            Compare New Offer
            <ArrowRightLeft className="h-4 w-4" />
          </button>
        </div>
      </section>
    </main>
  );
}

function Metric({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-4">
      <div className="flex items-center gap-2 text-zinc-400 text-sm">
        {icon}
        {label}
      </div>

      <p className="text-lg font-semibold mt-2">
        {value}
      </p>
    </div>
  );
}