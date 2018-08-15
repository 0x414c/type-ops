import test from 'ava';

import { WritableT } from '../..';

test('WritableT', t => {
  interface I1 {
    readonly p1: string;
    p2: string;
  }
  type I11 = WritableT<I1>;
  const i11: I11 = {
      p1: 'v1',
      p2: 'v2',
    };
  i11.p1 = 'v11';
  i11.p2 = 'v21';

  t.pass();
});
