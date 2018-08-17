/**
 * A function mapping `TArguments` to `TResult`.
 */
export type FunctionT<TArguments extends any[] = any[], TResult = any> = (...args: TArguments) => TResult;
