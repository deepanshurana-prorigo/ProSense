import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login - ProSense",
  description: "Login to your ProSense account",
};

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
