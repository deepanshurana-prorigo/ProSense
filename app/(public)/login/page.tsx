"use client";

import { LoginContainer } from "./components/containers/LoginContainer";

export default function LoginPage() {
  return (
    <div className="w-full max-w-md">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-white mb-2">ProSense</h1>
        <p className="text-slate-400">Sensor Data Monitoring & Analytics</p>
      </div>
      <LoginContainer />
    </div>
  );
}
