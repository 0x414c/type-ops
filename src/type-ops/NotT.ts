/**
 * Logical "not" of `T`.
 */
export type NotT<T extends boolean> = T extends false
    ? true
    : false;
