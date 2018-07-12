import { test } from 'ava';

import { AndT } from '../..';

test('AndT', t => {
  const _1: AndT<false, false> = false;
  // const _2: AndT<false, false> = true;
  const _3: AndT<false, true> = false;
  // const _4: AndT<false, true> = true;
  const _5: AndT<true, false> = false;
  // const _6: AndT<true, false> = true;
  const _7: AndT<true, true> = true;
  // const _8: AndT<true, true> = false;

  t.pass();
});
