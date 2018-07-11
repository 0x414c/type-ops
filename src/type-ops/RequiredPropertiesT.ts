/**
 * Extract all required properties of `T`.
 */
export type RequiredPropertiesT<T> = {
    [K in keyof T]-?: undefined extends T[K]
      ? never
      : K;
  }[keyof T];
