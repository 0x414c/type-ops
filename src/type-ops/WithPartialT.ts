import { ReplaceT } from './ReplaceT';

/**
 * Make properties `K` of `T` optional.
 */
export type WithPartialT<T, K extends keyof T> = ReplaceT<T, Partial<T>, K>;
