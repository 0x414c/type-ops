import { PrimitiveT } from './PrimitiveT';


interface _RequiredDeepArray<T> extends Array<RequiredDeepT<T>> { }


interface _RequiredDeepReadonlyArray<T> extends ReadonlyArray<RequiredDeepT<T>> { }


type _RequiredDeepObjectT<T> = {
  [K in keyof T]: RequiredDeepT<T[K]>;
};


/**
 * Recursively make all properties of `T` required.
 */
export type RequiredDeepT<T> = T extends Array<infer U>
  ? _RequiredDeepArray<U>
  : T extends ReadonlyArray<infer U>
    ? _RequiredDeepReadonlyArray<U>
    : T extends Function | PrimitiveT
      ? T
      : _RequiredDeepObjectT<Required<T>>;
