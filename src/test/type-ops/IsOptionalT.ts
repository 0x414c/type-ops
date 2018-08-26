import test from 'ava';

import {
  IsOptionalT,
  OptionalT,
} from '../..';


test('IsOptionalT', t => {
  const i1: IsOptionalT<OptionalT<'A'>> = true;
  // const i11: IsOptionalT<OptionalT<'A'>> = false;

  const i2: IsOptionalT<'A'> = false;
  // const i21: IsOptionalT<'A'> = true;

  t.pass();
});
