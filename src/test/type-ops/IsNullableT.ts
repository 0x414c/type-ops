import { test } from 'ava';

import {
  IsNullableT,
  NullableT,
} from '../..';

test('IsNullableT', t => {
  const i1: IsNullableT<NullableT<'A'>> = true;
  // const i11: IsNullableT<NullableT<'A'>> = false;

  const i2: IsNullableT<'A'> = false;
  // const i21: IsNullableT<'A'> = true;

  t.pass();
});
