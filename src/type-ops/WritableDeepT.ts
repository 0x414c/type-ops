import { WritableT } from './WritableT';

interface _WritableDeepArray<T> extends Array<WritableDeepT<T>> { }

interface _WritableDeepReadonlyArray<T> extends ReadonlyArray<WritableDeepT<T>> { }

type _WritableDeepObjectT<T> = {
    [K in keyof T]: WritableDeepT<T[K]>;
  };

/**
 * Recursively make all properties of `T` writable.
 */
export type WritableDeepT<T> = T extends Array<infer U>
    ? _WritableDeepArray<U>
    : T extends ReadonlyArray<infer U>
      ? _WritableDeepReadonlyArray<U>
      : T extends Function | string | symbol | number | boolean | undefined | null
        ? T
        : _WritableDeepObjectT<WritableT<T>>;
