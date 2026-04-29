"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { validateLoginForm } from "../../lib/login-utils";

interface LoginFormViewProps {
  onSubmit: (email: string, password: string) => Promise<void>;
  isLoading: boolean;
}

/**
 * Presentational component for login form
 * Pure UI component - receives all data via props
 */
export function LoginFormView({
  onSubmit,
  isLoading,
}: LoginFormViewProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fieldErrors, setFieldErrors] = useState<{
    email?: string;
    password?: string;
  }>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form
    const validation = validateLoginForm(email, password);
    if (!validation.isValid) {
      setFieldErrors(validation.errors);
      return;
    }

    // Clear field errors on submit
    setFieldErrors({});

    // Call parent handler
    await onSubmit(email, password);
  };

  return (
    <div className="w-full h-screen flex flex-col lg:flex-row">
      {/* Left Side - Empty for now */}
      <div className="hidden lg:flex w-full lg:w-1/2 bg-gray-100"></div>

      {/* Right Side - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-4 sm:p-6 lg:p-8">
        <div className="w-full max-w-md">
          {/* Title and Description */}
          <div className="mb-8 text-center">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
              ProSense
            </h1>
            <p className="text-sm sm:text-base text-gray-600">
              Real-time sensor data monitoring & analytics platform
            </p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email Field */}
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isLoading}
                className={fieldErrors.email ? "border-red-500" : ""}
              />
              {fieldErrors.email && (
                <p className="text-sm text-red-500">{fieldErrors.email}</p>
              )}
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={isLoading}
                className={fieldErrors.password ? "border-red-500" : ""}
              />
              {fieldErrors.password && (
                <p className="text-sm text-red-500">{fieldErrors.password}</p>
              )}
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full"
            >
              {isLoading ? "Signing in..." : "Sign In"}
            </Button>
          </form>

          {/* Login Credentials Note */}
          <div className="mt-6 p-3 rounded-md bg-blue-50 border border-blue-200">
            <p className="text-xs sm:text-sm text-blue-800">
              <strong>Demo Mode:</strong> Use any email and password to login
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
