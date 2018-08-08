/**
 * Constructor.
 */
export type ConstructorT<TArguments extends any[] = any[], TInstance = object> = new(...args: TArguments) => TInstance;
