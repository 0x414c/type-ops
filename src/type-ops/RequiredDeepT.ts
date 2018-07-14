/**
 * Recursively make all properties of `T` required.
 */
export type RequiredDeepT<T> = {
    [K in keyof T]-?: T[K] extends Array<infer U>
      ? Array<RequiredDeepT<U>>
      : T[K] extends ReadonlyArray<infer U>
        ? ReadonlyArray<RequiredDeepT<U>>
        : T[K] extends (...args: any[]) => infer U
          ? (...args: any[]) => RequiredDeepT<U>
          : RequiredDeepT<T[K]>;
  };
