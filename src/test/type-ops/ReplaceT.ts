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
    p1: number;
    p2: number;
    p3: number;
    p5: number;
  }
  type A3 = ReplaceT<A1, A2, 'p1' | 'p2'>;
  const x: A3 = {
      p1: 1,
      p2: 2,
      p3: 'p3',
      p4: 'p4',
    };
  t.pass();
});
