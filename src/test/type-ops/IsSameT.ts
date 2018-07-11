import { test } from 'ava';

import { IsSameT } from '../..';

test('IsSameT', t => {
  const _1: IsSameT<'A', 'A'> = true;
  // const _2: IsSameT<'A', 'A'> = false;
  // const _3: IsSameT<'A', 'B'> = true;
  const _4: IsSameT<'A', 'B'> = false;

  t.pass();
});
