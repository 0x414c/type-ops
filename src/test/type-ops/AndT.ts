import { test } from 'ava';

import { AndT } from '../..';

test('AndT', t => {
  const a1: AndT<false, false> = false;
  // const a11: AndT<false, false> = true;

  const a2: AndT<false, true> = false;
  // const a21: AndT<false, true> = true;

  const a3: AndT<true, false> = false;
  // const a31: AndT<true, false> = true;

  const a4: AndT<true, true> = true;
  // const a41: AndT<true, true> = false;

  t.pass();
});
