import { test } from 'ava';

import {
  ExpectT,
  IsSameT,
  RequiredDeepT,
} from '../..';

test('RequiredDeepT', t => {
  interface A1 {
    p1?: string | number;
    p2?: {
      p1?: string;
    };
    p3?: () => {
      p1?: string;
    };
    p4?: string[];
    p5?: ReadonlyArray<string>;
  }
  type A2 = RequiredDeepT<A1>;
  const a2: A2 = {
      p1: 'p1',
      p2: {
        p1: 'p1',
      },
      p3: () => ({ p1: 'p1' }),
      p4: ['p4'],
      p5: ['p5'],
    };
  interface A3 {
    p1: string | number;
    p2: {
      p1: string;
    };
    p3: () => {
      p1?: string;
    };
    p4: string[];
    p5: ReadonlyArray<string>;
  }
  type _ = ExpectT<IsSameT<A2, A3>, true>;

  t.pass();
});
