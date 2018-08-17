import test from 'ava';

import {
  ExpectT,
  IsSameT,
  RetaggedT,
  RawT,
  TagT,
  TaggedT,
} from '../..';

test('TaggedT', t => {
  type U1 = TaggedT<string, 'A'>;
  let u1: U1 = 'v1' as U1;
  u1 = 'v2' as U1;
  // u1 = 'v3';
  const u11: RawT<U1> = u1;
  type E1 = ExpectT<IsSameT<TagT<U1>, 'A'>, true>;
  type E2 = ExpectT<IsSameT<TagT<string>, never>, true>;
  type E3 = ExpectT<IsSameT<RawT<U1>, string>, true>;
  type E4 = ExpectT<IsSameT<RawT<string>, string>, true>;

  type U2 = TaggedT<string, 'A'>;
  let u21: U2 = 'v4' as U2;
  u21 = u1;
  u1 = u21;
  const u211: RawT<U2> = u1;

  type U3 = TaggedT<string, 'B'>;
  let u3: U3 = 'v5' as U3;
  // u1 = u3;
  // u1 = u3 as U1;
  // u3 = u1;
  // u3 = u1 as U3;
  const u31: RawT<U3> = u1;

  type U4 = RetaggedT<U3, 'A'>;
  let u4: U4 = u3 as RawT<U3> as U4;
  u4 = u1;
  u1 = u4;

  t.pass();
});
