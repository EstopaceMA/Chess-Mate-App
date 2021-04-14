import React from 'react';
import Screen from '../components/Screen';
import { View, Text, StyleSheet } from "react-native";

const AboutScreen = ({ navigation }) => {
    return (
      <Screen>
        <View style={styles.container}>
          <Text>Chess Mate</Text>
          <Text>It was created to play chess while making friends or else you want more than that.</Text>
        </View>
      </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: "#353535",
      flex: 1,
      padding: 5,
    }
});

export default AboutScreen;