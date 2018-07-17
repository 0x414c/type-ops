import { test } from 'ava';

import {
  ExpectT,
  IsSameT,
  NotPropertiesOfTypeT,
} from '../..';

test('NotPropertiesOfTypeT', t => {
  interface A1 {
    p1: string;
    p2(x: string): string;
  }
  type NotFunctionProperties = NotPropertiesOfTypeT<A1, Function>;
  type _ = ExpectT<IsSameT<NotFunctionProperties, 'p1'>, true>;
  type A2 = Pick<A1, NotFunctionProperties>;
  const a2: A2 = {
      p1: 'p1',
      // p2: (x: string): string => 'p2',
    };

  t.pass();
});
