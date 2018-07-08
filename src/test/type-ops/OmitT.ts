import { test } from 'ava';

import { OmitT } from '../..';

test('OmitT', t => {
  interface A1 {
    p1: string;
    p2: string;
  }
  type A2 = OmitT<A1, 'p1'>;
  const x: A2 = {
      // p1: 'p1',
      p2: 'p2',
    };
  t.pass();
});
