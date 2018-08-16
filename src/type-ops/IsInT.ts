import { IsNeverT } from './IsNeverT';
import { NotT } from './NotT';

/**
 * Check if `T` is in union `U`.
 */
export type IsInT<T, U> = NotT<IsNeverT<Extract<U, T>>>;
