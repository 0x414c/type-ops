interface _ReadonlyDeepArray<T> extends Array<ReadonlyDeepT<T>> { }

interface _ReadonlyDeepReadonlyArray<T> extends ReadonlyArray<ReadonlyDeepT<T>> { }

type _ReadonlyDeepObjectT<T> = {
    [K in keyof T]: ReadonlyDeepT<T[K]>;
  };

/**
 * Recursively make all properties of `T` readonly.
 */
export type ReadonlyDeepT<T> = T extends Array<infer U>
    ? _ReadonlyDeepArray<U>
    : T extends ReadonlyArray<infer U>
      ? _ReadonlyDeepReadonlyArray<U>
      : T extends Function | string | symbol | number | boolean | undefined | null
        ? T
        : Readonly<_ReadonlyDeepObjectT<T>>;
