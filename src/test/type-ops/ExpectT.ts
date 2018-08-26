import test from 'ava';

import { ExpectT } from '../..';


test('ExpectT', t => {
  type E1 = ExpectT<true, true>;
  // type E11 = ExpectT<true, false>;

  type E2 = ExpectT<false, false>;
  // type E21 = ExpectT<false, true>;

  t.pass();
});
