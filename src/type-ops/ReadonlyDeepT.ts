/**
 * Recursively make all properties of `T` readonly.
 */
export type ReadonlyDeepT<T> = {
    readonly [K in keyof T]: T[K] extends Array<infer U>
      ? Array<ReadonlyDeepT<U>>
      : T[K] extends ReadonlyArray<infer U>
        ? ReadonlyArray<ReadonlyDeepT<U>>
        : T[K] extends (...args: any[]) => infer U
          ? (...args: any[]) => ReadonlyDeepT<U>
          : ReadonlyDeepT<T[K]>;
  };
