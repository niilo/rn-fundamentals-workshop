import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import {
  createStackNavigator,
  createBottomTabNavigator
} from 'react-navigation';

import ItemsList from './src/ItemsList';
import ContactList from './src/ContactList';
import Carousel from './src/Carousel';

class Main extends Component {
  static navigationOptions = {
    title: 'Home'
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 24 }}>Welcome to the RN workshop</Text>
        <TouchableOpacity
          onPress={() => this.props.navigation.push('Examples')}
        >
          <Text>Go to examples...</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const TabNavigator = createBottomTabNavigator(
  {
    ItemsList: ItemsList,
    ContactList: ContactList,
    Carousel: Carousel
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;

        let icon;
        if (routeName === 'ItemsList') {
          icon = require('./assets/list.png');
        } else if (routeName === 'ContactList') {
          icon = require('./assets/contacts.png');
        } else if (routeName === 'Carousel') {
          icon = require('./assets/carousel.png');
        }

        if (icon) {
          return <Image source={icon} style={{ width: 20, height: 20 }} />;
        }

        return null;
      }
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray'
    }
  }
);

const RootNavigator = createStackNavigator({
  Main: {
    screen: Main
  },
  Examples: {
    screen: TabNavigator
  }
});

class App extends Component {
  render() {
    return <RootNavigator />;
  }
}

export default App;
