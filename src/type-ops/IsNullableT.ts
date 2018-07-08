/**
 * Check if `T' is nullable.
 */
export type IsNullableT<T> = undefined | null extends T
    ? true
    : false;
