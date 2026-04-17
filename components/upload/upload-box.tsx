"use client";

import React, { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { 
  Upload, 
  FileText, 
  X, 
  CheckCircle2, 
  Loader2
} from "lucide-react";
import { useRouter } from "next/navigation";

export default function UploadBox() {
  const router = useRouter();
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState<"idle" | "uploading" | "success" | "error">("idle");

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      setFile(acceptedFiles[0]);
      setStatus("idle");
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "application/pdf": [".pdf"],
      "image/*": [".png", ".jpg", ".jpeg"],
    },
    maxFiles: 1,
  });

  const handleUpload = async () => {
    if (!file) return;

    setStatus("uploading");
    
    // Simulating upload/analysis for now
    setTimeout(() => {
      setStatus("success");
      setTimeout(() => {
        router.push("/dashboard");
      }, 1500);
    }, 2500);
  };

  const removeFile = (e: React.MouseEvent) => {
    e.stopPropagation();
    setFile(null);
    setStatus("idle");
  };

  return (
    <div className="w-full max-w-lg mx-auto">
      <div 
        {...getRootProps()} 
        className={`relative group cursor-pointer rounded-3xl border-2 border-dashed transition-all duration-300 p-8
          ${isDragActive 
            ? "border-white bg-white/5" 
            : file 
              ? "border-zinc-700 bg-zinc-900/50" 
              : "border-zinc-800 bg-zinc-950 hover:border-zinc-600 hover:bg-zinc-900/30"
          }`}
      >
        <input {...getInputProps()} />

        {file ? (
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="h-16 w-16 rounded-2xl bg-zinc-800 flex items-center justify-center text-white">
              {status === "uploading" ? (
                <Loader2 className="h-8 w-8 animate-spin" />
              ) : status === "success" ? (
                <CheckCircle2 className="h-8 w-8 text-green-400" />
              ) : (
                <FileText className="h-8 w-8" />
              )}
            </div>
            
            <div className="flex-1 min-w-0">
              <p className="text-lg font-medium truncate px-4">
                {file.name}
              </p>
              <p className="text-sm text-zinc-500">
                {(file.size / (1024 * 1024)).toFixed(2)} MB
              </p>
            </div>

            {status === "idle" && (
              <div className="flex gap-3 w-full max-w-xs mt-2">
                <button
                  onClick={handleUpload}
                  className="flex-1 py-3 px-6 rounded-xl bg-white text-black font-semibold hover:bg-zinc-200 transition"
                >
                  Analyze Document
                </button>
                <button
                  onClick={removeFile}
                  className="p-3 rounded-xl bg-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-700 transition"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            )}

            {status === "uploading" && (
              <p className="text-sm text-zinc-400 animate-pulse">
                Processing your loan terms...
              </p>
            )}

            {status === "success" && (
              <p className="text-sm text-green-400 font-medium">
                Analysis complete! Redirecting...
              </p>
            )}
          </div>
        ) : (
          <div className="flex flex-col items-center text-center space-y-6">
            <div className="h-20 w-20 rounded-3xl bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Upload className="h-8 w-8 text-zinc-400 group-hover:text-white transition-colors" />
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-white">
                Upload Loan Agreement
              </h3>
              <p className="text-zinc-500 mt-2 max-w-[240px] mx-auto text-sm leading-relaxed">
                Drag and drop your PDF or scan here to start analysis
              </p>
            </div>

            <button className="px-6 py-2.5 rounded-full border border-zinc-800 bg-zinc-900 text-sm font-medium hover:bg-zinc-800 transition">
              Select File
            </button>
          </div>
        )}
      </div>

      <div className="mt-6 grid grid-cols-2 gap-4 text-[10px] uppercase tracking-widest text-zinc-600 font-bold px-4">
        <div className="flex items-center gap-2">
          <div className="h-1 w-1 rounded-full bg-zinc-700" />
          End-to-End Encrypted
        </div>
        <div className="flex items-center gap-2">
          <div className="h-1 w-1 rounded-full bg-zinc-700" />
          Bank-Grade Security
        </div>
      </div>
    </div>
  );
}