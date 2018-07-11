import { test } from 'ava';

import { OptionalT } from '../..';

test('OptionalT', t => {
  let x: OptionalT<string>;
  x = '1';
  x = undefined;

  t.pass();
});
