import { IsSubtypeOfT } from './IsSubtypeOfT';


/**
 * Check if `T` is optional.
 * Does not distribute over unions.
 */
export type IsOptionalT<T> = IsSubtypeOfT<undefined, T>;
