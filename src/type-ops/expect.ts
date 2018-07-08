/**
 * Check if `TActual' resolves to `expected'.
 * @returns {{toBe(expected: TActual): void}}
 */
export const expect = <TActual>(): { toBe(expected: TActual): void; } =>
    ({ toBe(expected: TActual): void { }, });
