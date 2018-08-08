import { test } from 'ava';

import {
  ExpectT,
  FunctionT,
  IsSameT,
} from '../..';

test('FunctionT', t => {
  const c1 = (i1: string, i2: number): string => 'r1'
  const c11: FunctionT<[string, number], string> = c1;
  const c12: FunctionT<[string, number]> = c1;
  const c13: FunctionT = c1;
  type _ = ExpectT<IsSameT<FunctionT<[string, number], string>, typeof c1>, true>;

  t.pass();
});
