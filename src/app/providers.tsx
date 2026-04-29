"use client";

import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

export function ToasterProvider({ children }: { children: React.ReactNode }) {
  return (
    <TooltipProvider>
      <Toaster position="top-right" richColors />
      {children}
    </TooltipProvider>
  );
}
