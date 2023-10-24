import React, { useState } from 'react';
import { View, Picker, Text, Button, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import LunchTime from './LunchTime';
import DinnerTime from './DinnerTime';
import About from './About';

const RestInfor = () => {
  const [guests, setGuests] = useState(1);
  
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={require("../assets/rest1.png")}
        style={styles.image}
      />

      <View style={styles.header}>
        <TouchableOpacity style={styles.menu}>
          <Text style={styles.viewmenu}>
            <MaterialCommunityIcons name="menu" size={20} color="#449C97" />
            View Menu
          </Text>
        </TouchableOpacity>
        <Text style={styles.restaurantName}>Leicester Square kitchen</Text>
        <Text style={styles.restaurantAddress}>
          <MaterialCommunityIcons name="map-marker" size={16} color="#292D32" />
          31-36 Leicester Square, Midrand
        </Text>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.shareButton}>
            <MaterialCommunityIcons name="share" size={20} color="grey" />
            <Text style={styles.buttonText}>Share</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.saveButton}>
            <MaterialCommunityIcons name="heart" size={20} color="grey" />
            <Text style={styles.buttonText}>Save</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.guestsContainer}>
          <Text style={styles.guestsText}>
            <MaterialCommunityIcons name="account" size={20} color="#292D32" />
            Guests:
          </Text>
          <Picker
            selectedValue={guests}
            onValueChange={(itemValue) => setGuests(itemValue)}
            style={styles.picker}
          >
            <Picker.Item label="1" value={1} />
            <Picker.Item label="2" value={2} />
            <Picker.Item label="3" value={3} />
            <Picker.Item label="4" value={4} />
            <Picker.Item label="5" value={5} />
          </Picker>
        </View>
      </View>

      <Text style={styles.lunchText}>Lunch</Text>
      <LunchTime />

      <Text style={styles.lunchText}>Dinner</Text>
      <DinnerTime />
    <About />

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
  },
  image: {
    width: 340,
    height: 290,
  },
  header: {
    width: '100%',
    padding: 16,
    alignItems: 'center',
  },
  menu: {
    fontFamily: "Rubik",
    fontWeight: "900",
    fontSize: 20,
    justifyContent: "center",
    alignItems: "center",
    width: 150,
    height: 40,
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    marginTop: -50,
  },
  viewmenu: {
    color: "#449C97",
    display: "flex",
    flexDirection: 'row',
    alignItems: 'center',
  },
  restaurantName: {
    fontFamily: 'sora',
    fontWeight: '800',
    fontSize: 20,
    color: "#000",
  },
  restaurantAddress: {
    color: "#292D32",
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  shareButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: "#459C97",
    width: 100,
    height: 40,
    marginHorizontal: 5,
  },
  saveButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: "#459C97",
    width: 100,
    height: 40,
    marginHorizontal: 5,
  },
  buttonText: {
    fontFamily: 'Rubik',
    fontSize: 16,
    color: 'grey',
    marginLeft: 5,
  },
  guestsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  guestsText: {
    fontFamily: 'Rubik',
    fontSize: 16,
    marginRight: 10,
  },
  picker: {
    width: 100,
  },
  lunchText: {
    marginTop: 10,
    fontFamily: 'Rubik',
    fontSize: 16,
  },
  DinnerTime: {
    marginTop: 10,
    fontFamily: 'Rubik',
    fontSize: 16,
  }
});

export default RestInfor;
