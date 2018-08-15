import test from 'ava';

import { IsSameT } from '../..';

test('IsSameT', t => {
  const i1: IsSameT<'A', 'A'> = true;
  // const i11: IsSameT<'A', 'A'> = false;

  const i2: IsSameT<'A', 'B'> = false;
  // const i21: IsSameT<'A', 'B'> = true;

  t.pass();
});
