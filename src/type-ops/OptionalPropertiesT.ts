/**
 * Extract all properties of `T` which are optional.
 */
export type OptionalPropertiesT<T> = {
    [K in keyof T]-?: { } extends { [K2 in K]: T[K2]; }
      ? K
      : never;
  }[keyof T];
