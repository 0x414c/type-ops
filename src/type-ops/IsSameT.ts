import { AndT } from './AndT';
import { IsSubtypeOfT } from './IsSubtypeOfT';


/**
 * Check if `T` and `U` are of the same shape.
 * Does not distribute over unions.
 */
export type IsSameT<T, U> = AndT<IsSubtypeOfT<T, U>, IsSubtypeOfT<U, T>>;
