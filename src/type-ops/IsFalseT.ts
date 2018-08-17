import { IsSameT } from './IsSameT';

/**
 * Check if `T` is `false`.
 * Does not distribute over unions.
 */
export type IsFalseT<T extends boolean> = IsSameT<T, false>;
