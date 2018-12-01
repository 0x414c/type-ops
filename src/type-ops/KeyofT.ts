/**
 * Extract all properties of `T`.
 * Distributes over unions.
 */
export type KeyofT<T> = T extends any
  ? keyof T
  : never;
