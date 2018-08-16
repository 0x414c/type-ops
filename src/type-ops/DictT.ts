/**
 * A dictionary of `TValue's.
 */
export interface DictT<TValue = any> {
  [propertyKey: string]: TValue;
}
