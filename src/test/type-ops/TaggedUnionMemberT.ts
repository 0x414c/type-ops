import { test } from 'ava';

import {
  ExpectT,
  IsSameT,
  TaggedUnionMemberT,
} from '../..';

declare const TAG: unique symbol;

test('UniqueT', t => {
  interface A1 {
    [TAG]: 'A1';
    p1: string;
  }
  interface A2 {
    [TAG]: 'A2';
    p1: number;
  }
  type B = A1 | A2;
  type A11 = TaggedUnionMemberT<B, typeof TAG, 'A1'>;
  type _ = ExpectT<IsSameT<A1, A11>, true>;

  t.pass();
});
