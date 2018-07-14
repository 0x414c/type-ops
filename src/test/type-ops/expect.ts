import { test } from 'ava';

import { expect } from '../..';

test('expect', t => {
  expect<true>().toBe(true);
  // expect<true>().toBe(false);

  expect<false>().toBe(false);
  // expect<false>().toBe(true);

  t.pass();
});
