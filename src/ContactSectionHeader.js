import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ContactSectionHeader = ({ title }) => (
  <View style={styles.container}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    height: 32,
    backgroundColor: '#3c64a6',
    padding: 8
  },
  title: { color: '#fff', fontWeight: 'bold' }
});

export default ContactSectionHeader;
