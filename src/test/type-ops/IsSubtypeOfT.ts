import test from 'ava';

import { IsSubtypeOfT } from '../..';


test('IsSubtypeOfT', t => {
  const i1: IsSubtypeOfT<'A', 'A'> = true;
  // const i11: IsSubtypeOfT<'A', 'A'> = false;

  const i2: IsSubtypeOfT<'A', 'A' | 'B'> = true;
  // const i21: IsSubtypeOfT<'A', 'A' | 'B'> = false;

  const i3: IsSubtypeOfT<'A' | 'B', 'A' | 'B'> = true;
  // const i31: IsSubtypeOfT<'A' | 'B', 'A' | 'B'> = false;

  const i4: IsSubtypeOfT<'A' | 'B', 'A' | 'B' | 'C'> = true;
  // const i41: IsSubtypeOfT<'A' | 'B', 'A' | 'B' | 'C'> = false;

  const i5: IsSubtypeOfT<'B', 'A'> = false;
  // const i51: IsSubtypeOfT<'B', 'A'> = true;

  const i6: IsSubtypeOfT<'A' | 'B', 'A'> = false;
  // const i61: IsSubtypeOfT<'A' | 'B', 'A'> = true;

  const i7: IsSubtypeOfT<'A' | 'B' | 'C', 'A' | 'B'> = false;
  // const i71: IsSubtypeOfT<'A' | 'B' | 'C', 'A' | 'B'> = true;

  const i8: IsSubtypeOfT<never, 'A'> = true;
  // const i81: IsSubtypeOfT<never, 'A'> = false;

  const i9: IsSubtypeOfT<'A', never> = false;
  // const i91: IsSubtypeOfT<'A', never> = true;

  t.pass();
});
