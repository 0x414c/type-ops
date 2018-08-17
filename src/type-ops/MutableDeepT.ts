import { PrimitiveT } from './PrimitiveT';
import { MutableT } from './MutableT';

interface _MutableDeepArray<T> extends Array<MutableDeepT<T>> { }

interface _MutableDeepReadonlyArray<T> extends ReadonlyArray<MutableDeepT<T>> { }

type _MutableDeepObjectT<T> = {
    [K in keyof T]: MutableDeepT<T[K]>;
  };

/**
 * Recursively make all properties of `T` mutable.
 */
export type MutableDeepT<T> = T extends Array<infer U>
    ? _MutableDeepArray<U>
    : T extends ReadonlyArray<infer U>
      ? _MutableDeepReadonlyArray<U>
      : T extends Function | PrimitiveT
        ? T
        : _MutableDeepObjectT<MutableT<T>>;
