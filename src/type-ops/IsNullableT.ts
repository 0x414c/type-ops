import { IsInT } from './IsInT';

/**
 * Check if `T` is nullable.
 */
export type IsNullableT<T> = IsInT<undefined | null, T>;
