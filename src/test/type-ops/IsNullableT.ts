import { test } from 'ava';

import {
  IsNullableT,
  NullableT,
} from '../..';

test('IsNullableT', t => {
  const _1: IsNullableT<NullableT<'A'>> = true;
  // const _2: IsNullableT<NullableT<'A'>> = false;
  // const _3: IsNullableT<'A'> = true;
  const _4: IsNullableT<'A'> = false;

  t.pass();
});
