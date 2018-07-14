import { test } from 'ava';

import { IsNotInT } from '../..';

test('IsNotInT', t => {
  const _1: IsNotInT<'A', 'A'> = false;
  // const _2: IsNotInT<'A', 'A'> = true;
  const _3: IsNotInT<'A', 'A' | 'B'> = false;
  // const _4: IsNotInT<'A', 'A' | 'B'> = true;
  const _5: IsNotInT<'A' | 'B', 'A' | 'B'> = false;
  // const _6: IsNotInT<'A' | 'B', 'A' | 'B'> = true;
  const _7: IsNotInT<'A' | 'B', 'A' | 'B' | 'C'> = false;
  // const _8: IsNotInT<'A' | 'B', 'A' | 'B' | 'C'> = true;

  const _9: IsNotInT<'B', 'A'> = true;
  // const _10: IsNotInT<'B', 'A'> = false;
  const _11: IsNotInT<'A' | 'B', 'A'> = false;
  // const _12: IsNotInT<'A' | 'B', 'A'> = true;
  const _13: IsNotInT<'A' | 'B' | 'C', 'A' | 'B'> = false;
  // const _14: IsNotInT<'A' | 'B' | 'C', 'A' | 'B'> = true;

  const _15: IsNotInT<never, 'A'> = true;
  // const _16: IsNotInT<never, 'A'> = false;
  const _17: IsNotInT<'A', never> = true;
  // const _18: IsNotInT<'A', never> = false;

  t.pass();
});
