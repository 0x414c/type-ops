import { test } from 'ava';

import { OverrideT } from '../..';

test('OverrideT', t => {
  interface A1 {
    p1: string;
    p2: string;
    p3: string;
  }
  interface A2 {
    p1: number;
    p2: number;
    p4: number;
  }
  type A3 = OverrideT<A1, A2>;
  const x: A3 = {
      p1: 1,
      p2: 2,
      p3: 'p3',
      p4: 4,
    };
  t.pass();
});
