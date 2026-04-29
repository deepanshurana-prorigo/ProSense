/**
 * Component helpers - UI-specific utilities
 */

export function getInputClassName(hasError: boolean = false): string {
  return `w-full px-3 py-2 border rounded-md text-sm ${
    hasError
      ? "border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
      : "border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
  }`;
}

export function getButtonClassName(isLoading: boolean = false): string {
  return `w-full px-3 py-2 rounded-md text-sm font-medium text-white ${
    isLoading
      ? "bg-blue-400 cursor-not-allowed opacity-50"
      : "bg-blue-600 hover:bg-blue-700"
  }`;
}
