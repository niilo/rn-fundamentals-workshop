import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Item = () => (
  <View style={styles.container}>
    <View style={[styles.imagePlaceholder, { backgroundColor: 'tomato' }]} />
    <View style={styles.content}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>RN EU</Text>
      </View>

      <View style={styles.descriptonContainer}>
        <Text style={styles.description}>Best RN conference</Text>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
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
