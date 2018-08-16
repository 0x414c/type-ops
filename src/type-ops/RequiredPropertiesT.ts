import { IsOptionalT } from './IsOptionalT';

/**
 * Extract all required properties of `T`.
 */
export type RequiredPropertiesT<T> = {
    [K in keyof T]-?: IsOptionalT<T[K]> extends true
      ? never
      : K;
  }[keyof T];
