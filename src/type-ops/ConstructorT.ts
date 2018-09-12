/**
 * A constructor of `TInstance`s from `TArguments`.
 */
export type ConstructorT<TInstance = object, TArguments extends any[] = any[]> = new(...args: TArguments) => TInstance;
