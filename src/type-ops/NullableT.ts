import { OptionalT } from './OptionalT';

/**
 * Make `T' nullable.
 */
export type NullableT<T> = OptionalT<T> | null;
