import { OmitT } from './OmitT';

/**
 * Replace properties `K` of `T` with corresponding properties of `U`.
 */
export type ReplaceT<T, U, K extends keyof T & keyof U> = OmitT<T, K>
    & Pick<U, K>;
