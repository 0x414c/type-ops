import { test } from 'ava';

import {
  IsOptionalT,
  OptionalT,
} from '../..';

test('IsOptionalT', t => {
  const _1: IsOptionalT<OptionalT<'A'>> = true;
  // const _2: IsOptionalT<OptionalT<'A'>> = false;
  // const _3: IsOptionalT<'A'> = true;
  const _4: IsOptionalT<'A'> = false;

  t.pass();
});
