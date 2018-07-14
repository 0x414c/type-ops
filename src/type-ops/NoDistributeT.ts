/**
 * Prevent distribution over `T`.
 */
export type NoDistributeT<T> = T extends T
    ? T
    : T;
