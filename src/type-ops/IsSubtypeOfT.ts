import { NoDistributeT } from './NoDistributeT';


/**
 * Check if `T` is a subtype of `U`.
 * Does not distribute over unions.
 */
export type IsSubtypeOfT<T, U> = NoDistributeT<T> extends U
    ? true
    : false;
