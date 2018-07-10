/**
 * Check if `T` and `U` are of the same shape.
 */
export type IsSameT<T, U> = T extends U
    ? U extends T
      ? true
      : false
    : false;

