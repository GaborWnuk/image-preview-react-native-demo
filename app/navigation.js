import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
} from 'react-native';
import {
  StackNavigation,
  DrawerNavigation,
  DrawerNavigationItem,
} from '@exponent/ex-navigation';
import { Router } from './routing';

export default class Navigation extends Component {

  _renderHeader = () => {
    return <Image source={require('../assets/sparkles.jpg')} style={styles.header} />;
  };

  _renderTitle = (text: string, isSelected: bool) => {
    return (
      <Text style={[styles.buttonTitleText, isSelected ? styles.selectedText : null]}>
        {text}
      </Text>
    );
  };

  _renderIcon = (name: string, isSelected: bool) => {
    let extraStyle = {marginTop: 2};
    if (name === 'md-alert') {
      extraStyle = {...extraStyle, marginLeft: -3};
    }
    return (
      <Image />
    );
  };

  render() {
    return (
      <DrawerNavigation
        drawerPosition="left"
        renderHeader={this._renderHeader}
        drawerWidth={300}
        initialItem="main">
        <DrawerNavigationItem
          id="main"
          selectedStyle={styles.selectedItemStyle}
          renderTitle={isSelected => this._renderTitle('gwiazdy.wp.pl', isSelected)}
          renderIcon={isSelected => this._renderIcon('md-apps', isSelected)}>
          <StackNavigation
            id="root"
            defaultRouteConfig={{
              navigationBar: {
                backgroundColor: '#0084FF',
                tintColor: '#fff',
              },
            }}
            initialRoute={Router.getRoute('main')}
          />
        </DrawerNavigationItem>
        <DrawerNavigationItem
          id="another"
          selectedStyle={styles.selectedItemStyle}
          renderTitle={isSelected => this._renderTitle('tech.wp.pl', isSelected)}
          renderIcon={isSelected => this._renderIcon('md-alert', isSelected)}>
          <StackNavigation
            id="about"
            defaultRouteConfig={{
              navigationBar: {
                backgroundColor: '#FF0000',
                tintColor: '#fff',
              },
            }}
            initialRoute={Router.getRoute('main')}
          />
        </DrawerNavigationItem>
      </DrawerNavigation>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    flexGrow: 1,
    height: 180,
    width: null,
    resizeMode: 'cover',
  },
  buttonTitleText: {
    color: '#222',
    fontWeight: 'bold',
    marginLeft: 18,
  },
  icon: {
    color: '#999',
  },
  selectedText: {
    color: '#0084FF',
  },
  selectedItemStyle: {
    backgroundColor: "#E8E8E8",
  },
});
