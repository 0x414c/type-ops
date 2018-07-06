import { test } from 'ava';

import { OptionalPropertiesT } from '../..';

import { ISomething } from './_support/ISomething';

test('OptionalPropertiesT', t => {
  type OptionalProperties = OptionalPropertiesT<ISomething>;
  type OptionalOnly = Required<Pick<ISomething, OptionalProperties>>;
  const x: OptionalOnly = {
      p1: 'p1',
      p2: {
        p4: 'p4',
      },
    };
  t.pass();
});
