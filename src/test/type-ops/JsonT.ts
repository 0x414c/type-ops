import { test } from 'ava';

import {
  ExpectT,
  IsSameT,
  JsonT,
} from '../..';

test('NoInferT', t => {
  interface A1 {
    p1: boolean;
    p2: number;
    p3: string;
    p4: null;
    p5: () => string;
    p6: symbol;
    p7: undefined;
    p8: Date;
    p9: {
      toJSON(): {
        p1: string;
      };
    };
    p10: string[];
    p11: ReadonlyArray<string>;
    p12: {
      p1: string;
      p2: symbol;
    };
  }
  type A2 = JsonT<A1>;
  const a2: A2 = {
      p1: true,
      p2: 2,
      p3: 'p3',
      p4: null,
      p8: 'p8',
      p9: {
        p1: 'p1',
      },
      p10: ['p10'],
      p11: ['p11'],
      p12: {
        p1: 'p1',
      },
    };
  interface A3 {
    p1: boolean;
    p2: number;
    p3: string;
    p4: null;
    p8: string;
    p9: {
      p1: string;
    };
    p10: string[];
    p11: string[];
    p12: {
      p1: string;
    };
  }
  type _1 = ExpectT<IsSameT<A2, A3>, true>;
  type _2 = ExpectT<IsSameT<JsonT<string>, string>, true>;
  type _3 = ExpectT<IsSameT<JsonT<number>, number>, true>;
  type _4 = ExpectT<IsSameT<JsonT<boolean>, boolean>, true>;
  type _5 = ExpectT<IsSameT<JsonT<(...args: any[]) => any>, never>, true>;
  type _7 = ExpectT<IsSameT<JsonT<symbol>, never>, true>;
  type _8 = ExpectT<IsSameT<JsonT<undefined>, never>, true>;
  type _9 = ExpectT<IsSameT<JsonT<string[]>, string[]>, true>;
  type _10 = ExpectT<IsSameT<JsonT<ReadonlyArray<string>>, string[]>, true>;
  type _11 = ExpectT<IsSameT<JsonT<Date>, string>, true>;
  type _12 = ExpectT<IsSameT<JsonT<Map<string, number>>, { }>, true>;
  type _13 = ExpectT<IsSameT<JsonT<ReadonlyMap<string, number>>, { }>, true>;
  type _14 = ExpectT<IsSameT<JsonT<WeakMap<object, number>>, { }>, true>;
  type _15 = ExpectT<IsSameT<JsonT<Set<string>>, { }>, true>;
  type _16 = ExpectT<IsSameT<JsonT<ReadonlySet<string>>, { }>, true>;
  type _17 = ExpectT<IsSameT<JsonT<WeakSet<object>>, { }>, true>;
  type _18 = ExpectT<IsSameT<JsonT<{ toJSON(): { p1: string; }; }>, { p1: string; }>, true>;
  type _19 = ExpectT<IsSameT<JsonT<{ p1: string; }>, { p1: string; }>, true>;

  t.pass();
});
