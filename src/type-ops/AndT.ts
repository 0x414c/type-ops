/**
 * Logical "and" of `T` and `U`.
 */
export type AndT<T extends boolean, U extends boolean> = false extends T
    ? false
    : false extends U
      ? false
      : true;
