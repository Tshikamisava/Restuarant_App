import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const BottomNavBar = () => {
    return (
        <View
            style={{
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center",
                backgroundColor: "#459C97",
                height: 60,
                borderTopWidth: 1,
                borderTopColor: "#ddd",
                borderRadius: 15,
                width: 330,
                bottom: -220,
            }}
        >
            <TouchableOpacity>
                <Icon name="home" size={25} color="#fff" />
               
            </TouchableOpacity>
            <TouchableOpacity>
                <Icon name="heart" size={25} color="#fff" />
                
            </TouchableOpacity>
            <TouchableOpacity>
                <Icon name="bell" size={25} color="#fff" />
            
            </TouchableOpacity>
            <TouchableOpacity>
                <Icon name="user" size={25} color="#fff" />
                
            </TouchableOpacity>
        </View>
    );
};

export default BottomNavBar;
