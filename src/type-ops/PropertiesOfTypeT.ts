/**
 * Extract all properties of `T` which are assignable to `U`.
 */
export type PropertiesOfTypeT<T, U> = {
    [K in keyof T]: T[K] extends U
      ? K
      : never;
  }[keyof T];
