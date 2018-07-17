import { test } from 'ava';

import {
  ExpectT,
  IsSameT,
  ReadonlyDeepT,
} from '../..';

test('ReadonlyDeepT', t => {
  interface A1 {
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
  type A2 = ReadonlyDeepT<A1>;
  const a2: A2 = {
      p1: 'p1',
      p2: {
        p1: 'p1',
      },
      p3: () => ({ p1: 'p1' }),
      p4: ['p4'],
      p5: ['p5'],
    };
  // a2.p1 = 'p11';
  // a2.p2 = { p1: 'p11' };
  // a2.p2.p1 = 'p11';
  // a2.p3 = () => ({ p1: 'p11' });
  // a2.p4 = ['p41'];
  // a2.p5 = ['p51'];
  interface A3 {
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
  type _ = ExpectT<IsSameT<A2, A3>, true>; // NOTE: `readonly' modifier does not matter here.

  t.pass();
});
