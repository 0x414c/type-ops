export type IsNullableT<T> = undefined | null extends T
    ? true
    : false;
