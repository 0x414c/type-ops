import { NoDistributeT } from './NoDistributeT';

/**
 * Check if `T` is `never`.
 */
export type IsNeverT<T> = NoDistributeT<T> extends never
    ? true
    : false;
