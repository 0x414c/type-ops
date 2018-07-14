import { test } from 'ava';

import {
  ExpectT,
  IsSameT,
  OmitT,
} from '../..';

test('OmitT', t => {
  interface A1 {
    p1: string;
    p2: string;
    p3: string;
  }
  type A2 = OmitT<A1, 'p1' | 'p2'>;
  type _ = ExpectT<IsSameT<keyof A2, 'p3'>, true>;
  const a2: A2 = {
      // p1: 'p1',
      // p2: 'p2',
      p3: 'p3',
    };

  t.pass();
});
