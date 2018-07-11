/**
 * Logical "not" of `T`.
 */
export type NotT<T extends boolean> = true extends T
    ? false
    : true;
