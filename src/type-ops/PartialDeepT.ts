export type PartialDeepT<T> = {
    [PropertyKey in keyof T]?: PartialDeepT<T[PropertyKey]>;
  };
