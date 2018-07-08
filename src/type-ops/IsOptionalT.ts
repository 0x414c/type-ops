/**
 * Check if `T' is optional.
 */
export type IsOptionalT<T> = undefined extends T
    ? true
    : false;
