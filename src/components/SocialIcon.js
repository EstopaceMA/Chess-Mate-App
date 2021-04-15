import React from 'react';
import { Linking } from "react-native";
import Icon from '@expo/vector-icons/FontAwesome5';


const SocialIcon = ({ name, link, color, size = 30 }) => {
    return (
        <Icon
            name={name} 
            size={size} 
            color={color}
            style={{ marginRight: 10 }} 
            onPress={() => Linking.openURL(link)}
        />
    )              
}

export default SocialIcon;