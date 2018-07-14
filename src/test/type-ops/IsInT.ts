import { test } from 'ava';

import { IsInT } from '../..';

test('IsInT', t => {
  const _1: IsInT<'A', 'A'> = true;
  // const _11: IsInT<'A', 'A'> = false;

  const _2: IsInT<'A', 'A' | 'B'> = true;
  // const _21: IsInT<'A', 'A' | 'B'> = false;

  const _3: IsInT<'A' | 'B', 'A' | 'B'> = true;
  // const _31: IsInT<'A' | 'B', 'A' | 'B'> = false;

  const _4: IsInT<'A' | 'B', 'A' | 'B' | 'C'> = true;
  // const _41: IsInT<'A' | 'B', 'A' | 'B' | 'C'> = false;

  const _5: IsInT<'B', 'A'> = false;
  // const _51: IsInT<'B', 'A'> = true;

  const _6: IsInT<'A' | 'B', 'A'> = true;
  // const _61: IsInT<'A' | 'B', 'A'> = false;

  const _7: IsInT<'A' | 'B' | 'C', 'A' | 'B'> = true;
  // const _71: IsInT<'A' | 'B' | 'C', 'A' | 'B'> = false;

  const _8: IsInT<never, 'A'> = false;
  // const _81: IsInT<never, 'A'> = true;

  const _9: IsInT<'A', never> = false;
  // const _91: IsInT<'A', never> = true;

  t.pass();
});
