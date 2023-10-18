//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Image } from 'react-native-svg';


const Restuarants = () => {
    return (
        <View style={styles.res}>
            <Text style={styles.topText}>Good Morning</Text>
            <TouchableOpacity style={styles.notify}>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path d="M16.0267 27.3733C12.92 27.3733 9.81332 26.88 6.86665 25.8933C5.74665 25.5066 4.89332 24.72 4.51999 23.6933C4.13332 22.6666 4.26665 21.5333 4.87999 20.52L6.41332 17.9733C6.73332 17.44 7.02665 16.3733 7.02665 15.7466V11.8933C7.02665 6.93331 11.0667 2.89331 16.0267 2.89331C20.9867 2.89331 25.0267 6.93331 25.0267 11.8933V15.7466C25.0267 16.36 25.32 17.44 25.64 17.9866L27.16 20.52C27.7333 21.48 27.84 22.64 27.4533 23.6933C27.0667 24.7466 26.2267 25.5466 25.1733 25.8933C22.24 26.88 19.1333 27.3733 16.0267 27.3733ZM16.0267 4.89331C12.1733 4.89331 9.02666 8.02664 9.02666 11.8933V15.7466C9.02666 16.72 8.62666 18.16 8.13332 19L6.59999 21.5466C6.30665 22.04 6.22666 22.56 6.39999 23C6.55999 23.4533 6.95999 23.8 7.50666 23.9866C13.08 25.8533 18.9867 25.8533 24.56 23.9866C25.04 23.8266 25.4133 23.4666 25.5867 22.9866C25.76 22.5066 25.72 21.9866 25.4533 21.5466L23.92 19C23.4133 18.1333 23.0267 16.7066 23.0267 15.7333V11.8933C23.0267 8.02664 19.8933 4.89331 16.0267 4.89331Z" fill="#292D32"/>
            <path d="M18.5067 5.25336C18.4133 5.25336 18.32 5.24003 18.2267 5.21336C17.84 5.1067 17.4667 5.0267 17.1067 4.97336C15.9733 4.8267 14.88 4.9067 13.8533 5.21336C13.48 5.33336 13.08 5.21336 12.8267 4.93336C12.5733 4.65336 12.4933 4.25336 12.64 3.89336C13.1867 2.49336 14.52 1.57336 16.04 1.57336C17.56 1.57336 18.8933 2.48003 19.44 3.89336C19.5733 4.25336 19.5067 4.65336 19.2533 4.93336C19.0533 5.1467 18.7733 5.25336 18.5067 5.25336Z" fill="#292D32"/>
            <path d="M16.0267 30.4133C14.7067 30.4133 13.4267 29.88 12.4933 28.9467C11.56 28.0133 11.0267 26.7333 11.0267 25.4133H13.0267C13.0267 26.2 13.3467 26.9733 13.9067 27.5333C14.4667 28.0933 15.24 28.4133 16.0267 28.4133C17.68 28.4133 19.0267 27.0667 19.0267 25.4133H21.0267C21.0267 28.1733 18.7867 30.4133 16.0267 30.4133Z" fill="#292D32"/>
            </svg>
            </TouchableOpacity>
            
            <View  style={styles.pro}>
            <Image source={require("../assets/Ellipse1.svg")} style={styles.profile} />
            </View>

            <TouchableOpacity style={styles.card}>

            </TouchableOpacity>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    res: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#fff",
        width: 360,
    },
    topText: {
        bottom: 250,
        right: 90,
        fontSize: 22,
        fontWeight: 'bold',
    },
    notify: {
        bottom: 280,
        left: 60,
    },
    pro: {
        borderRadius: 50, 
        backgroundColor: 'grey',
        top: -320,
        left: 130,
        width: 50,
        height: 50,
    },
    profile: {
        width: 100,
        height: 100,
        top: -280,
    },
    card: {
        Height: 150,
        width: 150,
        borderRadius: 10,
        barderShadow: 5,

    },
});


export default Restuarants;
