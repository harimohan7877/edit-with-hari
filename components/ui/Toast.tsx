"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle, AlertCircle, Info } from "lucide-react";

export interface ToastProps {
  id: string;
  type?: "success" | "error" | "info";
  message: string;
  duration?: number;
}

interface ToastContainerProps {
  toasts: ToastProps[];
  onRemove: (id: string) => void;
}

export function ToastContainer({ toasts, onRemove }: ToastContainerProps) {
  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col gap-3">
      <AnimatePresence>
        {toasts.map((toast) => (
          <Toast key={toast.id} toast={toast} onRemove={onRemove} />
        ))}
      </AnimatePresence>
    </div>
  );
}

interface ToastPropsInternal {
  toast: ToastProps;
  onRemove: (id: string) => void;
}

export function Toast({ toast, onRemove }: ToastPropsInternal) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onRemove(toast.id);
    }, toast.duration || 4000);

    return () => clearTimeout(timer);
  }, [toast.id, toast.duration, onRemove]);

  const Icon = toast.type === "success" ? CheckCircle : toast.type === "error" ? AlertCircle : Info;
  const iconColor = toast.type === "success"
    ? "text-[var(--color-success)]"
    : toast.type === "error"
    ? "text-[var(--color-error)]"
    : "text-[var(--color-accent)]";

  return (
    <motion.div
      initial={{ opacity: 0, x: 100, scale: 0.9 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      exit={{ opacity: 0, x: 100, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className="flex items-center gap-3 bg-[var(--color-surface)] border border-[var(--color-surface-elevated)] rounded-lg p-4 shadow-lg min-w-[300px] max-w-[400px]"
    >
      <Icon className={`w-5 h-5 ${iconColor}`} />
      <p className="flex-1 text-sm text-[var(--color-text)]">{toast.message}</p>
      <button
        onClick={() => onRemove(toast.id)}
        className="p-1 hover:bg-[var(--color-surface-elevated)] rounded transition-colors"
      >
        <X className="w-4 h-4 text-[var(--color-text-muted)]" />
      </button>
    </motion.div>
  );
}

export function useToast() {
  const [toasts, setToasts] = useState<ToastProps[]>([]);

  const addToast = (toast: Omit<ToastProps, "id">) => {
    const id = Math.random().toString(36).substr(2, 9);
    setToasts((prev) => [...prev, { ...toast, id }]);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  return { toasts, addToast, removeToast };
}