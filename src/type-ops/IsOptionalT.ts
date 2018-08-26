import { IsSubtypeOfT } from './IsSubtypeOfT';


/**
 * Check if `T` is optional.
 */
export type IsOptionalT<T> = IsSubtypeOfT<undefined, T>;
