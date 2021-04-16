import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";

import Screen from '../components/Screen';
import SocialIcon from '../components/SocialIcon';

const AboutScreen = () => {
    return (
      <Screen>
        <View style={styles.container}>          
          <View style={styles.childContainer}>
            <View style={{ flex: 2, justifyContent: "center" }}>
              <Image
                  style={styles.logo} 
                  source={require("../../assets/AppLogo.png")}
              />
            </View>
            <View style={{ flex: 1, justifyContent: "flex-start", alignItems: "center" }}>
              <Text allowFontScaling={false} style={styles.appName}>♘ Chess Mate ♞</Text>
              <Text allowFontScaling={false} style={styles.appCreator}>Developed by: Mark Anthony Estopace</Text>
            </View>
          </View>
          <View style={{...styles.childContainer, ...styles.about}}>
              <View style={{ flex: 3 }}>
                <ScrollView>
                  <Text allowFontScaling={false} style={styles.title}>
                    The Benefits of Chess
                  </Text>
                  <Text></Text>
                  <Text allowFontScaling={false} style={styles.appDescription}>
                    Chess is quite like a brain tonic which enhances concentration, 
                    patience, and perseverance, as well as develops creativity, intuition, 
                    memory, and most importantly, the ability to process and extract information 
                    from a set of general principles, learning to make tough decisions and solving 
                    problems flexibly.
                    {"\n"}
                  </Text>
                  <Text allowFontScaling={false} style={styles.title}>
                    About Chess Mate
                  </Text>
                  <Text></Text>
                  <Text allowFontScaling={false} style={styles.appDescription}>
                    Apart from the benefits of playing chess, Chess Mate was developed to
                    unite every nation, to make friends or even more than that mate 😊. 
                  </Text>
                </ScrollView>
              </View>
              <View style={styles.socialIconsContainer}>
                  <SocialIcon 
                    name="facebook" 
                    color="#3b5998" 
                    link="https://www.facebook.com/anthonyestopace/"
                    style={{ marginLeft: 10 }}
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
                  <View style={{ position: "absolute", top: 0 }}>
                    <Text allowFontScaling={false}>LET'S GET CONNECTED</Text>
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
      padding: 5
    },
    childContainer: {
      alignItems: "center",
      flex: 1, 
      justifyContent: "center"
    },
    about: {
      alignItems: "flex-start",
      backgroundColor: "#fff",
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      flex: 1,
      justifyContent: "flex-start",
      padding: 15
    },
    appDescription: {
      fontSize: 20,
      textAlign: "justify"
    },
    appCreator: {
      color: "#fff",
      fontSize: 15,
      fontWeight: "bold"
    },
    logo:{
      width: 250,
      height: 250
    },
    appName:{
      color: "#8AA832",
      fontSize: 40,
      fontWeight: "bold"
    }, 
    title: {
      fontSize: 20,
      fontWeight: "bold",
      textAlign: "left",
    },
    socialIconsContainer: {
      alignItems: "center",
      backgroundColor: "#EBEBEB",
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      flex: 1,
      flexDirection: "row",
      justifyContent: "center",
      paddingBottom: 15,
      paddingLeft: 10,
      width: "100%"      
    }
});

export default AboutScreen;