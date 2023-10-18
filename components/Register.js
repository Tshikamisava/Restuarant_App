import React from 'react';
import { View, Dimensions, Text, StyleSheet, SafeAreaView, TextInput, TouchableOpacity, Image } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Register = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View style={styles.form}>
        {/* <Image
          source={require('../assets/Main_Logo.jpg')} 
          style={styles.logo}
        /> */}
        <h2>Register to view your favourate Restuarant!!!</h2>
        <TextInput style={styles.input} placeholder="Name" />
        <TextInput style={styles.input} placeholder="Email" />
        <TextInput style={styles.input} placeholder="Password" />
        <TextInput style={styles.input} placeholder="Confirm Password" />
      </View>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
        <Text style={{ color: 'white' }}>Register</Text>
      </TouchableOpacity>
      <Text>
        Already have an account <a href="">Login</a>
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    height: 40,
    margin: 12,
    borderBottomWidth: 1,
    padding: 10,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#6200ea',
    padding: 10,
    margin: 10,
    borderRadius: 10,
  },
  form: {
    margin: 16,
    paddingTop: windowHeight / 20,
  },
//   logo: {
//     justifyContent: 'center',
//     alignItems: 'center',
//     width: 150,  
//     height: 150,
//     marginBottom: 20, 
//     borderRadius: 50, 
//   },
});

export default Register;
