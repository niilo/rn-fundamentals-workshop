import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Item from './src/Item';

export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Item />
      </View>
    );
  }
}
