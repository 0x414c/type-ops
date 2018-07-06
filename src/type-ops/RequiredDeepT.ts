export type RequiredDeepT<T> = {
    [PropertyKey in keyof T]-?: RequiredDeepT<T[PropertyKey]>;
  };
