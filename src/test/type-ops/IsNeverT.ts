import { test } from 'ava';

import { IsNeverT } from '../..';

test('IsNeverT', t => {
  const _1: IsNeverT<never> = true;
  // const _2: IsNeverT<never> = false;
  const _3: IsNeverT<'A'> = false;
  // const _4: IsNeverT<'A'> = true;
  const _5: IsNeverT<Extract<'A' | 'B', 'B'>> = false;
  // const _6: IsNeverT<Extract<'A' | 'B', 'B'>> = true;
  const _7: IsNeverT<Extract<'A' | 'B', 'C'>> = true;
  // const _8: IsNeverT<Extract<'A' | 'B', 'C'>> = false;

  t.pass();
});
