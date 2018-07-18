import { test } from 'ava';

import {
  ExpectT,
  IsSameT,
  WithOptionalPropertiesT,
} from '../..';

test('WithOptionalPropertiesT', t => {
  interface A1 {
    p1: string;
    p2: string;
    p3: string;
    p4: string;
  }
  type A2 = WithOptionalPropertiesT<A1, 'p1' | 'p3'>;
  type _ = ExpectT<IsSameT<A2, { p1?: string; p2: string; p3?: string; p4: string; }>, true>;
  const a2: A2 = {
      p2: 'p2',
      p4: 'p4',
    };

  t.pass();
});
