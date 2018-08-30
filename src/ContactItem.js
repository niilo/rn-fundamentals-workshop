import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ContactItem = ({ text }) => (
  <View style={styles.container}>
    <Text>{text}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    height: 40,
    paddingLeft: 8
  }
});

export default ContactItem;
