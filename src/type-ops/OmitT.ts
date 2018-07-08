/**
 * Omit properties `K' from `T'.
 */
export type OmitT<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
