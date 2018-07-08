export type IsOptionalT<T> = undefined extends T
    ? true
    : false;
