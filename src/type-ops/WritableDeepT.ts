/**
 * Recursively make all properties of `T` writable.
 */
export type WritableDeepT<T> = {
    -readonly [K in keyof T]: T[K] extends Array<infer U>
      ? Array<WritableDeepT<U>>
      : T[K] extends ReadonlyArray<infer U>
        ? ReadonlyArray<WritableDeepT<U>>
        : T[K] extends (...args: any[]) => infer U
          ? (...args: any[]) => U
          : WritableDeepT<T[K]>;
  };
