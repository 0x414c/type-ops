import { test } from 'ava';

import {
  ExpectT,
  IsNullableT,
  NullableT,
} from '../..';

test('ExpectT', t => {
  type _1 = ExpectT<IsNullableT<NullableT<'A'>>, true>;
  // type _2 = ExpectT<IsNullableT<NullableT<'A'>>, false>;
  // type _3 = ExpectT<IsNullableT<'A'>, true>;
  type _4 = ExpectT<IsNullableT<'A'>, false>;

  t.pass();
});
