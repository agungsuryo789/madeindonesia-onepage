/* Utility to extend classes for components */
export const extendClass = (...classes: (string | undefined)[]): string => {
  return classes.filter(Boolean).join(" ");
};
