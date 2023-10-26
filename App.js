import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Restuarants from './components/Restuarants';
import RestInfor from './components/RestInfor';
import Rest from './components/res';
import Menu from './components/Menu';
import Reserv from './components/Reserv';
import Register from './components/Register';



const MyComponent = () => {
  return (
    <View style={styles.container}>
      
   <Register />
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