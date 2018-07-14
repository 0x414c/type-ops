import { test } from 'ava';

import { NoInferT } from '../..';

test('NoInferT', t => {
  const f1 = <T>(x: T, y: T): void => undefined;
  f1({ p1: 'p1', p2: 'p2' }, { p1: 'p1', p2: 'p2' });
  f1({ p1: 'p1', p2: 'p2' }, { p1: 'p1' });

  const f2 = <T>(x: T, y: NoInferT<T>): void => undefined;
  f2({ p1: 'p1', p2: 'p2' }, { p1: 'p1', p2: 'p2' });
  // f2({ p1: 'p1', p2: 'p2' }, { p1: 'p1' });

  t.pass();
});
