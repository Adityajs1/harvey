"use client";

import Link from "next/link";
import {
  ShieldCheck,
  FileText,
  History,
} from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-xl">
      <nav className="max-w-7xl mx-auto h-16 px-6 flex items-center justify-between">
        
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3"
        >
          <div className="h-10 w-10 rounded-xl bg-white text-black flex items-center justify-center">
            <ShieldCheck size={18} />
          </div>

          <div>
            <p className="font-semibold text-white">
              Harvey
            </p>
            <p className="text-xs text-zinc-400 -mt-1">
              Loan Analyzer
            </p>
          </div>
        </Link>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-8 text-sm text-zinc-400">
          <Link
            href="/upload"
            className="flex items-center gap-2 hover:text-white transition"
          >
            <FileText size={16} />
            Upload
          </Link>

          <Link
            href="/history"
            className="flex items-center gap-2 hover:text-white transition"
          >
            <History size={16} />
            History
          </Link>
        </div>

        {/* CTA */}
        <Link
          href="/upload"
          className="px-4 py-2 rounded-xl bg-white text-black text-sm font-medium hover:opacity-90 transition"
        >
          Analyze Now
        </Link>
      </nav>
    </header>
  );
}