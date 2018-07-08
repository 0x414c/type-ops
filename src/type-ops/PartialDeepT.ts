export type PartialDeepT<T> = {
    [K in keyof T]?: PartialDeepT<T[K]>;
  };
