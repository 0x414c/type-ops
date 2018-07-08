export type NotPropertiesOfTypeT<T, U> = {
    [K in keyof T]: T[K] extends U
      ? never
      : K;
  }[keyof T];
