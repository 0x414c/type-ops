/**
 * Recursively make all properties of `T` writable.
 */
export type WritableDeepT<T> = {
    -readonly [K in keyof T]: WritableDeepT<T[K]>;
  };
