import React from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';

const menuItems = [
    { id: 1, title: 'Pizza', description: 'Delicious pizza with your choice of toppings' },
    { id: 2, title: 'Burger', description: 'Juicy burger with fries and a drink' },
    { id: 3, title: 'Salad', description: 'Fresh salad with your choice of dressing' },
    { id: 4, title: 'Pasta', description: 'Homemade pasta with your choice of sauce' },
];

const Menu = () => {
    const renderItem = ({ item }) => (
        <Card style={styles.card}>
            <Card.Content>
                <Title>{item.title}</Title>
                <Paragraph>{item.description}</Paragraph>
            </Card.Content>
        </Card>
    );

    return (
        <View style={styles.container}>
            <View style={styles.MenuList}>
                <Text style={styles.title}>Menu</Text>
                <Text style={styles.Paragraph}>Confirm if there are errors in the entered details</Text>
                <Text style={styles.description}>
                    Leicester Square Kitchen introduces a Mexican and Peruvian dining experience serving small plates and innovative cocktails.
                    From exquisite tacos to fine skewered meats from the Peruvian barbecue, the menu takes diners on a journey through the unique flavors of South America.
                </Text>
            </View>
            <FlatList
                data={menuItems}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
                numColumns={2} // Set the number of columns you want here
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 15,
    },
    Paragraph: {
        fontSize: 16,
        fontWeight: 500,
        textAlign: 'center',
        marginBottom: 20,
        bottom: 130,
        left: -10,
       
    },
    card: {
        margin: 8,
        flex: 1,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        top: -140,
    },
    description: {
        fontSize: 16,
        top: -140,
    },
    MenuList: {
        marginBottom: 20,
        top: -10,
    },
});

export default Menu;
