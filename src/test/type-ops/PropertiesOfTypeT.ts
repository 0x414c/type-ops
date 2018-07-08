import { test } from 'ava';

import { PropertiesOfTypeT } from '../..';

test('PropertiesOfTypeT', t => {
  interface A1 {
    p1: string;
    p2(_: string): string;
  }
  type FunctionProperties = PropertiesOfTypeT<A1, Function>;
  type A2 = Pick<A1, FunctionProperties>;
  const x: A2 = {
      // p1: 'p1',
      p2: (_: string): string => 'p2',
    };
  t.pass();
});
