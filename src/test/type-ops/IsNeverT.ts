import { test } from 'ava';

import { IsNeverT } from '../..';

test('IsNeverT', t => {
  const i1: IsNeverT<never> = true;
  // const i11: IsNeverT<never> = false;

  const i2: IsNeverT<'A'> = false;
  // const i21: IsNeverT<'A'> = true;

  const i3: IsNeverT<Extract<'A' | 'B', 'B'>> = false;
  // const i31: IsNeverT<Extract<'A' | 'B', 'B'>> = true;

  const i4: IsNeverT<Extract<'A' | 'B', 'C'>> = true;
  // const i41: IsNeverT<Extract<'A' | 'B', 'C'>> = false;

  t.pass();
});
