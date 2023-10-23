import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Restuarants from './components/Restuarants';



const MyComponent = () => {
  return (
    <View style={styles.container}>
      
      <Restuarants />
    </View>
  );
};

export default MyComponent;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
});