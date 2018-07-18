/**
 * Provide access to `T` itself.
 */
declare const _RAW_TYPE: unique symbol;

/**
 * Provide access to `TTag`.
 */
declare const _TYPE_TAG: unique symbol;

/**
 * Make an opaque alias of `T` using tag `TTag`.
 */
export type UniqueT<T, TTag extends PropertyKey> = T
    & {
      [_RAW_TYPE]: T;
      [_TYPE_TAG]: TTag;
    };

/**
 * Extract raw type of `T`.
 */
export type RawT<T> = T extends UniqueT<infer U, infer TTag>
    ? U
    : T;

/**
 * Extract tag from an opaque alias `T`.
 */
export type TagT<T> = T extends UniqueT<infer U, infer TTag>
    ? TTag
    : never;
