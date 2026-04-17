// app/upload/page.tsx

import Navbar from "@/components/layout/navbar";
import FileDropzone from "@/components/upload/file-dropzone";
import UploadProgress from "@/components/upload/upload-progress";
import FilePreview from "@/components/upload/file-preview";

export default function UploadPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <Navbar />

      <section className="max-w-6xl mx-auto px-6 py-14">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.25em] text-zinc-400 mb-3">
            Upload Center
          </p>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Upload Your Loan Document
          </h1>

          <p className="mt-4 text-zinc-400 text-lg leading-8">
            Submit your sanction letter, agreement, or loan PDF.
            Harvey scans clauses, highlights risks, and
            simplifies repayment insights.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mt-12 items-start">
          
          {/* Left */}
          <div className="space-y-6">
            <FileDropzone />
          </div>

          {/* Right */}
          <div className="space-y-6">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
              <h3 className="font-semibold text-lg mb-4">
                Supported Files
              </h3>

              <div className="space-y-3 text-sm text-zinc-400">
                <p>• PDF Documents</p>
                <p>• Scanned Images</p>
                <p>• Mobile Photos</p>
                <p>• Loan Sanction Letters</p>
                <p>• EMI Statements</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}