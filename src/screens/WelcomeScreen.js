import React from 'react';
import { View, Text, StyleSheet, Image, ImageBackground } from "react-native";

import Screen from '../components/Screen';
import AppButton from '../components/AppButton';

const WelcomeScreen = ({ navigation }) => {
    return (
      <Screen>
        <ImageBackground
            blurRadius={2}
            style={styles.container} 
            source={require("../../assets/backgroundImage2.jpg")}
        >
            <View style={styles.childContainer}>
                <Image
                    style={styles.logo} 
                    source={require("../../assets/AppLogo.png")}
                />
                <Text style={styles.appName}>♘ Chess Mate ♞</Text>
            </View>
            <View style={styles.childContainer}>
                <AppButton
                    title="Lets Play"
                    onPress={() => navigation.navigate('Play')}
                />
            </View>
          </ImageBackground>
      </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    childContainer: {
        alignItems: "center",
        flex: 1, 
        justifyContent: "center",
    },
    logo:{
        width:300,
        height:300,
    },
    appName:{
        fontSize: 40,
        fontWeight: "bold",
        color: "#8AA832",
    }
});

export default WelcomeScreen;