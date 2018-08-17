import { PropertiesOfSubtypeT } from './PropertiesOfSubtypeT';

/**
 * Extract all properties of `T` which are not a subtype of `U`.
 */
export type NotPropertiesOfSubtypeT<T, U> = Exclude<keyof T, PropertiesOfSubtypeT<T, U>>;
