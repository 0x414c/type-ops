import { test } from 'ava';

import { WritableT } from '../..';

import { IReadonlySomething } from './_support/IReadonlySomething';

test('WritableT', t => {
  const x: WritableT<IReadonlySomething> = {
      p1: 'p1',
      p2: {
        p3: 'p3',
        p4: 'p4',
      },
      p5: 'p5',
      p6: {
        p7: 'p7',
        p8: 'p8',
      },
    };
  x.p1 = '1';
  x.p2 = { p3: '2', p4: '3' };
  // x.p2.p3 = '3';
  x.p2.p4 = '4';
  x.p5 = '5';
  x.p6 = { p7: '6', p8: '7' };
  // x.p6.p7 = '8';
  x.p6.p8 = '9';
  t.pass();
});
