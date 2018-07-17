interface _PartialDeepArray<T> extends Array<PartialDeepT<T>> { }

interface _PartialDeepReadonlyArray<T> extends ReadonlyArray<PartialDeepT<T>> { }

type _PartialDeepObjectT<T> = {
    [K in keyof T]: PartialDeepT<T[K]>;
  };

/**
 * Recursively make all properties of `T` optional.
 */
export type PartialDeepT<T> = T extends Array<infer U>
    ? _PartialDeepArray<U>
    : T extends ReadonlyArray<infer U>
      ? _PartialDeepReadonlyArray<U>
      : T extends Function | string | symbol | number | boolean | undefined | null
        ? T
        : Partial<_PartialDeepObjectT<T>>;
