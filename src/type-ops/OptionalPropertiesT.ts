/**
 * Extract all optional properties of `T`.
 */
export type OptionalPropertiesT<T> = {
    [K in keyof T]-?: undefined extends T[K]
      ? K
      : never;
  }[keyof T];
