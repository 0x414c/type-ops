import { OmitT } from './OmitT';

/**
 * Override properties of `T' with properties of `U'.
 */
export type OverrideT<T, U> = OmitT<T, keyof T & keyof U>
    & U;
