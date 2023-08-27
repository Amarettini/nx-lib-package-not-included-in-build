import { isEven } from "@nx-lib-package-not-included-in-build/is-even";

export function isOdd(x: number): boolean {
  return !isEven(x);
}
