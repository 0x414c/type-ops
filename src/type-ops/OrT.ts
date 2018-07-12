/**
 * Logical "or" of `T` and `U`.
 */
export type OrT<T extends boolean, U extends boolean> = T extends false
    ? U extends false
      ? false
      : true
    : true;
