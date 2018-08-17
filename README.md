[![npm version](https://badge.fury.io/js/type-ops.svg)](https://npm.im/type-ops)

# `type-ops`

A collection of useful operators to make type-level programming in TypeScript easier.

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of contents**

- [Compatibility](#compatibility)
- [Install](#install)
- [Requirements](#requirements)
- [Dependencies](#dependencies)
- [License](#license)
- [Features](#features)
  - [Testing & checking utilities](#testing--checking-utilities)
    - [`expect`](#expect)
    - [`ExpectT`](#expectt)
    - [`IsFalseT`](#isfalset)
    - [`IsNeverT`](#isnevert)
    - [`IsNullableT`](#isnullablet)
    - [`IsOptionalT`](#isoptionalt)
    - [`IsSameT`](#issamet)
    - [`IsSubtypeOfT`](#issubtypeoft)
    - [`IsTrueT`](#istruet)
  - [Property selectors](#property-selectors)
    - [`KeyofT`](#keyoft)
    - [`NotPropertiesOfSubtypeT`](#notpropertiesofsubtypet)
    - [`NotPropertiesOfTypeT`](#notpropertiesoftypet)
    - [`OptionalPropertiesT`](#optionalpropertiest)
    - [`PropertiesOfSubtypeT`](#propertiesofsubtypet)
    - [`PropertiesOfTypeT`](#propertiesoftypet)
    - [`RequiredPropertiesT`](#requiredpropertiest)
  - [Type modifiers](#type-modifiers)
    - [`JsonT`](#jsont)
    - [`OmitT`](#omitt)
    - [`OverwriteT`](#overwritet)
    - [`PartialDeepT`](#partialdeept)
    - [`ReadonlyDeepT`](#readonlydeept)
    - [`ReplaceT`](#replacet)
    - [`RequiredDeepT`](#requireddeept)
    - [`WithMutableT`](#withmutablet)
    - [`WithPartialT`](#withpartialt)
    - [`WithReadonlyT`](#withreadonlyt)
    - [`WithRequiredT`](#withrequiredt)
    - [`WritableDeepT`](#writabledeept)
    - [`MutableT`](#mutablet)
  - [Aliases and interfaces](#aliases-and-interfaces)
    - [`ConstructorT`](#constructort)
    - [`DictT`](#dictt)
    - [`FunctionT`](#functiont)
    - [`NullableT`](#nullablet)
    - [`OptionalT`](#optionalt)
    - [`PrimitiveT`](#primitivet)
    - [`TaggedT`](#taggedt)
  - [Logical operators](#logical-operators)
    - [`AndT`](#andt)
    - [`NotT`](#nott)
    - [`OrT`](#ort)
    - [`XorT`](#xort)
  - [Miscellaneous utilities](#miscellaneous-utilities)
    - [`NoDistributeT`](#nodistributet)
    - [`NoInferT`](#noinfert)
    - [`SelectT`](#selectt)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Compatibility

TypeScript `~2.9.0`, `~3.0.1`.

## Install

```commandline
npm i type-ops
```

## Requirements

For some operators to work properly, strict mode must be enabled.

## Dependencies

None.

## License

MIT.

## Features

### Testing & checking utilities

These types can be used to test an arbitrary type for being conformant to a certain constraint.

#### `expect`

Induce a compilation error if `TActual` does not resolve to the type of `expected`.

##### Definition

```ts
declare const expect: <TActual>() => { toBe(expected: TActual): void; };
```

##### Usage

```ts
interface I1 {
  p1: string;
}
interface I2 {
  p1: number;
}
// There will be a compilation error if `IsSameT<I1, I2>' does not resolve to `false':
expect<IsSameT<I1, I2>>().toBe(false);
```

#### `ExpectT`

Induce a compilation error if `TActual` does not resolve to `TExpected`.

##### Definition

```ts
type ExpectT<TActual extends TExpected, TExpected extends boolean> = never;
```

##### Usage

```ts
interface I1 { p1: string; }
interface I2 { p1: number; }
// Compilation will fail if `IsSameT<I1, I2>' does not resolve to `false':
type _ = ExpectT<IsSameT<I1, I2>, false>;
```

#### `IsFalseT`

Check if `T` is `false`.
Does not distribute over unions.

##### Definition

```ts
type IsFalseT<T extends boolean> = IsSameT<T, false>;
```

#### `IsNeverT`

Check if `T` is `never`.
Does not distribute over unions.

##### Definition

```ts
type IsNeverT<T> = IsSameT<T, never>;
```

#### `IsNullableT`

Check if `T` is nullable.

##### Definition

```ts
type IsNullableT<T> = IsSubtypeOfT<undefined | null, T>;
```

#### `IsOptionalT`

Check if `T` is optional.

##### Definition

```ts
type IsOptionalT<T> = IsSubtypeOfT<undefined, T>;
```

#### `IsSameT`

Check if `T` and `U` are of the same shape.
Does not distribute over unions.

##### Definition

```ts
type IsSameT<T, U> = NoDistributeT<T> extends U
    ? NoDistributeT<U> extends T
      ? true
      : false
    : false;
```

#### `IsSubtypeOfT`

Check if `T` is a subtype of `U`.
Does not distribute over unions.

#####

```ts
type IsSubtypeOfT<T, U> = NoDistributeT<T> extends U
    ? true
    : false;
```

#### `IsTrueT`

Check if `T` is `true`.
Does not distribute over unions.

##### Definition

```ts
type IsTrueT<T extends boolean> = NotT<IsFalseT<T>>;
```

### Property selectors

These types can be thought of as "filters" on property names of a particular type.

#### `KeyofT`

Extract all properties of `T`.
Distributes over unions.

##### Definition

```ts
type KeyofT<T> = T extends any
    ? keyof T
    : never;
```

#### `NotPropertiesOfSubtypeT`

Extract all properties of `T` which are not a subtype of `U`.

##### Definition

```ts
type NotPropertiesOfSubtypeT<T, U> = Exclude<keyof T, PropertiesOfSubtypeT<T, U>>;
```

#### `NotPropertiesOfTypeT`

Extract all properties of `T` which are not of the same shape as `U`.

##### Definition

```ts
type NotPropertiesOfTypeT<T, U> = Exclude<keyof T, PropertiesOfTypeT<T, U>>;
```

#### `OptionalPropertiesT`

Extract all optional properties of `T`.

##### Definition

```ts
type OptionalPropertiesT<T> = {
    [K in keyof T]-?: IsOptionalT<T[K]> extends false
      ? never
      : K;
  }[keyof T];
```

#### `PropertiesOfSubtypeT`

Extract all properties of `T` which are a subtype of `U`.

##### Definition

```ts
type PropertiesOfSubtypeT<T, U> = {
    [K in keyof T]: IsSubtypeOfT<T[K], U> extends false
      ? never
      : K;
  }[keyof T];
```

#### `PropertiesOfTypeT`

Extract all properties of `T` which are of the same shape as `U`.

##### Definition

```ts
type PropertiesOfTypeT<T, U> = {
    [K in keyof T]: IsSameT<T[K], U> extends false
      ? never
      : K;
  }[keyof T];
```

#### `RequiredPropertiesT`

Extract all required properties of `T`.

##### Definition

```ts
type RequiredPropertiesT<T> = {
    [K in keyof T]-?: IsOptionalT<T[K]> extends false
      ? K
      : never;
  }[keyof T];
```

### Type modifiers

These are just mapped conditional types.

#### `JsonT`

Represent `T` after JSON serialization round-trip.
Distributes over unions.

##### Definition

```ts
interface _JsonArrayT<T> extends Array<JsonT<T>> { }
type _CleanT<T> = OmitT<T, PropertiesOfTypeT<T, never>>;
type _JsonObjectT<T> = {
    [K in keyof T]: JsonT<T[K]>;
  };
type JsonT<T> = T extends string | number | boolean | null
    ? T
    : T extends Function | symbol | undefined
      ? never
      : T extends Array<infer U> | ReadonlyArray<infer U>
        ? _JsonArrayT<U>
        : T extends Map<any, any> | ReadonlyMap<any, any> | WeakMap<any, any> | Set<any> | ReadonlySet<any> | WeakSet<any>
          ? { }
          : T extends { toJSON(key?: any): infer U; }
            ? U
            : _CleanT<_JsonObjectT<T>>;
```

#### `OmitT`

Omit properties `K` from `T`.

##### Definition

```ts
type OmitT<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
```

#### `OverwriteT`

Overwrite properties `K` of `T` with matching properties of `U` and add properties which are uniquie to `U`.

##### Definition

```ts
type OverwriteT<T, U, K extends keyof T & keyof U = keyof T & keyof U> = OmitT<T, K>
    & U;
```

##### Usage

```ts
interface I1 {
  p1: string;
  p2: string;
  p3: string;
}
interface I2 {
  p2: number;
  p3: number;
  p4: number;
}
type I3 = OverrideT<I1, I2>;
const i3: I3 = {
    p1: 'v1',
    p2: 2,
    p3: 3,
    p4: 4,
  };
```

#### `PartialDeepT`

Recursively make all properties of `T` optional.

##### Definition

```ts
interface _PartialDeepArray<T> extends Array<PartialDeepT<T>> { }
interface _PartialDeepReadonlyArray<T> extends ReadonlyArray<PartialDeepT<T>> { }
type _PartialDeepObjectT<T> = {
    [K in keyof T]: PartialDeepT<T[K]>;
  };
export type PartialDeepT<T> = T extends Array<infer U>
    ? _PartialDeepArray<U>
    : T extends ReadonlyArray<infer U>
      ? _PartialDeepReadonlyArray<U>
      : T extends Function | PrimitiveT
        ? T
        : Partial<_PartialDeepObjectT<T>>;
```

#### `ReadonlyDeepT`

Recursively make all properties of `T` readonly.

##### Definition

```ts
interface _ReadonlyDeepArray<T> extends Array<ReadonlyDeepT<T>> { }
interface _ReadonlyDeepReadonlyArray<T> extends ReadonlyArray<ReadonlyDeepT<T>> { }
type _ReadonlyDeepObjectT<T> = {
    [K in keyof T]: ReadonlyDeepT<T[K]>;
  };
export type ReadonlyDeepT<T> = T extends Array<infer U>
    ? _ReadonlyDeepArray<U>
    : T extends ReadonlyArray<infer U>
      ? _ReadonlyDeepReadonlyArray<U>
      : T extends Function | PrimitiveT
        ? T
        : Readonly<_ReadonlyDeepObjectT<T>>;
```

#### `ReplaceT`

Replace properties `K` of `T` with matching properties of `U`.

##### Definition

```ts
type ReplaceT<T, U, K extends keyof T & keyof U = keyof T & keyof U> = OmitT<T, K>
    & Pick<U, K>;
```

##### Usage

```ts
interface I1 {
  p1: string;
  p2: string;
  p3: string;
  p4: string;
}
interface I2 {
  p2: number;
  p3: number;
  p4: number;
  p5: number;
}
type I3 = ReplaceT<I1, I2, 'p2' | 'p4'>;
const i3: I3 = {
    p1: 'v1',
    p2: 2,
    p3: 'v3',
    p4: 4,
  };
```

#### `RequiredDeepT`

Recursively make all properties of `T` required.

##### Definition

```ts
interface _RequiredDeepArray<T> extends Array<RequiredDeepT<T>> { }
interface _RequiredDeepReadonlyArray<T> extends ReadonlyArray<RequiredDeepT<T>> { }
type _RequiredDeepObjectT<T> = {
    [K in keyof T]: RequiredDeepT<T[K]>;
  };
export type RequiredDeepT<T> = T extends Array<infer U>
    ? _RequiredDeepArray<U>
    : T extends ReadonlyArray<infer U>
      ? _RequiredDeepReadonlyArray<U>
      : T extends Function | PrimitiveT
        ? T
        : _RequiredDeepObjectT<Required<T>>;
```

#### `WithMutableT`

Make properties `K` of `T` mutable.

##### Definition

```ts
type WithMutableT<T, K extends keyof T> = ReplaceT<T, MutableT<T>, K>;
```

#### `WithPartialT`

Make properties `K` of `T` optional.

##### Definition

```ts
type WithPartialT<T, K extends keyof T> = ReplaceT<T, Partial<T>, K>;
```

#### `WithReadonlyT`

Make properties `K` of `T` readonly.

##### Definition

```ts
type WithReadonlyT<T, K extends keyof T> = ReplaceT<T, Readonly<T>, K>;
```

#### `WithRequiredT`

Make properties `K` of `T` required.

##### Definition

```ts
type WithRequiredT<T, K extends keyof T> = ReplaceT<T, Required<T>, K>;
```

#### `WritableDeepT`

Recursively make all properties of `T` mutable.

##### Definition

```ts
interface _MutableDeepArray<T> extends Array<MutableDeepT<T>> { }
interface _MutableDeepReadonlyArray<T> extends ReadonlyArray<MutableDeepT<T>> { }
type _MutableDeepObjectT<T> = {
    [K in keyof T]: MutableDeepT<T[K]>;
  };
type MutableDeepT<T> = T extends Array<infer U>
    ? _MutableDeepArray<U>
    : T extends ReadonlyArray<infer U>
      ? _MutableDeepReadonlyArray<U>
      : T extends Function | PrimitiveT
        ? T
        : _MutableDeepObjectT<MutableT<T>>;
```

#### `MutableT`

Make all properties of `T` mutable.

##### Definition

```ts
type MutableT<T> = {
    -readonly [K in keyof T]: T[K];
  };
```

### Aliases and interfaces

#### `ConstructorT`

A constructor of `TInstance`s from `TArguments`.

##### Definition

```ts
type ConstructorT<TArguments extends any[] = any[], TInstance = object> = new(...args: TArguments) => TInstance;
```

#### `DictT`

A dictionary of `TValue`s.

##### Definition

```ts
interface DictT<TValue = any> {
  [propertyKey: string]: TValue;
}
```

#### `FunctionT`

A function mapping `TArguments` to `TResult`.

##### Definition

```ts
type FunctionT<TArguments extends any[] = any[], TResult = any> = (...args: TArguments) => TResult;
```

#### `NullableT`

Make `T` nullable.

##### Definition

```ts
type NullableT<T> = OptionalT<T>
    | null;
```

#### `OptionalT`

Make `T` optional.

##### Definition

```ts
type OptionalT<T> = T
    | undefined;
```

#### `PrimitiveT`

A primitive.

##### Definition

```ts
type PrimitiveT = string | symbol | number | boolean | undefined | null;
```

#### `TaggedT`

Make tagged type from `T` using tag `TTag`.
It can be used to create an opaque alias of `T`.

##### Definition

```ts
declare const _RAW_TYPE: unique symbol;
declare const _TAG_TYPE: unique symbol;
type TaggedT<T, TTag extends PropertyKey> = T
    & {
      [_RAW_TYPE]: T;
      [_TAG_TYPE]: TTag;
    };
```

##### Usage

```ts
// `I1' is an opaque type alias of `string' tagged w/ `A':
type I1 = UniqueT<string, 'A'>;
// Type assertion must be used to assign raw `string' to its opaque typedef:
let i1: I1 = 'v1' as I1;
i1 = 'v2' as I1;
// i1 = 'v3'; // Compilation will fail.
// Underlying raw type (`string') can be retrieved through lookup type:
const i11: RawT<I1> = i1;

// `I2' has the same shape as `I1':
type I2 = UniqueT<string, 'A'>;
let i2: I2 = 'v4' as I2;
i2 = i1;
i1 = i2;
const i21: RawT<I1> = i1;

// `I3' is an opaque type alias of `string' tagged w/ `B'.
type I3 = UniqueT<string, 'B'>;
let i3: I3 = 'v5' as I3;
// `I1' and `I3' are incompatible:
// i1 = i3;
// i1 = i3 as I1; // Type assertion will not make any difference.
// i3 = i1;
// i3 = i1 as I3; // Ditto.
const i31: RawT<I1> = i1;

// `I4' has the same shape as `I1':
type I4 = RetaggedT<U3, 'A'>;
let i4: I4 = i3 as RawT<I3> as I4;
i4 = i1;
i1 = i4;
```

##### `RawT`

Extract raw type of tagged `T`.
Distributes over unions.

###### Definition

```ts
type RawT<T> = T extends UniqueT<infer U, infer TTag_>
    ? U
    : T;
```

##### `TagT`

Extract tag from tagged `T`.
Distributes over unions.

###### Definition

```ts
type TagT<T> = T extends UniqueT<infer U_, infer TTag>
    ? TTag
    : never;
```

##### `RetaggedT`

Retag a tagged `T` using tag `TTag`.
Distributes over unions.

###### Definition

```ts
type RetaggedT<T, TTag extends PropertyKey> = T extends TaggedT<infer U, infer TTag_>
    ? TaggedT<U, TTag>
    : TaggedT<T, TTag>;
```

### Logical operators

#### `AndT`

Logical "and" of `T` and `U`.
Distributes over unions.

###### Definition

```ts
type AndT<T extends boolean, U extends boolean> = T extends false
    ? false
    : U extends false
      ? false
      : true;
```

#### `NotT`

Logical "not" of `T`.
Distributes over unions.

###### Definition

```ts
type NotT<T extends boolean> = T extends false
    ? true
    : false;
```

#### `OrT`

Logical "or" of `T` and `U`.
Distributes over unions.

###### Definition

```ts
type OrT<T extends boolean, U extends boolean> = T extends false
    ? U extends false
      ? false
      : true
    : true;
```

#### `XorT`

Logical "xor" of `T` and `U`.
Distributes over unions.

###### Definition

```ts
type XorT<T extends boolean, U extends boolean> = T extends false
    ? U extends false
      ? false
      : true
    : U extends false
      ? true
      : false;
```

### Miscellaneous utilities

#### `NoDistributeT`

Prevent distribution over `T`.

##### Definition

```ts
type NoDistributeT<T> = T extends any
    ? T
    : never;
```

#### `NoInferT`

Prevent type inference on `T`.

##### Definition

```ts
type NoInferT<T> = T
    & Pick<T, keyof T>;
```

##### Usage

```ts
declare const f1: <T>(i1: T, i2: T) => void;
f1({ p1: 'v1', p2: 'v2' }, { p1: 'v1' }); // An error sneaks in.

declare const f2: <T>(i1: T, i2: NoInferT<T>) => void;
// f2({ p1: 'v1', p2: 'v2' }, { p1: 'v1' }); // Causes compilation error.
f2({ p1: 'v1', p2: 'v2' }, { p1: 'v1', p2: 'v2' });
```

#### `SelectT`

Extract a member of a tagged union `T` using `TTagKey` as a tag property and `TValue` as its type.

##### Definition

```ts
type SelectT<T, TTagKey extends keyof T, TTagValue extends T[TTagKey]> =
    Extract<T, Record<TTagKey, TTagValue>>;
```

##### Usage

```ts
declare const TAG: unique symbol;
interface I1 {
  [TAG]: 'I1';
  p1: string;
}
interface I2 {
  [TAG]: 'I2';
  p1: number;
}
type I3 = I1 | I2;
type A11 = TaggedUnionMemberT<I3, typeof TAG, 'I1'>; // Resolves to `I1'.
```
