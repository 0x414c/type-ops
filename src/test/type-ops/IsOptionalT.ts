import { test } from 'ava';

import {
  IsOptionalT,
  OptionalT,
} from '../..';

test('IsOptionalT', t => {
  const _1: IsOptionalT<OptionalT<'A'>> = true;
  // const _11: IsOptionalT<OptionalT<'A'>> = false;

  const _2: IsOptionalT<'A'> = false;
  // const _21: IsOptionalT<'A'> = true;

  t.pass();
});
