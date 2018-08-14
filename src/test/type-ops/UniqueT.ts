import { test } from 'ava';

import {
  ExpectT,
  IsSameT,
  RawT,
  TagT,
  UniqueT,
} from '../..';

test('UniqueT', t => {
  type U1 = UniqueT<string, 'U?'>;
  let u1: U1 = 'v1' as U1;
  u1 = 'v2' as U1;
  // u1 = 'v3';
  const u11: RawT<U1> = u1;
  type E1 = ExpectT<IsSameT<TagT<U1>, 'U?'>, true>;
  type E2 = ExpectT<IsSameT<TagT<string>, never>, true>;
  type E3 = ExpectT<IsSameT<RawT<U1>, string>, true>;
  type E4 = ExpectT<IsSameT<RawT<string>, string>, true>;

  type U2 = UniqueT<string, 'U?'>;
  let u21: U2 = 'v4' as U2;
  u21 = u1;
  u1 = u21;
  const u211: RawT<U2> = u1;

  type U3 = UniqueT<string, 'U3'>;
  let u3: U3 = 'v5' as U3;
  // u1 = u3;
  // u1 = u3 as U1;
  // u3 = u1;
  // u3 = u1 as B;
  const u31: RawT<U3> = u1;

  t.pass();
});
