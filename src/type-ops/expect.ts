/**
 * Induce a compilation error if `TActual` does not resolve to the type of `expected`.
 */
export const expect = <TActual>(): { toBe(expected: TActual): void; } =>
  ({ toBe(expected: TActual): void { /* Pass. */ } });
