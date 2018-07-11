import { test } from 'ava';

import { AndT } from '../..';

test('AndT', t => {
  const _1: AndT<true, true> = true;
  // const _2: AndT<true, true> = false;
  const _3: AndT<true, false> = false;
  // const _4: AndT<true, false> = true;
  const _5: AndT<false, true> = false;
  // const _6: AndT<false, true> = true;
  const _7: AndT<false, false> = false;
  // const _8: AndT<false, false> = true;

  t.pass();
});
