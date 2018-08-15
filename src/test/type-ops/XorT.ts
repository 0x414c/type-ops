import test from 'ava';

import { XorT } from '../..';

test('XorT', t => {
  const x1: XorT<false, false> = false;
  // const x11: XorT<false, false> = true;

  const x2: XorT<false, true> = true;
  // const x21: XorT<false, true> = false;

  const x3: XorT<true, false> = true;
  // const x31: XorT<true, false> = false;

  const x4: XorT<true, true> = false;
  // const x41: XorT<true, true> = true;

  t.pass();
});
