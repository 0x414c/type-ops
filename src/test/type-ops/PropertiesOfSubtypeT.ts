import test from 'ava';

import {
  ExpectT,
  FunctionT,
  IsSameT,
  PropertiesOfSubtypeT,
} from '../..';


test('PropertiesOfSubtypeT', t => {
  interface I1 {
    p1: string;
    p2(a1: string): string;
    p3(a1: string, a2: number): string;
  }
  type FunctionProperties = PropertiesOfSubtypeT<I1, FunctionT>;
  type E1 = ExpectT<IsSameT<FunctionProperties, 'p2' | 'p3'>, true>;
  type I11 = Pick<I1, FunctionProperties>;
  const i11: I11 = {
      // p1: 'v1',
      p2: (a1: string): string => 'r2',
      p3: (a1: string, a2: number): string => 'r3',
    };

  t.pass();
});
