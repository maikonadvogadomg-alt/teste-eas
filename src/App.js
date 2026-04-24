import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Header from './components/Header';
import Api from './api';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Api />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
});

export default App;