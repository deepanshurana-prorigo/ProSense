"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { loginUser } from "../../services";
import { useAuthStore } from "@/app/stores/useAuthStore";
import { LoginForm } from "../views/LoginFormView";
import { getLoginErrorMessage } from "../../lib/validation";

/**
 * Smart container component for login logic
 * Handles all data fetching, state management, and side effects
 * Delegates UI rendering to presentational components
 */
export function LoginContainer() {
  const router = useRouter();
  const { setUser } = useAuthStore();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (email: string, password: string) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await loginUser({ email, password });

      document.cookie = `auth_token=${response.token}; path=/`;

      setUser(response.user);

      router.push("/dashboard");
    } catch (err) {
      setError(getLoginErrorMessage(err));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <LoginForm
      onSubmit={handleLogin}
      isLoading={isLoading}
      error={error}
    />
  );
}
