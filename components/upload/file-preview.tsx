// components/upload/file-preview.tsx

"use client";

import { FileText, ImageIcon, FileSpreadsheet } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

type FilePreviewProps = {
  fileName: string;
  fileSize: string;
  fileType?: string;
};

export default function FilePreview({
  fileName,
  fileSize,
  fileType = "pdf",
}: FilePreviewProps) {
  const getIcon = () => {
    if (fileType.includes("image")) {
      return <ImageIcon className="h-5 w-5" />;
    }

    if (fileType.includes("sheet")) {
      return <FileSpreadsheet className="h-5 w-5" />;
    }

    return <FileText className="h-5 w-5" />;
  };

  return (
    <Card className="bg-zinc-900 border-zinc-800 rounded-2xl shadow-xl">
      <CardContent className="p-5">
        <div className="flex items-center gap-4">
          <div className="h-12 w-12 rounded-xl bg-zinc-800 flex items-center justify-center">
            {getIcon()}
          </div>

          <div className="min-w-0">
            <p className="font-medium truncate">
              {fileName}
            </p>

            <p className="text-sm text-zinc-400">
              {fileSize}
            </p>
          </div>
        </div>

        <div className="mt-4 rounded-xl border border-zinc-800 bg-zinc-950 p-4 text-sm text-zinc-400">
          File uploaded successfully. Ready for loan analysis.
        </div>
      </CardContent>
    </Card>
  );
}