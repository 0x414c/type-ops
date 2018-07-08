import { test } from 'ava';

import { IsSameT } from '../..';

test('IsSameT', t => {
  const x1: IsSameT<'A', 'A'> = true;
  // const x2: IsSameT<'A', 'A'> = false;
  // const x3: IsSameT<'A', 'B'> = true;
  const x4: IsSameT<'A', 'B'> = false;
  t.pass();
});
