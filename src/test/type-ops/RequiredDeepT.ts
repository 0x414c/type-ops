import { test } from 'ava';

import {
  ExpectT,
  IsSameT,
  RequiredDeepT,
} from '../..';

test('RequiredDeepT', t => {
  interface I1 {
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
  type I11 = RequiredDeepT<I1>;
  const i11: I11 = {
      p1: 'v1',
      p2: {
        p1: 'v1',
      },
      p3: () => ({ p1: 'v1' }),
      p4: [ 'v4' ],
      p5: [ 'v5' ],
    };
  interface I12 {
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
  type E1 = ExpectT<IsSameT<I11, I12>, true>;

  interface I2 {
    p1?: {
      p2?: string;
    };
  }
  interface I21 {
    p1: {
      p2: string;
    };
  };
  type E2 = ExpectT<IsSameT<RequiredDeepT<I2[]>, I21[]>, true>;
  type E3 = ExpectT<IsSameT<RequiredDeepT<ReadonlyArray<I2>>, ReadonlyArray<I21>>, true>;

  t.pass();
});
