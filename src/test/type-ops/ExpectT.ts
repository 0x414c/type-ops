import { test } from 'ava';

import {
  ExpectT,
  IsNullableT,
  NullableT,
} from '../..';

test('ExpectT', t => {
  type A1 = ExpectT<IsNullableT<NullableT<'A'>>, true>;
  // type A2 = ExpectT<IsNullableT<NullableT<'A'>>, false>;
  // type A3 = ExpectT<IsNullableT<'A'>, true>;
  type A4 = ExpectT<IsNullableT<'A'>, false>;
  t.pass();
});
