import { test } from 'ava';

import { NotT } from '../..';

test('NotT', t => {
  const _1: NotT<false> = true;
  // const _2: NotT<false> = false;
  const _3: NotT<true> = false;
  // const _4: NotT<true> = true;

  t.pass();
});
