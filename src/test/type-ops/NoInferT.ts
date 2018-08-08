import { test } from 'ava';

import { NoInferT } from '../..';

test('NoInferT', t => {
  const f1 = <T>(i1: T, i2: T): void => undefined;
  f1({ p1: 'p1', p2: 'p2' }, { p1: 'p1', p2: 'p2' });
  f1({ p1: 'p1', p2: 'p2' }, { p1: 'p1' });

  const f2 = <T>(i1: T, i2: NoInferT<T>): void => undefined;
  f2({ p1: 'p1', p2: 'p2' }, { p1: 'p1', p2: 'p2' });
  // f2({ p1: 'p1', p2: 'p2' }, { p1: 'p1' });

  t.pass();
});
