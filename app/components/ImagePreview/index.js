/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component, PropTypes } from 'react';
import { Image } from 'react-native';

import { B64ImagePreview }  from './b64'
import ProgressiveImage from 'react-native-progressive-image'

export class ImagePreview extends Component {
  render() {
      var imagePreview = new B64ImagePreview(this.props.b64)

      return <ProgressiveImage
              thumbnailSource={{ uri: imagePreview.imageSource }}
              imageSource={{ uri: this.props.source }}
              style={{ height: this.props.height, flex: 1, alignItems: 'stretch' }}
            />
  }
}

ImagePreview.propTypes = {
  b64: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
  height: PropTypes.number,
}

ImagePreview.defaultProps = {
  height: 400,
}
