import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login - ProSense",
  description: "Login to your ProSense account",
};

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800">
        {children}
      </main>
    </div>
  );
}
