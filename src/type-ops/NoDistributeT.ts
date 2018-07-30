/**
 * Prevent distribution over `T`.
 */
export type NoDistributeT<T> = T extends any
    ? T
    : never;
