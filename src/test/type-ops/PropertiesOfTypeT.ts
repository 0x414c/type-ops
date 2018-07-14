import { test } from 'ava';

import {
  ExpectT,
  IsSameT,
  PropertiesOfTypeT,
} from '../..';

test('PropertiesOfTypeT', t => {
  interface A1 {
    p1: string;
    p2(_: string): string;
  }
  type FunctionProperties = PropertiesOfTypeT<A1, Function>;
  type _ = ExpectT<IsSameT<FunctionProperties, 'p2'>, true>;
  type A2 = Pick<A1, FunctionProperties>;
  const a2: A2 = {
      // p1: 'p1',
      p2: (_: string): string => 'p2',
    };

  t.pass();
});
