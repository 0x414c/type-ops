import test from 'ava';

import { OrT } from '../..';


test('OrT', t => {
  const o1: OrT<false, false> = false;
  // const o11: OrT<false, false> = true;

  const o2: OrT<false, true> = true;
  // const o21: OrT<false, true> = false;

  const o3: OrT<true, false> = true;
  // const o31: OrT<true, false> = false;

  const o4: OrT<true, true> = true;
  // const o41: OrT<true, true> = false;

  t.pass();
});
