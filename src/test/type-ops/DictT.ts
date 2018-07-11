import { test } from 'ava';

import { DictT } from '../..';

test('DictT', t => {
  const x: DictT<string> = { };
  x['p1'] = 'p1';
  t.deepEqual(x, { p1: 'p1' });
});
