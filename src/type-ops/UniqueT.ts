export declare const RAW_TYPE: unique symbol;
export declare const TYPE_TAG: unique symbol;

export type UniqueT<T, TTag> = T
    & {
      [RAW_TYPE]: T;
      [TYPE_TAG]: TTag;
    };
