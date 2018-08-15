import test from 'ava';

import {
  ExpectT,
  IsSameT,
  WithOptionalPropertiesT,
} from '../..';

test('WithOptionalPropertiesT', t => {
  interface I1 {
    p1: string;
    p2: string;
    p3: string;
    p4: string;
  }
  type I11 = WithOptionalPropertiesT<I1, 'p1' | 'p3'>;
  const i11: I11 = {
      p2: 'v2',
      p4: 'v4',
    };
  interface I12 {
    p1?: string;
    p2: string;
    p3?: string;
    p4: string;
  }
  type E1 = ExpectT<IsSameT<I11, I12>, true>;

  t.pass();
});
