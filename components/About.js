import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
// import MapView from 'react-native-maps';

const About = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>About Leicester Square Kitchen</Text>
            <Text style={styles.description}>
            Leicester Square Kitchen introduces a Mexican and Peruvian dining experience serving small plates and innovative cocktails.
             From exquisite tacos to fine skewered meats from the Peruvian barbecue, the menu takes diners on a journey through the unique flavours of South America.
            </Text>
            {/* <MapView
                style={styles.map}
                initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            /> */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    description: {
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 20,
    },
    map: {
        width: '100%',
        height: 200,
        marginTop: 20,
    },
});

export default About;
