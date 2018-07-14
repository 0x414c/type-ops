import { test } from 'ava';

import {
  ExpectT,
  IsSameT,
  OverrideT,
} from '../..';

test('OverrideT', t => {
  interface A1 {
    p1: string;
    p2: string;
    p3: string;
  }
  interface A2 {
    p2: number;
    p3: number;
    p4: number;
  }
  type A3 = OverrideT<A1, A2>;
  type _ = ExpectT<IsSameT<A3, { p1: string; p2: number; p3: number; p4: number; }>, true>;
  const a3: A3 = {
      p1: 'p1',
      p2: 2,
      p3: 3,
      p4: 4,
    };

  t.pass();
});
