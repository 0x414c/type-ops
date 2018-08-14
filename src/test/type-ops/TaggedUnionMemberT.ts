import { test } from 'ava';

import {
  ExpectT,
  IsSameT,
  TaggedUnionMemberT,
} from '../..';

declare const TAG: unique symbol;

test('TaggedUnionMemberT', t => {
  interface I1 {
    [TAG]: 'I1';
    p1: string;
  }
  interface I2 {
    [TAG]: 'I2';
    p1: number;
  }
  type I3 = I1 | I2;
  type I11 = TaggedUnionMemberT<I3, typeof TAG, 'I1'>;
  type E1 = ExpectT<IsSameT<I1, I11>, true>;

  t.pass();
});
