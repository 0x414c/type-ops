import { ReplaceT } from './ReplaceT';


/**
 * Make properties `K` of `T` readonly.
 */
export type WithReadonlyT<T, K extends keyof T> = ReplaceT<T, Readonly<T>, K>;
