import { test } from 'ava';

import { NotPropertiesOfTypeT } from '../..';

test('NotPropertiesOfTypeT', t => {
  interface A1 {
    p1: string;
    p2(_: string): string;
  }
  type NotFunctionProperties = NotPropertiesOfTypeT<A1, Function>;
  type A2 = Pick<A1, NotFunctionProperties>;
  const x: A2 = {
      p1: 'p1',
      // p2: (_: string): string => 'p2',
    };
  t.pass();
});
