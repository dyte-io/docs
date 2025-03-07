/* eslint-disable @typescript-eslint/no-explicit-any */
export function clsx(...classes: any[]) {
  return classes.filter(Boolean).join(' ');
}
