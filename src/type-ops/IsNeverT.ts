import { IsSameT } from './IsSameT';

/**
 * Check if `T` is `never`.
 * Does not distribute over unions.
 */
export type IsNeverT<T> = IsSameT<T, never>;
