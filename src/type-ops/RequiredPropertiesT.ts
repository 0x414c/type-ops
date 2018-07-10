/**
 * Extract all required properties of `T`.
 */
export type RequiredPropertiesT<T> = {
    [K in keyof T]-?: { } extends { [K2 in K]: T[K2]; }
      ? never
      : K;
  }[keyof T];
