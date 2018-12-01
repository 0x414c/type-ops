/**
 * Logical "not" of `T`.
 * Distributes over unions.
 */
export type NotT<T extends boolean> = T extends false
  ? true
  : false;
