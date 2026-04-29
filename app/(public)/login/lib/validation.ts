/**
 * Validation helper for login form
 */
export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function validatePassword(password: string): boolean {
  return password.length >= 6;
}

export function getLoginErrorMessage(error: unknown): string {
  if (error instanceof Error) {
    return error.message;
  }
  return "An error occurred during login";
}
