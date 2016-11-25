/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component, PropTypes } from 'react';
import { Image } from 'react-native';
import { Text } from 'native-base';
import ProgressiveImage from 'react-native-progressive-image'

if (!global.atob) {
  global.atob = require('base-64').decode;
}

if (!global.btoa) {
  global.btoa = require('base-64').encode;
}

export class ImagePreview extends Component {
  b64_header = '/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDADUlKC8oITUvKy88OTU/UIVXUElJUKN1e2GF' +
                'warLyL6qurfV8P//1eL/5re6////////////zv//////////////2wBDATk8PFBGUJ1X' +
                'V53/3Lrc////////////////////////////////////////////////////////////' +
                '////////wAARCAAqACoDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQF' +
                'BgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEI' +
                'I0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNk' +
                'ZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLD' +
                'xMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEB' +
                'AQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJB' +
                'UQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZH' +
                'SElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaan' +
                'qKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oA' +
                'DAMBAAIRAxE=';

  render() {
      let b64_header_binary = atob(this.b64_header)
      let b64_binary = atob(this.props.b64)
      let b64_merged_binary = 'data:image/jpg;base64,' + btoa(b64_header_binary + b64_binary)

      return <ProgressiveImage
              thumbnailSource={{ uri: b64_merged_binary }}
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
