import { NoDistributeT } from './NoDistributeT';

/**
 * Check if `T` is assignable to `U`.
 */
export type IsAssignableToT<T, U> = NoDistributeT<T> extends U
    ? true
    : false;
