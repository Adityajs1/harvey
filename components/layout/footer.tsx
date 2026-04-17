// components/layout/footer.tsx

import { ShieldCheck, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-950 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-5">
        
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-white text-black flex items-center justify-center">
            <ShieldCheck className="h-5 w-5" />
          </div>

          <div>
            <p className="font-semibold">Harvey</p>
            <p className="text-sm text-zinc-400">
              Loan Transparency Platform
            </p>
          </div>
        </div>

        <p className="text-sm text-zinc-400 flex items-center gap-2">
          Built with <Heart className="h-4 w-4 text-red-500" />
          for smarter borrowers
        </p>
      </div>
    </footer>
  );
}