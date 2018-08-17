import { OmitT } from './OmitT';

/**
 * Overwrite properties `K` of `T` with matching properties of `U` and add properties which are unique to `U`.
 */
export type OverwriteT<T, U, K extends keyof T & keyof U = keyof T & keyof U> = OmitT<T, K>
    & U;
