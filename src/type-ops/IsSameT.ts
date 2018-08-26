import { NoDistributeT } from './NoDistributeT';


/**
 * Check if `T` and `U` are of the same shape.
 * Does not distribute over unions.
 */
export type IsSameT<T, U> = NoDistributeT<T> extends U
    ? NoDistributeT<U> extends T
      ? true
      : false
    : false;
