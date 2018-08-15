import test from 'ava';

import { NotT } from '../..';

test('NotT', t => {
  const n1: NotT<false> = true;
  // const n11: NotT<false> = false;

  const n2: NotT<true> = false;
  // const n21: NotT<true> = true;

  t.pass();
});
