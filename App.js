import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import ItemsList from './src/ItemsList';
import ContactList from './src/ContactList';
import Carousel from './src/Carousel';

export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <ItemsList />
        {/* <ContactList /> */}
        {/* <Carousel /> */}
      </View>
    );
  }
}
