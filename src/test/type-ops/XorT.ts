import { test } from 'ava';

import { XorT } from '../..';

test('XorT', t => {
  const _1: XorT<false, false> = false;
  // const _2: XorT<false, false> = true;
  const _3: XorT<false, true> = true;
  // const _4: XorT<false, true> = false;
  const _5: XorT<true, false> = true;
  // const _6: XorT<true, false> = false;
  const _7: XorT<true, true> = false;
  // const _8: XorT<true, true> = true;

  t.pass();
});
