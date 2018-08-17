import { IsSameT } from './IsSameT';

/**
 * Extract all properties of `T` which are of the same shape as `U`.
 */
export type PropertiesOfTypeT<T, U> = {
    [K in keyof T]: IsSameT<T[K], U> extends false
      ? never
      : K;
  }[keyof T];
