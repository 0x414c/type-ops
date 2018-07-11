/**
 * Logical "or" of `T` and `U`.
 */
export type OrT<T extends boolean, U extends boolean> = true extends T
    ? true
    : true extends U
      ? true
      : false;
