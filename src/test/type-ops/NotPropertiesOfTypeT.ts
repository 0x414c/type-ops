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
    p3(a1: string, a2: number): string;
  }
  type NotFunctionProperties = NotPropertiesOfTypeT<I1, FunctionT<[string], string>>;
  type E1 = ExpectT<IsSameT<NotFunctionProperties, 'p1' | 'p3'>, true>;
  type I11 = Pick<I1, NotFunctionProperties>;
  const i11: I11 = {
      p1: 'v1',
      // p2: (a1: string): string => 'r2',
      p3: (a1: string, a2: number): string => 'r3',
    };

  t.pass();
});
