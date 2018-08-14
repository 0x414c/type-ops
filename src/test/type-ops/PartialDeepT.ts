import { test } from 'ava';

import {
  ExpectT,
  IsSameT,
  PartialDeepT,
} from '../..';

test('PartialDeepT', t => {
  interface I1 {
    p1: string | number;
    p2: {
      p1: string;
    };
    p3: () => {
      p1: string;
    };
    p4: string[];
    p5: ReadonlyArray<string>;
  }
  type I11 = PartialDeepT<I1>;
  const i111: I11 = { };
  const i112: I11 = {
      p1: 'v1',
      p2: {
        p1: 'v1',
      },
      p3: () => ({ p1: 'v1' }),
      p4: [ 'v4' ],
      p5: [ 'v5' ],
    };
  interface I12 {
    p1?: string | number;
    p2?: {
      p1?: string;
    };
    p3?: () => {
      p1: string;
    };
    p4?: string[];
    p5?: ReadonlyArray<string>;
  }
  type E1 = ExpectT<IsSameT<I11, I12>, true>;

  interface I2 {
    p1: {
      p2: string;
    };
  }
  interface I21 {
    p1?: {
      p2?: string;
    };
  }
  type E2 = ExpectT<IsSameT<PartialDeepT<I2[]>, I21[]>, true>;
  type E3 = ExpectT<IsSameT<PartialDeepT<ReadonlyArray<I2>>, ReadonlyArray<I21>>, true>;

  t.pass();
});
