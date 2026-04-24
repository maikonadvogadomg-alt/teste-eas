import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>Meu App Nativo</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#007bff',
    padding: 16,
  },
  headerText: {
    color: '#ffffff',
    fontSize: 20,
    textAlign: 'center',
  },
});

export default Header;