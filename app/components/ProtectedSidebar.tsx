"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Dashboard", href: "/dashboard", icon: "📊" },
  { label: "Charts", href: "/charts", icon: "📈" },
  { label: "Live Feed", href: "/live-feed", icon: "📡" },
  { label: "Sensor Details", href: "/sensor-details", icon: "🔍" },
  { label: "Reports", href: "/reports", icon: "📄" },
  { label: "Sensor Management", href: "/sensor-management", icon: "⚙️" },
];

export function ProtectedSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-slate-800 border-r border-slate-700 p-6 overflow-y-auto">
      <nav className="space-y-2">
        {navItems.map((item) => {
          const isActive = pathname.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`block px-4 py-3 rounded-lg transition-colors ${
                isActive
                  ? "bg-blue-600 text-white"
                  : "text-slate-300 hover:bg-slate-700 hover:text-white"
              }`}
            >
              <span className="mr-3">{item.icon}</span>
              {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
