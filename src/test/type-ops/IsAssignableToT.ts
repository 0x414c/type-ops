import test from 'ava';

import {
  ExpectT,
  IsAssignableToT,
} from '../..';

test('IsAssignableToT', t => {
  type E1 = ExpectT<IsAssignableToT<'A', string>, true>;
  type E2 = ExpectT<IsAssignableToT<string, string | number>, true>;
  type E3 = ExpectT<IsAssignableToT<string, number>, false>;

  t.pass();
});
