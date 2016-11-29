/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component, renderToString } from 'react'
import { Container, List, Content, Card, CardItem, Thumbnail, Text, Button, Icon } from 'native-base'
import { withNavigation } from '@exponent/ex-navigation'

import { ImagePreview } from '../ImagePreview'

import { Router } from '../../routing'

import TimeAgo from 'react-native-timeago'

export class ArticleListView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      articles: [],
      loaded: false
    }
  }

  componentDidMount() {
    this.fetchData();
  }

  async fetchData() {
    var REQUEST_URL = 'http://37.233.102.67:5000/graphql';
    try {
      let response = await fetch(REQUEST_URL, {
                                  method: 'POST',
                                  headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
                                  body: JSON.stringify({ query: '{ articles(service: [' + this.props.service + '], t: [Article]) { id title ts img { b64 url } body { data }}}' })
                                });

      let responseData = await response.json();

      this.setState({
        articles: responseData.data.articles,
        loaded: true,
      });
    } catch(error) {
      console.log(error);
    }
  }

  render() {
      return (
              <List dataArray={ this.state.articles }
                  renderRow={ (article) =>
                      <ArticleCard article={ article } router={ this.props.router }>
                      </ArticleCard>
                  }>
              </List>
      );
  }
}

@withNavigation
export class ArticleCard extends Component {
    _openArticle(article) {
      this.props.navigator.push(Router.getRoute("article", {"article": article}));
    }

    render() {
        return (
            <Card style={{ flex: 0 }} >
                <CardItem onPress={() => this._openArticle(this.props.article)}>
                    <Thumbnail source={{uri: 'https://i.wpimg.pl/O/135x135/d.wpimg.pl/944216337-138983970/-gwiazdy.png' }} />
                    <Text>{ this.props.article.title }</Text>
                    <Text note><TimeAgo time={this.props.article.ts*1000} /></Text>
                </CardItem>

                <CardItem cardBody onPress={() => this._openArticle(this.props.article)}>
                    <ImagePreview b64={ this.props.article.img.b64 } source={ this.props.article.img.url }/>
                    <Text numberOfLines={3}>{ this.props.article.body[0].data }</Text>
                </CardItem>
           </Card>
        );
    }
}
