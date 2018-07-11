import { test } from 'ava';

import { NotT } from '../..';

test('NotT', t => {
  const _1: NotT<true> = false;
  // const _2: NotT<true> = true;
  // const _3: NotT<false> = false;
  const _4: NotT<false> = true;

  t.pass();
});
