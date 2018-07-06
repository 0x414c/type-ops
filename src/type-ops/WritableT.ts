export type WritableT<T> = {
    -readonly [PropertyKey in keyof T]: T[PropertyKey];
  };
