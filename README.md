# `type-ops`

A collection of useful operators to make type-level programming in TypeScript easier.

Supported TypeScript versions: `2.9.x`.

Installation: `npm i type-ops`.

# Overview

## Testing & checking utilities

### `expect`

Induce a compilation error if `TActual` does not resolve to the type of `expected`.

```ts
declare const expect: <TActual>() => { toBe(expected: TActual): void; };
```

### `ExpectT`

Induce a compilation error if `TActual` does not resolve to `TExpected`.

```ts
type ExpectT<TActual extends TExpected, TExpected extends boolean> = never;
```

### `IsNullableT`

Check if `T` is nullable.

```ts
type IsNullableT<T> = undefined | null extends T
    ? true
    : false;
```

### `IsOptionalT`

Check if `T` is optional.

```ts
type IsOptionalT<T> = undefined extends T
    ? true
    : false;
```

### `IsSameT`

Check if `T` and `U` are of the same shape.

```ts
type IsSameT<T, U> = T extends U
    ? U extends T
      ? true
      : false
    : false;
```

## Property selectors (`keyof` filters)

### `NotPropertiesOfTypeT`

Extract all properties of `T` which are not assignable to `U`.

```ts
type NotPropertiesOfTypeT<T, U> = {
    [K in keyof T]: T[K] extends U
      ? never
      : K;
  }[keyof T];
```

### `OptionalPropertiesT`

Extract all properties of `T` which are optional.

```ts
type OptionalPropertiesT<T> = {
    [K in keyof T]-?: { } extends { [K2 in K]: T[K2]; }
      ? K
      : never;
  }[keyof T];
```

### `PropertiesOfTypeT`

Extract all properties of `T` which are assignable to `U`.

```ts
type PropertiesOfTypeT<T, U> = {
    [K in keyof T]: T[K] extends U
      ? K
      : never;
  }[keyof T];
```

### `RequiredPropertiesT`

Extract all required properties of `T`.

```ts
type RequiredPropertiesT<T> = {
    [K in keyof T]-?: { } extends { [K2 in K]: T[K2]; }
      ? never
      : K;
  }[keyof T];
```

## Modifiers (aka mapped types)

### `OmitT`

Omit properties `K` from `T`.

```ts
type OmitT<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
```

### `OverrideT`

Override properties of `T` with corresponding properties of `U`.

```ts
type OverrideT<T, U> = OmitT<T, keyof T & keyof U>
    & U;
```

### `PartialDeepT`

Recursively make all properties of `T` optional.

```ts
type PartialDeepT<T> = {
    [K in keyof T]?: PartialDeepT<T[K]>;
  };
```

### `ReadonlyDeepT`

Recursively make all properties of `T` readonly.

```ts
type ReadonlyDeepT<T> = {
    readonly [K in keyof T]: ReadonlyDeepT<T[K]>;
  };
```

### `ReplaceT`

Replace properties `K` of `T` with corresponding properties of `U`.

```ts
type ReplaceT<T, U, K extends keyof T & keyof U> = OmitT<T, K>
    & Pick<U, K>;
```

### `RequiredDeepT`

Recursively make all properties of `T` required.

```ts
type RequiredDeepT<T> = {
    [K in keyof T]-?: RequiredDeepT<T[K]>;
  };
```

### `WithOptionalPropertiesT`

Make properties `K` of `T` optional.

```ts
type WithOptionalPropertiesT<T, K extends keyof T> = ReplaceT<T, Partial<T>, K>;
```

### `WritableDeepT`

Recursively make all properties of `T` writable.

```ts
type WritableDeepT<T> = {
    -readonly [K in keyof T]: WritableDeepT<T[K]>;
  };
```

### `WritableT`

Make all properties of `T` writable.

```ts
type WritableT<T> = {
    -readonly [K in keyof T]: T[K];
  };
```

## Aliases and interfaces

### `DictT`

Make a dictionary of `TValue`.

```ts
interface DictT<TValue = any> {
  [key: string]: TValue;
}
```

### `OptionalT`

Make `T` optional.

```ts
type OptionalT<T> = T
    | undefined;
```

### `NullableT`

Make `T` nullable.

```ts
type NullableT<T> = OptionalT<T>
    | null;
```

### `UniqueT`

Make an opaque alias of `T` using tag `TTag`.

```ts
type UniqueT<T, TTag extends PropertyKey> = T
    & {
      [RAW_TYPE]: T;
      [TYPE_TAG]: TTag;
    };
```

#### `RAW_TYPE`

Provide access to `T` itself.

```ts
declare const RAW_TYPE: unique symbol;
```

#### `TYPE_TAG`

Provide access to `TTag`.

```ts
declare const TYPE_TAG: unique symbol;
```

## Miscellaneous utilities

### `NoInferT`

Prevent type inference on `T`.

```ts
type NoInferT<T> = T
    & { [K in keyof T]: T[K]; };
```
