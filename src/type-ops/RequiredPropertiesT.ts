export type RequiredPropertiesT<T> = {
    [PropertyKey in keyof T]-?: { } extends { [PropertyKey2 in PropertyKey]: T[PropertyKey2]; }
      ? never
      : PropertyKey;
  }[keyof T];
