import { test } from 'ava';

import { DictT } from '../..';

test('DictT', t => {
  const d1: DictT<string> = { };
  d1['p1'] = 'v1';

  t.pass();
});
