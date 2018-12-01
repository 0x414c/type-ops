/**
 * Logical "and" of `T` and `U`.
 * Distributes over unions.
 */
export type AndT<T extends boolean, U extends boolean> = T extends false
  ? false
  : U extends false
    ? false
    : true;
