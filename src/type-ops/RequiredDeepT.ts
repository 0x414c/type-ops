export type RequiredDeepT<T> = {
    [K in keyof T]-?: RequiredDeepT<T[K]>;
  };
