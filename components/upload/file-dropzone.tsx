// components/upload/file-dropzone.tsx

"use client";

import { useState } from "react";
import { UploadCloud, FileText, X } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function FileDropzone() {
  const [file, setFile] = useState<File | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const selected = e.target.files?.[0];
    if (selected) setFile(selected);
  };

  const removeFile = () => {
    setFile(null);
  };

  return (
    <Card className="bg-zinc-900 border-zinc-800 shadow-xl rounded-2xl">
      <CardContent className="p-6">
        {!file ? (
          <label className="cursor-pointer block">
            <div className="border-2 border-dashed border-zinc-700 rounded-2xl p-10 text-center hover:border-white transition">
              
              <div className="mx-auto mb-4 h-14 w-14 rounded-full bg-zinc-800 flex items-center justify-center">
                <UploadCloud size={28} />
              </div>

              <h3 className="text-lg font-semibold mb-2">
                Upload Loan Document
              </h3>

              <p className="text-sm text-zinc-400 mb-4">
                PDF, Image, Scan copy supported
              </p>

              <Button type="button">
                Choose File
              </Button>

              <input
                type="file"
                accept=".pdf,image/*"
                className="hidden"
                onChange={handleChange}
              />
            </div>
          </label>
        ) : (
          <div className="rounded-2xl border border-zinc-800 p-5 bg-zinc-950">
            <div className="flex items-center justify-between gap-4">
              
              <div className="flex items-center gap-3">
                <div className="h-11 w-11 rounded-xl bg-zinc-800 flex items-center justify-center">
                  <FileText size={20} />
                </div>

                <div>
                  <p className="font-medium text-sm">
                    {file.name}
                  </p>
                  <p className="text-xs text-zinc-400">
                    {(file.size / 1024 / 1024).toFixed(2)} MB
                  </p>
                </div>
              </div>

              <button
                onClick={removeFile}
                className="text-zinc-400 hover:text-red-500 transition"
              >
                <X size={18} />
              </button>
            </div>

            <Button className="w-full mt-5">
              Analyze Document
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}