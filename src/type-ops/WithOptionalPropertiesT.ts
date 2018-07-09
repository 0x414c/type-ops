import { ReplaceT } from './ReplaceT';

export type WithOptionalPropertiesT<T, K extends keyof T> = ReplaceT<T, Partial<T>, K>;
