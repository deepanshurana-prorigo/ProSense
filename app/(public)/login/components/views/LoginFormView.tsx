"use client";

import { useState } from "react";
import { validateEmail, validatePassword } from "../../lib/validation";

interface LoginFormProps {
  onSubmit: (email: string, password: string) => Promise<void>;
  isLoading: boolean;
  error: string | null;
}

/**
 * Presentational UI component for login form
 * Pure component - only handles UI rendering and basic form state
 * No data fetching or side effects beyond form submission
 */
export function LoginForm({
  onSubmit,
  isLoading,
  error,
}: LoginFormProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    let hasError = false;

    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email");
      hasError = true;
    } else {
      setEmailError("");
    }

    if (!validatePassword(password)) {
      setPasswordError("Password must be at least 6 characters");
      hasError = true;
    } else {
      setPasswordError("");
    }

    if (hasError) return;

    await onSubmit(email, password);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-slate-300 mb-2"
        >
          Email Address
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isLoading}
          className="w-full px-4 py-2 rounded-lg bg-slate-700 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
          placeholder="you@example.com"
        />
        {emailError && (
          <p className="mt-1 text-sm text-red-400">{emailError}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="password"
          className="block text-sm font-medium text-slate-300 mb-2"
        >
          Password
        </label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={isLoading}
          className="w-full px-4 py-2 rounded-lg bg-slate-700 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
          placeholder="••••••"
        />
        {passwordError && (
          <p className="mt-1 text-sm text-red-400">{passwordError}</p>
        )}
      </div>

      {error && (
        <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-300 text-sm">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={isLoading}
        className="w-full px-4 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        {isLoading ? "Signing in..." : "Sign In"}
      </button>
    </form>
  );
}
