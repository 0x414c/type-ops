export type WritableDeepT<T> = {
    -readonly [PropertyKey in keyof T]: WritableDeepT<T[PropertyKey]>;
  };
