import React, { Component } from 'react';
import { AppRegistry, StatusBar } from 'react-native';
import Navigation from './app/navigation';

import { Router } from './app/routing'

import {
  NavigationProvider,
} from '@exponent/ex-navigation';

class App extends Component {
  render() {
    /**
      * NavigationProvider is only needed at the top level of the app,
      * similar to react-redux's Provider component. It passes down
      * navigation objects and functions through context to children.
      *
      * StackNavigation represents a single stack of screens, you can
      * think of a stack like a stack of playing cards, and each time
      * you add a screen it slides in on top. Stacks can contain
      * other stacks, for example if you have a tab bar, each of the
      * tabs has its own individual stack. This is where the playing
      * card analogy falls apart, but it's still useful when thinking
      * of individual stacks.
      */
    return (
      <NavigationProvider router={Router}>
        <StatusBar barStyle="light-content" />
        <Navigation />
      </NavigationProvider>
    );
  }
}

AppRegistry.registerComponent('App', () => App);
