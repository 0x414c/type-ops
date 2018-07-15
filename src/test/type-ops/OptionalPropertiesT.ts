import { test } from 'ava';

import {
  ExpectT,
  IsSameT,
  OptionalPropertiesT,
} from '../..';

test('OptionalPropertiesT', t => {
  interface A {
    p1?: string;
    p2: string;
    p3?: string;
    p4: string;
  }
  type OptionalProperties = OptionalPropertiesT<A>;
  type _ = ExpectT<IsSameT<OptionalProperties, 'p1' | 'p3'>, true>;

  t.pass();
});
