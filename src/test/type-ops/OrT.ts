import { test } from 'ava';

import { OrT } from '../..';

test('OrT', t => {
  const _1: OrT<true, true> = true;
  // const _2: OrT<true, true> = false;
  const _3: OrT<true, false> = true;
  // const _4: OrT<true, false> = false;
  const _5: OrT<false, true> = true;
  // const _6: OrT<false, true> = false;
  const _7: OrT<false, false> = false;
  // const _8: OrT<false, false> = true;

  t.pass();
});
