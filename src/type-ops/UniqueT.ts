export declare const TYPE_TAG: unique symbol;
export declare const RAW_TYPE: unique symbol;

export type UniqueT<Type, Tag> = Type & { [TYPE_TAG]: Tag; [RAW_TYPE]: Type; };
