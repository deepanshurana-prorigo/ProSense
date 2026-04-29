import { LoginRequest, LoginResponse } from "../types";

/**
 * Mock login service - replace with real API call later
 * This demonstrates the service layer abstraction for future API integration
 */
export async function loginUser(
  credentials: LoginRequest
): Promise<LoginResponse> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (credentials.email && credentials.password.length >= 6) {
        resolve({
          user: {
            id: Math.random().toString(36).substr(2, 9),
            email: credentials.email,
            name: credentials.email.split("@")[0],
          },
          token: `mock_token_${Math.random()}`,
        });
      } else {
        reject(new Error("Invalid credentials"));
      }
    }, 500);
  });
}
