import { test } from 'ava';

import {
  ExpectT,
  IsAssignableToT,
} from '../..';

test('IsAssignableToT', t => {
  type _1 = ExpectT<IsAssignableToT<'A', string>, true>;
  type _2 = ExpectT<IsAssignableToT<string, string | number>, true>;
  type _3 = ExpectT<IsAssignableToT<string, number>, false>;

  t.pass();
});
