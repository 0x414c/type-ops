import { test } from 'ava';

import {
  ExpectT,
  IsSameT,
  RequiredPropertiesT,
} from '../..';

test('RequiredPropertiesT', t => {
  interface A {
    p1: string;
    p2?: string;
    p3: string;
    p4?: string;
  }
  type RequiredProperties = RequiredPropertiesT<A>;
  type _ = ExpectT<IsSameT<RequiredProperties, 'p1' | 'p3'>, true>;

  t.pass();
});
