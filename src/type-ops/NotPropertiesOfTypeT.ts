import { PropertiesOfTypeT } from './PropertiesOfTypeT';


/**
 * Extract all properties of `T` which are not of the same shape as `U`.
 */
export type NotPropertiesOfTypeT<T, U> = Exclude<keyof T, PropertiesOfTypeT<T, U>>;
