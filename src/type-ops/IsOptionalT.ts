import { IsInT } from './IsInT';

/**
 * Check if `T` is optional.
 */
export type IsOptionalT<T> = IsInT<undefined, T>;
