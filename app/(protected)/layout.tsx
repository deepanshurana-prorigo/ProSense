"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/app/stores/useAuthStore";
import { ProtectedHeader } from "@/app/components/ProtectedHeader";
import { ProtectedSidebar } from "@/app/components/ProtectedSidebar";

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const { user, isAuthenticated } = useAuthStore();

  useEffect(() => {
    // Restore auth state from localStorage on mount
    const authToken = document.cookie
      .split("; ")
      .find((row) => row.startsWith("auth_token="));

    if (!isAuthenticated && !authToken) {
      router.push("/login");
    }
  }, [isAuthenticated, router]);

  if (!isAuthenticated) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-slate-400">Loading...</p>
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-slate-950">
      <ProtectedSidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <ProtectedHeader user={user} />
        <main className="flex-1 overflow-auto bg-slate-900">
          <div className="p-6">{children}</div>
        </main>
      </div>
    </div>
  );
}
