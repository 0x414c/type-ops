import { test } from 'ava';

import { WritableT } from '../..';

test('WritableT', t => {
  interface A1 {
    readonly p1: string;
    p2: string;
  }
  type A2 = WritableT<A1>;
  const a2: A2 = {
      p1: 'p1',
      p2: 'p2',
    };
  a2.p1 = 'p11';
  a2.p2 = 'p21';

  t.pass();
});
