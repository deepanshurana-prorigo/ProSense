"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { LoginFormView } from "../views/LoginFormView";
import { loginUser } from "../../services";
import { useAuthStore } from "@/app/stores/useAuthStore";
import { formatErrorMessage } from "../../lib";
import { toast } from "sonner";

/**
 * Smart container component for login
 * Handles all business logic, state management, and side effects
 * Delegates UI rendering to LoginFormView
 */
export function LoginContainer() {
  const router = useRouter();
  const { setUser } = useAuthStore();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (email: string, password: string) => {
    setIsLoading(true);

    try {
      // Show loading toast
      const loadingToastId = toast.loading("Signing in...");

      // Call login service
      const response = await loginUser({ email, password });

      // Dismiss loading toast
      toast.dismiss(loadingToastId);

      // Show success toast
      toast.success(`Welcome back, ${response.user.name}!`);

      // Set auth token in cookie
      document.cookie = `auth_token=${response.token}; path=/; max-age=86400`;

      // Update Zustand store
      setUser(response.user);

      // Redirect to dashboard
      setTimeout(() => {
        router.push("/dashboard");
      }, 1000);
    } catch (err) {
      const errorMessage = formatErrorMessage(err);
      // Show error toast
      toast.error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <LoginFormView
      onSubmit={handleLogin}
      isLoading={isLoading}
    />
  );
}
