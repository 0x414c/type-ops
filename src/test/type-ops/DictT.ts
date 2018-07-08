import { test } from 'ava';

import { DictT } from '../..';

test('DictT', t => {
  let x: DictT = { };
  x['1'] = '2';
  t.pass();
});
