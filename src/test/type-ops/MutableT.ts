import test from 'ava';

import { MutableT } from '../..';


test('MutableT', t => {
  interface I1 {
    readonly p1: string;
    p2: string;
  }
  type I11 = MutableT<I1>;
  const i11: I11 = {
    p1: 'v1',
    p2: 'v2',
  };
  i11.p1 = 'v11';
  i11.p2 = 'v21';

  t.pass();
});
