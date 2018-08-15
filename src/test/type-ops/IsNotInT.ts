import test from 'ava';

import { IsNotInT } from '../..';

test('IsNotInT', t => {
  const i1: IsNotInT<'A', 'A'> = false;
  // const i11: IsNotInT<'A', 'A'> = true;

  const i2: IsNotInT<'A', 'A' | 'B'> = false;
  // const i21: IsNotInT<'A', 'A' | 'B'> = true;

  const i3: IsNotInT<'A' | 'B', 'A' | 'B'> = false;
  // const i31: IsNotInT<'A' | 'B', 'A' | 'B'> = true;

  const i4: IsNotInT<'A' | 'B', 'A' | 'B' | 'C'> = false;
  // const i41: IsNotInT<'A' | 'B', 'A' | 'B' | 'C'> = true;

  const i5: IsNotInT<'B', 'A'> = true;
  // const i51: IsNotInT<'B', 'A'> = false;

  const i6: IsNotInT<'A' | 'B', 'A'> = false;
  // const i61: IsNotInT<'A' | 'B', 'A'> = true;

  const i7: IsNotInT<'A' | 'B' | 'C', 'A' | 'B'> = false;
  // const i71: IsNotInT<'A' | 'B' | 'C', 'A' | 'B'> = true;

  const i8: IsNotInT<never, 'A'> = true;
  // const i81: IsNotInT<never, 'A'> = false;

  const i9: IsNotInT<'A', never> = true;
  // const i91: IsNotInT<'A', never> = false;

  t.pass();
});
