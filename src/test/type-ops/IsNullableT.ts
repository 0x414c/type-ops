import { test } from 'ava';

import {
  IsNullableT,
  NullableT,
} from '../..';

test('IsNullableT', t => {
  const _1: IsNullableT<NullableT<'A'>> = true;
  // const _11: IsNullableT<NullableT<'A'>> = false;

  const _2: IsNullableT<'A'> = false;
  // const _21: IsNullableT<'A'> = true;

  t.pass();
});
