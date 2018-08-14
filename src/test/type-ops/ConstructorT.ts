import { test } from 'ava';

import {
  ConstructorT,
  ExpectT,
  IsSameT,
} from '../..';

test('ConstructorT', t => {
  const c1 = class { public constructor(a1: string, a2: number) { } };
  const c11: ConstructorT<[string, number], InstanceType<typeof c1>> = c1;
  const c12: ConstructorT<[string, number]> = c1;
  const c13: ConstructorT = c1;
  type E1 = ExpectT<IsSameT<ConstructorT<[string, number], InstanceType<typeof c1>>, typeof c1>, true>;

  t.pass();
});
