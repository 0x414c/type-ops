/**
 * Logical "or" of `T` and `U`.
 * Distributes over unions.
 */
export type OrT<T extends boolean, U extends boolean> = T extends false
  ? U extends false
    ? false
    : true
  : true;
