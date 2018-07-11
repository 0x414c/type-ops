import { test } from 'ava';

import { PartialDeepT } from '../..';

import { ISomething } from './_support/ISomething';

test('PartialDeepT', t => {
  const x: PartialDeepT<ISomething> = { };

  t.pass();
});
