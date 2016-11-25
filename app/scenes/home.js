import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Contain
} from 'react-native';

import { Content } from 'native-base'

import { ArticleListView } from '../components/ArticleListView'
import { Router } from '../routing';

export default class Home extends Component {
  /**
    * This is where we can define any route configuration for this
    * screen. For example, in addition to the navigationBar title we
    * could add backgroundColor.
    */
  static route = {}

  render() {
    return (
      <Content padder>
        <ArticleListView service={this.props.route.params.service} router={Router}/>
      </Content>
    );
  }
}
