import test from 'ava';

import { NoInferT } from '../..';


test('NoInferT', t => {
  const f1 = <T>(a1: T, a2: T): void => undefined;
  f1({ p1: 'v1', p2: 'v2' }, { p1: 'v1', p2: 'v2' });
  f1({ p1: 'v1', p2: 'v2' }, { p1: 'v1' });

  const f2 = <T>(a1: T, a2: NoInferT<T>): void => undefined;
  f2({ p1: 'v1', p2: 'v2' }, { p1: 'v1', p2: 'v2' });
  // f2({ p1: 'v1', p2: 'v2' }, { p1: 'v1' });

  t.pass();
});
