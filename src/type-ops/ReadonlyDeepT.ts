/**
 * Recursively make all properties of `T' readonly.
 */
export type ReadonlyDeepT<T> = {
    readonly [K in keyof T]: ReadonlyDeepT<T[K]>;
  };
