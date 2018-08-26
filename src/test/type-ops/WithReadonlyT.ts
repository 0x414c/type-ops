import test from 'ava';

import {
  ExpectT,
  IsSameT,
  WithReadonlyT,
} from '../..';


test('WithReadonlyT', t => {
  interface I1 {
    p1: string;
    p2: string;
    p3: string;
    p4: string;
  }
  type I11 = WithReadonlyT<I1, 'p1' | 'p3'>;
  const i11: I11 = {
      p1: 'v1',
      p2: 'v2',
      p3: 'v3',
      p4: 'v4',
    };
  // i11.p1 = 'v11';
  i11.p2 = 'v21';
  // i11.p3 = 'v31';
  i11.p4 = 'v41';
  interface I12 {
    p1: string;
    p2: string;
    p3: string;
    p4: string;
  }
  type E1 = ExpectT<IsSameT<I11, I12>, true>;  // NOTE: `readonly' modifier does not matter here.

  t.pass();
});
