import { test } from 'ava';

import { ReplaceT } from '../..';

test('ReplaceT', t => {
  interface A1 {
    p1: string;
    p2: string;
    p3: string;
    p4: string;
  }
  interface A2 {
    p2: number;
    p3: number;
    p4: number;
    p5: number;
  }
  type A3 = ReplaceT<A1, A2, 'p2' | 'p4'>;
  const a3: A3 = {
      p1: 'p1',
      p2: 2,
      p3: 'p3',
      p4: 4,
    };

  t.pass();
});
