import test from 'ava';

import {
  ExpectT,
  IsSameT,
  ReadonlyDeepT,
} from '../..';

test('ReadonlyDeepT', t => {
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
  type I11 = ReadonlyDeepT<I1>;
  const i11: I11 = {
      p1: 'v1',
      p2: {
        p1: 'v1',
      },
      p3: () => ({ p1: 'v1' }),
      p4: [ 'v4' ],
      p5: [ 'v5' ],
    };
  // i11.p1 = 'v11';
  // i11.p2 = { p1: 'v11' };
  // i11.p2.p1 = 'v11';
  // i11.p3 = () => ({ p1: 'v11' });
  // i11.p4 = [ 'v41' ];
  // i11.p5 = [ 'v51' ];
  interface I12 {
    readonly p1: string | number;
    readonly p2: {
      readonly p1: string;
    };
    readonly p3: () => {
      p1: string;
    };
    readonly p4: string[];
    readonly p5: ReadonlyArray<string>;
  }
  type E1 = ExpectT<IsSameT<I11, I12>, true>;  // NOTE: `readonly' modifier does not matter here.

  t.pass();
});
