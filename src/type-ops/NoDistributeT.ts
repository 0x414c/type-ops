/**
 * Prevent distribution over `T`.
 */
export type NoDistributeT<T> = T extends { } | undefined | null | void
    ? T
    : never;
