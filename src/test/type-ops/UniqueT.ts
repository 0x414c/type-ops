import { test } from 'ava';

import {
  ExpectT,
  IsSameT,
  RawT,
  TagT,
  UniqueT,
} from '../..';

test('UniqueT', t => {
  type A1 = UniqueT<string, 'A'>;
  let a1: A1 = '1' as A1;
  a1 = '2' as A1;
  // a1 = '3';
  const a11: RawT<A1> = a1;
  type _1 = ExpectT<IsSameT<TagT<A1>, 'A'>, true>;
  type _2 = ExpectT<IsSameT<TagT<string>, never>, true>;
  type _3 = ExpectT<IsSameT<RawT<A1>, string>, true>;
  type _4 = ExpectT<IsSameT<RawT<string>, string>, true>;

  type A2 = UniqueT<string, 'A'>;
  let a2: A2 = '4' as A2;
  a2 = a1;
  a1 = a2;
  const a21: RawT<A2> = a1;

  type B = UniqueT<string, 'B'>;
  let b: B = '5' as B;
  // a1 = b;
  // a1 = b as A1;
  // b = a1;
  // b = a1 as B;
  const b1: RawT<B> = a1;

  t.pass();
});
