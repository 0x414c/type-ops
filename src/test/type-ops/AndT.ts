import { test } from 'ava';

import { AndT } from '../..';

test('AndT', t => {
  const _1: AndT<false, false> = false;
  // const _11: AndT<false, false> = true;

  const _2: AndT<false, true> = false;
  // const _21: AndT<false, true> = true;

  const _3: AndT<true, false> = false;
  // const _31: AndT<true, false> = true;

  const _4: AndT<true, true> = true;
  // const _41: AndT<true, true> = false;

  t.pass();
});
