import { test } from 'ava';

import { OmitT } from '../..';

test('OmitT', t => {
  interface A1 {
    p1: string;
    p2: string;
    p3: string;
  }
  type A2 = OmitT<A1, 'p1' | 'p2'>;
  const a2: A2 = {
      // p1: 'p1',
      // p2: 'p2',
      p3: 'p3',
    };

  t.pass();
});
