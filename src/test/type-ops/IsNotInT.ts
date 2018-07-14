import { test } from 'ava';

import { IsNotInT } from '../..';

test('IsNotInT', t => {
  const _1: IsNotInT<'A', 'A'> = false;
  // const _11: IsNotInT<'A', 'A'> = true;

  const _2: IsNotInT<'A', 'A' | 'B'> = false;
  // const _21: IsNotInT<'A', 'A' | 'B'> = true;

  const _3: IsNotInT<'A' | 'B', 'A' | 'B'> = false;
  // const _31: IsNotInT<'A' | 'B', 'A' | 'B'> = true;

  const _4: IsNotInT<'A' | 'B', 'A' | 'B' | 'C'> = false;
  // const _41: IsNotInT<'A' | 'B', 'A' | 'B' | 'C'> = true;

  const _5: IsNotInT<'B', 'A'> = true;
  // const _51: IsNotInT<'B', 'A'> = false;

  const _6: IsNotInT<'A' | 'B', 'A'> = false;
  // const _61: IsNotInT<'A' | 'B', 'A'> = true;

  const _7: IsNotInT<'A' | 'B' | 'C', 'A' | 'B'> = false;
  // const _71: IsNotInT<'A' | 'B' | 'C', 'A' | 'B'> = true;

  const _8: IsNotInT<never, 'A'> = true;
  // const _81: IsNotInT<never, 'A'> = false;

  const _9: IsNotInT<'A', never> = true;
  // const _91: IsNotInT<'A', never> = false;

  t.pass();
});
