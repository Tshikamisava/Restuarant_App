import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// import Login from './components/Login';
// import Register from './components/Register';
import Home from './components/Home';
import Restuarants from './components/Restuarants';

export default function App() {
  return (
    <View >
    <Restuarants />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    // width: 600,
    // height: 400,
  },
});
