import { test } from 'ava';

import { OptionalT } from '../..';

test('OptionalT', t => {
  let o1: OptionalT<string>;
  o1 = 'v1';
  o1 = undefined;

  t.pass();
});
