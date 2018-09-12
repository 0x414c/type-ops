import { IsSubtypeOfT } from './IsSubtypeOfT';


/**
 * Check if `T` is nullable.
 * Does not distribute over unions.
 */
export type IsNullableT<T> = IsSubtypeOfT<undefined | null, T>;
