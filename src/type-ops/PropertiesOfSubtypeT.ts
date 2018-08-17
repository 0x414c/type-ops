import { IsSubtypeOfT } from './IsSubtypeOfT';

/**
 * Extract all properties of `T` which are a subtype of `U`.
 */
export type PropertiesOfSubtypeT<T, U> = {
    [K in keyof T]: IsSubtypeOfT<T[K], U> extends false
      ? never
      : K;
  }[keyof T];
