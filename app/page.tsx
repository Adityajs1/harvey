// app/page.tsx

import Navbar from "@/components/layout/navbar";
import UploadBox from "@/components/upload/upload-box";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="max-w-6xl mx-auto px-6 pt-16 pb-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side */}
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-zinc-400 mb-4">
              Harvey
            </p>

            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Understand Your{" "}
              <span className="text-white/80">
                Loan Documents
              </span>
            </h1>

            <p className="mt-6 text-lg text-zinc-400 leading-8 max-w-xl">
              Upload your loan papers and instantly discover
              risky clauses, fair terms, hidden costs, and
              repayment impact with visual clarity.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <div className="px-4 py-2 rounded-full bg-zinc-900 border border-zinc-800 text-sm">
                🔴 Risk Detection
              </div>

              <div className="px-4 py-2 rounded-full bg-zinc-900 border border-zinc-800 text-sm">
                📄 OCR Analysis
              </div>

              <div className="px-4 py-2 rounded-full bg-zinc-900 border border-zinc-800 text-sm">
                📈 EMI Insights
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div>
            <UploadBox />
          </div>
        </div>
      </section>
    </main>
  );
}