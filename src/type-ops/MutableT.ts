/**
 * Make all properties of `T` mutable.
 */
export type MutableT<T> = {
    -readonly [K in keyof T]: T[K];
  };
