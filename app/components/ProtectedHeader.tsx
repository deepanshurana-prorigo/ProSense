"use client";

import { useRouter } from "next/navigation";
import { useAuthStore } from "@/app/stores/useAuthStore";

interface User {
  id: string;
  email: string;
  name: string;
}

interface ProtectedHeaderProps {
  user: User | null;
}

export function ProtectedHeader({ user }: ProtectedHeaderProps) {
  const router = useRouter();
  const { logout } = useAuthStore();

  const handleLogout = () => {
    logout();
    document.cookie = "auth_token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    router.push("/login");
  };

  return (
    <header className="bg-slate-800 border-b border-slate-700 px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <h1 className="text-xl font-bold text-white">ProSense</h1>
      </div>
      <div className="flex items-center gap-4">
        <div className="text-sm">
          <p className="text-slate-400">Welcome back,</p>
          <p className="text-white font-medium">{user?.name}</p>
        </div>
        <button
          onClick={handleLogout}
          className="px-4 py-2 rounded-lg bg-red-600/20 text-red-400 hover:bg-red-600/30 transition-colors text-sm font-medium"
        >
          Logout
        </button>
      </div>
    </header>
  );
}
