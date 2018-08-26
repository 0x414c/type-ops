import { IsSubtypeOfT } from './IsSubtypeOfT';


/**
 * Check if `T` is nullable.
 */
export type IsNullableT<T> = IsSubtypeOfT<undefined | null, T>;
