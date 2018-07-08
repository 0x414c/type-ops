import { test } from 'ava';

import {
  IsOptionalT,
  OptionalT,
} from '../..';

test('IsOptionalT', t => {
  const x1: IsOptionalT<OptionalT<'A'>> = true;
  // const x2: IsOptionalT<OptionalT<'A'>> = false;
  // const x3: IsOptionalT<'A'> = true;
  const x4: IsOptionalT<'A'> = false;
  t.pass();
});
