import { test } from 'ava';

import { ReadonlyDeepT } from '../..';

import { ISomething } from './_support/ISomething';

test('ReadonlyDeepT', t => {
  const x: ReadonlyDeepT<ISomething> = {
      p5: 'p5',
      p6: {
        p8: 'p8',
      },
    };
  // x.p5 = '1';
  // x.p6 = { p8: '2' };
  // x.p6.p7 = '3';
  // x.p6.p8 = '4';
  t.pass();
});
