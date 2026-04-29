import { create } from "zustand";
import { persist } from "zustand/middleware";

interface User {
  id: string;
  email: string;
  name: string;
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  setUser: (user: User) => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      login: async (email: string, password: string) => {
        // Mock login - replace with real API call later
        if (email && password.length >= 6) {
          const mockUser: User = {
            id: Math.random().toString(36).substr(2, 9),
            email,
            name: email.split("@")[0],
          };

          // Set cookie for middleware
          document.cookie = `auth_token=${Math.random()}; path=/`;

          set({
            user: mockUser,
            isAuthenticated: true,
          });
        } else {
          throw new Error("Invalid credentials");
        }
      },
      logout: () => {
        document.cookie = "auth_token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
        set({
          user: null,
          isAuthenticated: false,
        });
      },
      setUser: (user: User) => {
        set({
          user,
          isAuthenticated: true,
        });
      },
    }),
    {
      name: "auth-storage",
    }
  )
);
