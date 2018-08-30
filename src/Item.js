import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

const Item = ({ title = '', description = '', color = 'tomato' }) => (
  <View style={{ height: Dimensions.get('window').height - 112 }}>
    <View style={[styles.imagePlaceholder, { backgroundColor: color }]} />
    <View style={styles.content}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>

      <View style={styles.descriptonContainer}>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  imagePlaceholder: {
    flex: 2
  },
  content: {
    flex: 1,
    flexDirection: 'row'
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  descriptonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  description: {
    fontSize: 16,
    fontStyle: 'italic'
  }
});

export default Item;
