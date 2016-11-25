/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var Main = require('./app/main');

var {
  AppRegistry,
  Component,
  View
} = React;


class ImagePreviewReactNativeDemo extends Component {

  render() {

      return (
        <Main/>
      )
  }
}


AppRegistry.registerComponent('ImagePreviewReactNativeDemo', () => ImagePreviewReactNativeDemo);
