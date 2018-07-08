import { test } from 'ava';

import {
  IsNullableT,
  NullableT,
} from '../..';

test('IsNullableT', t => {
  const x1: IsNullableT<NullableT<'A'>> = true;
  // const x2: IsNullableT<NullableT<'A'>> = false;
  // const x3: IsNullableT<'A'> = true;
  const x4: IsNullableT<'A'> = false;
  t.pass();
});
