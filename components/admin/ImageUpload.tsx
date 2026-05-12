"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Upload, X, Image as ImageIcon, Loader2 } from "lucide-react";

interface ImageUploadProps {
  value: string;
  onChange: (url: string) => void;
  label?: string;
}

export default function ImageUpload({ value, onChange, label = "Upload Image" }: ImageUploadProps) {
  const [isUploading, setIsUploading] = useState(false);
  const [dragActive, setDragActive] = useState(false);

  const handleUpload = async (file: File) => {
    setIsUploading(true);

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        onChange(data.url);
      } else {
        console.error("Upload failed");
      }
    } catch (error) {
      console.error("Upload error:", error);
    } finally {
      setIsUploading(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleUpload(e.dataTransfer.files[0]);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleUpload(e.target.files[0]);
    }
  };

  return (
    <div className="space-y-2">
      {label && (
        <label className="block text-sm font-medium mb-2">{label}</label>
      )}

      {value ? (
        <div className="relative aspect-video rounded-xl overflow-hidden bg-[var(--color-surface)] border border-[var(--color-surface-elevated)]">
          <img src={value} alt="Preview" className="w-full h-full object-cover" />
          <button
            type="button"
            onClick={() => onChange("")}
            className="absolute top-2 right-2 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      ) : (
        <motion.div
          onDragOver={(e) => {
            e.preventDefault();
            setDragActive(true);
          }}
          onDragLeave={() => setDragActive(false)}
          onDrop={handleDrop}
          className={`
            relative aspect-video rounded-xl border-2 border-dashed transition-colors
            ${dragActive ? "border-[var(--color-accent)] bg-[var(--color-accent)]/5" : "border-[var(--color-surface-elevated)] bg-[var(--color-surface)]"}
          `}
        >
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          />

          <div className="absolute inset-0 flex flex-col items-center justify-center">
            {isUploading ? (
              <>
                <Loader2 className="w-8 h-8 text-[var(--color-accent)] animate-spin mb-2" />
                <p className="text-sm text-[var(--color-text-muted)]">Uploading...</p>
              </>
            ) : (
              <>
                <div className="w-12 h-12 rounded-full bg-[var(--color-surface-elevated)] flex items-center justify-center mb-3">
                  <ImageIcon className="w-6 h-6 text-[var(--color-text-muted)]" />
                </div>
                <p className="text-sm text-[var(--color-text-secondary)] mb-1">
                  Drag & drop or click to upload
                </p>
                <p className="text-xs text-[var(--color-text-muted)]">
                  PNG, JPG, WebP up to 10MB
                </p>
              </>
            )}
          </div>
        </motion.div>
      )}
    </div>
  );
}