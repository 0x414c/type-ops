import { test } from 'ava';

import { NotT } from '../..';

test('NotT', t => {
  const _1: NotT<false> = true;
  // const _11: NotT<false> = false;

  const _2: NotT<true> = false;
  // const _21: NotT<true> = true;

  t.pass();
});
