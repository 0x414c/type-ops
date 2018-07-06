import { test } from 'ava';

import { RequiredDeepT } from '../..';

import { ISomething } from './_support/ISomething';

test('RequiredDeepT', t => {
  const x: RequiredDeepT<ISomething> = {
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
  t.pass();
});
