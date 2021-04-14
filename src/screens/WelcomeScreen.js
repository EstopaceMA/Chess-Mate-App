import React from 'react';
import Screen from '../components/Screen';
import { View, Text, StyleSheet, Image, ImageBackground } from "react-native";
import AppButton from '../components/AppButton';

const WelcomeScreen = ({ navigation }) => {
    return (
      <Screen>
        <ImageBackground
            blurRadius={2}
            style={styles.container} 
            source={require("../../assets/backgroundImage2.jpg")}
        >
            <View style={styles.logoContainer}>
                <Image
                    style={styles.logo} 
                    source={require("../../assets/AppLogo.png")}
                />
                <Text style={styles.appName}>Chess Mate</Text>    
            </View>
            <View style={styles.buttonContainer}>
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
      backgroundColor: "#000",
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      resizeMode: 'cover',
    },
    buttonContainer:{
        padding: 20,
        width: '70%',
        position: "absolute",
        bottom: 100,
    },
    logo:{
        width:300,
        height:300,
    },
    logoContainer:{
        position: "absolute",
        top: 100,
        alignItems: "center"
    },
    appName:{
        fontSize: 40,
        fontWeight: "600",
        color: "#fff",
    }
});

export default WelcomeScreen;