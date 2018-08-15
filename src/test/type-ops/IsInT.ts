import test from 'ava';

import { IsInT } from '../..';

test('IsInT', t => {
  const i1: IsInT<'A', 'A'> = true;
  // const i11: IsInT<'A', 'A'> = false;

  const i2: IsInT<'A', 'A' | 'B'> = true;
  // const i21: IsInT<'A', 'A' | 'B'> = false;

  const i3: IsInT<'A' | 'B', 'A' | 'B'> = true;
  // const i31: IsInT<'A' | 'B', 'A' | 'B'> = false;

  const i4: IsInT<'A' | 'B', 'A' | 'B' | 'C'> = true;
  // const i41: IsInT<'A' | 'B', 'A' | 'B' | 'C'> = false;

  const i5: IsInT<'B', 'A'> = false;
  // const i51: IsInT<'B', 'A'> = true;

  const i6: IsInT<'A' | 'B', 'A'> = true;
  // const i61: IsInT<'A' | 'B', 'A'> = false;

  const i7: IsInT<'A' | 'B' | 'C', 'A' | 'B'> = true;
  // const i71: IsInT<'A' | 'B' | 'C', 'A' | 'B'> = false;

  const i8: IsInT<never, 'A'> = false;
  // const i81: IsInT<never, 'A'> = true;

  const i9: IsInT<'A', never> = false;
  // const i91: IsInT<'A', never> = true;

  t.pass();
});
