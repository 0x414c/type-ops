import test from 'ava';

import { NullableT } from '../..';

test('NullableT', t => {
  let o1: NullableT<string>;
  o1 = 'v1';
  o1 = undefined;
  o1 = null;

  t.pass();
});
