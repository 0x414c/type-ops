/**
 * Extract a member of a tagged union `T` using `TTagKey` as a tag property and `TValue` as its type.
 */
export type TaggedUnionMemberT<T, TTagKey extends keyof T, TTagValue extends T[TTagKey]> =
    Extract<T, Record<TTagKey, TTagValue>>;
