import { test } from 'ava';

import { IsInT } from '../..';

test('IsInT', t => {
  const _1: IsInT<'A', 'A'> = true;
  // const _2: IsInT<'A', 'A'> = false;
  const _3: IsInT<'A', 'A' | 'B'> = true;
  // const _4: IsInT<'A', 'A' | 'B'> = false;
  const _5: IsInT<'A' | 'B', 'A' | 'B'> = true;
  // const _6: IsInT<'A' | 'B', 'A' | 'B'> = false;
  const _7: IsInT<'A' | 'B', 'A' | 'B' | 'C'> = true;
  // const _8: IsInT<'A' | 'B', 'A' | 'B' | 'C'> = false;

  const _9: IsInT<'B', 'A'> = false;
  // const _10: IsInT<'B', 'A'> = true;
  const _11: IsInT<'A' | 'B', 'A'> = true;
  // const _12: IsInT<'A' | 'B', 'A'> = false;
  const _13: IsInT<'A' | 'B' | 'C', 'A' | 'B'> = true;
  // const _14: IsInT<'A' | 'B' | 'C', 'A' | 'B'> = false;

  const _15: IsInT<never, 'A'> = false;
  // const _16: IsInT<never, 'A'> = true;
  const _17: IsInT<'A', never> = false;
  // const _18: IsInT<'A', never> = true;

  t.pass();
});
