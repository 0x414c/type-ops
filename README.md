# `type-ops`

A collection of useful operators to make type-level programming in TypeScript easier.

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [Compatibility](#compatibility)
- [Install](#install)
- [Dependencies](#dependencies)
- [License](#license)
- [Features](#features)
  - [Testing & checking utilities](#testing--checking-utilities)
    - [`expect`](#expect)
      - [Definition](#definition)
      - [Usage](#usage)
    - [`ExpectT`](#expectt)
      - [Definition](#definition-1)
      - [Usage](#usage-1)
    - [`IsNullableT`](#isnullablet)
      - [Definition](#definition-2)
    - [`IsOptionalT`](#isoptionalt)
      - [Definition](#definition-3)
    - [`IsSameT`](#issamet)
      - [Definition](#definition-4)
  - [Property selectors](#property-selectors)
    - [`NotPropertiesOfTypeT`](#notpropertiesoftypet)
      - [Definition](#definition-5)
    - [`OptionalPropertiesT`](#optionalpropertiest)
      - [Definition](#definition-6)
    - [`PropertiesOfTypeT`](#propertiesoftypet)
      - [Definition](#definition-7)
    - [`RequiredPropertiesT`](#requiredpropertiest)
      - [Definition](#definition-8)
  - [Type modifiers](#type-modifiers)
    - [`OmitT`](#omitt)
      - [Definition](#definition-9)
    - [`OverrideT`](#overridet)
      - [Definition](#definition-10)
      - [Usage](#usage-2)
    - [`PartialDeepT`](#partialdeept)
      - [Definition](#definition-11)
    - [`ReadonlyDeepT`](#readonlydeept)
      - [Definition](#definition-12)
    - [`ReplaceT`](#replacet)
      - [Definition](#definition-13)
      - [Usage](#usage-3)
    - [`RequiredDeepT`](#requireddeept)
      - [Definition](#definition-14)
    - [`WithOptionalPropertiesT`](#withoptionalpropertiest)
      - [Definition](#definition-15)
      - [Usage](#usage-4)
    - [`WritableDeepT`](#writabledeept)
      - [Definition](#definition-16)
    - [`WritableT`](#writablet)
      - [Definition](#definition-17)
  - [Aliases and interfaces](#aliases-and-interfaces)
    - [`DictT`](#dictt)
      - [Definition](#definition-18)
      - [Usage](#usage-5)
    - [`OptionalT`](#optionalt)
      - [Definition](#definition-19)
    - [`NullableT`](#nullablet)
      - [Definition](#definition-20)
    - [`UniqueT`](#uniquet)
      - [Definition](#definition-21)
      - [Usage](#usage-6)
      - [`RAW_TYPE`](#raw_type)
        - [Definition](#definition-22)
      - [`TYPE_TAG`](#type_tag)
        - [Definition](#definition-23)
  - [Logical operators](#logical-operators)
    - [`NotT`](#nott)
        - [Definition](#definition-24)
    - [`AndT`](#andt)
        - [Definition](#definition-25)
    - [`OrT`](#ort)
        - [Definition](#definition-26)
    - [`XorT`](#xort)
        - [Definition](#definition-27)
  - [Miscellaneous utilities](#miscellaneous-utilities)
    - [`NoInferT`](#noinfert)
      - [Definition](#definition-28)
    - [Usage](#usage-7)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Compatibility

TypeScript `~2.9.0`.

## Install

```commandline
npm i type-ops
```

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
interface A1 { p1: string; }
interface A2 { p1: number; }
// Compilation will fail if `IsSameT<A1, A2>' does not resolve to `false':
expect<IsSameT<A1, A2>>().toBe(false);
```

#### `ExpectT`

Induce a compilation error if `TActual` does not resolve to `TExpected`.

##### Definition

```ts
type ExpectT<TActual extends TExpected, TExpected extends boolean> = never;
```

##### Usage

```ts
interface A1 { p1: string; }
interface A2 { p1: number; }
// Compilation will fail if `IsSameT<A1, A2>' does not resolve to `false':
type _ = ExpectT<IsSameT<A1, A2>, false>;
```

#### `IsNullableT`

Check if `T` is nullable.

##### Definition

```ts
type IsNullableT<T> = undefined | null extends T
    ? true
    : false;
```

#### `IsOptionalT`

Check if `T` is optional.

##### Definition

```ts
type IsOptionalT<T> = undefined extends T
    ? true
    : false;
```

#### `IsSameT`

Check if `T` and `U` are of the same shape.

##### Definition

```ts
type IsSameT<T, U> = T extends U
    ? U extends T
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
    [K in keyof T]: T[K] extends U
      ? never
      : K;
  }[keyof T];
```

#### `OptionalPropertiesT`

Extract all optional properties of `T`.

##### Definition

```ts
type OptionalPropertiesT<T> = {
    [K in keyof T]-?: undefined extends T[K]
      ? K
      : never;
  }[keyof T];
```

#### `PropertiesOfTypeT`

Extract all properties of `T` which are assignable to `U`.

##### Definition

```ts
type PropertiesOfTypeT<T, U> = {
    [K in keyof T]: T[K] extends U
      ? K
      : never;
  }[keyof T];
```

#### `RequiredPropertiesT`

Extract all required properties of `T`.

##### Definition

```ts
type RequiredPropertiesT<T> = {
    [K in keyof T]-?: { } extends { [K2 in K]: T[K2]; }
      ? never
      : K;
  }[keyof T];
```

### Type modifiers

These are just mapped conditional types.

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
interface A1 {
  p1: string;
  p2: string;
  p3: string;
}
interface A2 {
  p2: number;
  p3: number;
  p4: number;
}
type A3 = OverrideT<A1, A2>;
const a3: A3 = {
    p1: 'p1',
    p2: 2,
    p3: 3,
    p4: 4,
  };
```

#### `PartialDeepT`

Recursively make all properties of `T` optional.

##### Definition

```ts
type PartialDeepT<T> = {
    [K in keyof T]?: PartialDeepT<T[K]>;
  };
```

#### `ReadonlyDeepT`

Recursively make all properties of `T` readonly.

##### Definition

```ts
type ReadonlyDeepT<T> = {
    readonly [K in keyof T]: ReadonlyDeepT<T[K]>;
  };
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
interface A1 {
  p1: string;
  p2: string;
  p3: string;
  p4: string;
}
interface A2 {
  p2: number;
  p3: number;
  p4: number;
  p5: number;
}
type A3 = ReplaceT<A1, A2, 'p2' | 'p4'>;
const a3: A3 = {
    p1: 'p1',
    p2: 2,
    p3: 'p3',
    p4: 4,
  };
```

#### `RequiredDeepT`

Recursively make all properties of `T` required.

##### Definition

```ts
type RequiredDeepT<T> = {
    [K in keyof T]-?: RequiredDeepT<T[K]>;
  };
```

#### `WithOptionalPropertiesT`

Make properties `K` of `T` optional.

##### Definition

```ts
type WithOptionalPropertiesT<T, K extends keyof T> = ReplaceT<T, Partial<T>, K>;
```

##### Usage 

#### `WritableDeepT`

Recursively make all properties of `T` writable.

##### Definition

```ts
type WritableDeepT<T> = {
    -readonly [K in keyof T]: WritableDeepT<T[K]>;
  };
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

#### `DictT`

Make a dictionary of `TValue`.

##### Definition

```ts
interface DictT<TValue = any> {
  [key: string]: TValue;
}
```

##### Usage

```ts
const x: DictT<string> = { };
x['p1'] = 'p1';
```

#### `OptionalT`

Make `T` optional.

##### Definition

```ts
type OptionalT<T> = T
    | undefined;
```

#### `NullableT`

Make `T` nullable.

##### Definition

```ts
type NullableT<T> = OptionalT<T>
    | null;
```

#### `UniqueT`

Make an opaque alias of `T` using tag `TTag`.

##### Definition

```ts
type UniqueT<T, TTag extends PropertyKey> = T
    & {
      [RAW_TYPE]: T;
      [TYPE_TAG]: TTag;
    };
```

##### Usage

```ts
// `A1' is an opaque type alias of `string' tagged w/ `A':
type A1 = UniqueT<string, 'A'>; 
// Type assertion must be used to assign raw `string' to its opaque typedef:
let a1: A1 = '1' as A1; 
a1 = '2' as A1;
// a1 = '3'; // Compilation will fail.
// Underlying raw type (`string') can be retrieved through lookup type:
const a11: A1[typeof RAW_TYPE] = a1;

// `A2' is fully compatible w/ `A1' by definition:
type A2 = UniqueT<string, 'A'>;
let a2: A2 = '4' as A2;
a2 = a1;
a1 = a2;
const a21: A2[typeof RAW_TYPE] = a1;

// `B' is an opaque type alias of `string' tagged w/ `B'.
type B = UniqueT<string, 'B'>;
let b: B = '5' as B;
// `A1' and `B' are incompatible:
// a1 = b;
// a1 = b as A1; // Type assertion will not make any difference.
// b = a1;
// b = a1 as B; // Ditto.
const b1: B[typeof RAW_TYPE] = a1;
```

##### `RAW_TYPE`

Provide access to `T` itself.

###### Definition

```ts
declare const RAW_TYPE: unique symbol;
```

##### `TYPE_TAG`

Provide access to `TTag`.

###### Definition

```ts
declare const TYPE_TAG: unique symbol;
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

#### `NoInferT`

Prevent type inference on `T`.

##### Definition

```ts
type NoInferT<T> = T
    & { [K in keyof T]: T[K]; };
```

#### Usage

```ts
declare const f1: <T>(x: T, y: T) => void;
f1({ p1: 'p1', p2: 'p2' }, { p1: 'p1' }); // An error sneaks in.

declare const f2: <T>(x: T, y: NoInferT<T>) => void;
// f2({ p1: 'p1', p2: 'p2' }, { p1: 'p1' }); // Causes compilation error.
f2({ p1: 'p1', p2: 'p2' }, { p1: 'p1', p2: 'p2' });
```
