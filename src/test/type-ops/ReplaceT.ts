import test from 'ava';

import {
  ExpectT,
  IsSameT,
  ReplaceT,
} from '../..';


test('ReplaceT', t => {
  interface I1 {
    p1: string;
    p2: string;
    p3: string;
    p4: string;
  }
  interface I2 {
    p2: number;
    p3: number;
    p4: number;
    p5: number;
  }
  type I11 = ReplaceT<I1, I2, 'p2' | 'p4'>;
  const i11: I11 = {
      p1: 'v1',
      p2: 2,
      p3: 'v3',
      p4: 4,
    };
  interface I12 {
    p1: string;
    p2: number;
    p3: string;
    p4: number;
  }
  type E11 = ExpectT<IsSameT<I11, I12>, true>;

  t.pass();
});
