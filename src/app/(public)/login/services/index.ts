import { LoginRequest, LoginResponse } from "../types/login";

/**
 * Mock login service
 * Simulates API call with realistic delay
 * Replace with real API endpoint later
 */
export async function loginUser(
  credentials: LoginRequest
): Promise<LoginResponse> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const { email, password } = credentials;

      // Mock validation - accept any non-empty credentials
      if (email && password) {
        const mockToken = `token_${Math.random().toString(36).substr(2, 9)}`;

        resolve({
          user: {
            id: Math.random().toString(36).substr(2, 9),
            email,
            name: email.split("@")[0],
          },
          token: mockToken,
        });
      } else {
        reject(new Error("Email and password are required"));
      }
    }, 500); // Simulate network delay
  });
}
