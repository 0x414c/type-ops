/**
 * Prevent type inference on `T`.
 */
export type NoInferT<T> = T
    & Pick<T, keyof T>;
