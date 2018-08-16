import { IsAssignableToT } from './IsAssignableToT';

/**
 * Extract all properties of `T` which are not assignable to `U`.
 */
export type NotPropertiesOfTypeT<T, U> = {
    [K in keyof T]: IsAssignableToT<T[K], U> extends true
      ? never
      : K;
  }[keyof T];
