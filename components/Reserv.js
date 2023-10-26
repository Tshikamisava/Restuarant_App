import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const Reserv = () => {
    const [name, setName] = useState('');
    const [occasion, setOccasion] = useState('');
    const [email, setEmail] = useState('');
    const [request, setRequest] = useState('');
    const [termsChecked, setTermsChecked] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`Reservation submitted: ${name} - ${email} - ${occasion} - ${request}`);
        // Add code here to submit the reservation to the server
    };

    const handleTermsChecked = () => {
        setTermsChecked(!termsChecked);
    };

    return (
        <View style={styles.container}>
            <View style={styles.form}>
                <Text style={styles.label}>Full Name:</Text>
                <TextInput
                    style={styles.input}
                    value={name}
                    onChangeText={(text) => setName(text)}
                />
                <Text style={styles.label}>Email Address:</Text>
                <TextInput
                    style={styles.input}
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                />
                <Text style={styles.label}>Select an Occasion (optional):</Text>
                <TextInput
                    style={styles.input}
                    value={occasion}
                    onChangeText={(text) => setOccasion(text)}
                />
                <Text style={styles.label}>Add a Special Request (optional):</Text>
                <TextInput
                    style={styles.input}
                    value={request}
                    onChangeText={(text) => setRequest(text)}
                    multiline={true}
                    numberOfLines={4}
                />
                <View style={styles.checkboxContainer}>
                    <TouchableOpacity style={styles.checkbox} onPress={handleTermsChecked}>
                        {termsChecked && <Text style={styles.checkmark}>✓</Text>}
                    </TouchableOpacity>
                    <Text style={styles.checkboxLabel}>I agree to the Terms and Conditions</Text>
                </View>
                <TouchableOpacity style={styles.button} onPress={handleSubmit} disabled={!termsChecked}>
                    <Text style={styles.buttonText}>Procced</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Reserv;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 20,
    },
    label: {
        fontSize: 16,
        marginBottom: 10,
    },
    input: {
        width: '100%',
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 4,
        marginBottom: 20,
    },
    checkboxContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    checkbox: {
        width: 20,
        height: 20,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 4,
        marginRight: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    checkmark: {
        fontSize: 16,
        color: '#459C97',
    },
    checkboxLabel: {
        fontSize: 16,
    },
    button: {
        backgroundColor: '#459C97',
        padding: 12,
        borderRadius: 4,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
});