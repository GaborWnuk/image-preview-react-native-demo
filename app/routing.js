import MainScene from './scenes/Main';

import {
  createRouter,
} from '@exponent/ex-navigation';

export const Router = createRouter(() => ({
  main: () => MainScene,
}));
