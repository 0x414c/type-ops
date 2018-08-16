import { IsAssignableToT } from './IsAssignableToT';

/**
 * Extract all properties of `T` which are assignable to `U`.
 */
export type PropertiesOfTypeT<T, U> = {
    [K in keyof T]: IsAssignableToT<T[K], U> extends true
      ? K
      : never;
  }[keyof T];
