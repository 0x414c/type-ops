/**
 * Recursively make all properties of `T` optional.
 */
export type PartialDeepT<T> = {
    [K in keyof T]?: T[K] extends Array<infer U>
      ? Array<PartialDeepT<U>>
      : T[K] extends ReadonlyArray<infer U>
        ? ReadonlyArray<PartialDeepT<U>>
        : T[K] extends (...args: any[]) => infer U
          ? (...args: any[]) => U
          : PartialDeepT<T[K]>;
  };
