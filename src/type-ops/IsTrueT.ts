import { IsFalseT } from './IsFalseT';
import { NotT } from './NotT';


/**
 * Check if `T` is `true`.
 * Does not distribute over unions.
 */
export type IsTrueT<T extends boolean> = NotT<IsFalseT<T>>;
