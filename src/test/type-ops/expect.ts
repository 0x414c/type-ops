import { test } from 'ava';

import {
  expect,
  IsNullableT,
  NullableT,
} from '../..';

test('expect', t => {
  expect<IsNullableT<NullableT<'A'>>>().toBe(true);
  // expect<IsNullableT<NullableT<'A'>>>().toBe(false);
  // expect<IsNullableT<'A'>>().toBe(true);
  expect<IsNullableT<'A'>>().toBe(false);

  t.pass();
});
