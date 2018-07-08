import { test } from 'ava';

import { DictT } from '../..';

test('DictT', t => {
  let x: DictT = { };
  x['p1'] = 'p1';
  t.pass();
});
