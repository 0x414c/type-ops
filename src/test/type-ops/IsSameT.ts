import { test } from 'ava';

import { IsSameT } from '../..';

test('IsSameT', t => {
  const _1: IsSameT<'A', 'A'> = true;
  // const _11: IsSameT<'A', 'A'> = false;

  const _2: IsSameT<'A', 'B'> = false;
  // const _21: IsSameT<'A', 'B'> = true;

  t.pass();
});
