/**
 * Check if `T` is in union `U`.
 */
export type IsInT<T, U> = Extract<U, T> extends never
    ? false
    : true;
