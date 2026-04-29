// UI-specific helpers for login components
// Add any component-level utilities here

export function getFormInputClassName(isDisabled: boolean = false): string {
  return `w-full px-4 py-2 rounded-lg bg-slate-700 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
    isDisabled ? "disabled:opacity-50" : ""
  }`;
}

export function getLabelClassName(): string {
  return "block text-sm font-medium text-slate-300 mb-2";
}

export function getErrorMessageClassName(): string {
  return "mt-1 text-sm text-red-400";
}
