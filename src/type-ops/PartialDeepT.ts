/**
 * Recursively make all properties of `T` optional.
 */
export type PartialDeepT<T> = {
    [K in keyof T]?: PartialDeepT<T[K]>;
  };
