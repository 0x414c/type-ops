import test from 'ava';

import { NullableT } from '../..';


test('NullableT', t => {
  let n1: NullableT<string>;
  n1 = 'v1';
  n1 = undefined;
  n1 = null;

  t.pass();
});
