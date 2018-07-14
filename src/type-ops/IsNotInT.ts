import { IsInT } from './IsInT';

import { NotT } from './NotT';

/**
 * Check if `T` is not in union `U`.
 */
export type IsNotInT<T, U> = NotT<IsInT<T, U>>;
