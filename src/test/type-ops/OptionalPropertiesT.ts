import test from 'ava';

import {
  ExpectT,
  IsSameT,
  OptionalPropertiesT,
} from '../..';

test('OptionalPropertiesT', t => {
  interface I1 {
    p1?: string;
    p2: string;
    p3?: string;
    p4: string;
  }
  type OptionalProperties = OptionalPropertiesT<I1>;
  type E1 = ExpectT<IsSameT<OptionalProperties, 'p1' | 'p3'>, true>;

  t.pass();
});
