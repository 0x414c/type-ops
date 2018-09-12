/**
 * A function mapping `TArguments` to `TResult`.
 */
export type FunctionT<TResult = any, TArguments extends any[] = any[]> = (...args: TArguments) => TResult;
