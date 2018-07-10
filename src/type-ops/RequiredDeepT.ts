/**
 * Recursively make all properties of `T` required.
 */
export type RequiredDeepT<T> = {
    [K in keyof T]-?: RequiredDeepT<T[K]>;
  };
