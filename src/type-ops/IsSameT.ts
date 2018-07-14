import { NoDistributeT } from './NoDistributeT';

/**
 * Check if `T` and `U` are of the same shape.
 */
export type IsSameT<T, U> = NoDistributeT<T> extends NoDistributeT<U>
    ? NoDistributeT<U> extends NoDistributeT<T>
      ? true
      : false
    : false;
