/**
 * Function.
 */
export type FunctionT<TArguments extends any[] = any[], TResult = any> = (...args: TArguments) => TResult;
