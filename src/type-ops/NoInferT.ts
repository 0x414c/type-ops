/**
 * Prevent type inference on `T`.
 */
export type NoInferT<T> = T
    & { [K in keyof T]: T[K]; };
