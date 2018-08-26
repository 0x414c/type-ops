import test from 'ava';

import {
  ExpectT,
  IsSameT,
  NoDistributeT,
 } from '../..';


test('NoDistributeT', t => {
  type I1<T> = NoDistributeT<T> extends 'A'
      ? true
      : never;
  type I11<T> = T extends 'A'
      ? true
      : never;
  type E1 = ExpectT<IsSameT<I1<'A' | 'B'>, never>, true>;
  type E2 = ExpectT<IsSameT<I11<'A' | 'B'>, true>, true>;

  t.pass();
});
