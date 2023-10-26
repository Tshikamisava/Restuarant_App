import React, { useState } from 'react';
import { View, Dimensions, Text, StyleSheet, SafeAreaView, TextInput, TouchableOpacity, Alert } from 'react-native';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebase';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Register = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegistration = async () => {
    try {
      // Create a new user in Firebase Authentication
      await firebase.auth().createUserWithEmailAndPassword(auth, email, password);

      Alert.alert('Success', 'Registration successful');
      // navigation.navigate('Login'); // Redirect to the login screen after successful registration
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };

  return (
    <SafeAreaView>
      <View style={styles.form}>
        <Text style={styles.title}>Register to view your favorite Restaurant!!!</Text>
        <TextInput
          style={styles.input}
          placeholder="Name"
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          onChangeText={setPassword}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleRegistration}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
      <Text>
        Already have an account?{' '}
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.link}>Login</Text>
        </TouchableOpacity>
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  form: {
    margin: 16,
    paddingTop: windowHeight / 20,
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
    textAlign: 'center',
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
  buttonText: {
    color: 'white',
  },
  link: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

export default Register;
