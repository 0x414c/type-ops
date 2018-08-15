import test from 'ava';

import {
  ExpectT,
  FunctionT,
  IsSameT,
  JsonT,
} from '../..';

test('JsonT', t => {
  interface I1 {
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
  type I11 = JsonT<I1>;
  const i11: I11 = {
      p1: true,
      p2: 2,
      p3: 'v3',
      p4: null,
      p8: 'v8',
      p9: {
        p1: 'v1',
      },
      p10: [ 'v10' ],
      p11: [ 'v11' ],
      p12: {
        p1: 'v1',
      },
    };
  interface I12 {
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
  type E1 = ExpectT<IsSameT<I11, I12>, true>;
  type E2 = ExpectT<IsSameT<JsonT<string>, string>, true>;
  type E3 = ExpectT<IsSameT<JsonT<number>, number>, true>;
  type E4 = ExpectT<IsSameT<JsonT<boolean>, boolean>, true>;
  type E5 = ExpectT<IsSameT<JsonT<FunctionT>, never>, true>;
  type E6 = ExpectT<IsSameT<JsonT<Function>, never>, true>;
  type E7 = ExpectT<IsSameT<JsonT<symbol>, never>, true>;
  type E8 = ExpectT<IsSameT<JsonT<undefined>, never>, true>;
  type E9 = ExpectT<IsSameT<JsonT<string[]>, string[]>, true>;
  type E10 = ExpectT<IsSameT<JsonT<ReadonlyArray<string>>, string[]>, true>;
  type E11 = ExpectT<IsSameT<JsonT<Date>, string>, true>;
  type E12 = ExpectT<IsSameT<JsonT<Map<string, number>>, { }>, true>;
  type E13 = ExpectT<IsSameT<JsonT<ReadonlyMap<string, number>>, { }>, true>;
  type E14 = ExpectT<IsSameT<JsonT<WeakMap<object, number>>, { }>, true>;
  type E15 = ExpectT<IsSameT<JsonT<Set<string>>, { }>, true>;
  type E16 = ExpectT<IsSameT<JsonT<ReadonlySet<string>>, { }>, true>;
  type E17 = ExpectT<IsSameT<JsonT<WeakSet<object>>, { }>, true>;
  type E18 = ExpectT<IsSameT<JsonT<{ toJSON(): { p1: string; }; }>, { p1: string; }>, true>;
  type E19 = ExpectT<IsSameT<JsonT<{ p1: string; }>, { p1: string; }>, true>;

  t.pass();
});
