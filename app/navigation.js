import React, { Component } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { StackNavigation, DrawerNavigation, DrawerNavigationItem } from '@exponent/ex-navigation';

import { Router } from './routing';

export default class Navigation extends Component {
  _renderHeader = () => {
    return <Image source={require('../assets/loremdrawer.jpg')} style={styles.header} />;
  };

  _renderTitle = (text: string, isSelected: bool) => {
    return (
      <Text style={[styles.buttonTitleText, isSelected ? styles.selectedText : null]}>
        {text}
      </Text>
    );
  };

  render() {
    return (
      <DrawerNavigation
        drawerPosition="left"
        renderHeader={this._renderHeader}
        drawerWidth={250}
        initialItem="main">
        <DrawerNavigationItem
          id="main"
          selectedStyle={styles.selectedItemStyle}
          renderTitle={isSelected => this._renderTitle('Wiadomości', isSelected)}>
          <StackNavigation
            id="main"
            defaultRouteConfig={{
              navigationBar: {
                backgroundColor: '#e43228',
                tintColor: '#fff',
                title: 'Wiadomości'
              },
            }}
            initialRoute={Router.getRoute('main', {service: 'Wiadomosci'})}
          />
        </DrawerNavigationItem>
        <DrawerNavigationItem
          id="gwiazdy"
          selectedStyle={styles.selectedItemStyle}
          renderTitle={isSelected => this._renderTitle('Gwiazdy', isSelected)}>
          <StackNavigation
            id="gwiazdy"
            defaultRouteConfig={{
              navigationBar: {
                backgroundColor: '#45005f',
                tintColor: '#fff',
                title: 'Gwiazdy'
              },
            }}
            initialRoute={Router.getRoute('main', {service: 'Gwiazdy'})}
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
    resizeMode: 'cover'
  },
  buttonTitleText: {
    color: '#707173',
    fontWeight: '300',
    fontSize: 16,
    fontFamily: 'Helvetica',
  },
  selectedText: {
    color: '#e43228',
  },
  selectedItemStyle: {
    backgroundColor: "#E8E8E8",
  },
});
