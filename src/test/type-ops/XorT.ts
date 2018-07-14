import { test } from 'ava';

import { XorT } from '../..';

test('XorT', t => {
  const _1: XorT<false, false> = false;
  // const _11: XorT<false, false> = true;

  const _2: XorT<false, true> = true;
  // const _21: XorT<false, true> = false;

  const _3: XorT<true, false> = true;
  // const _31: XorT<true, false> = false;

  const _4: XorT<true, true> = false;
  // const _41: XorT<true, true> = true;

  t.pass();
});
