import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Contain,
  WebView,
  Dimensions
} from 'react-native';

import { Content } from 'native-base'
import { Router } from '../routing';
import { ImagePreview } from '../components/ImagePreview'

var TimeAgo = require('react-native-timeago');

export default class Article extends Component {
  /**
    * This is where we can define any route configuration for this
    * screen. For example, in addition to the navigationBar title we
    * could add backgroundColor.
    */
  static route = {
    navigationBar: {
      title: '',
    }
  }

  constructor(props) {
    super(props);
    this.state = { webViewHeight: 400 };
  }

  render() {
    console.log(this.props.article)
    var article = this.props.article;

    var body = "<html><body><style>body { font-family: 'Helvetica'}</style>";

    for (var i = 1; i < article.body.length; i++) {
      body += article.body[i].data
    }

    body += "</body></html>";
    console.log(body)
    console.log(Dimensions.get('window'))

    return (
      <Content>
        <ImagePreview b64={ article.img.b64 } source={ article.img.url } height={200}/>
          <Text style={styles.title}>{ article.title }</Text>
          <Text style={styles.note}><TimeAgo time={article.ts*1000} /></Text>
          <Text style={styles.lead}>{ article.body[0].data }</Text>
          <WebView source={{ html: body }}
            javaScriptEnabled={true}
            injectedJavaScript="document.body.scrollHeight;"
            scrollEnabled={false}
            onNavigationStateChange={(e) => this._updateWebViewHeight(e)}
            startInLoadingState={true}
            scalesPageToFit={true}
            style={{width: Dimensions.get('window').width - 10, height: this.state.webViewHeight}}/>
      </Content>
    );
  }

  _updateWebViewHeight(event) {
      this.setState({webViewHeight: parseInt(event.jsEvaluationValue)});
  }
}

const styles = StyleSheet.create({
  title: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 24,
    fontFamily: 'Helvetica',
    lineHeight: 28,
    padding: 8
  },

  lead: {
    fontWeight: 'bold',
    color: '#000',
    fontSize: 16,
    fontFamily: 'Helvetica',
    padding: 8,
    paddingTop: 4,
    lineHeight: 22
  },

  note: {
    color: '#707173',
    fontSize: 16,
    fontFamily: 'Helvetica',
    padding: 8,
    paddingBottom: 8
  }
});
