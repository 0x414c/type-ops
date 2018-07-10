/**
 * Induce a compilation error if `TActual` does not resolve to `TExpected`.
 */
export type ExpectT<TActual extends TExpected, TExpected extends boolean> = never;
