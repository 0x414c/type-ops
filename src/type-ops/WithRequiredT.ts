import { ReplaceT } from './ReplaceT';


/**
 * Make properties `K` of `T` required.
 */
export type WithRequiredT<T, K extends keyof T> = ReplaceT<T, Required<T>, K>;
