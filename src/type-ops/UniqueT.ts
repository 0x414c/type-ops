/**
 * Provide access to `T` itself.
 */
export declare const RAW_TYPE: unique symbol;

/**
 * Provide access to `TTag`.
 */
export declare const TYPE_TAG: unique symbol;

/**
 * Make an opaque alias of `T` using tag `TTag`.
 */
export type UniqueT<T, TTag extends PropertyKey> = T
    & {
      [RAW_TYPE]: T;
      [TYPE_TAG]: TTag;
    };
