import { test } from 'ava';

import { ExpectT } from '../..';

test('ExpectT', t => {
  type _1 = ExpectT<true, true>;
  // type _11 = ExpectT<true, false>;

  type _2 = ExpectT<false, false>;
  // type _21 = ExpectT<false, true>;

  t.pass();
});
