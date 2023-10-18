//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';


const Restuarants = () => {
    return (
        <View style={styles.res}>
            <Text style={styles.topText}>Good Morning</Text>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    res: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        width: 360,
    },
    topText: {
        bottom: 330,
        right: 100,
    }
});


export default Restuarants;
