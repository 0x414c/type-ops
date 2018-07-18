import { test } from 'ava';

import {
  ExpectT,
  IsSameT,
  WithRequiredPropertiesT,
} from '../..';

test('WithRequiredPropertiesT', t => {
  interface A1 {
    p1?: string;
    p2?: string;
    p3?: string;
    p4?: string;
  }
  type A2 = WithRequiredPropertiesT<A1, 'p1' | 'p3'>;
  type _ = ExpectT<IsSameT<A2, { p1: string; p2?: string; p3: string; p4?: string; }>, true>;
  const a2: A2 = {
      p1: 'p1',
      p3: 'p3',
    };

  t.pass();
});
