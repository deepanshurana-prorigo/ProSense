/**
 * Error formatting utilities
 */

export function formatErrorMessage(error: unknown): string {
  if (error instanceof Error) {
    return error.message;
  }

  if (typeof error === "string") {
    return error;
  }

  return "An error occurred during login. Please try again.";
}

export function parseErrorResponse(response: any): string {
  if (response?.message) {
    return response.message;
  }

  if (response?.error) {
    return response.error;
  }

  return "Login failed. Please try again.";
}
