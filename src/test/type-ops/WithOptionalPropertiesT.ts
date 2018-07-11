import { test } from 'ava';

import { WithOptionalPropertiesT } from '../..';

test('WithOptionalPropertiesT', t => {
  interface A1 {
    p1: string;
    p2: string;
    p3: string;
    p4: string;
  }
  type A2 = WithOptionalPropertiesT<A1, 'p1' | 'p2'>;
  const a2: A2 = {
      p3: 'p3',
      p4: 'p4',
    };

  t.pass();
});
