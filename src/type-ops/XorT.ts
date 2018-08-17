/**
 * Logical "xor" of `T` and `U`.
 * Distributes over unions.
 */
export type XorT<T extends boolean, U extends boolean> = T extends false
    ? U extends false
      ? false
      : true
    : U extends false
      ? true
      : false;
