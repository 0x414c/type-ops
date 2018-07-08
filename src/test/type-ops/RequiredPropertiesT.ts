import { test } from 'ava';

import { RequiredPropertiesT } from '../..';

import { ISomething } from './_support/ISomething';

test('RequiredPropertiesT', t => {
  type RequiredProperties = RequiredPropertiesT<ISomething>;
  type RequiredOnly = Required<Pick<ISomething, RequiredProperties>>;
  const x: RequiredOnly = {
      p5: 'p5',
      p6: {
        p8: 'p8',
      },
    };
  t.pass();
});
