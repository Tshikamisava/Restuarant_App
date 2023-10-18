import React from 'react';
import { View, Dimensions, Text, StyleSheet, SafeAreaView, TextInput, TouchableOpacity, Image } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Login = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View style={styles.form}>
        {/* <Image
          source={require('../assets/Main_Logo.jpg')} 
          style={styles.logo}
        /> */}
        <h2>Login to view your favourate Restuarant!!!</h2>
        <TextInput style={styles.input} placeholder="Email" />
        <TextInput style={styles.input} placeholder="Password" />
      </View>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
        <Text style={{ color: 'white' }}>Login</Text>
      </TouchableOpacity>
      <Text>
        Don't have an account <a href="">Register</a>
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

export default Login;
