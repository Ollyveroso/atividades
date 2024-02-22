// App.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';

const App = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Body />
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
