[![npm version](https://badge.fury.io/js/type-ops.svg)](https://npm.im/type-ops)

# `type-ops`

A collection of useful operators to make type-level programming in TypeScript easier.

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [Compatibility](#compatibility)
- [Install](#install)
- [Requirements](#requirements)
- [Dependencies](#dependencies)
- [License](#license)
- [Features](#features)
  - [Testing & checking utilities](#testing--checking-utilities)
    - [`expect`](#expect)
    - [`ExpectT`](#expectt)
    - [`IsAssignableToT`](#isassignabletot)
    - [`IsInT`](#isint)
    - [`IsNeverT`](#isnevert)
    - [`IsNotInT`](#isnotint)
    - [`IsNullableT`](#isnullablet)
    - [`IsOptionalT`](#isoptionalt)
    - [`IsSameT`](#issamet)
  - [Property selectors](#property-selectors)
    - [`NotPropertiesOfTypeT`](#notpropertiesoftypet)
    - [`OptionalPropertiesT`](#optionalpropertiest)
    - [`PropertiesOfTypeT`](#propertiesoftypet)
    - [`RequiredPropertiesT`](#requiredpropertiest)
  - [Type modifiers](#type-modifiers)
    - [`OmitT`](#omitt)
    - [`OverrideT`](#overridet)
    - [`PartialDeepT`](#partialdeept)
    - [`ReadonlyDeepT`](#readonlydeept)
    - [`ReplaceT`](#replacet)
    - [`RequiredDeepT`](#requireddeept)
    - [`WithOptionalPropertiesT`](#withoptionalpropertiest)
    - [`WithRequiredPropertiesT`](#withrequiredpropertiest)
    - [`WritableDeepT`](#writabledeept)
    - [`WritableT`](#writablet)
  - [Aliases and interfaces](#aliases-and-interfaces)
    - [`ConstructorT`](#constructort)
    - [`DictT`](#dictt)
    - [`FunctionT`](#functiont)
    - [`JsonT`](#jsont)
    - [`OptionalT`](#optionalt)
    - [`NullableT`](#nullablet)
    - [`UniqueT`](#uniquet)
  - [Logical operators](#logical-operators)
    - [`NotT`](#nott)
    - [`AndT`](#andt)
    - [`OrT`](#ort)
    - [`XorT`](#xort)
  - [Miscellaneous utilities](#miscellaneous-utilities)
    - [`TaggedUnionMemberT`](#taggedunionmembert)
    - [`NoDistributeT`](#nodistributet)
    - [`NoInferT`](#noinfert)

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

#### `IsAssignableToT`

Check if `T` is assignable to `U`.

##### Definition

```ts
type IsAssignableToT<T, U> = NoDistributeT<T> extends U
    ? true
    : false;
```

#### `IsInT`

Check if `T` is in union `U`.

##### Definition

```ts
type IsInT<T, U> = NotT<IsNeverT<Extract<U, T>>>;
```

#### `IsNeverT`

Check if `T` is `never`.

##### Definition

```ts
type IsNeverT<T> = NoDistributeT<T> extends never
    ? true
    : false;
```

#### `IsNotInT`

Check if `T` is not in union `U`.

##### Definition

```ts
type IsNotInT<T, U> = NotT<IsInT<T, U>>;
```

#### `IsNullableT`

Check if `T` is nullable.

##### Definition

```ts
type IsNullableT<T> = IsInT<undefined | null, T>;
```

#### `IsOptionalT`

Check if `T` is optional.

##### Definition

```ts
type IsOptionalT<T> = IsInT<undefined, T>;
```

#### `IsSameT`

Check if `T` and `U` are of the same shape.

##### Definition

```ts
type IsSameT<T, U> = NoDistributeT<T> extends U
    ? NoDistributeT<U> extends T
      ? true
      : false
    : false;
```

### Property selectors

These types can be thought of as "filters" on property names of a particular type.

#### `NotPropertiesOfTypeT`

Extract all properties of `T` which are not assignable to `U`.

##### Definition

```ts
type NotPropertiesOfTypeT<T, U> = {
    [K in keyof T]: IsAssignableToT<T[K], U> extends true
      ? never
      : K;
  }[keyof T];
```

#### `OptionalPropertiesT`

Extract all optional properties of `T`.

##### Definition

```ts
type OptionalPropertiesT<T> = {
    [K in keyof T]-?: IsOptionalT<T[K]> extends true
      ? K
      : never;
  }[keyof T];
```

#### `PropertiesOfTypeT`

Extract all properties of `T` which are assignable to `U`.

##### Definition

```ts
type PropertiesOfTypeT<T, U> = {
    [K in keyof T]: IsAssignableToT<T[K], U> extends true
      ? K
      : never;
  }[keyof T];
```

#### `RequiredPropertiesT`

Extract all required properties of `T`.

##### Definition

```ts
type RequiredPropertiesT<T> = {
    [K in keyof T]-?: IsOptionalT<T[K]> extends true
      ? never
      : K;
  }[keyof T];
```

### Type modifiers

These are just mapped conditional types.

#### `JsonT`

Represent `T` after JSON serialization round-trip.

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

#### `OverrideT`

Override properties of `T` with corresponding properties of `U`.

##### Definition

```ts
type OverrideT<T, U> = OmitT<T, keyof T & keyof U>
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
type PartialDeepT<T> = T extends Array<infer U>
    ? _PartialDeepArray<U>
    : T extends ReadonlyArray<infer U>
      ? _PartialDeepReadonlyArray<U>
      : T extends FunctionT | PrimitiveT
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
type ReadonlyDeepT<T> = T extends Array<infer U>
    ? _ReadonlyDeepArray<U>
    : T extends ReadonlyArray<infer U>
      ? _ReadonlyDeepReadonlyArray<U>
      : T extends FunctionT | PrimitiveT
        ? T
        : Readonly<_ReadonlyDeepObjectT<T>>;
```

#### `ReplaceT`

Replace properties `K` of `T` with corresponding properties of `U`.

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
type RequiredDeepT<T> = T extends Array<infer U>
    ? _RequiredDeepArray<U>
    : T extends ReadonlyArray<infer U>
      ? _RequiredDeepReadonlyArray<U>
      : T extends FunctionT | PrimitiveT
        ? T
        : _RequiredDeepObjectT<Required<T>>;
```

#### `WithOptionalPropertiesT`

Make properties `K` of `T` optional.

##### Definition

```ts
type WithOptionalPropertiesT<T, K extends keyof T> = ReplaceT<T, Partial<T>, K>;
```

#### `WithRequiredPropertiesT`

Make properties `K` of `T` required.

##### Definition

```ts
type WithRequiredPropertiesT<T, K extends keyof T> = ReplaceT<T, Required<T>, K>;
```

#### `WritableDeepT`

Recursively make all properties of `T` writable.

##### Definition

```ts
interface _WritableDeepArray<T> extends Array<WritableDeepT<T>> { }
interface _WritableDeepReadonlyArray<T> extends ReadonlyArray<WritableDeepT<T>> { }
type _WritableDeepObjectT<T> = {
    [K in keyof T]: WritableDeepT<T[K]>;
  };
type WritableDeepT<T> = T extends Array<infer U>
    ? _WritableDeepArray<U>
    : T extends ReadonlyArray<infer U>
      ? _WritableDeepReadonlyArray<U>
      : T extends Function | string | symbol | number | boolean | undefined | null
        ? T
        : _WritableDeepObjectT<WritableT<T>>;
```

#### `WritableT`

Make all properties of `T` writable.

##### Definition

```ts
type WritableT<T> = {
    -readonly [K in keyof T]: T[K];
  };
```

### Aliases and interfaces

#### `ConstructorT`

A constructor.

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

A function.

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

#### `UniqueT`

Make an opaque alias of `T` using tag `TTag`.

##### Definition

```ts
declare const _RAW_TYPE: unique symbol;
declare const _TYPE_TAG: unique symbol;
type UniqueT<T, TTag extends PropertyKey> = T
    & {
      [_RAW_TYPE]: T;
      [_TYPE_TAG]: TTag;
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

// `I2' is fully compatible w/ `I1' by definition:
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
```

##### `RawT`

Extract raw type of `T`.

###### Definition

```ts
type RawT<T> = T extends UniqueT<infer U, infer TTag>
    ? U
    : T;
```

##### `TagT`

Extract tag from an opaque alias `T`.

###### Definition

```ts
type TagT<T> = T extends UniqueT<infer U, infer TTag>
    ? TTag
    : never;
```

### Logical operators

#### `NotT`

Logical "not" of `T`.

###### Definition

```ts
type NotT<T extends boolean> = T extends false
    ? true
    : false;
```

#### `AndT`

Logical "and" of `T` and `U`.

###### Definition

```ts
type AndT<T extends boolean, U extends boolean> = T extends false
    ? false
    : U extends false
      ? false
      : true;
```

#### `OrT`

Logical "or" of `T` and `U`.

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

#### `TaggedUnionMemberT`

Extract a member of a tagged union `T` using `TTagKey` as a tag property and `TValue` as its type.

##### Definition

```ts
type TaggedUnionMemberT<T, TTagKey extends keyof T, TTagValue extends T[TTagKey]> =
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
