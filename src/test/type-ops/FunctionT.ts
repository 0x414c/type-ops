import test from 'ava';

import {
  ExpectT,
  FunctionT,
  IsSameT,
} from '../..';


test('FunctionT', t => {
  const f1 = (a1: string, a2: number): string => 'r1';
  const f11: FunctionT<string, [string, number]> = f1;
  const f12: FunctionT<any, [string, number]> = f1;
  const f13: FunctionT = f1;
  type E1 = ExpectT<IsSameT<FunctionT<string, [string, number]>, typeof f1>, true>;

  t.pass();
});
