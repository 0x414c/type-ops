import { MutableT } from './MutableT';
import { ReplaceT } from './ReplaceT';

/**
 * Make properties `K` of `T` mutable.
 */
export type WithMutableT<T, K extends keyof T> = ReplaceT<T, MutableT<T>, K>;
