import { test } from 'ava';

import {
  ExpectT,
  IsSameT,
  OmitT,
} from '../..';

test('OmitT', t => {
  interface I1 {
    p1: string;
    p2: string;
    p3: string;
  }
  type I11 = OmitT<I1, 'p1' | 'p2'>;
  type E1 = ExpectT<IsSameT<keyof I11, 'p3'>, true>;
  const i11: I11 = {
      // p1: 'v1',
      // p2: 'v2',
      p3: 'v3',
    };

  t.pass();
});
