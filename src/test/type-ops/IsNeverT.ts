import { test } from 'ava';

import { IsNeverT } from '../..';

test('IsNeverT', t => {
  const _1: IsNeverT<never> = true;
  // const _11: IsNeverT<never> = false;

  const _2: IsNeverT<'A'> = false;
  // const _21: IsNeverT<'A'> = true;

  const _3: IsNeverT<Extract<'A' | 'B', 'B'>> = false;
  // const _31: IsNeverT<Extract<'A' | 'B', 'B'>> = true;

  const _4: IsNeverT<Extract<'A' | 'B', 'C'>> = true;
  // const _41: IsNeverT<Extract<'A' | 'B', 'C'>> = false;

  t.pass();
});
