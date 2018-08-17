import { IsOptionalT } from './IsOptionalT';

/**
 * Extract all optional properties of `T`.
 */
export type OptionalPropertiesT<T> = {
    [K in keyof T]-?: IsOptionalT<T[K]> extends false
      ? never
      : K;
  }[keyof T];
