export const expect = <TActual>(): { toBe(expected: TActual): void; } =>
    ({ toBe(expected: TActual): void { }, });
