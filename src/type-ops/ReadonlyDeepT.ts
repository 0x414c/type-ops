export type ReadonlyDeepT<T> = {
    readonly [PropertyKey in keyof T]: ReadonlyDeepT<T[PropertyKey]>;
  };
