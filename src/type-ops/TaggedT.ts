declare const _RAW_TYPE: unique symbol;

declare const _TAG_TYPE: unique symbol;

/**
 * Make tagged type from `T` using tag `TTag`.
 * It can be used to create an opaque alias of `T`.
 */
export type TaggedT<T, TTag extends PropertyKey> = T
    & {
      [_RAW_TYPE]: T;
      [_TAG_TYPE]: TTag;
    };

/**
 * Extract raw type of tagged `T`.
 * Distributes over unions.
 */
export type RawT<T> = T extends TaggedT<infer U, infer TTag_>
    ? U
    : T;

/**
 * Extract tag from tagged `T`.
 * Distributes over unions.
 */
export type TagT<T> = T extends TaggedT<infer U_, infer TTag>
    ? TTag
    : never;

/**
 * Retag a tagged `T` using tag `TTag`.
 * Distributes over unions.
 */
export type RetaggedT<T, TTag extends PropertyKey> = T extends TaggedT<infer U, infer TTag_>
    ? TaggedT<U, TTag>
    : TaggedT<T, TTag>;
