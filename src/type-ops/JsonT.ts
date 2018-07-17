import { OmitT } from './OmitT';

import { PropertiesOfTypeT } from './PropertiesOfTypeT';

interface _JsonArrayT<T> extends Array<JsonT<T>> { }

type _CleanT<T> = OmitT<T, PropertiesOfTypeT<T, never>>;

type _JsonObjectT<T> = {
    [K in keyof T]: JsonT<T[K]>;
  };

/**
 * Represent `T` after JSON serialization round-trip.
 */
export type JsonT<T> = T extends string | number | boolean | null
    ? T
    : T extends Function | symbol | undefined
      ? never
      : T extends Array<infer U> | ReadonlyArray<infer U>
        ? _JsonArrayT<U>
        : T extends Map<any, any> | ReadonlyMap<any, any> | WeakMap<any, any> | Set<any> | ReadonlySet<any> | WeakSet<any>
          ? { }
          : T extends { toJSON(key?: any): infer U; }
            ? U
            : _CleanT<_JsonObjectT<T>>;
