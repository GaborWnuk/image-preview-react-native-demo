import { createRouter } from '@exponent/ex-navigation';

import HomeScene from './scenes/home';
import ArticleScene from './scenes/article';

export const Router = createRouter(() => ({
  main: () => HomeScene,
  article: () => ArticleScene,
}));
