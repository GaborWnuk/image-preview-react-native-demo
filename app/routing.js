import HomeScene from './scenes/home';

import {
  createRouter,
} from '@exponent/ex-navigation';

export const Router = createRouter(() => ({
  main: (ble) => HomeScene,
}));
