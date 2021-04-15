import React from 'react';
import { View, Text, StyleSheet, Image } from "react-native";

import Screen from '../components/Screen';
import SocialIcon from '../components/SocialIcon';

const AboutScreen = () => {
    return (
      <Screen>
        <View style={styles.container}>          
          <View style={styles.childContainer}>
            <Image
                style={styles.logo} 
                source={require("../../assets/AppLogo.png")}
            />
            <Text style={styles.appName}>♘ Chess Mate ♞</Text>
            <Text style={styles.appCreator}>Developed by: Mark Anthony Estopace</Text>
          </View>
          <View style={{...styles.childContainer, ...styles.about}}>
              <View style={{ flex: 3 }}>
                <Text style={styles.title}>
                  {"\n"}
                  The Benefits of Chess
                </Text>
                <Text></Text>
                <Text style={styles.appDescription}>
                  Chess is quite like a brain tonic which enhances concentration, 
                  patience, and perseverance, as well as develops creativity, intuition, 
                  memory, and most importantly, the ability to process and extract information 
                  from a set of general principles, learning to make tough decisions and solving 
                  problems flexibly.
                  {"\n\n"}
                </Text>
                <Text style={styles.title}>
                  About Chess Mate
                </Text>
                <Text></Text>
                <Text style={styles.appDescription}>
                  Apart from the benefits of playing chess, Chess Mate was developed to
                  unite every nation, to make friends or even more than that mate 😊. 
                </Text>
              </View>
              <View style={styles.socialIconsContainer}>
                  <SocialIcon 
                    name="facebook" 
                    color="#3b5998" 
                    link="https://www.facebook.com/anthonyestopace/"
                  />
                  <SocialIcon 
                    name="github" 
                    color="#000" 
                    link="https://github.com/EstopaceMA"
                  />
                  <SocialIcon 
                    name="twitter" 
                    color="#00aced" 
                    link="https://twitter.com/MA_Estopace"
                  />
                  <SocialIcon 
                    name="linkedin" 
                    color="#00aced" 
                    link="https://www.linkedin.com/in/mark-anthony-estopace-093145160/"
                  />
                  <View style={{ position: "absolute", top: 15 }}>
                    <Text>LET'S GET CONNECTED</Text>
                  </View>
              </View>
          </View>
        </View>
      </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: "#353535",
      flex: 1,
      padding: 5,
    },
    childContainer: {
      alignItems: "center",
      flex: 1, 
      justifyContent: "center",
    },
    about: {
      backgroundColor: "#fff",
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      justifyContent: "flex-start",
      alignItems: "flex-start",
      padding: 15,
      flex: 1,
    },
    appDescription: {
      fontSize: 20,
      textAlign: "justify"
    },
    appCreator: {
      fontSize: 15,
      color: "#fff",
      fontWeight: "bold",
    },
    logo:{
        width:300,
        height:300,
    },
    appName:{
        fontSize: 40,
        fontWeight: "bold",
        color: "#8AA832",
    }, 
    title: {
      fontSize: 20,
      textAlign: "left",
      fontWeight: "bold"
    },
    socialIconsContainer: {
      flex: 1,
      flexDirection: "row",
      backgroundColor: "#EBEBEB",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      paddingBottom: 15,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20
    }
});

export default AboutScreen;