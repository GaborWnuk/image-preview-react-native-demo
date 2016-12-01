/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

export default class Article {
  static get(offset) {

    return ":)"
  }
}

Article.schema = {
    name: 'Article',
    properties: {
        id: {type: 'string'},
        title: {type: 'string'},
        ts: {type: 'int'},
        body: {type: 'list', objectType: 'Body'},
        img: {type: 'Img'}
    },
};
