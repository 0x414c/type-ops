import test from 'ava';

import {
  ExpectT,
  FunctionT,
  IsSameT,
  NotPropertiesOfTypeT,
} from '../..';

test('NotPropertiesOfTypeT', t => {
  interface I1 {
    p1: string;
    p2(a1: string): string;
  }
  type NotFunctionProperties = NotPropertiesOfTypeT<I1, FunctionT>;
  type E1 = ExpectT<IsSameT<NotFunctionProperties, 'p1'>, true>;
  type I11 = Pick<I1, NotFunctionProperties>;
  const i11: I11 = {
      p1: 'v1',
      // p2: (a1: string): string => 'r2',
    };

  t.pass();
});
