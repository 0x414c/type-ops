/**
 * A constructor of `TInstance`s from `TArguments`.
 */
export type ConstructorT<TArguments extends any[] = any[], TInstance = object> = new(...args: TArguments) => TInstance;
