import { test } from 'ava';

import {
  RAW_TYPE,
  TYPE_TAG,
  UniqueT,
} from '../..';

test('UniqueT', t => {
  type A1 = UniqueT<string, 'A'>;
  let a1: A1 = '1' as A1;
  a1 = '2' as A1;
  // a1 = '3';
  const a11: A1[typeof RAW_TYPE] = a1;

  type A2 = UniqueT<string, 'A'>;
  let a2: A2 = '4' as A2;
  a2 = a1;
  a1 = a2;
  const a21: A2[typeof RAW_TYPE] = a1;

  type B = UniqueT<string, 'B'>;
  let b: B = '5' as B;
  // a1 = b;
  // a1 = b as A1;
  // b = a1;
  // b = a1 as B;
  const b1: B[typeof RAW_TYPE] = a1;

  t.pass();
});
