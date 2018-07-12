import { test } from 'ava';

import { OrT } from '../..';

test('OrT', t => {
  const _1: OrT<false, false> = false;
  // const _2: OrT<false, false> = true;
  const _3: OrT<false, true> = true;
  // const _4: OrT<false, true> = false;
  const _5: OrT<true, false> = true;
  // const _6: OrT<true, false> = false;
  const _7: OrT<true, true> = true;
  // const _8: OrT<true, true> = false;

  t.pass();
});
