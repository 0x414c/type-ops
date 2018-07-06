export type OptionalPropertiesT<T> = {
    [PropertyKey in keyof T]-?: { } extends { [PropertyKey2 in PropertyKey]: T[PropertyKey2]; }
      ? PropertyKey
      : never;
  }[keyof T];
