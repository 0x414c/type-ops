import { test } from 'ava';

import { OrT } from '../..';

test('OrT', t => {
  const _1: OrT<false, false> = false;
  // const _11: OrT<false, false> = true;

  const _2: OrT<false, true> = true;
  // const _21: OrT<false, true> = false;

  const _3: OrT<true, false> = true;
  // const _31: OrT<true, false> = false;

  const _4: OrT<true, true> = true;
  // const _41: OrT<true, true> = false;

  t.pass();
});
