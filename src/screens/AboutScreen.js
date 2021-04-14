import React from 'react';
import Screen from '../components/Screen';
import { View, Text, Button } from "react-native";

const AboutScreen = ({ navigation }) => {
    return (
      <Screen>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Chess Mate</Text>
          <Text>It was created to play chess while making friends or else you want more than that.</Text>
          <Button
            title="LETS PLAY"
            onPress={() => navigation.navigate('Play')}
          />
        </View>
      </Screen>
    );
}

export default AboutScreen;