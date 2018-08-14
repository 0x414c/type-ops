import { test } from 'ava';

import {
  ExpectT,
  IsSameT,
  PropertiesOfTypeT,
} from '../..';

test('PropertiesOfTypeT', t => {
  interface I1 {
    p1: string;
    p2(a1: string): string;
  }
  type FunctionProperties = PropertiesOfTypeT<I1, Function>;
  type E1 = ExpectT<IsSameT<FunctionProperties, 'p2'>, true>;
  type I11 = Pick<I1, FunctionProperties>;
  const i11: I11 = {
      // p1: 'v1',
      p2: (a1: string): string => 'r2',
    };

  t.pass();
});
