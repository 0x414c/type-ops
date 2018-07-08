export type WritableT<T> = {
    -readonly [K in keyof T]: T[K];
  };
