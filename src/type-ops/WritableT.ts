/**
 * Make all properties of `T` writable.
 */
export type WritableT<T> = {
    -readonly [K in keyof T]: T[K];
  };
