import React from 'react';
import Screen from '../components/Screen';
import { View, Text, Button } from "react-native";

const WelcomeScreen = ({ navigation }) => {
    return (
      <Screen>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Chessy</Text>
          <Text>Chessy</Text>
          <Button
            title="LETS PLAY"
            onPress={() => navigation.navigate('Play')}
          />
        </View>
      </Screen>
    );
}

export default WelcomeScreen;