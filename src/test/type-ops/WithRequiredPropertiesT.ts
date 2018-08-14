import { test } from 'ava';

import {
  ExpectT,
  IsSameT,
  WithRequiredPropertiesT,
} from '../..';

test('WithRequiredPropertiesT', t => {
  interface I1 {
    p1?: string;
    p2?: string;
    p3?: string;
    p4?: string;
  }
  type I11 = WithRequiredPropertiesT<I1, 'p1' | 'p3'>;
  const i11: I11 = {
      p1: 'v1',
      p3: 'v3',
    };
  interface I12 {
    p1: string;
    p2?: string;
    p3: string;
    p4?: string;
  }
  type E1 = ExpectT<IsSameT<I11, I12>, true>;

  t.pass();
});
